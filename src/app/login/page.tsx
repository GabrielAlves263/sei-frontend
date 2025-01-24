import LoginCard from "@/components/card/LoginCard";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="dark bg-sidebar dark:bg-sidebar py-8 lg:py-0 h-fit lg:h-screen w-full flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-[50vw] h-auto lg:h-full flex flex-col justify-center items-center">
        <Link href="/" className="flex justify- mb-5">
          <Image
            src="/logo.svg"
            width={32}
            height={32}
            alt="Logo"
            className={`transition-all md:w-24`}
            draggable="false"
          />
        </Link>

        <h1 className="text-success text-4xl font-extrabold hidden lg:block text-center mb-5">
          Sistema de Estudos <br /> <span className="text-text">Integrado</span>
        </h1>

        <Image
          src={"students.svg"}
          alt={""}
          width={0}
          height={0}
          className="w-[50vh] lg:w-[35vw]"
        />
      </div>
      <div className="w-full lg:w-[50vw] h-auto lg:h-full flex justify-center items-center">
        <LoginCard />
      </div>
    </main>
  );
}
