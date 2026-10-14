import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Search, Sprout, X, Menu } from "lucide-react";
import { useCart } from "../App";
import { products } from "../data/products";

const Highlight = ({ text, query }) => {
  if (!query) return <>{text}</>;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return <>{text}</>;
  return (
    <>
      {text.slice(0, idx)}
      <mark>{text.slice(idx, idx + query.length)}</mark>
      {text.slice(idx + query.length)}
    </>
  );
};

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const location = useLocation();
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const wrapperRef = useRef(null);

  const formatRupiah = (num) => "Rp " + num.toLocaleString("id-ID");

  const results =
    query.trim().length > 0
      ? products
          .filter(
            (p) =>
              p.name.toLowerCase().includes(query.toLowerCase()) ||
              p.category.toLowerCase().includes(query.toLowerCase())
          )
          .slice(0, 6)
      : [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setQuery("");
    setShowResults(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const handleSelect = (product) => {
    setQuery("");
    setShowResults(false);
    setMobileOpen(false);
    navigate(`/product/${product.id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      const q = query.trim();
      setQuery("");
      setShowResults(false);
      setMobileOpen(false);
      navigate(`/products?q=${encodeURIComponent(q)}`);
    }
  };

  const handleKategoriClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    if (location.pathname === "/") {
      document.getElementById("kategori")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("kategori")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        {/* Logo — paling kiri */}
        <Link to="/" className="logo" onClick={() => setMobileOpen(false)}>
          <Sprout size={28} />
          <span>tani-store</span>
        </Link>

        {/* Search */}
        <div className="search-wrapper" ref={wrapperRef}>
          <form className="search-bar" onSubmit={handleSubmit}>
            <Search size={18} />
            <input
              type="text"
              placeholder="Cari benih, pupuk, alat tani..."
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShowResults(true);
              }}
              onFocus={() => setShowResults(true)}
            />
            {query && (
              <button
                type="button"
                className="search-clear"
                onClick={() => setQuery("")}
                aria-label="Clear"
              >
                <X size={16} />
              </button>
            )}
          </form>

          {showResults && query.trim().length > 0 && (
            <div className="search-results">
              {results.length === 0 ? (
                <div className="search-empty">
                  Tidak ada produk untuk "<b>{query}</b>"
                </div>
              ) : (
                <>
                  <div className="search-header">
                    {results.length} hasil untuk "{query}"
                  </div>
                  {results.map((p) => {
                    const minPrice = Math.min(...p.variants.map((v) => v.price));
                    return (
                      <button
                        key={p.id}
                        className="search-item"
                        onClick={() => handleSelect(p)}
                      >
                        <img src={p.image} alt={p.name} />
                        <div className="search-item-info">
                          <div className="search-item-name">
                            <Highlight text={p.name} query={query} />
                          </div>
                          <div className="search-item-meta">
                            <span className="search-item-cat">
                              <Highlight text={p.category} query={query} />
                            </span>
                            <span>Mulai {formatRupiah(minPrice)}</span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                  <div className="search-footer">
                    Tekan <b>Enter</b> untuk lihat semua
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Nav links */}
        <ul className={`nav-links ${mobileOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMobileOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) => (isActive ? "active" : "")}
              onClick={() => setMobileOpen(false)}
            >
              Produk
            </NavLink>
          </li>
          <li>
            <a href="#kategori" onClick={handleKategoriClick}>
              Kategori
            </a>
          </li>
        </ul>

        {/* Cart */}
        <Link to="/cart" className="cart-btn">
          <ShoppingCart size={22} />
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </Link>

        {/* Hamburger — paling kanan */}
        <button
          className="menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}
