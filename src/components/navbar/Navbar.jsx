"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { AiOutlineRight } from "react-icons/ai";
import { AiOutlineDown } from "react-icons/ai";
import { BsRecordCircleFill } from "react-icons/ai";
import { useState } from "react";
import Logout from "../logout/Logout";
import useAuth from "@/hooks/useAuth";
import NavbarItems from "./NavbarItems";
import { BsFillCircleFill } from "react-icons/bs";

const CustomLink = ({ href = "", title, className = "" }) => {
  const pathname = usePathname();

  return (
    <li>
      <Link
        href={href}
        className={`${className} relative group text-white font-semibold text-xl`}
      >
        {title}

        <span
          className={`h-0.5 inline-block bg-greenTip absolute left-0 -bottom-1 group-hover:w-full transition-width ease duration-300 ${pathname === href ? "w-full" : "w-0"
            }`}
        >
          &nbsp;
        </span>
      </Link>
    </li>
  );
};
const displayTitle = (title, handleClick, href) => {
  const pathname = usePathname();
  const [isToggle, setIsToggle] = useState(false)

  if (title === "MON COMPTE") {
    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div onClick={() => setIsToggle(!isToggle)} style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        {isToggle ? <AiOutlineDown style={{ marginRight: 2 }} /> : <AiOutlineRight style={{ marginRight: 2 }} />}
        <span>{title}</span>
      </div>
      {isToggle && <NavbarItems handleClick={handleClick} />}
    </div>
  } else {
    return <div style={{ display: "flex", lineHeight: "22px" }}>
      {pathname === href ? <BsFillCircleFill style={{ marginRight: 5, color: "green", height: 20, width: 20 }} /> : <BsFillCircleFill style={{ marginRight: 5, height: 20, width: 20, color: "rgb(0 0 0 / 0.9)" }} />}
      {title}
    </div>
  }
}

const CustomMobileLink = ({ href = "", title, className = "", toggle }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (subTitle, teer) => {
    // console.log("subTitle", subTitle)
    // console.log("teer", teer)
    if (title !== "MON COMPTE" || typeof (subTitle) === "string") {
      toggle();
      router.push(href);
    }
  };

  return (
    <li>
      <button onClick={handleClick}>
        <Link
          href={href}
          className={`${className} relative group text-2xl text-white`}
        >
          {/* <span
            className={`h-0.5 inline-block bg-greenTip absolute left-0 -bottom-1 group-hover:w-full transition-width ease duration-300 ${
              pathname === href ? "w-full" : "w-0"
            }`}
          >
            &nbsp;
          </span> */}
          {displayTitle(title, handleClick, href)}
        </Link>
      </button>
    </li>
  );
};

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="max-w-[1560px] mx-auto w-full px-10 flex items-center justify-between relative py-7">
      <Image
        width={140}
        height={140}
        src="/assets/icons/Logo_white.svg"
        srcSet="/assets/icons/Logo_white.svg"
        alt="theTipTop Logo"
      />
      <nav className="hidden lg:block">
        <ul className="flex items-center space-x-10">
          <CustomLink href="/" title={"ACCEUIL"} />
          <CustomLink href="/quizzes" title={"JEU CONCOURS"} />
          {isAuthenticated ? (
            // <CustomLink href="/admin" title={"MON COMPTE"} />
            <CustomLink href="/administration/historiqueDesGains" title={"MON COMPTE"} />

          ) : (
            <CustomLink href="/login" title={"MON COMPTE"} />
          )}
          {isAuthenticated ? (
            <Logout toggle={toggleMenu} onLogout={logout} />
          ) : null}
        </ul>
      </nav>

      {isOpen ? (
        <nav className="flex z-10 flex-col h-full min-w-[100vw] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center fixed lg:hidden bg-black/90 rounded-lg backdrop-blur-md py-32">
          <ul className="flex flex-col justify-center  items-center space-y-10">
            <CustomMobileLink
              href="/"
              title={"ACCEUIL"}
              toggle={toggleMenu}
            />
            <CustomMobileLink
              href="/quizzes"
              title={"JEU CONCOURS"}
              toggle={toggleMenu}
            />
            {isAuthenticated ? (
              <CustomMobileLink
                title={"MON COMPTE"}
                toggle={toggleMenu}
              />
            ) : (
              <CustomMobileLink
                href="/login"
                title={"Login"}
                toggle={toggleMenu}

              />
            )}
            {isAuthenticated ? (
              <Logout toggle={toggleMenu} onLogout={logout} />
            ) : null}
          </ul>
        </nav>
      ) : null}

      <button
        className=" flex-col justify-center items-center lg:hidden absolute right-10 z-30"
        onClick={toggleMenu}
        id="button-menu"
        aria-label="button-menu"
      >
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm -translate-y-0.5 ${isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
            }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? "opacity-0" : "opacity-100"
            }`}
        ></span>
        <span
          className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm translate-y-0.5 ${isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
            }`}
        ></span>
      </button>
    </header>
  );
};

export default NavBar;
