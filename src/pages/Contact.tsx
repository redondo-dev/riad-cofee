import { useState } from "react";
import Navbar from "../components/Navbar";
import ContactInfo from "../components/ContactInfo";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const emailjsConfig = useState(() => {
    const saved = localStorage.getItem("emailjs-config");
    return saved
      ? JSON.parse(saved)
      : {
        serviceId : import.meta.env.VITE_EMAILJS_SERVICE_ID,
         templateId :import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        publicKey :import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        };
  })[0];
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20 px-4 md:px-8 md:mb-16">
        <div className="max-w-2xl mx-auto">
          {showConfig && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Configuration EmailJS requise!</strong>
              <span className="block sm:inline"> Veuillez configurer vos paramètres EmailJS avant d'envoyer un message.</span>
            </div>
          )}
          <h1 className="text-3xl font-serif font-bold text-coffee mb-8">
            Contactez-nous
          </h1>

          <ContactInfo />

          <ContactForm
            emailjsConfig={emailjsConfig}
            setShowConfig={setShowConfig}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;