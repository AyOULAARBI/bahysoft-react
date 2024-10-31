import { useLanguage } from "../context/LanguageContextProvider";

const textContent = {
  fr: {
    header: "À Propos de Bahysoft",
    welcome: {
      title: "Bienvenue chez Bahysoft!",
      description1: "Chez Bahysoft, nous croyons que chaque entreprise mérite les outils nécessaires pour prospérer dans le marché actuel en constante évolution. En tant que fière entreprise marocaine, nous nous spécialisons dans la fourniture de dispositifs de Point de Vente (PDV) de pointe, adaptés aux besoins uniques des entreprises à travers le Maroc.",
      description2: "Notre mission est d'autonomiser les entrepreneurs et les détaillants en rationalisant leurs processus de vente, en améliorant les expériences clients et en stimulant la croissance de leur entreprise."
    },
    whoWeAre: {
      title: "Qui Sommes-Nous",
      description1: "Chez Bahysoft, nous croyons que chaque entreprise mérite les outils nécessaires pour prospérer dans le marché actuel en constante évolution. En tant que fière entreprise marocaine, nous nous spécialisons dans la fourniture de dispositifs de Point de Vente (PDV) de pointe, adaptés aux besoins uniques des entreprises à travers le Maroc.",
      description2: "Fondée par une équipe de professionnels passionnés ayant une vaste expérience dans la technologie et le commerce de détail, Bahysoft se consacre à apporter des solutions PDV innovantes au marché marocain. Nous comprenons les défis auxquels les entreprises sont confrontées, de la gestion efficace des transactions à la fourniture d'un excellent service client. C'est pourquoi nous avons élaboré une gamme complète de dispositifs PDV qui sont non seulement fiables, mais aussi conviviaux et adaptables à divers environnements commerciaux."
    },
    products: {
      title: "Nos Produits",
      intro: "Chez Bahysoft, nous offrons une sélection diversifiée de dispositifs PDV à la pointe de la technologie, notamment :",
      list: [
        { name: "Terminaux PDV", description: "Des terminaux robustes et multifonctionnels qui prennent en charge diverses méthodes de paiement, assurant une expérience de paiement fluide pour vos clients." },
        { name: "Solutions PDV Mobiles", description: "Des appareils flexibles et portables qui permettent aux entreprises d'accepter des paiements n'importe où, parfaits pour les entrepreneurs en déplacement." },
        { name: "Accessoires PDV", description: "Des imprimantes de reçus aux scanners de codes-barres, nous fournissons tous les accessoires essentiels pour améliorer votre configuration PDV." }
      ]
    },
    commitment: {
      title: "Notre Engagement",
      description: "Nous nous engageons à fournir un service client et un support exceptionnels. Notre équipe compétente est toujours disponible pour vous aider à choisir la solution PDV adaptée à votre entreprise et pour s'assurer que vos systèmes fonctionnent sans problème. Chez Bahysoft, nous croyons en l'établissement de relations durables avec nos clients, offrant formation, installation et support technique continu."
    },
    whyChooseUs: "Pourquoi Choisir Bahysoft?"
  },
  ar: {
    header: "من نحن",
    welcome: {
      title: "مرحبا بكم في بايسوفت!",
      description1: "في بايسوفت، نؤمن بأن كل شركة تستحق الأدوات اللازمة للازدهار في السوق المتغير باستمرار. بصفتنا شركة مغربية فخورة، نحن متخصصون في توفير أجهزة نقاط البيع المتقدمة التي تلبي احتياجات الشركات في جميع أنحاء المغرب.",
      description2: "مهمتنا هي تمكين رواد الأعمال وتجار التجزئة من خلال تبسيط عمليات البيع وتحسين تجارب العملاء وتعزيز نمو أعمالهم."
    },
    whoWeAre: {
      title: "من نحن",
      description1: "في بايسوفت، نؤمن بأن كل شركة تستحق الأدوات اللازمة للازدهار في السوق المتغير باستمرار. بصفتنا شركة مغربية فخورة، نحن متخصصون في توفير أجهزة نقاط البيع المتقدمة التي تلبي احتياجات الشركات في جميع أنحاء المغرب.",
      description2: "تأسست بايسوفت بواسطة فريق من المحترفين الشغوفين الذين لديهم خبرة واسعة في التكنولوجيا والتجارة. نحن نتفهم التحديات التي تواجهها الشركات، من إدارة المعاملات بكفاءة إلى تقديم خدمة عملاء ممتازة. لهذا قمنا بتطوير مجموعة شاملة من أجهزة نقاط البيع التي ليست فقط موثوقة، بل أيضاً سهلة الاستخدام ويمكن تكييفها مع بيئات تجارية متنوعة."
    },
    products: {
      title: "منتجاتنا",
      intro: "في بايسوفت، نقدم مجموعة متنوعة من أجهزة نقاط البيع المتقدمة تقنيًا، بما في ذلك:",
      list: [
        { name: "أجهزة نقاط البيع", description: "أجهزة قوية ومتعددة الوظائف تدعم طرق الدفع المختلفة، مما يضمن تجربة دفع سلسة لعملائك." },
        { name: "حلول نقاط البيع المتنقلة", description: "أجهزة مرنة ومحمولة تتيح للشركات قبول المدفوعات في أي مكان، مثالية لرواد الأعمال أثناء التنقل." },
        { name: "ملحقات نقاط البيع", description: "من طابعات الإيصالات إلى ماسحات الباركود، نوفر جميع الملحقات الضرورية لتحسين إعدادات نقاط البيع الخاصة بك." }
      ]
    },
    commitment: {
      title: "التزامنا",
      description: "نحن ملتزمون بتقديم خدمة عملاء ودعم استثنائي. فريقنا المختص متاح دائماً لمساعدتك في اختيار الحلول المناسبة وتأكد من أن أنظمتك تعمل بسلاسة. في بايسوفت، نؤمن ببناء علاقات دائمة مع عملائنا، وتقديم التدريب والتركيب والدعم الفني المستمر."
    },
    whyChooseUs: "لماذا تختار بايسوفت؟"
  }
}

