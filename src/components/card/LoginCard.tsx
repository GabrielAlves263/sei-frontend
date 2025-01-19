import FormInput from "../form/FormInput";
import FormSubmit from "../form/FormSubmit";

export default function LoginCard() {
  return (
    <div className="w-10/12 md:w-3/4 lg:w-3/5 flex justify-center items-center flex-col py-8 px-9 bg-primary-dark dark:bg-login-card rounded-2xl shadow-lg">
      <h1 className="text-success text-3xl font-extrabold m-0">LOGIN</h1>

      <FormInput
        label="Login"
        name="username"
        placeholder="Nome de usuário"
        type="text"
      />

      <FormInput
        label="Senha"
        name="password"
        placeholder="Senha"
        type="password"
      />

      <FormSubmit label="login" />
    </div>
  );
}
