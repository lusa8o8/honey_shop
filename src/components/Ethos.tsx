import { motion } from "motion/react";

export default function Ethos() {
  return (
    <section className="bg-parchment py-24 px-8 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <span className="font-inter font-bold text-xs uppercase tracking-[0.2em] text-amber-700">The Alchemy of Nature</span>
          <h2 className="font-cooper text-4xl md:text-5xl text-obsidian leading-tight">Artisanal craft meets the wild spirit of Zambia.</h2>
          <p className="font-inter text-lg leading-relaxed text-obsidian/80">
            Our honey is more than a sweetener; it’s a time capsule of the Zambian landscape. Each harvest reflects the specific blooms of the season, from the deep forests to the wildflower meadows. We preserve the pollen, the propolis, and the soul of the hive.
          </p>
          <div className="flex items-center space-x-4 pt-4">
            <div className="w-12 h-[2px] bg-gold"></div>
            <span className="font-inter font-bold text-sm tracking-widest text-obsidian uppercase">The Gilded Standard</span>
          </div>
        </motion.div>
        
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, rotate: 5, scale: 0.95 }}
            whileInView={{ opacity: 1, rotate: 2, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl"
          >
            <img 
              alt="Beekeeping" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChY_T-8RYQC3rgGRXWm6bhlgK4aCvJdnerc1XzR7OgEHCTLxsoIcFceBnUDdUgBuo3_zvmSnd58jbC-67HdGxGI9VDunFkmumPT-3vKUlb_wtpGUg66edRSeKlQQuxDnJN-u6ZiiJ6DHJa_Qr8vuBn9UpruMSmlzctSVR6PUG_nNYRLDiu6jQtwqV-sPIb-cUE2BQF94Z-0Prr3EfuQbBp3jH8X0NB7mm18Hf9kfvYmqx-zY7M1NSnRfdGNoLPRnZx13tydMq5Xqw"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-8 -left-8 bg-white p-8 rounded-lg honey-glow max-w-xs -rotate-3 hidden md:block"
          >
            <p className="font-inter italic text-obsidian/70">"A true editorial experience for the palate, bringing the richness of the hive directly to your kitchen."</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
