export const locales = ["en", "es", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export type SiteMessages = {
  dateLocale: string;
  nav: {
    home: string;
    services: string;
    process: string;
    testimonials: string;
    contact: string;
    news: string;
    menuTitle: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    badge: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: string[];
    renderLabel: string;
  };
  metricsStrip: {
    items: Array<{
      value: string;
      label: string;
    }>;
  };
  benefitsSection: {
    title: string;
    items: Array<{
      title: string;
      description: string;
    }>;
  };
  serviceSection: {
    headlinePrefix: string;
    headlineAccent: string;
    headlineSuffix: string;
    subtitle: string;
    listHeading: string;
    ctaLabel: string;
    imageAlt: string;
    items: Array<{
      title: string;
      points: string[];
    }>;
  };
  processSection: {
    title: string;
    subtitle: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  testimonialSection: {
    title: string;
    items: Array<{
      name: string;
      role: string;
      quote: string;
    }>;
  };
  faqSection: {
    title: string;
    subtitle: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  whatsappStrip: {
    title: string;
    description: string;
    buttonLabel: string;
  };
  ctaSection: {
    title: string;
    description: string;
    inputPlaceholder: string;
    buttonLabel: string;
  };
  newsPage: {
    pageTitle: string;
    kicker: string;
    headline: string;
    intro: string;
    featuredLabel: string;
    readOnSource: string;
    excerptFallback: string;
    emptyState: string;
    backHome: string;
    lastUpdatedLabel: string;
    latestSectionTitle: string;
    /** Shown above the 2nd, 3rd, … featured block; use {{n}} for the block number (2, 3, …) */
    featuredBlockHeading: string;
    loadErrorTitle: string;
    loadErrorDescription: string;
    /** Use {{seconds}} for countdown */
    loadErrorRedirect: string;
    loadErrorGoNow: string;
    loadingAria: string;
    marketSection: {
      title: string;
      subtitle: string;
      followLabel: string;
      note: string;
    };
    marketTicker: {
      label: string;
      delayedLabel: string;
    };
  };
  systemPages: {
    notFound: {
      code: string;
      title: string;
      description: string;
      cta: string;
    };
    error500: {
      code: string;
      title: string;
      description: string;
      /** Use {{seconds}} for countdown */
      redirect: string;
      goNow: string;
      tryAgain: string;
    };
  };
  footer: {
    brandTitle: string;
    brandDescription: string;
    sections: {
      company: {
        title: string;
        links: string[];
      };
      support: {
        title: string;
        links: string[];
      };
      links: {
        title: string;
        links: string[];
      };
      contact: {
        title: string;
        phoneLabel: string;
        emailLabel: string;
      };
    };
    copyright: string;
  };
};

export const messages: Record<Locale, SiteMessages> = {
  en: {
    dateLocale: "en-US",
    nav: {
      home: "Home",
      services: "Services",
      process: "Process",
      testimonials: "Testimonials",
      contact: "Contact",
      news: "News",
      menuTitle: "Menu",
      menuOpen: "Open menu",
      menuClose: "Close menu",
    },
    hero: {
      badge: "Panama · Real estate, investors & corporate",
      title: "Legal strategy for property deals, foreign investment, and companies.",
      description:
        "Transactional and corporate counsel covering real estate, inbound investment, contracts, banking coordination, and regulatory filings—from due diligence through closing.",
      primaryCta: "Book your consultation",
      secondaryCta: "Call office",
      stats: ["+12 years in Panama", "Closings & registrations", "Investors & developers"],
      renderLabel: "Server-rendered page (SSR). Last update:",
    },
    metricsStrip: {
      items: [
        { value: "+1,200", label: "Clients served" },
        { value: "+2,800", label: "Legal consultations" },
        { value: "96%", label: "Client satisfaction" },
        { value: "24h", label: "Average first response" },
      ],
    },
    benefitsSection: {
      title: "Benefits of our legal guidance",
      items: [
        {
          title: "Clear strategy",
          description:
            "Understand your options and the best legal route from day one.",
        },
        {
          title: "Practical communication",
          description:
            "Get simple updates, realistic expectations, and transparent next steps.",
        },
        {
          title: "Expert representation",
          description:
            "Negotiation and litigation support handled with focus and precision.",
        },
        {
          title: "Fast turnaround",
          description:
            "Receive an initial response quickly and move your case forward sooner.",
        },
      ],
    },
    serviceSection: {
      headlinePrefix: "Your",
      headlineAccent: "legal partner",
      headlineSuffix: "for property, investment, and corporate matters in Panama.",
      subtitle:
        "We combine real estate, inbound investment, corporate, contracts, banking coordination, and regulatory filings—from structuring through closing.",
      listHeading: "What we deliver",
      ctaLabel: "Book a consultation",
      imageAlt: "Legal advisory and professional support in Panama",
      items: [
        {
          title: "Real Estate Transactions & Advisory",
          points: [
            "Review and negotiation of promise-to-purchase-and-sale agreements",
            "Legal due diligence on properties",
            "Structuring of acquisitions (individual or corporate)",
            "Advisory on horizontal property and tourism-regime projects",
            "Support through closing (notary and public registry)",
            "Public deeds and property transfer filings",
          ],
        },
        {
          title: "Foreign Investment & Structuring (Panama Entry)",
          points: [
            "Legal advisory for foreign investors in Panama",
            "Investment structuring via local companies or foreign entities",
            "Registration of foreign entities as branches in Panama",
            "Asset ownership structure design",
            "Coordination with banks, developers, and local vendors",
          ],
        },
        {
          title: "Corporate & Commercial Law",
          points: [
            "Incorporation of companies (S.A., S.R.L.)",
            "Bylaws and corporate agreements",
            "Ongoing corporate legal advisory",
            "Drafting and review of commercial contracts",
            "Corporate reorganization and structuring",
          ],
        },
        {
          title: "Contract Drafting & Negotiation",
          points: [
            "Drafting and review of purchase and sale agreements",
            "Lease agreements",
            "Property management contracts",
            "Commercial and civil agreements",
            "Strategic negotiation of contract terms",
          ],
        },
        {
          title: "Banking & Transactional Legal Support",
          points: [
            "Assistance opening bank accounts in Panama",
            "Legal coordination with banking institutions",
            "Funds tracing in real estate transactions",
            "Support in financing processes",
          ],
        },
        {
          title: "Regulatory & Government Processes",
          points: [
            "Filings and procedures before government agencies",
            "Operating notice advisory and applications",
            "Coordination with regulators (MICI, Ministry of Environment, among others)",
            "Permits related to investment and development",
          ],
        },
        {
          title: "End-to-End Legal Support for Investors",
          points: [
            "Comprehensive support for investors entering Panama",
            "Full coordination of real estate investment processes",
            "Integration of legal, corporate, and transactional services",
            "Follow-through through closing and post-closing",
          ],
        },
      ],
    },
    processSection: {
      title: "How we work",
      subtitle: "A transparent process designed for confidence and results.",
      steps: [
        {
          title: "1. Initial assessment",
          description:
            "We review your situation, objectives, and urgency to define the best route.",
        },
        {
          title: "2. Strategic plan",
          description:
            "You receive a clear legal plan with options, timeline, and key recommendations.",
        },
        {
          title: "3. Ongoing representation",
          description:
            "We handle negotiation or litigation while keeping you informed at every step.",
        },
      ],
    },
    testimonialSection: {
      title: "What clients say",
      items: [
        {
          name: "Maria Gonzalez",
          role: "Business owner",
          quote:
            "Clear advice and quick action. The entire process felt organized and professional.",
        },
        {
          name: "Carlos Mejia",
          role: "Private client",
          quote:
            "Great communication and realistic expectations. I always knew what came next.",
        },
        {
          name: "Ana Rojas",
          role: "Entrepreneur",
          quote:
            "Their strategy helped us resolve a complex dispute efficiently and with confidence.",
        },
      ],
    },
    faqSection: {
      title: "Frequently asked questions",
      subtitle: "Common questions from clients in Panama about legal services.",
      items: [
        {
          question: "How do I schedule the first consultation?",
          answer:
            "You can contact us by phone or email and we will offer the earliest available time slot.",
        },
        {
          question: "What documents should I bring to the first meeting?",
          answer:
            "Bring your ID and any contracts, notices, receipts, court documents, or messages related to your case.",
        },
        {
          question: "Do you assist only in Panama City?",
          answer:
            "No. We serve clients in different regions of Panama, including remote follow-up when possible.",
        },
        {
          question: "How much does a legal consultation cost?",
          answer:
            "The consultation fee depends on the case complexity. We always explain the cost clearly before confirming the appointment.",
        },
        {
          question: "Which payment methods do you accept?",
          answer:
            "We accept card payments, cash, and bank transfer. Payment terms are confirmed before starting the service.",
        },
        {
          question: "How long can a legal process take in Panama?",
          answer:
            "It depends on the type of claim and court schedule. After reviewing your case, we provide an estimated timeline.",
        },
      ],
    },
    whatsappStrip: {
      title: "Need immediate legal guidance?",
      description: "Talk to our team now via WhatsApp.",
      buttonLabel: "Speak on WhatsApp",
    },
    ctaSection: {
      title: "Request legal orientation",
      description:
        "Leave your email and we will contact you to schedule your first conversation.",
      inputPlaceholder: "Enter your email",
      buttonLabel: "Request contact",
    },
    newsPage: {
      pageTitle: "News",
      kicker: "Curated for you",
      headline: "Headlines from trusted outlets",
      intro:
        "A professional digest of international news via RSS — updated regularly so you can scan what matters in one place.",
      featuredLabel: "Featured",
      readOnSource: "Read on source",
      excerptFallback: "Open the article on the publisher site for the full story.",
      emptyState:
        "No articles are available right now. Please try again in a few minutes.",
      backHome: "Back to home",
      lastUpdatedLabel: "Page refreshed",
      latestSectionTitle: "Latest",
      featuredBlockHeading: "Spotlight {{n}}",
      loadErrorTitle: "We could not load the news feeds",
      loadErrorDescription:
        "The RSS sources may be offline or temporarily unavailable. You will be redirected to the homepage shortly.",
      loadErrorRedirect: "Redirecting to home in {{seconds}} seconds.",
      loadErrorGoNow: "Go to home now",
      loadingAria: "Loading news",
      marketSection: {
        title: "Stock market snapshot",
        subtitle: "Track key indices in real time through trusted market pages.",
        followLabel: "Follow index",
        note: "Informational market references only, not legal or investment advice.",
      },
      marketTicker: {
        label: "US Markets",
        delayedLabel: "Data delayed",
      },
    },
    systemPages: {
      notFound: {
        code: "404",
        title: "Page not found",
        description:
          "The page you are looking for does not exist or has been moved. Check the address or return to the homepage.",
        cta: "Back to homepage",
      },
      error500: {
        code: "500",
        title: "Something went wrong",
        description:
          "An unexpected error occurred. You can try again or wait to be redirected to the homepage.",
        redirect: "Redirecting to home in {{seconds}} seconds.",
        goNow: "Go to home now",
        tryAgain: "Try again",
      },
    },
    footer: {
      brandTitle: "Diego Rivera Cano",
      brandDescription:
        "Legal advisory in Panama for real estate, foreign investment, corporate law, contracts, banking support, and regulatory processes.",
      sections: {
        company: {
          title: "Company",
          links: ["Services", "Community", "Testimonials"],
        },
        support: {
          title: "Support",
          links: ["Help center", "Webinars", "Guides", "Feedback"],
        },
        links: {
          title: "Links",
          links: ["Courses", "Become partner", "Book consultation", "All in one"],
        },
        contact: {
          title: "Contact us",
          phoneLabel: "+507 6070-0007",
          emailLabel: "",
        },
      },
      copyright: "Copyright 2026 Diego Rivera Cano. All rights reserved.",
    },
  },
  es: {
    dateLocale: "es-PA",
    nav: {
      home: "Inicio",
      services: "Servicios",
      process: "Proceso",
      testimonials: "Testimonios",
      contact: "Contacto",
      news: "Noticias",
      menuTitle: "Menu",
      menuOpen: "Abrir menu",
      menuClose: "Cerrar menu",
    },
    hero: {
      badge: "Panama · Inmobiliario, inversion y societario",
      title: "Estrategia legal para operaciones inmobiliarias, inversion extranjera y empresas.",
      description:
        "Asesoria transaccional y societaria: bienes raices, inversion foranea, contratos, coordinacion bancaria y tramites regulatorios, desde el due diligence hasta el cierre.",
      primaryCta: "Agendar consulta",
      secondaryCta: "Llamar ahora",
      stats: ["+12 anos en Panama", "Cierres y registros", "Inversionistas y desarrolladores"],
      renderLabel: "Pagina renderizada en el servidor (SSR). Ultima actualizacion:",
    },
    metricsStrip: {
      items: [
        { value: "+1,200", label: "Clientes atendidos" },
        { value: "+2,800", label: "Consultas legales" },
        { value: "96%", label: "Satisfaccion de clientes" },
        { value: "24h", label: "Tiempo medio de primera respuesta" },
      ],
    },
    benefitsSection: {
      title: "Beneficios de nuestra asesoria legal",
      items: [
        {
          title: "Estrategia clara",
          description:
            "Comprende tus opciones y la mejor ruta legal desde el primer dia.",
        },
        {
          title: "Comunicacion practica",
          description:
            "Recibe actualizaciones simples, expectativas realistas y proximos pasos claros.",
        },
        {
          title: "Acompanamiento experto",
          description:
            "Gestion de negociacion y litigio con enfoque tecnico y precision.",
        },
        {
          title: "Respuesta rapida",
          description:
            "Obtiene una primera orientacion en poco tiempo para avanzar con seguridad.",
        },
      ],
    },
    serviceSection: {
      headlinePrefix: "Su",
      headlineAccent: "equipo legal",
      headlineSuffix: "para operaciones inmobiliarias, inversion y negocios en Panama.",
      subtitle:
        "Integramos bienes raices, inversion foranea, derecho societario, contratos, coordinacion bancaria y tramites regulatorios, desde la estructuracion hasta el cierre.",
      listHeading: "Nuestros servicios",
      ctaLabel: "Agendar consulta",
      imageAlt: "Asesoria juridica y apoyo profesional en Panama",
      items: [
        {
          title: "Operaciones inmobiliarias y asesoria",
          points: [
            "Revision y negociacion de promesas de compraventa",
            "Due diligence legal de propiedades",
            "Estructuracion de adquisiciones (personales o corporativas)",
            "Asesoria en proyectos bajo regimen de propiedad horizontal y regimen turistico",
            "Acompanamiento en procesos de cierre (notaria y registro publico)",
            "Tramitacion de escrituras publicas y transferencia de propiedad",
          ],
        },
        {
          title: "Inversion extranjera y estructuracion (entrada a Panama)",
          points: [
            "Asesoria legal a inversionistas extranjeros en Panama",
            "Estructuracion de inversiones mediante sociedades locales o entidades extranjeras",
            "Registro de sociedades extranjeras (foreign entities) como sucursales en Panama",
            "Definicion de estructuras de titularidad de activos",
            "Coordinacion con bancos, desarrolladores y proveedores locales",
          ],
        },
        {
          title: "Derecho societario y mercantil",
          points: [
            "Constitucion de sociedades (S.A., S.R.L.)",
            "Redaccion de pactos sociales y acuerdos corporativos",
            "Asesoria legal corporativa continua",
            "Elaboracion y revision de contratos comerciales",
            "Reorganizacion y estructuracion societaria",
          ],
        },
        {
          title: "Redaccion y negociacion de contratos",
          points: [
            "Redaccion y revision de contratos de compraventa",
            "Contratos de arrendamiento",
            "Contratos de administracion de propiedades (property management)",
            "Acuerdos comerciales y civiles",
            "Negociacion estrategica de terminos contractuales",
          ],
        },
        {
          title: "Apoyo legal bancario y transaccional",
          points: [
            "Asistencia en apertura de cuentas bancarias en Panama",
            "Coordinacion legal con entidades bancarias",
            "Seguimiento de fondos en transacciones inmobiliarias",
            "Soporte en procesos de financiamiento",
          ],
        },
        {
          title: "Procesos regulatorios y gubernamentales",
          points: [
            "Gestion de tramites ante entidades gubernamentales",
            "Asesoria y tramitacion de avisos de operacion",
            "Coordinacion con autoridades regulatorias (MICI, Ministerio de Ambiente, entre otros)",
            "Gestion de permisos relacionados con inversion y desarrollo",
          ],
        },
        {
          title: "Acompanamiento legal integral para inversionistas",
          points: [
            "Acompanamiento integral a inversionistas desde su entrada a Panama",
            "Coordinacion completa del proceso de inversion inmobiliaria",
            "Integracion de servicios legales, corporativos y transaccionales",
            "Seguimiento continuo hasta el cierre y post-cierre de la operacion",
          ],
        },
      ],
    },
    processSection: {
      title: "Como trabajamos",
      subtitle: "Un proceso transparente para darte seguridad y resultados.",
      steps: [
        {
          title: "1. Evaluacion inicial",
          description:
            "Analizamos tu situacion, objetivos y urgencia para definir la mejor ruta legal.",
        },
        {
          title: "2. Estrategia juridica",
          description:
            "Recibes un plan claro con opciones, tiempos y recomendaciones clave.",
        },
        {
          title: "3. Acompanamiento continuo",
          description:
            "Gestionamos negociacion o litigio con comunicacion constante en cada etapa.",
        },
      ],
    },
    testimonialSection: {
      title: "Lo que dicen nuestros clientes",
      items: [
        {
          name: "Maria Gonzalez",
          role: "Empresaria",
          quote:
            "Recibi orientacion clara y accion rapida. Todo el proceso fue ordenado y profesional.",
        },
        {
          name: "Carlos Mejia",
          role: "Cliente particular",
          quote:
            "Excelente comunicacion y expectativas realistas. Siempre supe el siguiente paso.",
        },
        {
          name: "Ana Rojas",
          role: "Emprendedora",
          quote:
            "La estrategia legal nos ayudo a resolver un conflicto complejo con confianza.",
        },
      ],
    },
    faqSection: {
      title: "Preguntas frecuentes",
      subtitle:
        "Dudas comunes de clientes en Panama sobre servicios legales.",
      items: [
        {
          question: "Como agendo la primera consulta?",
          answer:
            "Puedes escribirnos por telefono o correo y te compartimos el primer horario disponible.",
        },
        {
          question: "Que documentos debo llevar a la primera cita?",
          answer:
            "Trae tu cedula y cualquier contrato, notificacion, recibo, escrito judicial o mensaje relacionado con tu caso.",
        },
        {
          question: "Solo atienden en Ciudad de Panama?",
          answer:
            "No. Atendemos clientes en distintas zonas de Panama y tambien con seguimiento remoto cuando aplica.",
        },
        {
          question: "Cuanto cuesta una consulta legal?",
          answer:
            "El valor depende del nivel de complejidad del caso. Siempre te informamos el costo antes de confirmar la cita.",
        },
        {
          question: "Que metodos de pago aceptan?",
          answer:
            "Aceptamos pago con tarjeta, efectivo y transferencia bancaria. Las condiciones se confirman antes de iniciar el servicio.",
        },
        {
          question: "Cuanto tiempo puede tardar un proceso legal en Panama?",
          answer:
            "Depende del tipo de caso y del calendario judicial. Tras revisar tu situacion te damos una estimacion realista.",
        },
      ],
    },
    whatsappStrip: {
      title: "Necesitas orientacion legal inmediata?",
      description: "Habla ahora con nuestro equipo por WhatsApp.",
      buttonLabel: "Hablar por WhatsApp",
    },
    ctaSection: {
      title: "Solicita orientacion legal",
      description:
        "Comparte tu correo y te contactaremos para coordinar una primera conversacion.",
      inputPlaceholder: "Ingresa tu correo",
      buttonLabel: "Solicitar contacto",
    },
    newsPage: {
      pageTitle: "Noticias",
      kicker: "Seleccion editorial",
      headline: "Titulares de medios reconocidos",
      intro:
        "Un resumen profesional de noticias internacionales a traves de RSS, actualizado con frecuencia para que sigas la actualidad en un solo lugar.",
      featuredLabel: "Destacado",
      readOnSource: "Leer en el medio",
      excerptFallback: "Abre la nota en el portal del editor para el texto completo.",
      emptyState:
        "No hay articulos disponibles en este momento. Intenta de nuevo en unos minutos.",
      backHome: "Volver al inicio",
      lastUpdatedLabel: "Pagina actualizada",
      latestSectionTitle: "Mas recientes",
      featuredBlockHeading: "Destacado {{n}}",
      loadErrorTitle: "No pudimos cargar las noticias",
      loadErrorDescription:
        "Las fuentes RSS pueden estar fuera de linea o no disponibles por un momento. En breve te llevaremos al inicio.",
      loadErrorRedirect: "Redirigiendo al inicio en {{seconds}} segundos.",
      loadErrorGoNow: "Ir al inicio ahora",
      loadingAria: "Cargando noticias",
      marketSection: {
        title: "Resumen de bolsa",
        subtitle: "Sigue los principales indices en tiempo real desde fuentes confiables.",
        followLabel: "Ver indice",
        note: "Referencia informativa de mercado; no constituye asesoria legal ni de inversion.",
      },
      marketTicker: {
        label: "Mercados USA",
        delayedLabel: "Datos con retraso",
      },
    },
    systemPages: {
      notFound: {
        code: "404",
        title: "Pagina no encontrada",
        description:
          "La pagina que buscas no existe o fue movida. Revisa la direccion o vuelve al inicio.",
        cta: "Volver al inicio",
      },
      error500: {
        code: "500",
        title: "Algo salio mal",
        description:
          "Ocurrio un error inesperado. Puedes reintentar o esperar la redireccion automatica al inicio.",
        redirect: "Redirigiendo al inicio en {{seconds}} segundos.",
        goNow: "Ir al inicio ahora",
        tryAgain: "Intentar de nuevo",
      },
    },
    footer: {
      brandTitle: "Diego Rivera Cano",
      brandDescription:
        "Asesoria legal en Panama en bienes raices, inversion extranjera, derecho societario, contratos, apoyo bancario y procesos regulatorios.",
      sections: {
        company: {
          title: "Empresa",
          links: ["Servicios", "Comunidad", "Testimonios"],
        },
        support: {
          title: "Soporte",
          links: ["Centro de ayuda", "Webinars", "Guias", "Feedback"],
        },
        links: {
          title: "Enlaces",
          links: ["Cursos", "Hazte aliado", "Agendar consulta", "Todo en uno"],
        },
        contact: {
          title: "Contactanos",
          phoneLabel: "+507 6070-0007",
          emailLabel: "",
        },
      },
      copyright: "Copyright 2026 Diego Rivera Cano. Todos los derechos reservados.",
    },
  },
  pt: {
    dateLocale: "pt-BR",
    nav: {
      home: "Inicio",
      services: "Servicos",
      process: "Processo",
      testimonials: "Depoimentos",
      contact: "Contato",
      news: "Noticias",
      menuTitle: "Menu",
      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
    },
    hero: {
      badge: "Panama · Imobiliario, investimento e societario",
      title: "Estrategia juridica para operacoes imobiliarias, investimento estrangeiro e empresas.",
      description:
        "Assessoria transacional e societaria: imoveis, investimento inbound, contratos, coordenacao bancaria e tramites regulatorios, do due diligence ao fechamento.",
      primaryCta: "Agendar consulta",
      secondaryCta: "Ligar agora",
      stats: ["+12 anos no Panama", "Fechamentos e registros", "Investidores e incorporadores"],
      renderLabel: "Pagina renderizada no servidor (SSR). Ultima atualizacao:",
    },
    metricsStrip: {
      items: [
        { value: "+1.200", label: "Clientes atendidos" },
        { value: "+2.800", label: "Consultas juridicas" },
        { value: "96%", label: "Satisfacao dos clientes" },
        { value: "24h", label: "Tempo medio de primeira resposta" },
      ],
    },
    benefitsSection: {
      title: "Beneficios da nossa assessoria juridica",
      items: [
        {
          title: "Estrategia clara",
          description:
            "Entenda suas opcoes e o melhor caminho juridico desde o primeiro contato.",
        },
        {
          title: "Comunicacao pratica",
          description:
            "Receba atualizacoes simples, expectativas realistas e proximos passos.",
        },
        {
          title: "Acompanhamento especialista",
          description:
            "Conducao de negociacao e litigio com foco tecnico e precisao.",
        },
        {
          title: "Retorno rapido",
          description:
            "Tenha uma primeira orientacao em pouco tempo para agir com seguranca.",
        },
      ],
    },
    serviceSection: {
      headlinePrefix: "Seu",
      headlineAccent: "parceiro juridico",
      headlineSuffix: "para imoveis, investimento e negocios no Panama.",
      subtitle:
        "Integramos imoveis, investimento internacional, direito societario, contratos, coordenacao bancaria e tramites regulatorios, da estruturacao ao fechamento.",
      listHeading: "Nossos servicos",
      ctaLabel: "Agendar consulta",
      imageAlt: "Assessoria juridica e apoio profissional no Panama",
      items: [
        {
          title: "Transacoes imobiliarias e assessoria",
          points: [
            "Revisao e negociacao de promessas de compra e venda",
            "Due diligence juridica de imoveis",
            "Estruturacao de aquisicoes (pessoais ou corporativas)",
            "Assessoria em projetos em regime de propriedade horizontal e regime turistico",
            "Acompanhamento em fechamentos (cartorio e registro publico)",
            "Tramitacao de escrituras publicas e transferencia de propriedade",
          ],
        },
        {
          title: "Investimento estrangeiro e estruturacao (entrada no Panama)",
          points: [
            "Assessoria juridica a investidores estrangeiros no Panama",
            "Estruturacao de investimentos via sociedades locais ou entidades estrangeiras",
            "Registro de entidades estrangeiras como filiais no Panama",
            "Definicao de estruturas de titularidade de ativos",
            "Coordenacao com bancos, incorporadores e fornecedores locais",
          ],
        },
        {
          title: "Direito societario e comercial",
          points: [
            "Constituicao de sociedades (S.A., S.R.L.)",
            "Redacao de pactos sociais e acordos corporativos",
            "Assessoria juridica societaria continua",
            "Elaboracao e revisao de contratos comerciais",
            "Reorganizacao e estruturacao societaria",
          ],
        },
        {
          title: "Redacao e negociacao de contratos",
          points: [
            "Redacao e revisao de contratos de compra e venda",
            "Contratos de locacao",
            "Contratos de administracao de propriedades (property management)",
            "Acordos comerciais e civis",
            "Negociacao estrategica de termos contratuais",
          ],
        },
        {
          title: "Suporte juridico bancario e transacional",
          points: [
            "Assistencia na abertura de contas bancarias no Panama",
            "Coordenacao juridica com instituicoes bancarias",
            "Acompanhamento de fundos em transacoes imobiliarias",
            "Suporte em processos de financiamento",
          ],
        },
        {
          title: "Processos regulatorios e governamentais",
          points: [
            "Gestao de tramites perante orgaos governamentais",
            "Assessoria e tramitacao de avisos de operacao",
            "Coordenacao com autoridades regulatorias (MICI, Ministerio de Ambiente, entre outros)",
            "Gestao de permissoes ligados a investimento e desenvolvimento",
          ],
        },
        {
          title: "Suporte juridico ponta a ponta para investidores",
          points: [
            "Acompanhamento integral a investidores desde a entrada no Panama",
            "Coordenacao completa do processo de investimento imobiliario",
            "Integracao de servicos juridicos, corporativos e transacionais",
            "Seguimento continuo ate o fechamento e pos-fechamento da operacao",
          ],
        },
      ],
    },
    processSection: {
      title: "Como trabalhamos",
      subtitle: "Um processo transparente para gerar seguranca e resultado.",
      steps: [
        {
          title: "1. Analise inicial",
          description:
            "Entendemos seu contexto, objetivos e urgencia para definir a melhor estrategia.",
        },
        {
          title: "2. Plano juridico",
          description:
            "Voce recebe um plano claro com alternativas, prazos e recomendacoes.",
        },
        {
          title: "3. Acompanhamento continuo",
          description:
            "Conduzimos negociacao ou litigio com atualizacoes constantes.",
        },
      ],
    },
    testimonialSection: {
      title: "O que nossos clientes dizem",
      items: [
        {
          name: "Maria Gonzalez",
          role: "Empresaria",
          quote:
            "Recebi orientacao clara e acao rapida. Todo o processo foi organizado e profissional.",
        },
        {
          name: "Carlos Mejia",
          role: "Cliente particular",
          quote:
            "Excelente comunicacao e expectativas realistas. Sempre soube o proximo passo.",
        },
        {
          name: "Ana Rojas",
          role: "Empreendedora",
          quote:
            "A estrategia juridica ajudou a resolver um conflito complexo com confianca.",
        },
      ],
    },
    faqSection: {
      title: "Perguntas frequentes",
      subtitle:
        "Duvidas comuns de clientes no Panama sobre servicos juridicos.",
      items: [
        {
          question: "Como agendo a primeira consulta?",
          answer:
            "Voce pode entrar em contato por telefone ou e-mail e enviamos o primeiro horario disponivel.",
        },
        {
          question: "Quais documentos devo levar para a primeira reuniao?",
          answer:
            "Leve seu documento e qualquer contrato, notificacao, recibo, documento judicial ou mensagem ligada ao caso.",
        },
        {
          question: "Vocês atendem apenas na Cidade do Panama?",
          answer:
            "Nao. Atendemos clientes em diferentes regioes do Panama e tambem com acompanhamento remoto quando aplicavel.",
        },
        {
          question: "Quanto custa uma consulta juridica?",
          answer:
            "O valor varia conforme a complexidade do caso. Informamos o custo com clareza antes da confirmacao.",
        },
        {
          question: "Quais formas de pagamento voces aceitam?",
          answer:
            "Aceitamos pagamento com cartao, efetivo e transferencia bancaria. As condicoes sao confirmadas antes de iniciar o servico.",
        },
        {
          question: "Quanto tempo pode durar um processo legal no Panama?",
          answer:
            "Depende do tipo de demanda e do calendario do tribunal. Apos analisar o caso, passamos uma previsao realista.",
        },
      ],
    },
    whatsappStrip: {
      title: "Precisa de orientacao juridica imediata?",
      description: "Fale agora com nossa equipe pelo WhatsApp.",
      buttonLabel: "Falar no WhatsApp",
    },
    ctaSection: {
      title: "Solicite orientacao juridica",
      description:
        "Compartilhe seu e-mail e entraremos em contato para agendar a primeira conversa.",
      inputPlaceholder: "Digite seu e-mail",
      buttonLabel: "Solicitar contato",
    },
    newsPage: {
      pageTitle: "Noticias",
      kicker: "Selecao editorial",
      headline: "Manchetes de veiculos de confianca",
      intro:
        "Um digest profissional de noticias internacionais via RSS, atualizado com frequencia para voce acompanhar o essencial em um so lugar.",
      featuredLabel: "Destaque",
      readOnSource: "Ler na fonte",
      excerptFallback: "Abra a materia no portal do veiculo para o texto completo.",
      emptyState:
        "Nenhuma materia disponivel no momento. Tente novamente em alguns minutos.",
      backHome: "Voltar ao inicio",
      lastUpdatedLabel: "Pagina atualizada",
      latestSectionTitle: "Mais recentes",
      featuredBlockHeading: "Destaque {{n}}",
      loadErrorTitle: "Nao foi possivel carregar as noticias",
      loadErrorDescription:
        "As fontes RSS podem estar fora do ar ou indisponiveis. Voce sera redirecionado para a pagina inicial em instantes.",
      loadErrorRedirect: "Redirecionando para o inicio em {{seconds}} segundos.",
      loadErrorGoNow: "Ir ao inicio agora",
      loadingAria: "Carregando noticias",
      marketSection: {
        title: "Resumo da bolsa",
        subtitle: "Acompanhe os principais indices em tempo real por fontes confiaveis.",
        followLabel: "Ver indice",
        note: "Referencia informativa de mercado; nao constitui assessoria juridica nem de investimento.",
      },
      marketTicker: {
        label: "Mercados EUA",
        delayedLabel: "Dados com atraso",
      },
    },
    systemPages: {
      notFound: {
        code: "404",
        title: "Pagina nao encontrada",
        description:
          "A pagina que voce procura nao existe ou foi movida. Confira o endereco ou volte ao inicio.",
        cta: "Voltar ao inicio",
      },
      error500: {
        code: "500",
        title: "Algo deu errado",
        description:
          "Ocorreu um erro inesperado. Voce pode tentar de novo ou aguardar a redirecao automatica.",
        redirect: "Redirecionando para o inicio em {{seconds}} segundos.",
        goNow: "Ir ao inicio agora",
        tryAgain: "Tentar novamente",
      },
    },
    footer: {
      brandTitle: "Diego Rivera Cano",
      brandDescription:
        "Assessoria juridica no Panama em imoveis, investimento estrangeiro, direito societario, contratos, suporte bancario e processos regulatorios.",
      sections: {
        company: {
          title: "Empresa",
          links: ["Servicos", "Comunidade", "Depoimentos"],
        },
        support: {
          title: "Suporte",
          links: ["Central de ajuda", "Webinars", "Guias", "Feedback"],
        },
        links: {
          title: "Links",
          links: ["Cursos", "Torne-se parceiro", "Agendar consulta", "Tudo em um"],
        },
        contact: {
          title: "Contato",
          phoneLabel: "+507 6070-0007",
          emailLabel: "",
        },
      },
      copyright: "Copyright 2026 Diego Rivera Cano. Todos os direitos reservados.",
    },
  },
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localeFromPathname(pathname: string | null): Locale {
  if (!pathname) return defaultLocale;
  const segment = pathname.split("/").filter(Boolean)[0];
  if (segment && isValidLocale(segment)) {
    return segment;
  }
  return defaultLocale;
}
