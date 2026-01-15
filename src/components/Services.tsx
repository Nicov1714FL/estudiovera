import { motion } from "framer-motion";
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
