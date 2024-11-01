

import { BriefcaseBusiness, ChevronDown, Files, Home, Info, Menu, MessageCircleMoreIcon, Rss, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useLanguage } from '../context/LanguageContextProvider'

const links = [
  {
    icon: Home,
    label: "Home",
    link: "/"
  },

  {
    icon: Files,
    label: "Products",
    sublinks: [
      { label: "Best Products", link: "/products" },

    ]
  },

  {
    icon: MessageCircleMoreIcon,
    label: "Contact Us",
    link:"/contact"
  },
  {
    icon: Info,
    label: "About Us",
    link:"/about"
  },
  
]
const arabicLinks = [
  {
    icon: Home,
    label: "الرئيسية",
     link: "/",
  },

  {
    icon: Files,
    label: "منتجات",
    sublinks: [
      { label: "أفضل المنتجات", link: "/products" },

    ]
  },

  {
    icon: MessageCircleMoreIcon,
    label: "اتصل بنا",
    link:"/contact"
  },
  {
    icon: Info,
    label: "من نحن",
    link:"/about"
  },
]

const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {language, switchLanguage} = useLanguage();
  const newLinks = language == 'ar' ? arabicLinks : links;
  return (
    <nav className="relative shadow-sm bg-white  font-semibold text-xl h-20 z-20 flex justify-between items-center">
      <div className={`md:px-10   flex w-full items-center justify-between px-4 `}>
        <img
          src="/images/logo.png"
          alt="Logo"
          className="h-14 w-auto mr-4"
        />
        <div className="mr-8 hidden md:block">
          <ul className="flex gap-x-4 py-4 relative" >
            {newLinks.map(link =>
              <li key={link.label} className=' group hover:cursor-pointer'>
                {link.sublinks ?<span className="flex items-center gap-2 text-blue-800">
                  <link.icon />
                  {link.label}
                  {link.sublinks && <ChevronDown size={16} className="ml-1" />}
                </span> : <Link to={`${link.link}`} className="flex items-center gap-2 text-blue-800 
                hover:text-blue-500 " >
                  <link.icon />
                  {link.label}
                  {link.sublinks && <ChevronDown size={16} className="ml-1" />}
                </Link>
                }
                {link.sublinks && <div className="hidden absolute  transition-all duration-500 ease-in-out delay-100 bg-white
                 text-gray-500 text-sm border-b-4 border-blue-800 rounded-b pt-2 group-hover:flex 
                 flex-col w-[150px] ">
                  {link.sublinks.map((sublink, i) => (
                    <Link to={sublink.link} key={sublink.label} 
                    className={`px-4 py-2 hover:bg-slate-100 ${i + 1 < link.sublinks.length && 'border-b-2'}`} >
                      {sublink.label}</Link>))}
                </div>}
              </li>)}
          </ul>
        </div>
        <select
          name="lang"
          value={language}
          onChange={(e) => switchLanguage(e.target.value)}
          className="bg-transparent border-none text-blue-600 outline-none rounded text-xl border p-2  hidden md:block ">
          <option value='fr' >Français</option>
          <option value='ar'>العربية</option>
        </select>
        {/* mobile section  */}
        {/* => Hamburger Menu  */}
        <button
          className="lg:hidden text-white bg-blue-600 rounded-md px-4 py-4"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >

          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        {/* => Mobile Menu  */}
        {mobileMenuOpen && (
          <div className="z-[1] md:hidden fixed  bg-blue-600 inset-0
             min-h-screen min-w-screen py-4  ">
            <div className="flex items-center justify-between px-2  py-2 border-b ">
              <select
                name="lang"
                value={language}
                onChange={(e) => switchLanguage(e.target.value)}
                className="bg-white outline-none rounded text-blue-600 border p-2 text-sm ">
                <option value='fr' >Français</option>
                <option value='ar'>العربية</option>
              </select>
              <button
                className="lg:hidden text-white bg-blue-600 rounded-md px-2 py-2 z-10"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >

                {mobileMenuOpen ? <X size={35}  /> : <Menu size={35} />}
              </button>
            </div>

            <ul className="p-2 space-y-1 text-white">
              {newLinks.map(link => (
                <li key={link.label}>
                  {link.link ? <Link onClick={()=>setMobileMenuOpen(false)} href={link.link} className='block p-2 w-full h-full'>{link.label}</Link> :
                  <details className="group">
                    <summary className="flex justify-between items-center p-2 hover:bg-blue-700 rounded-lg cursor-pointer">
                      {link.label}
                      <ChevronDown size={16} className="ml-1" />
                    </summary>
                    <ul className="pl-4 mt-2 space-y-1" style={language == 'ar' ? {paddingRight: "10px"}: {paddingLeft:"10px"}}>
                      { link.sublinks && link.sublinks.map(sublink => (
                        <li onClick={()=>setMobileMenuOpen(false)} key={sublink.label}>
                          <Link href={sublink.link} className="block p-2 text-sm hover:bg-blue-700 rounded-lg">
                            {sublink.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                  }
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>

  )
}

export default Nav