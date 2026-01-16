import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-law-office.jpg";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Asesoramiento jurídico profesional"
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro para mejor contraste */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2C2416]/70 via-[#2C2416]/60 to-[#2C2416]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-block text-[#D4C4B0] text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-medium"
          >
            Asesoramiento Jurídico Estratégico
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-4"
          >
            Estudio Vera Guras
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-2xl text-[#D4C4B0] max-w-4xl mx-auto mb-10 leading-relaxed font-light"
          >
            Abogada UBA – Derecho Civil, Comercial e Inmobiliario | Asesoramiento legal profesional en Neuquén
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Analizo tu caso, investigo, desarrollo estrategias personalizadas y te acompaño en la toma de decisiones informadas. Juntos construimos la mejor solución.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#contacto"
              className="px-10 py-4 bg-[#8B7355] text-white font-medium tracking-wide hover:bg-[#6B5745] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contactar Ahora
            </a>
            <a
              href="#servicios"
              className="px-10 py-4 border-2 border-white/80 text-white font-medium tracking-wide hover:bg-white hover:text-[#2C2416] transition-all duration-300"
            >
              Conocer Áreas de Práctica
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
          <ChevronDown className="w-8 h-8 text-white/80" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;