import Hero from "../components/Hero";
import CategorySection from "../components/CategorySection";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      <CategorySection />
      <section className="section">
        <div className="section-header">
          <h2>Produk Unggulan</h2>
          <p>Produk terbaik pilihan petani Indonesia</p>
        </div>
        <div className="product-grid">
          {products.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <div className="section-cta">
          <Link to="/products" className="btn btn-primary">
            Lihat Semua Produk <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  );
}
