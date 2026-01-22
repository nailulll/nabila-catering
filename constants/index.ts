import type {
  MenuItem,
  PricingPlan,
  Testimonial,
  ContactLink,
  MenuLink,
  SocialLink,
} from "@/types";

// Contact information
export const WHATSAPP_URL = "https://wa.me/6283117656712";
export const BUSINESS_EMAIL = "nest.hub.studios@gmail.com";
export const BUSINESS_PHONE = "+62 831 1765 6712";
export const BUSINESS_ADDRESS =
  "RT 08 RW 03, Desa Baregbeg, Kec. Lakbok, Kabupaten Ciamis, Jawa Barat 46385";

// NOTE: Update these URLs with actual social media profiles
export const INSTAGRAM_URL = "https://www.instagram.com";
export const FACEBOOK_URL = "https://www.facebook.com";

export const menuLinks: MenuLink[] = [
  {
    name: "Beranda",
    link: "#top",
  },
  {
    name: "Harga",
    link: "#pricing",
  },
  {
    name: "Kontak",
    link: "#contact",
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    link: INSTAGRAM_URL,
  },
  {
    name: "Facebook",
    link: FACEBOOK_URL,
  },
  {
    name: "Blog",
    link: "https://",
  },
];

export const menus: MenuItem[] = [
  {
    title: "Gorengan",
    category: "Rp 1.000 - Rp 3.000",
    src: "/gorengan.jpg",
  },
  {
    title: "Nasi Ayam Bakar",
    category: "Rp 12.000 - Rp 22.000",
    src: "/nasi-ayam-bakar.jpg",
  },
  {
    title: "Opor Ayam",
    category: "Rp 15.000 - Rp 27.000",
    src: "/opor.jpg",
  },
  {
    title: "Salad",
    category: "Rp 9.000 - Rp 15.000",
    src: "/salad.jpg",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: {
      name: "Paket Dasar",
      question: "Harga bisa berubah tergantung pilihan menu",
      active: true,
    },
    description:
      "Cocok untuk acara syukuran atau kumpul keluarga kecil. Menu bisa dipilih sesuai selera, memberikan fleksibilitas sesuai kebutuhan.",
    pricing: "Rp 12.000 - Rp 15.000",
    features: [
      {
        name: "Menu Utama Sesuai Permintaan",
        active: true,
      },
      {
        name: "Tempat Makanan Kecil atau Sedang",
        active: true,
      },
      {
        name: "Makanan Ringan Sesuai Permintaan",
        active: false,
        question: "Harga bisa berubah tergantung pilihan menu",
      },
    ],
    button: {
      text: "Pesan Sekarang",
      link: "",
      active: true,
    },
  },
  {
    title: {
      name: "Paket Lanjutan",
      question: "Harga bisa berubah tergantung pilihan menu",
      active: true,
    },
    description:
      "Ideal untuk perayaan besar atau acara spesial. Menyediakan variasi menu yang lebih luas dan porsi lebih besar untuk banyak tamu.",
    pricing: "Rp 23.000 - Rp 35.000",
    features: [
      {
        name: "Menu Utama Sesuai Permintaan",
        active: true,
      },
      {
        name: "Tempat Makanan Kecil atau Sedang",
        active: true,
      },
      {
        name: "Makanan Ringan Sesuai Permintaan",
        active: true,
      },
      {
        name: "Minuman Sesuai Permintaan",
        active: true,
      },
    ],
    button: {
      text: "Pesan Sekarang",
      link: "",
      active: true,
    },
  },
  {
    title: {
      name: "Paket Kustom",
      active: false,
    },
    description:
      "Sesuaikan setiap detail sesuai keinginan! Dari pilihan menu hingga porsi, kami siap membuat catering yang sempurna untukmu.",
    pricing: "_",
    features: [
      {
        name: "Berbagai Menu Sesuai Permintaan",
        active: false,
      },
      {
        name: "Tempat Makanan Besar atau Sedang",
        active: false,
      },
      {
        name: "Menu Utama Sesuai Permintaan",
        active: false,
      },
      {
        name: "Minuman Sesuai Permintaan",
        active: false,
      },
      {
        name: "Makanan Ringan Sesuai Permintaan",
        active: false,
      },
    ],
    button: {
      text: "Hubungi Kami",
      link: "",
      active: false,
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Makanannya enak banget, porsinya pas, dan selalu datang tepat waktu. Ayam bakar sambal matahnya juara banget!",
    name: "Budi",
    title: "Jakarta Barat",
  },
  {
    quote:
      "Aku suka fleksibilitasnya. Mau ubah menu atau tambah porsi, semuanya gampang diatur. Recommended banget!",
    name: "Tia",
    title: "Jakarta Barat",
  },
  {
    quote:
      "Udah langganan catering ini buat acara keluarga. Makanannya selalu fresh dan bumbunya pas banget. Semua tamu suka!",
    name: "Edgar Allan Poe",
    title: "Jakarta Selatan",
  },
];

export const contactLinks: ContactLink[] = [
  {
    name: BUSINESS_ADDRESS,
    icon: "/ic_location.svg",
  },
  {
    name: BUSINESS_PHONE,
    icon: "/ic_baseline-phone.svg",
  },
  {
    name: BUSINESS_EMAIL,
    icon: "/ic_baseline-email.svg",
  },
];
