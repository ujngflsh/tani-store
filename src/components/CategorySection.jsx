import { Link } from "react-router-dom";
import { Sprout, Leaf, Shovel, Bug, Droplets } from "lucide-react";
import { categories, products } from "../data/products";

const iconMap = { Sprout, Leaf, Shovel, Bug, Droplets };

export default function CategorySection() {
  return (
    <section className="section" id="kategori">
      <div className="section-header">
        <h2>Kategori Produk</h2>
        <p>Pilih kategori sesuai kebutuhan bertani kamu</p>
      </div>
      <div className="category-grid">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon];
          const count = products.filter((p) => p.category === cat.name).length;
          return (
            <Link
              key={cat.id}
              to={`/products?category=${encodeURIComponent(cat.name)}`}
              className="category-card"
            >
              <div className="category-icon">
                <Icon size={32} />
              </div>
              <h3>{cat.name}</h3>
              <p>{cat.desc}</p>
              <span className="category-count">{count} produk</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
