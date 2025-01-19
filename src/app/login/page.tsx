import LoginCard from "@/components/card/LoginCard";
import Image from "next/image";

export default function LoginPage() {
  return (
    <main className="bg-sidebar dark:bg-sidebar h-screen w-full flex flex-col lg:flex-row justify-center items-center">
      <div className="w-full lg:w-[50vw] h-auto lg:h-full flex flex-col justify-center items-center">
        <h1 className="text-[3vw] text-success-light hidden lg:block">
          Faça seu login <br /> E venha estudar com a gente
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
