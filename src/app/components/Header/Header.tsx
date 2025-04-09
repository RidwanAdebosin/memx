import Link from "next/link";
import Image from "next/image";
import { SearchQuery } from "./SearchQuery";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 flex justify-between items-center mx-4 lg:mx-8 my-4">
      <Image src="/MEMX.svg" alt="product logo" width={80} height={40} />
      <SearchQuery />
      <Login />
    </header>
  );
};

const Login = () => {
  return (
    <Link
      href="login"
      className="bg-black px-6 py-2 text-white rounded-lg font-medium"
    >
      Login
    </Link>
  );
};
