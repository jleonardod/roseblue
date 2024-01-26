import React, { useState } from "react"
import { Outlet } from "react-router-dom"

import {
  RiMenu3Fill,
  RiCloseLine,
} from "react-icons/ri";

const LayoutHome = () => {
  const [showMenu, setShowMenu] = useState(false)
  return(
    <div className="min-h-screen flex flex-col">
      <header className=" bg-[url('banner.jpg')] xl:bg-cover xl:pb-96 flex items-center justify-between xl:justify-start w-full pt-12 px-8 h-[10vh] z-50">
        <div className="xl:w-1/6 text-center -mt-12 ">  
          <a href="#" className=" font-bold relative p-1 text-white text-4xl">
            RoseBlue 3D
          </a>
        </div>
        <nav className={`bg-secondary fixed xl:-mt-4 text-white xl:text-black font-semibold w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? "left-0" : "-left-full"} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-10 transition-all duration-500 z-50`}>
          <a href="#home" className="hover:font-bold hover:text-xl transition-all duration-500">Inicio</a>
          <a href="#categories" className="hover:font-bold hover:text-xl transition-all duration-500">Categorias</a>
          <a href="#creadores" className="hover:font-bold hover:text-xl transition-all duration-500">Creadores</a>
          <a href="#nuevo" className="hover:font-bold hover:text-xl transition-all duration-500">Novedades</a>
        </nav>
        <button onClick={() => setShowMenu(!showMenu)} className="xl:hidden rounded-full bg-white text-2xl p-2 -mt-10">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </header>
      <Outlet />
    </div>
  )
}

export default LayoutHome