import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center px-8 md:px-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          alt="Golden Honey" 
          className="w-full h-full object-cover" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9vLS_Cu8eTIz1Jaci2IKJRcbWMzIcd_tbTAteEhXbNE65W1xyCzScU1dYKddXAXch5HCw-OGYsCaSXtHUja1hM6wvkSrk-dBqDmQUEDZf_UaQgq15HCmvJm6lSjNlq-LkarDerNHBDIFT9cbgBIKC6rTjRsozu39ORlheE-68LeJLJRN8dRTFBM5SfvEWbVqzeLpK_IiZECfmnOAI52-V65nppFugD2HXLLGFhvI6_LsExFTJTuHqFEwwBXZ-7hEjGLEU7YbRzGA"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      <div className="relative z-10 max-w-3xl">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-cooper text-6xl md:text-8xl text-white leading-tight tracking-tight mb-6"
        >
          Golden Zambian Harvest
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-inter text-xl md:text-2xl text-white/90 mb-10 max-w-xl leading-relaxed"
        >
          Pure, raw, and unfiltered honey delivered from our hives to your home.
        </motion.p>
        <motion.a 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          href="#"
          className="inline-block bg-gold hover:bg-amber-500 text-obsidian px-10 py-5 rounded-md font-bold text-lg transition-all duration-300 active:scale-95 honey-glow"
        >
          Shop Honey
        </motion.a>
      </div>
    </section>
  );
}
