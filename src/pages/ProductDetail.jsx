import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Star, ShoppingCart, ArrowLeft, Check, Truck, Shield } from "lucide-react";
import { getProductById, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { useCart } from "../App";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const product = getProductById(id);

  const [selectedVariant, setSelectedVariant] = useState(
    product ? product.variants[0] : null
  );
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <section className="section">
        <div className="empty-cart">
          <h2>Produk tidak ditemukan</h2>
          <Link to="/products" className="btn btn-primary">
            Kembali ke Produk
          </Link>
        </div>
      </section>
    );
  }

  const formatRupiah = (num) => "Rp " + num.toLocaleString("id-ID");

  const handleAddToCart = () => {
    addToCart(product, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <section className="section">
      <button className="btn-back" onClick={() => navigate(-1)}>
        <ArrowLeft size={18} /> Kembali
      </button>

      <div className="detail-layout">
        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1>{product.name}</h1>

          <div className="detail-rating">
            <Star size={16} fill="#f59e0b" stroke="#f59e0b" />
            <span>{product.rating}</span>
            <span className="sold">• {product.sold} terjual</span>
          </div>

          <div className="detail-price">
            {formatRupiah(selectedVariant.price)}
          </div>

          <p className="detail-description">{product.description}</p>

          <div className="variant-section">
            <h3>Pilih Varian</h3>
            <div className="variant-options">
              {product.variants.map((v) => (
                <button
                  key={v.id}
                  className={`variant-btn ${
                    selectedVariant.id === v.id ? "active" : ""
                  }`}
                  onClick={() => setSelectedVariant(v)}
                >
                  {v.label}
                  <span className="variant-price">{formatRupiah(v.price)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="detail-actions">
            <button
              className={`btn ${added ? "btn-success" : "btn-primary"} btn-block`}
              onClick={handleAddToCart}
            >
              {added ? (
                <>
                  <Check size={18} /> Ditambahkan!
                </>
              ) : (
                <>
                  <ShoppingCart size={18} /> Tambah ke Keranjang
                </>
              )}
            </button>
          </div>

          <div className="detail-perks">
            <div className="perk">
              <Truck size={20} />
              <div>
                <strong>Gratis Ongkir</strong>
                <span>Min. belanja Rp 200.000</span>
              </div>
            </div>
            <div className="perk">
              <Shield size={20} />
              <div>
                <strong>Garansi Kualitas</strong>
                <span>100% original</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <div className="related-section">
          <div className="section-header">
            <h2>Produk Serupa</h2>
            <p>Dari kategori {product.category}</p>
          </div>
          <div className="product-grid">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
