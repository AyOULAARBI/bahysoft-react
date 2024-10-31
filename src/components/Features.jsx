
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"
import { motion } from 'framer-motion'
import { useLanguage } from "../context/LanguageContextProvider"


const Features = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isMobile, setIsMobile] = useState(false)
    const {language} = useLanguage();
    const [data, setData] = useState(null);

    useEffect(() => {
        const loadDictionary = async () => {
            const dict = await import(`../translations/${language}.json`)
            setData(dict)
        }
        loadDictionary()
    }, [language]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])
    if (!data) {
        return null
    }
    const nextCard = () => {
        if (currentIndex === data.features.cards.length - 1) {
            setCurrentIndex(0)
        } else {
            setCurrentIndex((prevIndex) => (prevIndex + 1))
        }
    }

    const prevCard = () => {
        if (currentIndex === 0) {
            setCurrentIndex(data.features.cards.length - 1)
        } else {
            setCurrentIndex((prevIndex) => (prevIndex - 1))
        }
    }

    const Card = () => (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="py-6 px-4 md:px-2 w-[90%]  mx-auto bg-white opacity-75 flex flex-col items-center justify-center gap-4 shadow-xl rounded">
            <div className="flex flex-col items-center justify-center gap-2 h-[106px] w-[216px]">
                <img
                    src={data?.features?.cards[currentIndex].image} className=" w-[50px] h-[50px]" alt="image" />
                <h2 className="h-[56px] text-center text-blue-900 text-xl font-extrabold">{data.features.cards[currentIndex].title}</h2>
            </div>
            <p className="text-center font-medium">
                {data.features.cards[currentIndex].description}
            </p>
        </motion.div>
    )

    return (
        <section className="min-h-[70vh]">
            <div  className="
    relative  min-h-[70vh] flex items-center justify-center 
    bg-blue-800 bg-opacity-35  bg-cover bg-center bg-no-repeat 
    before:content-[''] before:absolute before:inset-0 
    before:bg-[url(/images/feature-banner.jfif)] before:bg-cover before:bg-center before:bg-no-repeat before:z-[-1]
  ">
                <div className="max-w-5xl container mx-auto flex items-center justify-around gap-4 h-full">
                    {isMobile ? (
                        <div className="relative w-full flex items-center justify-center">
                            <motion.button
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                onClick={prevCard}
                                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:scale-110"
                            >
                                <ChevronLeft className="text-blue-900" />
                            </motion.button>
                            <Card />
                            <motion.button
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                onClick={nextCard}
                                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
                            >
                                <ChevronRight className="text-blue-900" />
                            </motion.button>
                        </div>
                    ) : (
                        data?.features?.cards.map((card, i) =>
                            <motion.div
                                initial={{ x: 500 }}
                                whileInView={{ x: 0 }}
                                transition={{ duration: 1.2 }}
                                key={i} className="py-6 px-2   md:min-h-[420px] bg-white opacity-75 flex flex-col items-center justify-center gap-4 
                                shadow-xl rounded ">
                                <div className="flex flex-col items-center justify-center gap-2 h-[106px] w-[216px]">
                                    {/* <card.icon className="text-blue-900 w-[50px] h-[50px]" /> */}
                                    <img
                                        src={`/images/feature-icons/icon${i + 1}.png`} className=" w-[50px] h-[50px]"  alt="image2" />
                                    <h2 className="h-[56px] text-center text-blue-900 text-xl font-extrabold">{card.title}</h2>
                                </div>
                                <p className="text-center">
                                    {card.description}
                                </p>
                            </motion.div>)
                    )}
                </div>
            </div>
        </section>
    )
}

export default Features

