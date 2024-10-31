

import { motion } from 'framer-motion'
import { Heart, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContextProvider';
import { Link } from 'react-router-dom';

const content = {
  fr: {
    productsHeader: "Produits",
    heroTitle: "Découvrez Nos Meilleurs Produits",
    heroSubtitle: "Parcourez notre sélection de produits de haute qualité adaptée à vos besoins.",
    shopNow: "Achetez Maintenant",
    topSelling: "Produits Les Plus Vendus",
  },
  ar: {
    productsHeader: "المنتجات",
    heroTitle: "اكتشف أفضل منتجاتنا",
    heroSubtitle: "تصفح مجموعتنا المختارة من المنتجات عالية الجودة التي تلبي احتياجاتك.",
    shopNow: "تسوق الآن",
    topSelling: "المنتجات الأكثر مبيعًا",
  },

}

const products = [
  {
    title: "POS Terminal A",
    category: "Point of Sale",
    price: 299.99,
    rating: 4.5,
    image: "/images/products/pos_6.webp",
  },
  {
    title: "POS Terminal B",
    category: "Point of Sale",
    price: 349.99,
    rating: 4.7,
    image: "/images/products/pos_7.webp",
  },
  {
    title: "Portable Printer",
    category: "Accessories",
    price: 89.99,
    rating: 4.3,
    image: "/images/products/portable-printer.png",
  },
  {
    title: "Barcode Scanner",
    category: "Accessories",
    price: 59.99,
    rating: 4.6,
    image: "/images/products/barcode-scanner.png",
  },
  {
    title: "POS Terminal C",
    category: "Point of Sale",
    price: 399.99,
    rating: 4.8,
    image: "/images/products/pos-terminal-c.png",
  },
  {
    title: "Cash Drawer",
    category: "Accessories",
    price: 69.99,
    rating: 4.4,
    image: "/images/products/cash-drawer.png",
  },
  {
    title: "Receipt Printer",
    category: "Printers",
    price: 129.99,
    rating: 4.5,
    image: "/images/products/pos_3.webp",
  },
  {
    title: "POS Stand",
    category: "Accessories",
    price: 49.99,
    rating: 4.2,
    image: "/images/products/pos_2.webp",
  },
  {
    title: "Touch Screen Monitor",
    category: "Displays",
    price: 249.99,
    rating: 4.7,
    image: "/images/products/pos_1.webp",
  },
];



const data = [
  'bg-[url(/images/products/pos_1.webp)]',
  'bg-[url(/images/products/pos_2.webp)]',
  'bg-[url(/images/products/pos_3.webp)]',
  'bg-[url(/images/products/pos_4.webp)]',
  'bg-[url(/images/products/pos_5.webp)]',
  'bg-[url(/images/products/pos_6.webp)]',
  'bg-[url(/images/products/pos_7.webp)]',
  'bg-[url(/images/products/pos_8.webp)]',
  'bg-[url(/images/products/pos_9.webp)]',
]

const ProductCard = ({ product,index }) => {
  const { title, category, price, rating, image } = product;
 
  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-105"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    dir='ltr'
    >
      <div className={`relative w-full h-48 sm:h-64  
      bg-no-repeat bg-contain bg-bottom bg-[url(/images/products/pos_${index+1}.webp)]
      `} >
        {/* <Image
          src={image}
          alt={title}
          fill
          className="rounded-t-lg object-cover object-center"
        /> */}
        <div className="absolute top-2 right-2 bg-white rounded-full p-2 shadow-md">
          <Heart className={`w-5 h-5 text-blue-800 hover:text-red-600`} />
        </div>
        <div className="absolute bottom-2 right-2 bg-white rounded-full py-1 px-2 shadow-md flex items-center gap-1">
          <span className="text-sm font-semibold">{rating}</span>
          <Star className="w-4 h-4 text-blue-800 mr-1" />
        </div>
      </div>
      <div className="p-4 flex items-center justify-between ">
        <div className="flex flex-col items-start">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
          <p className="text-sm text-gray-600 ">{category}</p>
        </div>
        <span className="self-end text-xl font-bold text-blue-600">${price.toFixed(2)}</span>
        {/* <button className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-700 transition-colors duration-300">
            <ShoppingCart className="w-5 h-5" />
            </button> */}
      </div>
    </motion.div>
  )
}
const ProductsPage = () => {
  const {language} = useLanguage();
  const productContent = content[language ];
  return (
    <div className="min-h-screen  text-blue-900" style={{scrollBehavior: "smooth"}}>
      {/* Header Section  */}
      <header className=" py-12 px-4 sm:px-6 md:px-8 flex flex-col items-center gap-1">
          <h1 className="text-3xl font-bold text-center text-blue-900 ">{productContent.productsHeader}</h1>
          <div className="w-20 h-1 bg-blue-900 rounded-md"></div>
      </header>

      {/* Hero Section  */}
      <div className="h-[50vh] md:h-[60vh] bg-slate-200 bg-opacity-60 w-screen relative before:absolute before:inset-0 before:bg-[url(/images/product-cover2.webp)] before:bg-cover before:bg-bottom before:z-[-1] ">
        <div className="z-[1] w-full h-full flex flex-col gap-8 justify-center items-center text-center ">
          <h2 className="text-3xl md:text-5xl text-blue-950 font-bold ">{productContent.heroTitle}</h2>
          <h3 className="text-xl md:text-3xl text-blue-900 max-w-3xl font-semibold">{productContent.heroSubtitle}</h3>
          <Link href="#products" className="rounded-md  px-4 py-2 bg-gradient-to-tr from-[#3D5AFE] to-[#536DFE] text-white ">{productContent.shopNow}</Link>
        </div>
      </div>

      {/* Product Section  */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center ">{productContent.topSelling}</h2>
        <div id='products' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index}
              />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProductsPage