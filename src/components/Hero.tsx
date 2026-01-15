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
            Abogada UBA – Derecho Civil, Comercial e Inmobiliario | Asesoramiento legal profesional en Neuquén
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

