"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";
import FormSubmit from "../form/FormSubmit";

const registerSchema = z
  .object({
    username: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(8, "A senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type RegisterSchema = z.infer<typeof registerSchema>;

export default function RegisterCard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  console.log(errors);

  function handleRegister(data: RegisterSchema) {
    signIn("credentials", {
      ...data,
      callbackUrl: "/",
    });
  }

  return (
    <form
      onSubmit={handleSubmit(handleRegister)}
      className="w-10/12 md:w-3/4 lg:w-3/4 flex justify-center items-center flex-col py-8 px-9 bg-primary-dark dark:bg-login-card rounded-2xl shadow-lg"
    >
      <h1 className="text-success text-3xl font-extrabold m-0">CADASTRO</h1>
      <div className="grid grid-cols-2 gap-x-4">
        <FormInput
          label="Nome"
          name="username"
          placeholder="Nome do usuário"
          type="text"
          register={register}
        />
        <FormSelect label="Curso" name="course" />
        <FormInput
          label="Email"
          name="email"
          placeholder="Endereço de email"
          type="email"
          register={register}
          className="col-span-2"
        />
        <FormInput
          label="Senha"
          name="password"
          placeholder="Senha"
          type="password"
          register={register}
        />
        <FormInput
          label="Confirmar senha"
          name="confirmPassword"
          placeholder="Confirmar senha"
          type="password"
          register={register}
        />
      </div>
      {errors && (
        <span className="text-orange text-left">
          {errors.username && <p>* {errors.username.message}</p>}
          {errors.email && <p>* {errors.email.message}</p>}
          {errors.password && <p>* {errors.password.message}</p>}
          {errors.confirmPassword && <p>* {errors.confirmPassword.message}</p>}
        </span>
      )}
      <FormSubmit label="Registrar-se" />
      <p className="text-background dark:text-text">
        Já possui uma conta?{" "}
        <Link href={"/login"} className="hover:underline">
          <strong>Entrar</strong>
        </Link>
      </p>
    </form>
  );
}
