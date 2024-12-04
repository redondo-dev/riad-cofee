import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface EmailJSConfigProps {
  emailjsConfig: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  };
  setEmailjsConfig: (config: {
    serviceId: string;
    templateId: string;
    publicKey: string;
  }) => void;
  setShowConfig: (show: boolean) => void;
}

const EmailJSConfig = ({
  emailjsConfig,
  setEmailjsConfig,
  setShowConfig,
}: EmailJSConfigProps) => {
  const { toast } = useToast();

  const saveConfig = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const config = {
      serviceId: formData.get("serviceId") as string,
      templateId: formData.get("templateId") as string,
      publicKey: formData.get("publicKey") as string,
    };
    localStorage.setItem("emailjs-config", JSON.stringify(config));
    setEmailjsConfig(config);
    setShowConfig(false);
    toast({
      title: "Configuration sauvegardée",
      description: "Vos paramètres EmailJS ont été enregistrés.",
    });
  };

  return (
    <div className="mb-8 p-4 bg-white rounded-lg shadow">
      <h2 className="text-xl font-serif text-coffee-dark mb-4">
        Configuration EmailJS
      </h2>
      <form onSubmit={saveConfig} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Service ID
          </label>
          <input
            type="text"
            name="serviceId"
            defaultValue={emailjsConfig.serviceId}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee focus:ring-coffee"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Template ID
          </label>
          <input
            type="text"
            name="templateId"
            defaultValue={emailjsConfig.templateId}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee focus:ring-coffee"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Public Key
          </label>
          <input
            type="text"
            name="publicKey"
            defaultValue={emailjsConfig.publicKey}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-coffee focus:ring-coffee"
            required
          />
        </div>
        <div className="flex justify-end space-x-2">
          {emailjsConfig.publicKey && (
            <Button
              type="button"
              variant="outline"
              onClick={() => setShowConfig(false)}
            >
              Annuler
            </Button>
          )}
          <Button
            type="submit"
            className="bg-coffee hover:bg-coffee-dark text-white"
          >
            Sauvegarder
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EmailJSConfig;