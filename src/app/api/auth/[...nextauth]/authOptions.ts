import { fetchServer } from "@/libs/fetchServer";
import CredentialsProvider from "next-auth/providers/credentials";
import { cookies } from "next/headers";

type sessionProps = {
  session: any;
  token: any;
};

export const authOptions = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    session: async ({ session, token }: sessionProps) => {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Nome", type: "text", required: false },
        email: { label: "Email", type: "email" },
        password: { label: "Senha", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;

        try {
          if (credentials.username) {
            const responseRegister = await fetch(
              "http://localhost:8080/api/v1/users",
              {
                method: "POST",
                body: JSON.stringify({
                  name: credentials.username,
                  email: credentials.email,
                  password: credentials.password,
                  course: "COMPUTER_ENGINEERING",
                }),
                headers: { "Content-Type": "application/json" },
              }
            );
          }

          const response = await fetch("http://localhost:8080/api/v1/login", {
            method: "POST",
            body: JSON.stringify({
              email: credentials.email,
              password: credentials.password,
            }),
            headers: { "Content-Type": "application/json" },
          });

          if (response.status !== 200) return null;
          const authData = await response.json();
          if (!authData.token) return null;
          cookies().set("jwt", authData.token);

          const responseMe = await fetchServer(
            "http://localhost:8080/api/v1/users/me",
            {
              method: "GET",
            }
          );

          const userData = await responseMe.json();
          return userData;
        } catch (err) {
          console.log(err);
          return null;
        }
      },
    }),
  ],
};
