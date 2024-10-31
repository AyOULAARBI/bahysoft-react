
import { ChevronsRight, Facebook, Linkedin, Mail, MapPinHouse, PhoneCall
    , Twitter, Youtube } from "lucide-react"
import { useLanguage } from "../context/LanguageContextProvider";
import { Link } from "react-router-dom";

const frLinks = [
    {
        header: "Pourqoi Bahysoft",
        links: [
            { label: "Nos Projets", link: "/" },
            { label: "Nous collaboration", link: "/" },
            { label: "Notre Partenaire", link: "/" },
            { label: "Bahysoft", link: "/" },
        ]
    },
    {
        header: "Explorer",
        links: [
            { label: "Affiliation", link: "/" },
            { label: "Produits", link: "/" },
            { label: "Marques", link: "/" },
            { label: "Notre Blog", link: "/" },
        ]
    },
    {
        header: "Information",
        links: [
            { label: "À Propos de Nous", link: "/" },
            { label: "Contactez-Nous", link: "/" },
            { label: "Conditions d'utilisation", link: "/" },
            { label: "FAQ sur l'expédition", link: "/" },
        ]
    },
    {
        header: "Nos Produits",
        links: [
            { label: "Produit un", link: "/" },
            { label: "Produit deux", link: "/" },
            { label: "Produit trois", link: "/" },
            { label: "Produit quatre", link: "/" },
        ]
    }
]
const arLinks = [
    {
        header: "لماذا Bahysoft",
        links: [
            { label: "مشاريعنا", link: "/" },
            { label: "تعاوننا", link: "/" },
            { label: "شركاؤنا", link: "/" },
            { label: "Bahysoft", link: "/" },
        ]
    },
    {
        header: "استكشاف",
        links: [
            { label: "التسويق بالعمولة", link: "/" },
            { label: "المنتجات", link: "/" },
            { label: "العلامات التجارية", link: "/" },
            { label: "مدونتنا", link: "/" },
        ]
    },
    {
        header: "معلومات",
        links: [
            { label: "معلومات عنا", link: "/" },
            { label: "اتصل بنا", link: "/" },
            { label: "شروط الاستخدام", link: "/" },
            { label: "الأسئلة الشائعة حول الشحن", link: "/" },
        ]
    },
    {
        header: "منتجاتنا",
        links: [
            { label: "المنتج الأول", link: "/" },
            { label: "المنتج الثاني", link: "/" },
            { label: "المنتج الثالث", link: "/" },
            { label: "المنتج الرابع", link: "/" },
        ]
    }
];



const Footer = () => {
    const {language} = useLanguage();
    const links = language === 'ar' ? arLinks : frLinks;
    return (
        <footer className="relative w-full bg-blue-900 text-white z-[1] overflow-hidden font-medium">
            <div className="absolute inset-0 bg-[url('/images/pos.webp')] bg-no-repeat bg-cover bg-center opacity-15 z-[-1]" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-4 py-12">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                    <div className="space-y-6">
                        <img src="/images/logo-white.png" alt="Logo" className="h-16 w-auto"  />
                        <div className="space-y-3 text-sm">
                            <p className="flex items-center gap-2">
                                <PhoneCall className="h-5 w-5" />
                                <span dir="ltr">
                                    +212 600000001
                                </span>
                            </p>
                            <p className="flex items-center gap-2">
                                <Mail className="h-5 w-5" />
                                info@bahysoft.ma
                            </p>
                            <p className="flex items-center gap-2">
                                <MapPinHouse className="h-5 w-5" />
                                {language == 'fr' ? "Hassan 2 street, casablanca, bernoussi" : "شارع الحسن الثاني، الدار البيضاء"}
                            </p>
                        </div>
                    </div>
                    {links.map((section, index) => (
                        <div key={index} className={`max-w-[280px] block ${index == links.length - 1 ? "hidden" : "block"} md:block`}>
                            <h6 className={`font-semibold text-lg mb-4 pb-2 relative w-auto
                                after:content-[''] after:absolute ${language == 'ar' ? "after:right-0" : "after:left-0"} after:bottom-0 after:w-20 after:h-1 after:bg-blue-50 border-b `}>
                                {section.header}
                            </h6>
                            <ul className="space-y-2">
                                {section.links.map((item, itemIndex) => (
                                    <li key={itemIndex}>
                                        <Link href={item.link} className={`flex items-center gap-2 opacity-80 hover:opacity-100 hover:text-blue-50 transition-colors`}>
                                            <ChevronsRight className={`h-4 w-4 ${language == 'ar' && 'rotate-180'}`} />
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="w-full flex items-center justify-around">
                    <Facebook className="h-8 w-8 hover:text-blue-200 cursor-pointer transition-colors" />
                    <Twitter className="h-8 w-8 hover:text-blue-200 cursor-pointer transition-colors" />
                    <Linkedin className="h-8 w-8 hover:text-blue-200 cursor-pointer transition-colors" />
                    <Youtube className="h-8 w-8 hover:text-blue-200 cursor-pointer transition-colors" />
                </div>
                <div className="border-t border-white/10 pt-8 mt-8 text-sm">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-center md:text-left ">
                            {language == 'fr' ? "Bahysoft © 2024 Online Store. All Rights Reserved. Powered by MNC Agency" : "  باهي سوفت ©2024 جميع الحقوق محفوظة. تصميم وتطوير بواسطة وكالة إم إن سي"}
                        </p>
                        <div className="hidden md:flex items-center gap-4 ">
                            <Link href="/" className="hover:text-blue-50 transition-colors">{language == 'ar' ? "الشروط والأحكام" : "Terms & Conditions"}</Link>
                            <Link href="/" className="hover:text-blue-50 transition-colors">{language == 'ar' ? "سياسة الخصوصية" : "Privacy Policy"}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
