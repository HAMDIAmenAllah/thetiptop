"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import Logout from "../logout/Logout";
import useAuth from "@/hooks/useAuth";
import { Rock_3D } from "next/font/google";
import { BsFillCircleFill } from "react-icons/bs";

 const NavbarItems = ({handleClick}) => {
  const items = [
    {subTitle: "Historique des gains", href:"/administration/historiqueDesGains"}, 
    {subTitle: "Statistiques du jeu concours", href:"/administration/statistiquesDuJeuConcours"},
    {subTitle: "Détail du compte", href:"/administration/detailsDuCompte"},
    {subTitle: "Mot de passe", href:"/administration/motDePasse"},
    {subTitle: "Newsletter", href:"/administration/newsletter"}
  ]; 

  const router = useRouter();
  const pathname = usePathname();

  const onClickNavItem = (item)=> {
    // else.p
    if(item.subTitle) {
      router.push(item.href);
      handleClick(item.subTitle)
    }
  }
  
  return <div style={{marginTop: 20, display:"flex", flexDirection:"column", gap: 22, backgroundColor:"#1c1c1c", borderRadius:10, padding : 8, zIndex: 999}} >
    {items.map((item, key) =>{
        return <div style={{display: "flex"}}>
          { pathname === item.href ? <BsFillCircleFill style={{marginLeft: 5, color: "green", height:20, width:20}}/> : <BsFillCircleFill style={{marginLeft: 5, height:20, width:20, color:"#1c1c1c"}}/> }
            <Link  key={key} href={item.href} legacyBehavior>
          <a onClick={() => onClickNavItem(item) } style={{marginLeft: 4, textAlign: "start", lineHeight: "22px"}}>{item.subTitle}</a>
        </Link>
        {/* <span style={{height: "30px", color: "green", width:"100%"}}/> */}
      </div>
    }
    )}
  </div>
};
export default NavbarItems