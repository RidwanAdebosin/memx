import { nav, p } from "framer-motion/client";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/user-profile">Profile page</Link>
      </nav>
    </>
  );
};

export default Navigation;
