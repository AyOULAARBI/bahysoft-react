import { useLanguage } from '../context/LanguageContextProvider'
import { useEffect, useState } from 'react'

import Scene from './3d/Scene';

// const Scene = dynamic(() => import("@/components/3d/Scene"), { ssr: false })

const Hero2 = () => {
  const { language } = useLanguage();
  const [dictionary, setDictionary] = useState({ button: '', title: "", subtitles: [] })

  useEffect(() => {
    const loadDictionary = async () => {
      let dict = await import(`../translations/${language}.json`)
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

  return (
    <div className={` relative min-w-screen  min-h-[calc(100vh-120px)] flex justify-center items-center  `}
    >
      <div className="min-h-[calc(100vh-120px)] 
        flex flex-col-reverse md:flex-row items-center justify-around md:justify-evenly  px-4 sm:px-6 lg:px-8">

        <div className=" w-screen h-[30vh] md:w-screen  md:max-w-[800px]   p-4 sm:p-6
                 lg:p-8 flex flex-col items-center 
                lg:items-start justify-center gap-6 text-center lg:text-left" style={{ ...styles }}
        >
          <h1 className={`text-3xl sm:text-4xl md:text-7xl 
           font-bold text-blue-900 mb-2 sm:mb-4  text-center
          ${language == 'ar' ? "md:text-right" : "md:text-left"}`} >
            {dictionary.title}
          </h1>
          <p className="text-sm  md:text-lg font-medium
          text-black mb-4 sm:mb-6 max-w-xl hidden md:block" style={{ textAlign: language == 'ar' ? "right" : "left" }}>
            {dictionary.subtitles}
          </p>

          {dictionary.button && <button className="rounded-xl bg-blue-600 text-white  px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base font-semibold hover:bg-white hover:text-black transition-colors duration-300">
            {dictionary.button}
          </button>}
        </ div>
        <div className=" relative w-screen  md:w-[700px] md:min-h-[calc(100vh-120px)]">
          <Scene />
        </div>

      </div>
    </div>
  )
}

export default Hero2