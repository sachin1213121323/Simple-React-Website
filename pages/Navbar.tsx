import Link from "next/link";
import { FaHeartbeat } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <div className=" bg-black text-white py-4 px-24 flex justify-between shadow-1xl">
        <div>
          <h1 className=" text-3xl text-red-500 flex gap-4 items-center">
            <FaHeartbeat /> RKS
          </h1>
        </div>
        {Search()}
        <div className="flex flex-row gap-16 text-2xl">
          <Link href={"/"}>Home</Link>
          <Link href={"/About"}>About</Link>
          <Link href={"/Contact"}>Contact</Link>
          <Link href={"/Info"}>Info</Link>
          <div className="flex flex-row gap-5">
            <Link
              href={""}
              className=" px-4 border rounded-xl hover:bg-red-500 "
            >
              Login
            </Link>
            <Link
              href={""}
              className=" px-4 border rounded-xl hover:bg-red-500"
            >
              Signin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const Search = () => {
  return (
    <>
      <input
        placeholder="Search"
        className=" px-5 rounded-full text-black"
      ></input>
    </>
  );
};

export default Navbar;
