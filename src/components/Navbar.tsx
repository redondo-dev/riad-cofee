import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-cream-light/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-serif font-bold text-coffee">Café Riad Marseille</Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-coffee-dark hover:text-coffee transition-colors">Accueil</Link>
            <Link to="/coffees" className="text-coffee-dark hover:text-coffee transition-colors">Nos Cafés</Link>
            <Link to="/pastries" className="text-coffee-dark hover:text-coffee transition-colors">Nos Pâtisseries</Link>
            <Link to="/reviews" className="text-coffee-dark hover:text-coffee transition-colors">Avis Clients</Link>
            <Link to="/contact" className="text-coffee-dark hover:text-coffee transition-colors">Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-coffee-dark hover:text-coffee transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block px-3 py-2 text-coffee-dark hover:text-coffee transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/coffees"
                className="block px-3 py-2 text-coffee-dark hover:text-coffee transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Nos Cafés
              </Link>
              <Link
                to="/pastries"
                className="block px-3 py-2 text-coffee-dark hover:text-coffee transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Nos Pâtisseries
              </Link>
              <Link
                to="/reviews"
                className="block px-3 py-2 text-coffee-dark hover:text-coffee transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Avis Clients
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-coffee-dark hover:text-coffee transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;