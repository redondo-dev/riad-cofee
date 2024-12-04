import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const coffees = [
  {
    id: 1,
    name: "Espresso Signature",
    description: "Notre blend signature, torréfié avec soin pour un goût intense et équilibré",
    price: "3.50€",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Mélange d'Arabica d'Éthiopie et du Brésil"
  },
  {
    id: 2,
    name: "Cappuccino Crémeux",
    description: "Un espresso parfait surmonté d'une mousse de lait soyeuse et aérienne",
    price: "4.50€",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Arabica colombien"
  },
  {
    id: 3,
    name: "Latte Macchiato",
    description: "Du lait chaud délicatement tacheté d'espresso et couronné de mousse de lait",
    price: "4.80€",
    image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Mélange d'Arabica du Guatemala"
  },
  {
    id: 4,
    name: "Café Viennois",
    description: "Un café long surmonté de crème chantilly maison et de copeaux de chocolat",
    price: "5.20€",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Arabica des Alpes autrichiennes"
  },
  {
    id: 5,
    name: "Café Liégeois",
    description: "Un délicieux mélange de café glacé, glace café et crème chantilly",
    price: "6.00€",
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Arabica belge"
  },
  {
    id: 6,
    name: "Flat White",
    description: "Double shot d'espresso avec du lait micro-moussé pour une texture veloutée",
    price: "4.50€",
    image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Arabica australien"
  },
  {
    id: 7,
    name: "Mocha",
    description: "L'alliance parfaite entre notre espresso, du chocolat noir fondu et du lait moussé",
    price: "5.50€",
    image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Mélange spécial Amérique du Sud"
  },
  {
    id: 8,
    name: "Americano",
    description: "Un espresso allongé d'eau chaude pour un café doux et aromatique",
    price: "3.80€",
    image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Arabica du Costa Rica"
  },
  {
    id: 9,
    name: "Affogato",
    description: "Une boule de glace vanille noyée dans un shot d'espresso fumant",
    price: "5.80€",
    image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Espresso italien"
  },
  {
    id: 10,
    name: "Cold Brew",
    description: "Infusé à froid pendant 12h pour un goût doux et rafraîchissant",
    price: "5.00€",
    image: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Arabica du Costa Rica"
  },
  {
    id: 11,
    name: "Ristretto",
    description: "Version concentrée de l'espresso, plus courte et plus intense",
    price: "3.30€",
    image: "https://images.unsplash.com/photo-1501747315-124a0eaca060?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Arabica italien"
  },
  {
    id: 12,
    name: "Caramel Macchiato",
    description: "Vanille, lait moussé, espresso et caramel pour une douceur unique",
    price: "5.50€",
    image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Mélange signature maison"
  }
];

const Coffees = () => {
  return (
    <div className="min-h-screen bg-cream-light">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-coffee text-center mb-12">
          Nos Cafés
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coffees.map((coffee, index) => (
            <motion.div
              key={coffee.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={coffee.image}
                  alt={coffee.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-coffee text-white px-3 py-1 rounded-full">
                  {coffee.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-coffee mb-2">{coffee.name}</h3>
                <p className="text-coffee-dark/80 mb-4">{coffee.description}</p>
                <p className="text-sm text-coffee-dark/60 italic">Origine: {coffee.origin}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Coffees;
