export const locales = ["en", "es", "pt"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export type SiteMessages = {
  dateLocale: string;
  nav: {
    services: string;
    process: string;
    testimonials: string;
    contact: string;
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
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      description: string;
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
      services: "Services",
      process: "Process",
      testimonials: "Testimonials",
      contact: "Contact",
    },
    hero: {
      badge: "Panama City Legal Boutique",
      title: "Strategic legal support for people and businesses.",
      description:
        "A modern and human-centered law practice focused on civil, family, and consumer matters with clear communication and practical guidance.",
      primaryCta: "Book your consultation",
      secondaryCta: "Call office",
      stats: ["+12 years experience", "+1,200 cases handled", "Fast first response"],
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
      title: "Main practice areas",
      subtitle: "Comprehensive legal support adapted to your case.",
      items: [
        {
          title: "Civil Law",
          description:
            "Contracts, liability, property disputes, and strategic litigation support.",
        },
        {
          title: "Family Law",
          description:
            "Divorce, custody, support, and family agreements with sensitivity and clarity.",
        },
        {
          title: "Consumer Law",
          description:
            "Protection against abusive clauses, defective services, and unfair charges.",
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
    footer: {
      brandTitle: "Diego Rivera Cano",
      brandDescription:
        "Modern legal advisory for civil, family, and consumer matters in Panama.",
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
          emailLabel: "contacto@drclegal.com",
        },
      },
      copyright: "Copyright 2026 Diego Rivera Cano. All rights reserved.",
    },
  },
  es: {
    dateLocale: "es-PA",
    nav: {
      services: "Servicios",
      process: "Proceso",
      testimonials: "Testimonios",
      contact: "Contacto",
    },
    hero: {
      badge: "Boutique legal en Ciudad de Panama",
      title: "Acompanamiento legal estrategico para personas y empresas.",
      description:
        "Despacho moderno y cercano, enfocado en derecho civil, familia y consumidor, con comunicacion clara y soluciones practicas.",
      primaryCta: "Agendar consulta",
      secondaryCta: "Llamar ahora",
      stats: ["+12 anos de experiencia", "+1,200 casos atendidos", "Primera respuesta rapida"],
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
      title: "Areas principales de practica",
      subtitle: "Asesoria integral adaptada a la realidad de tu caso.",
      items: [
        {
          title: "Derecho Civil",
          description:
            "Contratos, responsabilidad civil, conflictos patrimoniales y litigio estrategico.",
        },
        {
          title: "Derecho de Familia",
          description:
            "Divorcio, custodia, pension y acuerdos familiares con enfoque humano.",
        },
        {
          title: "Derecho del Consumidor",
          description:
            "Defensa ante clausulas abusivas, servicios defectuosos y cobros indebidos.",
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
    footer: {
      brandTitle: "Diego Rivera Cano",
      brandDescription:
        "Asesoria legal moderna en derecho civil, familia y consumidor en Panama.",
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
          emailLabel: "contacto@drclegal.com",
        },
      },
      copyright: "Copyright 2026 Diego Rivera Cano. Todos los derechos reservados.",
    },
  },
  pt: {
    dateLocale: "pt-BR",
    nav: {
      services: "Servicos",
      process: "Processo",
      testimonials: "Depoimentos",
      contact: "Contato",
    },
    hero: {
      badge: "Escritorio juridico na Cidade do Panama",
      title: "Acompanhamento juridico estrategico para pessoas e empresas.",
      description:
        "Escritorio moderno e proximo, com foco em direito civil, familia e consumidor, sempre com comunicacao clara e pratica.",
      primaryCta: "Agendar consulta",
      secondaryCta: "Ligar agora",
      stats: ["+12 anos de experiencia", "+1.200 casos atendidos", "Primeira resposta rapida"],
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
      title: "Principais areas de atuacao",
      subtitle: "Assessoria completa adaptada ao contexto do seu caso.",
      items: [
        {
          title: "Direito Civil",
          description:
            "Contratos, responsabilidade civil, conflitos patrimoniais e litigio estrategico.",
        },
        {
          title: "Direito de Familia",
          description:
            "Divorcio, guarda, pensao e acordos familiares com sensibilidade.",
        },
        {
          title: "Direito do Consumidor",
          description:
            "Defesa contra clausulas abusivas, servicos defeituosos e cobrancas indevidas.",
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
    footer: {
      brandTitle: "Diego Rivera Cano",
      brandDescription:
        "Assessoria juridica moderna em direito civil, familia e consumidor no Panama.",
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
          emailLabel: "contato@drclegal.com",
        },
      },
      copyright: "Copyright 2026 Diego Rivera Cano. Todos os direitos reservados.",
    },
  },
};

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
