import Link from "next/link";
import FormInput from "../form/FormInput";
import FormSelect from "../form/FormSelect";
import FormSubmit from "../form/FormSubmit";

export default function LoginCard() {
  return (
    <form className="w-10/12 md:w-3/4 lg:w-3/4 flex justify-center items-center flex-col py-8 px-9 bg-primary-dark dark:bg-login-card rounded-2xl shadow-lg">
      <h1 className="text-success text-3xl font-extrabold m-0">CADASTRO</h1>

      <div className="grid grid-cols-2 gap-x-4">
        <FormInput
          label="Nome"
          name="username"
          placeholder="Nome do usuário"
          type="text"
        />
        <FormSelect label="Curso" name="curso" />
        <FormInput
          label="Email"
          name="email"
          placeholder="Endereço de email"
          type="email"
          className="col-span-2"
        />
        <FormInput
          label="Senha"
          name="password"
          placeholder="Senha"
          type="password"
        />
        <FormInput
          label="Confirmar senha"
          name="password"
          placeholder="Confirmar senha"
          type="password"
        />
      </div>

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
