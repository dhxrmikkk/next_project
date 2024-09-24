import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import SearchBar from "./SearchBar";
import NavbarIcon from "./NavbarIcon";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
        {/* mobile view  */}
        <div className="h-full flex items-center justify-between lg:hidden">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={64} height={64} />
          </Link>
          <Menu />
        </div>
        {/* desktop  view*/}
        <div className="hidden lg:flex items-center justify-between gap-8 h-full">
          {/* left  */}
          <div className="w-1/3 lg:w-1/2 flex items-center gap-12">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="logo" width={64} height={64} />
              {/* <div className="text-2xl tracking-wide">NIKE</div> */}
            </Link>
            <div className="hidden lg:flex gap-4">
              <Link href="/">Home</Link>
              <Link href="/shop">Shop</Link>
              <Link href="/">About</Link>
              <Link href="/">Contact</Link>
            </div>
          </div>
          {/* right  */}
          <div className="w-2/3 lg:w-1/2 flex items-center justify-between gap-8">
            <SearchBar />
            <NavbarIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
