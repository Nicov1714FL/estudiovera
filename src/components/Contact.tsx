import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Dirección",
    value: "Buenos Aires, Argentina",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 11 1234-5678",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@veraguras.com",
  },
  {
    icon: Clock,
    label: "Horario",
    value: "Lun - Vie: 9:00 - 18:00",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Mensaje enviado",
      description: "Nos pondremos en contacto con usted a la brevedad.",
    });

    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contacto" className="py-24 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm tracking-[0.3em] uppercase">
            Contacto
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-medium text-foreground mt-4 mb-6">
            Contáctenos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estamos aquí para ayudarle. Complete el formulario y nos pondremos
            en contacto con usted a la brevedad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-serif text-2xl font-medium text-foreground mb-6">
                Información de Contacto
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                No dude en comunicarse con nosotros para cualquier consulta.
                Ofrecemos una primera consulta gratuita para evaluar su caso.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-secondary text-primary shrink-0">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">
                      {info.label}
                    </div>
                    <div className="text-foreground font-medium">
                      {info.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="Su nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    placeholder="su@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  placeholder="+54 11 1234-5678"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Describa brevemente su consulta..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-10 py-4 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-accent transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensaje
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
