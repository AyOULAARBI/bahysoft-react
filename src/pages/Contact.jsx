

import { useState } from 'react'
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { Button } from "../components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useLanguage } from '../context/LanguageContextProvider'


const content = {
    fr: {
        header: {
            title: "Contactez-nous",
            subtitle: "Nous serions ravis de vous entendre. Contactez-nous !"
        },
        infoSection: {
            title: "Avez-vous des questions?",
            subtitle: "Entrer en contact",
            address: "123 Rue des Affaires, Casablanca, Maroc",
            phone: "+212 556-789032",
            email: "contact@bahysoft.ma",
            followUs: "Suivez-nous"
        },
        formSection: {
            title: "Envoyez-nous un message",
            namePlaceholder: "Votre Nom",
            emailPlaceholder: "Votre Email",
            messagePlaceholder: "Votre Message",
            submitButton: "Envoyer le message"
        },
        mapSection: {
            title: "Notre emplacement"
        },
        alert: "Nous vous répondrons dès que possible !"
    },
    ar: {
        header: {
            title: "اتصل بنا",
            subtitle: "يسعدنا سماعك. تواصل معنا!"
        },
        infoSection: {
            title: "هل لديك أسئلة؟",
            subtitle: "تواصل معنا",
            address: " شارع , الدار البيضاء، المغرب",
            phone: "+212 556-789032",
            email: "contact@bahysoft.ma",
            followUs: "تابعنا"
        },
        formSection: {
            title: "أرسل لنا رسالة",
            namePlaceholder: "اسمك",
            emailPlaceholder: "بريدك الإلكتروني",
            messagePlaceholder: "رسالتك",
            submitButton: "أرسل الرسالة"
        },
        mapSection: {
            title: "موقعنا"
        },
        alert: "سنعود إليك في أقرب وقت ممكن!"
    }
};

export default function ContactUs() {
  const {language} = useLanguage();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const data = content[language];
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log({ name, email, message })
        alert("We'll get back to you ASAP!")
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className="min-h-screen bg-gray-50 text-gray-700">
            {/* Hero Section */}
            <header className="bg-blue-700 py-6 md:py-12 text-white text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-bold mb-4">{data.header.title}</h1>
                    <p className="text-xl">{data.header.subtitle}</p>
                </div>
            </header>

            {/* Contact Information and Form */}
            <section className="py-16">
                <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8">
                    {/* Contact Information */}
                    <div className='w-full md:w-1/2'>
                        <div className="text-center md:text-right mb-4 bg-blue-200 rounded max-w-[75%] mx-auto md:max-w-[50%]  md:mx-0">
                            <h2 className="text-2xl font-medium text-blue-900 uppercase  px-2 py-1">{data.infoSection.title}</h2>
                        </div>
                        <h2
                            className={`text-3xl font-bold text-blue-700 mb-6 text-center ${language == 'fr' ? 'md:text-left' : " md:text-right"} `}
                        >{data.infoSection.subtitle}</h2>
                        <div className="flex flex-col justify-start gap-2 container max-w-[70%] md:max-w-full md:mx-none mx-auto ">
                            <div className="flex items-center space-x-4">
                                <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                                <p>{data.infoSection.address}</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Phone className="w-6 h-6 text-blue-600" />
                                <p dir='ltr'>+212 556-789032</p>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Mail className="w-6 h-6 text-blue-600 " />
                                <p>contact@bahysoft.ma</p>
                            </div>
                        </div>
                        <div className={`mt-8 text-center ${language == 'fr' ? 'md:text-left' : " md:text-right"} `} >
                            <h3 className="text-xl font-semibold mb-4 text-blue-700" >{data.infoSection.followUs}</h3>
                            <div className="flex justify-center md:justify-start space-x-4">
                                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                                    <a key={index} href="#" className="text-blue-600 hover:text-blue-800">
                                        <Icon className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="shadow-md p-8 rounded-lg bg-white w-full md:w-1/2">
                        <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">{data.formSection.title}</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <Input
                                type="text"
                                placeholder={data.formSection.namePlaceholder}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full"
                            />
                            <Input
                                type="email"
                                placeholder={data.formSection.emailPlaceholder}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full"
                            />
                            <Textarea
                                placeholder={data.formSection.messagePlaceholder}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                className="w-full min-h-[150px]"
                            />
                            <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 font-semibold">
                                {data.formSection.submitButton}
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="bg-gray-50 py-2">
                <h2 className="text-3xl font-bold mb-8 text-blue-700 text-center">{data.mapSection.title}</h2>
                <div className="container mx-auto px-6">
                    <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            className="w-full h-[30vh]"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.822309221983!2d-9.529012988651248!3d30.362416703329725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdb3c795dd674733%3A0x6009812748f2e923!2sMNC%20PRODUCTION%20COMPANY!5e1!3m2!1sen!2sma!4v1730108660335!5m2!1sen!2sma"
                            loading="lazy"
                            allowFullScreen
                            title="Location Map"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    )
}
