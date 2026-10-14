import { Link } from "react-router-dom";
import { ArrowRight, Leaf } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-tag"><Leaf size={16} /> Solusi Pertanian Modern</span>
        <h1>Hasil Panen Maksimal, <span className="highlight">Harga Petani</span></h1>
        <p>
          Belanja benih, pupuk, alat tani, dan kebutuhan pertanian lainnya
          dengan kualitas terbaik langsung dari produsen terpercaya.
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="btn btn-primary">
            Belanja Sekarang <ArrowRight size={18} />
          </Link>
          <Link to="/products" className="btn btn-outline">
            Lihat Kategori
          </Link>
        </div>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800"
          alt="Pertanian"
        />
      </div>
    </section>
  );
}
