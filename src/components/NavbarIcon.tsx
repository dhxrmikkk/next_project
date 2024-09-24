"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import CartModal from "./CartModal";
import { useWixClient } from "@/hooks/useWixClient";

const NavbarIcon = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();
  //temporary

  const isLoggedin = false;
  const handleProfile = () => {
    if (!isLoggedin) {
      // router.push("/login");
    }
    setIsProfileOpen((prev) => !prev);
  };

  // AUTH WITH WIX MANAGED AUTH
  // const wixClient = useWixClient();
  // const login = async () => {
  //   const loginRequestData = wixClient.auth.generateOAuthData(
  //     "http://localhost:3000"
  //   );
  //   console.log(loginRequestData);
  //   localStorage.setItem(
  //     "oAuthaRedirectData",
  //     JSON.stringify(loginRequestData)
  //   );
  //   const { authUrl } = await wixClient.auth.getAuthUrl(loginRequestData);
  //   window.location.href = authUrl;
  // };

  return (
    <>
      <div className="lg:flex hidden item-center gap-4 lg:gap-6 relative">
        <Image
          src="/profile.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
          // onClick={login}
          onClick={handleProfile}
        />
        {isProfileOpen && (
          <div className="bg-white absolute py-4 px-8 rounded-md top-14 -left-5 text-sm font-semibold shadow-md z-20">
            <Link href="/">Profile</Link>
            <div className="mt-2 cursor-pointer">Logout</div>
          </div>
        )}
        <Image
          src="/notification.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <div
          className="relative cursor-pointer"
          onClick={() => setIsCartOpen((prev) => !prev)}
        >
          <Image
            src="/cart.png"
            alt=""
            width={22}
            height={22}
            className="cursor-pointer"
          />
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-black text-white rounded-full text-sm flex items-center justify-center">
            1
          </div>
          {isCartOpen && <CartModal />}
        </div>
      </div>
    </>
  );
};

export default NavbarIcon;
