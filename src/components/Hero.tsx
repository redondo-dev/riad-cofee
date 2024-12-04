import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1442512595331-e89e73853f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"
        style={{ filter: 'brightness(0.7)' }}
      />
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-cream-light mb-6">
            Café Riad Marseille
          </h1>
          <p className="text-xl md:text-2xl text-cream-light mb-8">
            Une expérience café unique au cœur de Marseille
          </p>
          <Link
            to="/coffees"
            className="inline-block bg-coffee text-cream-light px-8 py-3 rounded-full text-lg font-semibold hover:bg-coffee-dark transition-colors"
          >
            Découvrir nos cafés
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;