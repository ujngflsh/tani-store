import { useSearchParams, Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products, categories } from "../data/products";
import { X } from "lucide-react";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";
  const category = searchParams.get("category") || "";

  let filtered = products;

  if (category) {
    filtered = filtered.filter((p) => p.category === category);
  }

  if (query) {
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.category.toLowerCase().includes(query.toLowerCase())
    );
  }

  const clearSearch = () => {
    searchParams.delete("q");
    setSearchParams(searchParams);
  };

  const clearCategory = () => {
    searchParams.delete("category");
    setSearchParams(searchParams);
  };

  const clearAll = () => {
    setSearchParams({});
  };

  const getTitle = () => {
    if (query && category) return `"${query}" di ${category}`;
    if (query) return `Hasil Pencarian "${query}"`;
    if (category) return `Kategori ${category}`;
    return "Semua Produk";
  };

  return (
    <section className="section">
      {/* Filter chips */}
      <div className="filter-bar">
        <Link
          to="/products"
          className={`filter-chip ${!category && !query ? "active" : ""}`}
        >
          Semua
        </Link>
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/products?category=${encodeURIComponent(cat.name)}`}
            className={`filter-chip ${category === cat.name ? "active" : ""}`}
          >
            {cat.name}
          </Link>
        ))}
      </div>

      <div className="section-header">
        <h2>{getTitle()}</h2>
        <p>{filtered.length} produk ditemukan</p>
        {(query || category) && (
          <div className="active-filters">
            {query && (
              <button className="btn-clear-search" onClick={clearSearch}>
                <X size={14} /> "{query}"
              </button>
            )}
            {category && (
              <button className="btn-clear-search" onClick={clearCategory}>
                <X size={14} /> {category}
              </button>
            )}
            {query && category && (
              <button className="btn-clear-search" onClick={clearAll}>
                Hapus semua
              </button>
            )}
          </div>
        )}
      </div>

      {filtered.length === 0 ? (
        <div className="empty-cart">
          <h2>Produk tidak ditemukan</h2>
          <p>Coba kata kunci atau kategori lain ya.</p>
          <Link to="/products" className="btn btn-primary">
            Lihat Semua Produk
          </Link>
        </div>
      ) : (
        <div className="product-grid">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
