
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useLanguage } from "../context/LanguageContextProvider"

const products = ['product1.png', 'product2.jfif', 'product3.jfif', 'product4.jfif', 'product5.jfif', 'product6.jfif', 'product7.jfif', 'product8.jfif', 'product9.jfif']
const posDevices = [
    { id: 1, name: "TouchPOS Pro", image: "/images/products/product1.png", description: "Advanced touchscreen POS system" },
    { id: 2, name: "MobilePay X1", image: "/images/products/product2.jfif", description: "Portable payment terminal" },
    { id: 3, name: "SmartRegister 2000", image: "/images/products/product3.jfif", description: "All-in-one POS solution" },
    { id: 4, name: "CashDrawer Elite", image: "/images/products/product4.jfif", description: "Secure and smart cash management" },
    { id: 5, name: "ReceiptPrinter Turbo", image: "/images/products/product5.jfif", description: "High-speed thermal receipt printer" },
    { id: 6, name: "BarcodeScan Pro", image: "/images/products/product6.jfif", description: "Versatile 1D/2D barcode scanner" },
    { id: 7, name: "CustomerDisplay HD", image: "/images/products/product7.jfif", description: "Crystal-clear customer-facing display" },
    { id: 8, name: "KitchenScreen 4K", image: "/images/products/product8.jfif", description: "Durable kitchen order display system" },
    { id: 9, name: "PaymentHub Secure", image: "/images/products/product9.jfif", description: "EMV-compliant payment processor" },
]

const Products = () => {
    const { language } = useLanguage();
    const sectionRef = useRef(null);;
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    })
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

    return (
        <motion.div style={{ opacity, scale }} className="max-w-7xl mx-auto py-3  mt-4 md:my-10" ref={sectionRef} >
            <h1 className="text-4xl sm:text-5xl font-bold text-center text-blue-900 mb-4 uppercase">
                {language == 'fr' ? "Du matériel qui facilite la vente de vos produits. " : "مواد تسهل بيع منتجاتك"}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-center text-blue-700 mb-12 uppercase">
                {language == 'fr' ? "ET AIDE VOTRE ENTREPRISE À RÉUSSIR" : "وتساعد شركتك على النجاح"}
            </h2>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-3 px-4 ">
                {posDevices.map((device, i) => {
                    return (
                        <motion.div style={{ opacity, scale }} key={i} className=" w-[90%] h-auto mx-auto md:w-full pb-2 rounded-lg overflow-hidden
                         shadow-xl shadow-blue-200 transform transition duration-300 hover:scale-105">
                            <div className="  md:w-[396px] md:h-[427px] bg-white border-b mb-2">
                                <img
                                    src={device.image}
                                    // fill
                                    alt='pos tool'
                                    className=" object-contain w-full h-full"
                                />
                            </div>

                            <div className="flex flex-col items-center gap-2 ">

                                <h2 className="text-blue-700 text-2xl text-center">{device.name}</h2>
                                <h2 className="text-slate-900 text-center">{device.description}</h2>
                                <div className=" rounded-full text-white px-2 py-1  text-center w-[50%] mx-auto">
                                    <button className="bg-blue-500 rounded-full text-white px-2 py-1 font-bold  text-center w-[90%] mx-auto">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )
                })}
            </div>
        </motion.div>
    )
}

export default Products