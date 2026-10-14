export const categories = [
  { id: 1, name: "Benih", icon: "Sprout", desc: "Benih unggul berkualitas" },
  { id: 2, name: "Pupuk", icon: "Leaf", desc: "Nutrisi tanaman terbaik" },
  { id: 3, name: "Alat Tani", icon: "Shovel", desc: "Peralatan modern & awet" },
  { id: 4, name: "Pestisida", icon: "Bug", desc: "Pengendali hama aman" },
  { id: 5, name: "Irigasi", icon: "Droplets", desc: "Sistem pengairan efisien" },
];

export const products = [
  {
    id: 1,
    name: "Benih Padi IR64",
    price: 45000,
    category: "Benih",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
    rating: 4.8,
    sold: 320,
    description:
      "Benih padi IR64 unggul dengan daya tumbuh tinggi, tahan terhadap hama wereng, dan menghasilkan bulir padi yang pulen. Cocok untuk lahan sawah irigasi maupun tadah hujan.",
    variants: [
      { id: "v1", label: "Kemasan 1 kg", price: 45000 },
      { id: "v2", label: "Kemasan 5 kg", price: 200000 },
      { id: "v3", label: "Kemasan 10 kg", price: 380000 },
    ],
  },
  {
    id: 2,
    name: "Benih Jagung Manis",
    price: 35000,
    category: "Benih",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=800",
    rating: 4.7,
    sold: 210,
    description:
      "Benih jagung manis dengan rasa legit dan kandungan gula tinggi. Umur panen sekitar 70 hari setelah tanam.",
    variants: [
      { id: "v1", label: "Kemasan 250 g", price: 35000 },
      { id: "v2", label: "Kemasan 500 g", price: 65000 },
      { id: "v3", label: "Kemasan 1 kg", price: 120000 },
    ],
  },
  {
    id: 3,
    name: "Pupuk NPK 16-16-16",
    price: 120000,
    category: "Pupuk",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800",
    rating: 4.9,
    sold: 540,
    description:
      "Pupuk majemuk NPK 16-16-16 dengan keseimbangan nitrogen, fosfor, dan kalium untuk pertumbuhan tanaman yang optimal.",
    variants: [
      { id: "v1", label: "Karung 5 kg", price: 120000 },
      { id: "v2", label: "Karung 10 kg", price: 225000 },
      { id: "v3", label: "Karung 25 kg", price: 540000 },
    ],
  },
  {
    id: 4,
    name: "Pupuk Kompos Organik",
    price: 55000,
    category: "Pupuk",
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800",
    rating: 4.6,
    sold: 180,
    description:
      "Pupuk kompos organik dari bahan alami, aman untuk tanaman dan lingkungan. Cocok untuk semua jenis tanaman.",
    variants: [
      { id: "v1", label: "Karung 5 kg", price: 55000 },
      { id: "v2", label: "Karung 10 kg", price: 100000 },
    ],
  },
  {
    id: 5,
    name: "Cangkul Baja Premium",
    price: 95000,
    category: "Alat Tani",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800",
    rating: 4.7,
    sold: 145,
    description:
      "Cangkul dengan mata baja karbon tinggi, tajam dan tahan lama. Gagang kayu keras yang nyaman digenggam.",
    variants: [
      { id: "v1", label: "Standar", price: 95000 },
      { id: "v2", label: "Premium (baja tebal)", price: 145000 },
    ],
  },
  {
    id: 6,
    name: "Sprayer Elektrik 16L",
    price: 350000,
    category: "Alat Tani",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    rating: 4.8,
    sold: 90,
    description:
      "Sprayer elektrik kapasitas 16 liter dengan baterai rechargeable. Dilengkapi nozzle adjustable dan tali bahu empuk.",
    variants: [
      { id: "v1", label: "Standar 12V", price: 350000 },
      { id: "v2", label: "Pro 16V (baterai besar)", price: 480000 },
    ],
  },
  {
    id: 7,
    name: "Pestisida Organik 1L",
    price: 75000,
    category: "Pestisida",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800",
    rating: 4.5,
    sold: 130,
    description:
      "Pestisida organik berbahan ekstrak tanaman, aman untuk lingkungan dan tidak meninggalkan residu kimia.",
    variants: [
      { id: "v1", label: "Botol 500 ml", price: 75000 },
      { id: "v2", label: "Botol 1 L", price: 140000 },
    ],
  },
  {
    id: 8,
    name: "Selang Irigasi 50m",
    price: 185000,
    category: "Irigasi",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    rating: 4.7,
    sold: 75,
    description:
      "Selang irigasi fleksibel panjang 50 meter, tahan UV dan tidak mudah pecah. Cocok untuk sistem irigasi tetes.",
    variants: [
      { id: "v1", label: "Diameter 1/2 inch", price: 185000 },
      { id: "v2", label: "Diameter 3/4 inch", price: 240000 },
    ],
  },
];

export const getProductById = (id) => products.find((p) => p.id === Number(id));
