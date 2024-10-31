
import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { useLanguage } from '../context/LanguageContextProvider'



const Hero = () => {
  const { language } = useLanguage();
  const [dictionary, setDictionary] = useState({ button: '', title: "", subtitles: [] })

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await import(`../translations/${language}.json`)
      setDictionary(dict)
    }
    loadDictionary()
  }, [language]);
  const styles = (language == 'ar' ? {
    marginLeft: 'auto',
    marginRight: '32px',
  } : {
    marginLeft: '32px',
    marginRight: 'auto',
  });
  const bg = language == 'ar' ? "md:bg-[url(/images/arabic-slider.png)]" : "md:bg-[url(/images/slider.png)]";
  return (
    <div className={`relative min-w-screen min-h-[calc(60vh-120px)] md:min-h-[calc(100vh-120px)] bg-cover
         bg-bottom bg-no-repeat flex items-center justify-end before:absolute before:inset-0 before:bg-blue-700 
         before:bg-opacity-50 before:bg-cover before:bg-bottom before:z-[1]  md:before:content-none bg-[url(/images/hero.jfif)]   ${bg}`}
         >
      <div id="text" className="relative z-[10] flex items-center justify-center h-full w-full px-4 sm:px-6 lg:px-8">
        <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration:  0.5 }} className=" w-full max-w-[800px] ml-8  md:mr-auto p-4 sm:p-6
                 lg:p-8 flex flex-col items-center 
                lg:items-start justify-center gap-6 text-center lg:text-left" style={{ ...styles }}>
          <h1 className={`text-3xl sm:text-4xl md:text-7xl 
           font-bold text-white mb-2 sm:mb-4  text-center
          ${language == 'ar' ? "md:text-right" : "md:text-left" }`} >
            {dictionary.title}
          </h1>
          <p className="text-sm  md:text-lg font-medium
          text-white mb-4 sm:mb-6 max-w-xl hidden md:block" style={{ textAlign: language == 'ar' ? "right" : "left" }}>
           
            {dictionary.subtitles}
          </p>

          <button className="rounded-xl border-white border-2 text-white px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            {dictionary.button}
          </button>
      </ motion.div>
        </div>
    </div>
  )
}

export default Hero