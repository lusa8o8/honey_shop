import { motion } from "motion/react";

const products = [
  {
    id: "01",
    name: "Wildflower",
    tag: "Light & Floral",
    price: "$24.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAw9SKAoJpHDVUn2WQ4xYIyp85XCtgvXzPFevsMHgO37DpZgv-Ac4uTzsYv1sY-4jIMCMYDyr-2QCCJ3lc3MB7dj8urReYyTVKJGR281AOvRKuYPKpxbwrZLPabsWwn6FDC4Hosezvp-uhgh9ustjHKP4jkszjQwSVo-6rRSGzjauCB3b39IYsoxRijrFBYJJA-s1kWiHCCoTqRRQPFqO4idGk6UjDXMh3avVb6Lk5gpUN0ekaZLBV8Led837qLwT2JkV4T3IczGIc",
    featured: false
  },
  {
    id: "02",
    name: "Forest",
    tag: "Rich & Woody",
    price: "$32.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA9eJxFgk-OM9ewC2tha7CM-MckRbtZHw4pZwQnuVOcY7Me7D0rnKtK3OXthkXXtp5zTdtaWlzwAHgBpIoXT9REVk0BdFgRbTRg7_E5VKQBT9RT7gln21UHlEeF41Z3KOxNrszDCnw2Yb_uKui8wjr8StGIEftIfJyXXjkK95RhWL45cfDyGaL4etKrRQGIZePk_Ef5W9jUH8m22r5ER77YyV0kR74sI-MzHosMUCtqP70Q7M-2ShZeXU1B465Tjyx0Kn3BA8g4rjk",
    featured: true,
    badge: "BEST SELLER"
  },
  {
    id: "03",
    name: "Acacia",
    tag: "Clear & Delicate",
    price: "$28.00",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbl-ank-N4LnDdaYCuvKrJ5kn4d4j-Crpgy-FjigRGAMYKJxRBLswxknKMczKq6gKDZcUKQeW6k0YdRZ7GPTm84m21D1Wx2tEhGFNSHMeCFu6eFrGumz21gjFH1zVVZrocNgYbFfZsqYfjBmSIvIw8B7PeIGamLXquBMJgTwEe4-77TlbEQEzYH1cEEHkklZKu6vD9_oowKM2q7WTolz0S747h7qhnrLklS9LlECeVgz9o2oaPwsaKTEe0RHYj1vNURtim9gScFGk",
    featured: false
  }
];

export default function ProductGrid() {
  return (
    <section className="py-24 px-8 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <span className="font-inter font-bold text-xs uppercase tracking-[0.2em] text-amber-700">The Collection</span>
          <h2 className="font-cooper text-5xl text-obsidian mt-2">Current Harvests</h2>
        </div>
        <p className="font-inter text-stone-500 max-w-sm mb-2">Explore our limited edition single-origin jars, harvested by hand under the Zambian sun.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product, idx) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`group relative bg-parchment p-2 rounded-xl transition-transform duration-500 hover:-translate-y-2 ${product.featured ? 'shadow-xl hover:-translate-y-4' : ''}`}
          >
            <div className={`relative overflow-hidden rounded-lg bg-stone-100 ${product.featured ? 'aspect-[4/5]' : 'aspect-square'}`}>
              <div className="absolute top-4 left-4 z-10 font-cooper text-6xl opacity-10 text-gold">{product.id}</div>
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-white p-8 rounded-b-lg mt-[-8px] relative z-20">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-cooper text-2xl text-obsidian">{product.name}</h3>
                  <p className="text-xs font-bold font-inter tracking-widest text-amber-600 uppercase">{product.tag}</p>
                </div>
                <span className="font-inter font-bold text-xl text-obsidian">{product.price}</span>
              </div>
              <button className={`w-full py-4 font-bold rounded-md transition-colors duration-300 active:scale-95 ${product.featured ? 'bg-obsidian text-white hover:bg-stone-800' : 'border-2 border-gold text-obsidian hover:bg-gold'}`}>
                Add to Cart
              </button>
            </div>
            {product.badge && (
              <div className="absolute -top-4 -right-4 bg-gold text-obsidian font-bold px-4 py-2 rounded-full text-xs tracking-tighter shadow-lg rotate-12">
                {product.badge}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
