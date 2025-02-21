"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../form/FormInput";
import FormSubmit from "../form/FormSubmit";

const loginSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type LoginSchema = z.infer<typeof loginSchema>;

export default function LoginCard() {
  const { register, handleSubmit } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  function handleLogin(data: LoginSchema) {
    signIn("credentials", {
      ...data,
      callbackUrl: "/",
    });
  }

  return (
    <form
      onSubmit={handleSubmit(handleLogin)}
      className="w-10/12 md:w-3/4 lg:w-3/5 flex justify-center items-center flex-col py-8 px-9 bg-primary-dark dark:bg-login-card rounded-2xl shadow-lg"
    >
      <h1 className="text-success text-3xl font-extrabold m-0">LOGIN</h1>

      <FormInput
        label="Email"
        name="email"
        placeholder="Endereço de email"
        type="email"
        register={register}
      />

      <FormInput
        label="Senha"
        name="password"
        placeholder="Senha"
        type="password"
        register={register}
      />

      <div className="flex justify-between w-full text-background dark:text-text">
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            name="remember"
            id="remember"
            className="relative peer appearance-none shrink-0 w-4 h-4 rounded-sm bg-background dark:bg-text checked:bg-primary dark:checked:bg-primary checked:border-0"
          ></input>
          <label htmlFor="remeber" className="text-background dark:text-text">
            Lembrar-me
          </label>
          <svg
            className="absolute w-4 h-4 hidden peer-checked:block pointer-events-none text-paper dark:text-text"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        <Link href={"/login"} className="hover:underline">
          <strong>Esqueceu sua senha?</strong>
        </Link>
      </div>

      <FormSubmit label="login" />

      <p className="text-background dark:text-text">
        Não possui uma conta?{" "}
        <Link href={"/register"} className="hover:underline">
          <strong>Cadastre-se</strong>
        </Link>
      </p>
    </form>
  );
}
