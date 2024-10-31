
import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContextProvider'



export default function POSSection() {
  const { language } = useLanguage();
  const [data, setData] = useState()
  const sectionRef = useRef(null)
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4, // Increase this value to slow down the stagger effect
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0.3, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2, // Increase this value to slow down each image's animation
      },
    },
  }

  useEffect(() => {
    const loadDictionary = async () => {
      const dict = await import(`../translations/${language}.json`)
      setData(dict)
    }
    loadDictionary()
  }, [language])

  if (!data) {
    return null
  }

  return (
    <section
      ref={sectionRef}
      className="py-8 md:py-16 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-gray-900"
          >
            {data.posSection.title}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-8 text-gray-800"
          >
            {data.posSection.subtitle}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 text-lg mb-12 max-w-3xl mx-auto"
          >
            {data.posSection.description}
          </motion.p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="relative h-64 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105
                 
                "
              >
                <img
                  src={`/images/pos-image${i+1}.jfif`}
                  alt="POS System in use"
                  className="rounded-lg h-full "
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        {/* <ProductViewer /> */}
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 text-gray-900"
          >
            {data.posSection.featuresSection.title}
          </motion.h2>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-6 justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1, delayChildren: 0.2 }}
          >
            {data.posSection.featuresSection.items.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`#${feature.split(' ').join('-')}`} className="bg-blue-900 text-center 
                px-4 py-2 rounded-full font-bold text-white shadow-md transition-colors duration-300 
                hover:bg-blue-700 block">
                  {feature}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="space-y-10">
          {data.posSection.featuresSection.featureData.map((feature, index) => (
            <motion.div
              id={`${feature.title.split(' ').join('-')}`}
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-between gap-8`}
            >
              <div className="w-full lg:w-1/2 relative h-64 sm:h-96 rounded-lg overflow-hidden ">
                <img
                  src={feature.image}
                  alt={feature.title}
                  
                  className="rounded-lg w-full h-full object-center object-contain"
                />
              </div>
              <div className='w-full lg:w-1/2 space-y-4'>
                <motion.h3
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-2xl sm:text-3xl uppercase font-bold text-blue-900 flex items-center gap-2"
                >
                  #{feature.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='text-xl sm:text-2xl text-blue-700 font-semibold'
                >
                  {feature.subtitle}
                </motion.p>
                <motion.ul
                  className="space-y-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                        delayChildren: 0.3,
                      },
                    },
                  }}
                >
                  {feature.features.map((item, index) => (
                    <motion.li
                      key={index}
                      className='flex items-start'
                      variants={{
                        hidden: { opacity: 0, x: -20 },
                        visible: { opacity: 1, x: 0 },
                      }}
                    >
                      <span className="text-violet-600 mr-2">•</span>
                      <span className='text-gray-700'>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


