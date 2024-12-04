import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";

const pastries = [
  {
    id: 1,
    name: "Croissant Parisien",
    description: "Croissant pur beurre, feuilleté à la perfection",
    price: "2.80€",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Recette traditionnelle française"
  },
  {
    id: 2,
    name: "Pain au Chocolat",
    description: "Viennoiserie garnie de deux barres de chocolat noir",
    price: "3.00€",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Chocolat belge sélectionné"
  },
  {
    id: 3,
    name: "Éclair au Café",
    description: "Pâte à choux, crème pâtissière au café, glaçage café",
    price: "4.50€",
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Café arabica sélectionné"
  },
  {
    id: 4,
    name: "Tarte aux Fruits Rouges",
    description: "Pâte sablée, crème d'amande, fruits rouges frais",
    price: "5.20€",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Fruits de saison"
  },
  {
    id: 5,
    name: "Millefeuille Vanille",
    description: "Trois couches de pâte feuilletée, crème vanille bourbon",
    price: "5.50€",
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Vanille de Madagascar"
  },
  {
    id: 6,
    name: "Paris-Brest",
    description: "Couronne de pâte à choux, crème pralinée maison",
    price: "5.80€",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Noisettes du Piémont"
  },
  {
    id: 7,
    name: "Macaron Assorti",
    description: "Assortiment de macarons aux saveurs variées",
    price: "2.20€",
    image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Recette maison"
  },
  {
    id: 8,
    name: "Tarte au Citron Meringuée",
    description: "Pâte sablée, crème au citron, meringue italienne",
    price: "4.80€",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    origin: "Citrons de Menton"
  }
];

const Pastries = () => {
  return (
    <div className="min-h-screen bg-cream-light">
      <Navbar />
      <div className="pt-24 px-4 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif text-coffee text-center mb-12">
          Nos Pâtisseries
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pastries.map((pastry, index) => (
            <motion.div
              key={pastry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={pastry.image}
                  alt={pastry.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-coffee text-white px-3 py-1 rounded-full">
                  {pastry.price}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-serif text-coffee mb-2">{pastry.name}</h3>
                <p className="text-coffee-dark/80 mb-4">{pastry.description}</p>
                <p className="text-sm text-coffee-dark/60 italic">Origine: {pastry.origin}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pastries;