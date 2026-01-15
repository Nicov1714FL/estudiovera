import { Scale } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Scale className="w-8 h-8 text-gold-light" />
              <div>
                <div className="font-serif text-xl font-medium">
                  Vera Guras Florencia
                </div>
                <div className="text-xs tracking-[0.2em] text-cream/60">
                  Y ASOCIADOS
                </div>
              </div>
            </div>
            <p className="text-cream/60 leading-relaxed">
              Asesoramiento jurídico profesional en Derecho Civil y Comercial.
              Más de 15 años de experiencia al servicio de nuestros clientes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-gold-light">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3">
              {[
                { href: "#inicio", label: "Inicio" },
                { href: "#servicios", label: "Servicios" },
                { href: "#nosotros", label: "Nosotros" },
                { href: "#contacto", label: "Contacto" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-cream/60 hover:text-gold-light transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-medium mb-6 text-gold-light">
              Áreas de Práctica
            </h4>
            <ul className="space-y-3">
              {[
                "Derecho Civil",
                "Derecho Comercial",
                "Contratos",
                "Mediación",
                "Consultoría Legal",
              ].map((service) => (
                <li key={service}>
                  <span className="text-cream/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">
            © {currentYear} Vera Guras Florencia y Asociados. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6 text-sm text-cream/40">
            <a href="#" className="hover:text-gold-light transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-gold-light transition-colors">
              Términos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
