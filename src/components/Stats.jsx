import { useEffect, useState } from "react";
import {motion} from 'framer-motion'
import { useLanguage } from "../context/LanguageContextProvider";

const Stats = () => {
    const {language} = useLanguage();
    const [dictionary, setDictionary] = useState(null);
    useEffect(()=>{
        const loadDictionary = async () => {
            const dict = await import(`../translations/${language}.json`)
            setDictionary(dict)
        }
        loadDictionary()
    },[language])
    if(!dictionary) return null;
    return (
        <section className="py-10 bg-blue-600">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-2 mx-auto max-w-[80%]">
                {dictionary.stats.map((elm, i) => 
                <motion.div
                initial={{y:100, opacity:0.4}}
                whileInView={{y:0, opacity:1}}
                transition={{duration: 0.6}}
                key={i}    className={`pr-2 flex flex-col items-center gap-4 
                    border-b-2  ${language == 'fr' ? 'md:border-r-2' : 'md:border-l-2' }  md:border-b-0 border-purple-200 py-2 `} style={{ border: (i == dictionary.stats.length - 1 ? 'none' : '') }}>
                    <img src={elm.icon}  alt="ico" />
                    <h3 className="text-2xl md:text-4xl font-semibold text-white text-center">{elm.name}</h3>
                    <h4 className="text-xs md:text-sm font-medium text-white text-center">
                        {elm.description}
                    </h4>
                </motion.div>)}
            </div>
        </section>
    )
}

export default Stats