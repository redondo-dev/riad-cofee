import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductSection from "../components/ProductSection";
import ReviewSection from "../components/ReviewSection";
import ContactSection from "../components/ContactSection";

const coffees = [
  {
    title: "Espresso Signature",
    description: "Notre mélange signature, torréfié avec soin pour un goût intense et équilibré.",
    image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Cappuccino Crémeux",
    description: "Un espresso parfait surmonté d'une mousse de lait soyeuse et aérienne.",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Café Filtre",
    description: "Un café doux et aromatique, préparé avec notre méthode de filtration artisanale.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const pastries = [
  {
    title: "Croissant Artisanal",
    description: "Un croissant pur beurre, croustillant et feuilleté à souhait.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Tarte aux Fruits",
    description: "Une tarte généreuse garnie de fruits frais de saison.",
    image: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Pain au Chocolat",
    description: "Notre version du classique français, avec un chocolat noir d'exception.",
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="coffee">
        <ProductSection title="Nos Cafés" products={coffees} />
      </section>
      <section id="pastries">
        <ProductSection title="Nos Pâtisseries" products={pastries} />
      </section>
      <ReviewSection />
      <ContactSection />
    </div>
  );
};

export default Index;