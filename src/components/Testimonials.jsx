import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import {motion} from 'framer-motion';
import { useLanguage } from "../context/LanguageContextProvider";

const Testimonials = () => {
  const style = 'scale-x-[-1]'
  const {language} = useLanguage();
  const [dictionary, setDictionary] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loadDictionary = async () => {
      let dict = await import(`../translations/${language}.json`);
      setDictionary(dict);
    };
    loadDictionary();
  }, [language]);

  if (!dictionary) {
    return null;
  }

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === dictionary.testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? dictionary.testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="min-h-[50vh]  bg-gradient-to-b from-slate-50 to-slate-100 py-16">
      <motion.div 
      initial={{y: -200, x:100}}
      whileInView={{y:0, x:0}}
      transition={{duration:0.6}}
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
         initial={{ opacity: 0, x: -150, }}
         whileInView={{ opacity: 1, x: 0, }}
         transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-900 uppercase">
          {language === 'fr' ? 'Témoignages clients' : 'آراء العملاء'}
        </motion.h2>
        <div
        className="relative">
          <div
            
          className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform:  `translateX(${language == 'ar' ?'':"-"}${currentIndex * 100}%)` }}
            >
              {dictionary.testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-4 sm:px-6"
                >
                  <div className="bg-white p-8 rounded-xl shadow-lg flex flex-col items-center text-center border border-slate-200 transition-all duration-300 hover:shadow-xl">
                    <img
                      src={testimonial.imageSrc}
                      alt={testimonial.clientName}
                      
                      className="w-24 h-24 rounded-full mb-6 object-cover border-4 border-blue-500"
                    />
                    <h3 className="text-xl font-semibold mb-2 text-blue-900">
                      {testimonial.clientName}
                    </h3>
                    <p className="text-sm text-blue-600 mb-4">{testimonial.profession}</p>
                    <div className="flex items-center justify-center mb-6">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? 'text-yellow-500 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-4 text-lg">"{testimonial.testimonial}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
             
            onClick={prevTestimonial}
            className={`absolute ${language == 'ar' ? "right-0" : "left-0"} top-1/2
             transform -translate-y-1/2 bg-white p-2 rounded-full
             shadow-md text-blue-500 hover:text-blue-600 focus:outline-none focus:ring-2
              focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200`}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className={`w-6 h-6 ${language == 'ar' &&  style}`} />
          </button>
          <button   
            onClick={nextTestimonial}
            className={`absolute ${language == 'ar' ? "left-0" : "right-0"} top-1/2 transform -translate-y-1/2
             bg-white p-2 rounded-full shadow-md text-blue-500 hover:text-blue-600 focus:outline-none
              focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200`}
            aria-label="Next testimonial"
          >
            <ChevronRight className={`w-6 h-6 ${language == 'ar' && style}`} />
          </button>
        </div>
        <div
        className="flex justify-center mt-8">
          {dictionary.testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 focus:outline-none ${
                index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;

