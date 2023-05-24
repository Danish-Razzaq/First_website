import Link from "next/link";

const Header = () => {
  return (

    <nav className=" lg:bg-pink-600  md:bg-purple-500 sm:bg-yellow-300 bg-emerald-800   ">
      <ul className="p-1 flex md:p-4 md:font-bold md:justify-normal sm:justify-start sm:space-x-2 md:text-2xl md:space-x-8 md:mx-3
       lg:p-4 lg:font-bold  lg:text-2xl lg:space-x-8 lg:mx-3 justify-evenly">
        <li className="" ><Link href="/" className="">Home
        </Link></li>
        <li><Link href="/about" className="">
          About
        </Link></li>
        <li><Link href="/data" className="">
          Data
        </Link></li>
        <li><Link href="/manu" className="">
          Manu
        </Link></li>
        <li><Link href="/contact" className="">
          Contact Us
        </Link></li>
        <li><Link href="/startup" className="">
          Start Up
        </Link></li>
      </ul>
    </nav>
  );
};

export default Header;
