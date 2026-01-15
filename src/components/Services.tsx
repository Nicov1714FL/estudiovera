/* import { motion } from "framer-motion";
import { Scale, FileText, Users, Building2, Shield, Briefcase } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Derecho Civil",
    description:
      "Asesoramiento integral en contratos, sucesiones, familia y responsabilidad civil.",
  },
  {
    icon: Building2,
    title: "Derecho Comercial",
    description:
      "Constitución de sociedades, contratos comerciales y resolución de conflictos empresariales.",
  },
  {
    icon: FileText,
    title: "Contratos",
    description:
      "Redacción, revisión y negociación de todo tipo de contratos civiles y comerciales.",
  },
  {
    icon: Users,
    title: "Mediación",
    description:
      "Resolución alternativa de conflictos de manera eficiente y confidencial.",
  },
  {
    icon: Shield,
    title: "Defensa Legal",
    description:
      "Representación y patrocinio letrado en todas las instancias judiciales.",
  },
  {
    icon: Briefcase,
    title: "Consultoría",
    description:
      "Asesoramiento preventivo para empresas y particulares en materia legal.",
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mt-4 mb-6">
            Áreas de Práctica
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Brindamos asesoramiento jurídico especializado en diversas áreas del
            derecho, adaptándonos a las necesidades específicas de cada cliente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-card"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-secondary text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
 */


import { motion } from "framer-motion";
import { Scale, Building2, Home, ShoppingCart, HeartPulse, Briefcase } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Derecho Civil y Comercial",
    areas: [
      "Contratos civiles y comerciales",
      "Responsabilidad civil",
      "Confección y análisis de contratos",
      "Daños y perjuicios",
      "Obligaciones y derechos reales"
    ],
  },
  {
    icon: Scale,
    title: "Derecho de Familia",
    areas: [
      "Alimentos",
      "Régimen de comunicación",
      "Divorcios",
      "Separación de bienes",
      "Compensaciones económicas",
      "Uniones convivenciales"
    ],
  },
  {
    icon: Scale,
    title: "Sucesiones",
    areas: [
      "Declaratorias de herederos",
      "Testamentos",
      "Partición de herencias",
      "Legítimas y donaciones",
      "Asesoramiento en planificación sucesoria"
    ],
  },
  {
    icon: Home,
    title: "Derecho Inmobiliario",
    areas: [
      "Compraventa de inmuebles",
      "Contratos de locación",
      "Usucapión",
      "Servidumbres",
      "Propiedad horizontal",
      "Hipotecas y garantías reales"
    ],
  },
  {
    icon: ShoppingCart,
    title: "Derecho del Consumidor",
    areas: [
      "Defensa del consumidor",
      "Contratos de consumo",
      "Vicios redhibitorios",
      "Garantías",
      "Reclamos por productos y servicios"
    ],
  },
  {
    icon: HeartPulse,
    title: "Mala Praxis Médica",
    areas: [
      "Responsabilidad médica",
      "Daño en tratamientos",
      "Error de diagnóstico",
      "Consentimiento informado",
      "Reclamos por negligencia médica"
    ],
  },
  {
    icon: Briefcase,
    title: "Derecho Laboral",
    areas: [
      "Despidos",
      "Accidentes de trabajo",
      "Liquidaciones finales",
      "Contratos laborales",
      "Acoso laboral"
    ],
  },
  {
    icon: Building2,
    title: "Derecho Empresarial",
    areas: [
      "Constitución de sociedades",
      "Contratos comerciales",
      "Reorganización empresarial",
      "Asesoramiento corporativo",
      "Resolución de conflictos societarios"
    ],
  },
];

const Services = () => {
  return (
    <section id="servicios" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#8B7355] text-sm tracking-[0.3em] uppercase font-medium">
            Áreas de Especialización
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#2C2416] mt-4 mb-6">
            Áreas de Práctica
          </h2>
          <p className="text-[#5A4A3A] max-w-3xl mx-auto text-lg leading-relaxed">
            Asesoramiento jurídico especializado en las áreas más relevantes del derecho. Cada caso es único y merece un análisis estratégico personalizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-[#F5F1ED] border-2 border-transparent hover:border-[#8B7355] transition-all duration-500"
            >
              <div className="w-14 h-14 flex items-center justify-center bg-white border-2 border-[#8B7355] text-[#8B7355] mb-6 group-hover:bg-[#8B7355] group-hover:text-white transition-all duration-300">
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-medium text-[#2C2416] mb-4">
                {service.title}
              </h3>
              <ul className="space-y-2">
                {service.areas.map((area, i) => (
                  <li key={i} className="text-[#5A4A3A] text-sm flex items-start">
                    <span className="text-[#8B7355] mr-2 mt-1">•</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-[#5A4A3A] mb-6 max-w-2xl mx-auto">
            ¿Necesitas asesoramiento en alguna de estas áreas? Conversemos sobre tu caso.
          </p>
          <a
            href="#contacto"
            className="inline-block px-10 py-4 bg-[#8B7355] text-white font-medium tracking-wide hover:bg-[#6B5745] transition-all duration-300 shadow-lg"
          >
            Solicitar Asesoramiento
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;