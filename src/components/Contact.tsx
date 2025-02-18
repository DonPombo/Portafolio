import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, /*Phone,*/ MapPin, Send, Loader } from "lucide-react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    emailjs
      .send(
        "service_dts8pjv", // Replace with your EmailJS service ID
        "template_peiqkrb", // Replace with your EmailJS template ID
        formData,
        "Od9vr6I153CUrSqM6" // Replace with your EmailJS public key
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsLoading(false);
        setIsSuccess(true);
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setIsLoading(false);
        setIsError(true);
      });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Mostrar numero de telefono
  /* <div className="flex items-center gap-4">
    <Phone className="text-red-500" />
    <span className="text-gray-300">+53 </span>
  </div>;*/

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title text-center">Contacto</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-2xl font-bold text-yellow-500 mb-6">
                Información de Contacto
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="text-red-500" />
                  <span className="text-gray-300">donpombo31@gmail.com</span>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-red-500" />
                  <span className="text-gray-300">La Habana, Cuba</span>
                </div>
              </div>
            </div>

            <div className="card">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="user_name"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="user_email"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader className="animate-spin" size={20} />
                  ) : (
                    <>
                      Enviar Mensaje <Send size={20} />
                    </>
                  )}
                </button>
              </form>
              {isSuccess && (
                <p className="text-green-500 mt-4">
                  Mensaje enviado con éxito!
                </p>
              )}
              {isError && (
                <p className="text-red-500 mt-4">
                  Hubo un error al enviar el mensaje. Por favor, inténtalo de
                  nuevo.
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
