import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-start gap-8 bg-stone-100">
      <div className="space-y-6 max-w-sm">
        <div className="text-xl font-bold font-serif text-stone-900">The Gilded Editorial</div>
        <p className="font-inter text-stone-500 text-sm leading-relaxed">
          © 2024 The Gilded Editorial. Artisanal Honey from Zambia.
        </p>
        <div className="flex items-center space-x-4">
          <ShieldCheck className="text-gold w-6 h-6" />
          <span className="font-inter text-xs font-bold uppercase tracking-widest text-obsidian">Ethically Sourced</span>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
        <div className="flex flex-col space-y-4">
          <p className="font-inter font-bold text-xs uppercase tracking-widest text-obsidian">Navigation</p>
          <a className="text-stone-500 hover:underline decoration-gold underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Shop</a>
          <a className="text-stone-500 hover:underline decoration-gold underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">About</a>
          <a className="text-stone-500 hover:underline decoration-gold underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Honey Types</a>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="font-inter font-bold text-xs uppercase tracking-widest text-obsidian">Connect</p>
          <a className="text-stone-500 hover:underline decoration-gold underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">YouTube</a>
          <a className="text-stone-500 hover:underline decoration-gold underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Facebook</a>
          <a className="text-stone-500 hover:underline decoration-gold underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Instagram</a>
          <a className="text-stone-500 hover:underline decoration-gold underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">TikTok</a>
        </div>
        <div className="flex flex-col space-y-4">
          <p className="font-inter font-bold text-xs uppercase tracking-widest text-obsidian">Support</p>
          <a className="text-stone-500 hover:underline decoration-gold underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Contact Us</a>
          <a className="text-stone-500 hover:underline decoration-gold underline-offset-4 transition-opacity opacity-80 hover:opacity-100" href="#">Shipping Policy</a>
        </div>
      </div>
    </footer>
  );
}
