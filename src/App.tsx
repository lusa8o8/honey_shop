/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ethos from "./components/Ethos";
import ProductGrid from "./components/ProductGrid";
import SocialHub from "./components/SocialHub";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Ethos />
        <ProductGrid />
        <SocialHub />
      </main>
      <Footer />
    </div>
  );
}
