/* import { motion } from "framer-motion";
import { Award, Clock, Users, Target } from "lucide-react";

const stats = [
  { icon: Clock, value: "15+", label: "Años de Experiencia" },
  { icon: Users, value: "500+", label: "Clientes Satisfechos" },
  { icon: Award, value: "98%", label: "Casos Exitosos" },
  { icon: Target, value: "24h", label: "Respuesta Garantizada" },
];

const About = () => {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-gradient-dark text-cream">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-gold-light text-sm tracking-[0.3em] uppercase">
              Sobre Nosotros
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium mt-4 mb-8">
              ¿Por qué elegirnos?
            </h2>
            <div className="space-y-6 text-cream/80">
              <p className="text-lg leading-relaxed">
                La asesoría jurídica es aquella que se encarga de ofrecer la
                información y asesoramiento a aquellos temas relacionados con la
                aplicación de normativas, leyes y reglamentos en materia de
                Derecho Civil y Comercial.
              </p>
              <p className="text-lg leading-relaxed">
                En{" "}
                <span className="text-gold-light font-medium">
                  Vera Guras Florencia y Asociados
                </span>{" "}
                nos destacamos por nuestra pasión, vocación y absoluto
                compromiso en brindar calidad y eficiencia en la atención de los
                requerimientos de nuestros clientes.
              </p>
              <p className="text-lg leading-relaxed">
                Cada caso es único y merece una atención personalizada. Trabajamos
                incansablemente para proteger sus intereses y alcanzar los mejores
                resultados posibles.
              </p>
            </div>

            <motion.a
              href="#contacto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="inline-block mt-10 px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-accent transition-all duration-300"
            >
              Consulta Gratuita
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="p-8 bg-cream/5 border border-cream/10 backdrop-blur-sm text-center hover:border-gold-light/30 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-gold-light mx-auto mb-4" />
                <div className="font-serif text-4xl font-medium text-cream mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-cream/60 tracking-wide">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
 */


import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Oficina de abogados profesional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 bg-charcoal/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block text-gold-light text-sm md:text-base tracking-[0.4em] uppercase mb-6"
          >
            Asesoramiento Jurídico
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-cream leading-tight mb-6"
          >
            Vera Guras Florencia
            <span className="block text-gold-light">y Asociados</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed"
          >
            Pasión, vocación y absoluto compromiso en brindar calidad y
            eficiencia en la atención de los requerimientos de nuestros
            clientes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contacto"
              className="px-8 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-accent transition-all duration-300 hover:shadow-lg"
            >
              Agendar Consulta
            </a>
            <a
              href="#servicios"
              className="px-8 py-4 border border-cream/40 text-cream font-medium tracking-wide hover:bg-cream/10 transition-all duration-300"
            >
              Nuestros Servicios
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-cream/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

