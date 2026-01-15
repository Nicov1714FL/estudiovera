import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const contactInfo = [
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Neuquén, Argentina",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+54 299 XXX-XXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contacto@veraguras.com",
  },
  {
    icon: Clock,
    label: "Horario de Atención",
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
      description: "Me pondré en contacto contigo a la brevedad.",
    });

    setFormData({ nombre: "", email: "", telefono: "", mensaje: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // WhatsApp floating button
  const whatsappNumber = "5492991234567"; // Reemplazar con tu número real
  const whatsappMessage = encodeURIComponent("Hola, necesito asesoramiento legal.");

  return (
    <>
      <section id="contacto" className="py-24 md:py-32 bg-[#F5F1ED]">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-[#8B7355] text-sm tracking-[0.3em] uppercase font-medium">
              Contacto
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-medium text-[#2C2416] mt-4 mb-6">
              Conversemos sobre tu caso
            </h2>
            <p className="text-[#5A4A3A] max-w-2xl mx-auto text-lg">
              Estoy aquí para escucharte y brindarte el asesoramiento que necesitas. No dudes en contactarme.
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
                <h3 className="font-serif text-2xl font-medium text-[#2C2416] mb-6">
                  Información de Contacto
                </h3>
                <p className="text-[#5A4A3A] leading-relaxed mb-6">
                  La mejor manera de resolver tu consulta es conversando. Puedes escribirme por WhatsApp, enviar un email o completar el formulario de contacto.
                </p>
                <p className="text-[#5A4A3A] leading-relaxed">
                  Cada consulta es tratada con absoluta confidencialidad y profesionalismo.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-white border-2 border-[#8B7355] text-[#8B7355] shrink-0">
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm text-[#5A4A3A] mb-1 font-medium">
                        {info.label}
                      </div>
                      <div className="text-[#2C2416] font-medium">
                        {info.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA adicional */}
              <div className="pt-6">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-[#25D366] text-white font-medium tracking-wide hover:bg-[#20BA5A] transition-all duration-300 shadow-lg"
                >
                  <MessageCircle className="w-5 h-5" />
                  Contactar por WhatsApp
                </a>
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
                      className="block text-sm font-medium text-[#2C2416] mb-2"
                    >
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formData.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-[#D4C4B0] text-[#2C2416] placeholder:text-[#8B7355]/50 focus:outline-none focus:border-[#8B7355] transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#2C2416] mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border-2 border-[#D4C4B0] text-[#2C2416] placeholder:text-[#8B7355]/50 focus:outline-none focus:border-[#8B7355] transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-medium text-[#2C2416] mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-[#D4C4B0] text-[#2C2416] placeholder:text-[#8B7355]/50 focus:outline-none focus:border-[#8B7355] transition-colors"
                    placeholder="+54 299 XXX-XXXX"
                  />
                </div>

                <div>
                  <label
                    htmlFor="mensaje"
                    className="block text-sm font-medium text-[#2C2416] mb-2"
                  >
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white border-2 border-[#D4C4B0] text-[#2C2416] placeholder:text-[#8B7355]/50 focus:outline-none focus:border-[#8B7355] transition-colors resize-none"
                    placeholder="Cuéntame brevemente sobre tu caso..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto px-10 py-4 bg-[#8B7355] text-white font-medium tracking-wide hover:bg-[#6B5745] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#20BA5A] hover:scale-110 transition-all duration-300 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
        <span className="absolute right-full mr-3 px-4 py-2 bg-[#2C2416] text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          ¿Necesitas asesoramiento?
        </span>
      </a>
    </>
  );
};

export default Contact;