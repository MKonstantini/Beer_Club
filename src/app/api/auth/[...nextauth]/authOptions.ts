import { getUserByEmail } from "@/services/fetch-users";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";

export const authOptions: NextAuthOptions = {
  pages: { signIn: "/signin", error: "/signin" },
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentails",
      type: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        try {
          if (!credentials || !credentials.email) {
            throw new Error("Invalid credentials format.");
          }

          const user = await getUserByEmail(
            credentials.email.toLocaleLowerCase()
          );

          if (!user) {
            throw new Error("Incorrect email or password.");
          }

          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password!
          );

          if (!isPasswordCorrect) {
            throw new Error("Incorrect email or password.");
          }

          return user;
        } catch (error) {
          console.log(error);
          throw error;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }: any) {
      if (trigger === "update") {
        session.user = await db.user.findUnique({
          where: { id: session.user.id },
        });
        return { ...token, ...session };
      }
      return { ...token, ...user };
    },
    async session({ session, user, token }: any) {
      const id = token.id;
      session.user = await db.user.findUnique({
        where: { id },
      });
      return session;
    },
    async signIn({ user, profile, account }: any) {
      let email = user?.email || profile?.email;
      try {
        const existingUser = await getUserByEmail(email?.toLowerCase()).catch(
          (err) => {
            throw new err();
          }
        );

        switch (account.provider) {
          case "google":
            if (!existingUser) {
              await db.user.create({
                data: {
                  email: profile.email.toLowerCase(),
                  password: "",
                },
              });
              return true;
            }
            return true;
          default:
            return true;
        }
      } catch (err) {
        console.log(err);
        throw err;
        return false;
      }
    },
  },
};