const AboutPage = () => {
  const { language } = useLanguage();

  const content = textContent[language] ? textContent[language] : textContent.fr;

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-blue-600 py-6 md:py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center">{content.header}</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 flex justify-around flex-col md:flex-row gap-4 items-center">
          <div className='max-w-xl'>
            <h2 className="text-3xl font-bold text-blue-600 mb-6">{content.welcome.title}</h2>
            <p className="text-lg text-gray-700 mb-4">{content.welcome.description1}</p>
            <p className="text-lg text-gray-700">{content.welcome.description2}</p>
          </div>

          <img src="/images/about/image1.jpg"  width={400} height={400} className=' w-[320px] md:w-[500px] max-h-[300px] rounded-xl
           shadow-lg' alt='image 10' />
        </section>

        {/* Similar sections can be added here for other parts using content.whoWeAre, content.products, etc. */}
        <section className="mb-16 flex flex-col justify-around md:flex-row-reverse gap-8 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">{content.whoWeAre.title}</h2>
            <p className="text-lg text-gray-700 mb-4">
              {content.whoWeAre.description1}
            </p>
            <p className="text-lg text-gray-700">
              {content.whoWeAre.description2}
            </p>
          </div>
          <img src="/images/about/image2.jpg" width={400} height={400} className='w-[320px] md:w-[500px] h-auto rounded-xl shadow-lg ' alt='image 1' />
        </section>

        <section className="mb-16 flex justify-around flex-col items-center gap-4 md:flex-row">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold text-blue-600 mb-6">{content.products.title}</h2>
            <p className="text-lg text-gray-700 mb-4"> {content.products.intro} </p>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              {content.products.list.map((item, i) => (
                <li key={i}>
                  <strong>{item.name} :</strong>{item.description}
                </li>))}
            </ul>
          </div>
          <img src="/images/about/image3.jpg" width={400} height={400} className='w-[320px] md:w-[500px] h-auto rounded-xl shadow-lg ' alt='image 1' />
        </section>
        <section className="mb-16 text-center max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">{content.commitment.title}</h2>
          <p className="text-lg text-gray-700">
            {content.commitment.description}
          </p>
        </section>

        {/* <section className="bg-blue-600 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white text-center mb-12">{content.whyChooseUs}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {statsData.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-white">
                  <item.icon size={48} className="mb-4" />
                  <h3 className="text-xl font-semibold text-center mb-2">{item.name[language]}</h3>
                  <p className="text-sm text-center">{item.description[language]}</p>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

    </div>
  )
}

export default AboutPage;





