

import { Facebook, Instagram, Linkedin, Mail, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContextProvider'

const SuperNav = () => {
  const {language} = useLanguage();
  // console.log(context)
  const [dictionary, setDictionary] = useState({ brochure: '', freeQuote: '' })

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await import(`../translations/${language}.json`);
      setDictionary(dict)
    }

    loadDictionary()
  }, [language])
  return (
    <div className='bg-blue-600 text-white   px-4 sm:px-8 flex flex-col sm:flex-row justify-between items-center py-2 sm:h-10 z-[-1]'>
        <div className="hidden md:flex space-x-4 py-2 sm:py-0">
            <Facebook size={20} className=''/>
            <Instagram size={20} className=''/>
            <Linkedin size={20} className=''/>
            <Mail size={20} className=''/>
        </div>
        <div className="flex items-center space-x-4">
            <span dir='ltr' className="flex items-center gap-2">
              <Mail size={16} />
              <a dir='ltr' href="mailto:youremail@gmail.com" className="text-sm text-white">youremail@gmail.com</a>
            </span>
            <span  className="flex items-center gap-2 " style={{marginRight : language == 'ar' ? "10px" : ""}} dir='ltr'>
              <Phone size={16} />
              <a  href="tel:+212660606050" className="text-sm text-white 0">+212 660 60 60 50</a>
            </span>
            <div className="hidden md:flex gap-4 items-center space-x-4 w-full sm:w-auto justify-center sm:justify-start">
              <Link href="/" className=" text-sm ">{dictionary.brochure}</Link>
              <Link href="/" className=" text-sm ">{dictionary.freeQuote}</Link>
            </div>
        </div>
    </div>
  )
}

export default SuperNav;