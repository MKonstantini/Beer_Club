import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  pages: { signIn: "/signin" },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials) => {
        let user = null;
        //user = await getUserFromDb(credentials!.email, pwHash);
        if (!user) {
          throw new Error("User not found.");
        }
        return user;
      },
    }),
  ],
};
