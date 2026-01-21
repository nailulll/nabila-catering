import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Nabila Katering Lakbok - Catering Terbaik di Ciamis',
    short_name: 'Nabila Katering',
    description: 'Nabila Katering menyediakan layanan catering di Kecamatan Lakbok, Kabupaten Ciamis. Menu beragam, harga terjangkau, cocok untuk semua acara!',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#F95454',
    icons: [
      {
        src: '/logo.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
    categories: ['food', 'catering', 'restaurant'],
    lang: 'id',
    dir: 'ltr',
  }
}
