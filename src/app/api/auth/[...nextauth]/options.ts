import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const options: NextAuthOptions = {
  pages: { signIn: "/signin" },
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
      async authorize(credentials) {
        let user = null;

        //user = await getUserFromDb(credentials!.email, pwHash);
        if (!user) {
          throw new Error("User not found.");
        }
        return user;

        // const user = await validateUser(
        //   credentials.email,
        //   credentials.password
        // );

        // if (user) {
        //   return user;
        // } else {
        //   return null; // Invalid credentials
        // }
      },
    }),
  ],
};
