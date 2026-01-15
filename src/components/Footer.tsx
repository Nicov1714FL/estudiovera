import { Scale } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#2C2416] text-[#F5F1ED] py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-[#D4C4B0]" />
              <div>
                <div className="font-serif text-xl font-medium">
                  Vera Guras Florencia
                </div>
                <div className="text-xs tracking-[0.2em] text-[#D4C4B0]">
                  ABOGADA UBA
                </div>
              </div>
            </div>
            <p className="text-[#D4C4B0] leading-relaxed">
              Asesoramiento jurídico estratégico en Derecho Civil, Comercial e Inmobiliario. 
              Neuquén, Argentina.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-[#D4C4B0]">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#diferencial", label: "¿Por qué elegirme?" },
                { href: "#servicios", label: "Áreas de Práctica" },
                { href: "#formacion", label: "Formación" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#D4C4B0]/80 hover:text-[#D4C4B0] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-[#D4C4B0]">
              Áreas de Especialización
            </h4>
            <ul className="space-y-3">
              {[
                "Derecho Civil y Comercial",
                "Derecho de Familia",
                "Sucesiones",
                "Derecho Inmobiliario",
                "Derecho del Consumidor",
                "Derecho Laboral",
              ].map((service) => (
                <li key={service}>
                  <span className="text-[#D4C4B0]/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#D4C4B0]/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#D4C4B0]/60 text-sm">
            © {currentYear} Vera Guras Florencia. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm text-[#D4C4B0]/60">
            <a href="#" className="hover:text-[#D4C4B0] transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-[#D4C4B0] transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;