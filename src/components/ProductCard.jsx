import { Link } from "react-router-dom";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "../App";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const formatRupiah = (num) => "Rp " + num.toLocaleString("id-ID");

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-image">
        <img src={product.image} alt={product.name} />
        <span className="product-category">{product.category}</span>
      </Link>
      <div className="product-info">
        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <div className="product-rating">
          <Star size={14} fill="#f59e0b" stroke="#f59e0b" />
          <span>{product.rating}</span>
          <span className="sold">• {product.sold} terjual</span>
        </div>
        <div className="product-footer">
          <span className="product-price">{formatRupiah(product.price)}</span>
          <button className="btn-add" onClick={() => addToCart(product)}>
            <ShoppingCart size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
