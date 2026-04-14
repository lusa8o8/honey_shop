import { motion } from "motion/react";
import { ShoppingCart, Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="text-2xl font-bold font-serif text-stone-900 flex items-center">
        <span>The Gilded Editorial</span>
      </div>
      <nav className="hidden md:flex items-center space-x-8">
        <a className="text-stone-900 border-b-2 border-gold pb-1 tracking-widest font-medium transition-colors duration-300" href="#">Shop</a>
        <a className="text-stone-600 font-medium tracking-widest hover:text-gold transition-colors duration-300" href="#">About</a>
        <a className="text-stone-600 font-medium tracking-widest hover:text-gold transition-colors duration-300" href="#">Honey Types</a>
      </nav>
      <div className="flex items-center space-x-4">
        <button className="text-gold hover:text-amber-600 transition-colors duration-300 active:scale-95">
          <ShoppingCart className="w-6 h-6" />
        </button>
        <button className="md:hidden text-stone-900">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
