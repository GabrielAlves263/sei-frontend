import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <form className="w-full" action="">
      <div className="relative flex items-center text-text-light focus-within:text-text">
        <CiSearch className="absolute w-5 h-5 ml-3 pointer-events-none" />
        <input
          type="search"
          name="search"
          placeholder="Search..."
          autoComplete="off"
          className="w-2/3 lg:w-2/6 pr-5 pl-10 py-2 placeholder-text-light text-text rounded-3xl border-none"
        />
      </div>
    </form>
  );
}
