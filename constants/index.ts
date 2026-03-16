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
    title: "Gorengan Renyah",
    category: "Mulai Rp 1.000",
    src: "/gorengan.jpg",
  },
  {
    title: "Nasi Ayam Bakar",
    category: "Mulai Rp 12.000",
    src: "/nasi-ayam-bakar.jpg",
  },
  {
    title: "Nasi Kuning Tumpeng",
    category: "Mulai Rp 100.000",
    src: "/tumpeng.png",
  },
  {
    title: "Paket Nasi Bulat",
    category: "Mulai Rp 15.000",
    src: "/nasibulat.png",
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    title: {
      name: "Paket Harian",
      question: "Harga bisa berubah tergantung pilihan menu",
      active: true,
    },
    description:
      "Pas untuk syukuran, arisan, atau makan siang kantor. Porsi terjangkau dengan cita rasa rumahan yang bikin nagih.",
    pricing: "Rp 12.000 - Rp 15.000",
    features: [
      {
        name: "Menu utama pilihan Anda",
        active: true,
      },
      {
        name: "Wadah makan standar",
        active: true,
      },
      {
        name: "Camilan pendamping",
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
      name: "Paket Acara",
      question: "Harga bisa berubah tergantung pilihan menu",
      active: true,
    },
    description:
      "Pilihan terbaik untuk hajatan, pernikahan, atau reuni keluarga. Menu lengkap, rasa memuaskan, tamu pun senang.",
    pricing: "Rp 23.000 - Rp 35.000",
    features: [
      {
        name: "Menu utama pilihan Anda",
        active: true,
      },
      {
        name: "Wadah makan standar",
        active: true,
      },
      {
        name: "Camilan pendamping",
        active: true,
      },
      {
        name: "Minuman pilihan",
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
      "Acara unik butuh sentuhan spesial. Ceritakan kebutuhan Anda — kami susunkan menu dan paket yang pas dari nol.",
    pricing: "Sesuai kebutuhan",
    features: [
      {
        name: "Menu bebas pilihan",
        active: false,
      },
      {
        name: "Porsi & wadah fleksibel",
        active: false,
      },
      {
        name: "Camilan pendamping",
        active: false,
      },
      {
        name: "Minuman pilihan",
        active: false,
      },
      {
        name: "Konsultasi menu gratis",
        active: false,
      },
    ],
    button: {
      text: "Diskusi Dulu",
      link: "",
      active: false,
    },
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Udah dua kali pesan buat acara keluarga, dan dua-duanya memuaskan. Ayam bakarnya bumbunya nresep banget, tamu sampai nambah!",
    name: "Bu Siti",
    title: "Lakbok, Ciamis",
  },
  {
    quote:
      "Harganya sangat terjangkau tapi kualitasnya nggak murahan. Porsi cukup, makanan datang tepat waktu, dan lonjong. Bakal pesan lagi!",
    name: "Pak Darmawan",
    title: "Ciamis Kota",
  },
  {
    quote:
      "Buat kondangan RT kemarin saya percayakan ke Nabila Katering. Hasilnya? Tamu pada tanya cateringnya mana — semua minta kontaknya!",
    name: "Ibu Rohayati",
    title: "Pamarican, Ciamis",
  },
  {
    quote:
      "Enak, bersih, dan orangnya ramah banget. Mau minta ganti menu juga dilayani dengan baik. Recommended untuk warga Lakbok!",
    name: "Kang Ridwan",
    title: "Lakbok, Ciamis",
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
