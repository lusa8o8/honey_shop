import { motion } from "motion/react";
import { Youtube, Facebook, Instagram, Music2 } from "lucide-react";

const socials = [
  { name: "YouTube", handle: "@HoneyShopZambia", icon: Youtube },
  { name: "Facebook", handle: "Honey Shop Zambia", icon: Facebook },
  { name: "Instagram", handle: "@honeyshopzambia", icon: Instagram },
  { name: "TikTok", handle: "@honeyshop", icon: Music2 },
];

export default function SocialHub() {
  return (
    <section className="bg-obsidian py-24 px-8 md:px-20 text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-cooper text-[15rem] md:text-[20rem] opacity-[0.03] whitespace-nowrap select-none pointer-events-none">
        SOCIAL HUB
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-cooper text-5xl mb-4"
          >
            Join the Colony
          </motion.h2>
          <p className="font-inter text-white/60 tracking-widest uppercase text-sm">Follow our journey from hive to heart</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {socials.map((social, idx) => (
            <motion.a 
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              href="#"
              className="group flex flex-col items-center p-8 rounded-xl bg-white/5 hover:bg-gold hover:text-obsidian transition-all duration-500"
            >
              <social.icon className="w-10 h-10 mb-4" />
              <span className="font-bold text-lg mb-1">{social.name}</span>
              <span className="text-sm opacity-60 group-hover:opacity-100">{social.handle}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
