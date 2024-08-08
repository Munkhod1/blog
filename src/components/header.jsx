import { CiSearch } from "react-icons/ci";
import Link from "next/link";
const Header = () => {
  return (
    <>
      <p>hi</p>
      <p>hello</p>

      <h1>Something </h1>
      <div className="flex justify-between items-center mx-32 mt-4">
        <div>
          <img className="w-38 h-9" src="./images/Logo1.png" alt="" />
        </div>
        <ul className="flex justify-center gap-10 font-thin">
          <li>
            {" "}
            <Link href="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/blog">Blog</Link>{" "}
          </li>
          <li>
            {" "}
            <Link href="/contact">Contact</Link>{" "}
          </li>
        </ul>
        <div class=" bg-slate-100 rounded-lg">
          <div class="container flex justify-center items-center px-2 font-thin text-sm">
            <input
              type="text"
              class="h-9 w-32 pr-8 pl-5 rounded bg-slate-100 z-0 focus:shadow focus:outline-none"
              placeholder="Search ..."
            />
            <CiSearch />
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
