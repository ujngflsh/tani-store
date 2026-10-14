import { Link } from "react-router-dom";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useCart } from "../App";

export default function Cart() {
  const { cart, updateQty, removeFromCart, totalPrice } = useCart();
  const formatRupiah = (num) => "Rp " + num.toLocaleString("id-ID");

  if (cart.length === 0) {
    return (
      <section className="section">
        <div className="empty-cart">
          <ShoppingBag size={64} />
          <h2>Keranjang Kosong</h2>
          <p>Belum ada produk di keranjang kamu.</p>
          <Link to="/products" className="btn btn-primary">
            Mulai Belanja
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-header">
        <h2>Keranjang Belanja</h2>
        <p>{cart.length} produk di keranjang</p>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.cartKey} className="cart-item">
              <Link to={`/product/${item.id}`}>
                <img src={item.image} alt={item.name} />
              </Link>
              <div className="cart-item-info">
                <Link to={`/product/${item.id}`}>
                  <h3>{item.name}</h3>
                </Link>
                <p className="cart-item-variant">{item.variantLabel}</p>
                <p className="cart-item-price">{formatRupiah(item.price)}</p>
              </div>
              <div className="cart-item-qty">
                <button onClick={() => updateQty(item.cartKey, item.qty - 1)}>
                  <Minus size={14} />
                </button>
                <span>{item.qty}</span>
                <button onClick={() => updateQty(item.cartKey, item.qty + 1)}>
                  <Plus size={14} />
                </button>
              </div>
              <div className="cart-item-total">
                {formatRupiah(item.price * item.qty)}
              </div>
              <button
                className="btn-remove"
                onClick={() => removeFromCart(item.cartKey)}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h3>Ringkasan Belanja</h3>
          <div className="summary-row">
            <span>Total Item</span>
            <span>{cart.reduce((s, i) => s + i.qty, 0)}</span>
          </div>
          <div className="summary-row total">
            <span>Total Harga</span>
            <span>{formatRupiah(totalPrice)}</span>
          </div>
          <button className="btn btn-primary btn-block">Checkout</button>
        </div>
      </div>
    </section>
  );
}
