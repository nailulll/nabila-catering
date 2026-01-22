import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-dark">Halaman Tidak Ditemukan</h2>
        <p className="text-gray-600">
          Maaf, halaman yang Anda cari tidak ditemukan atau telah dipindahkan.
        </p>
        <Button asChild className="text-white bg-primary py-5 px-8">
          <Link href="/">
            Kembali ke Beranda
          </Link>
        </Button>
      </div>
    </div>
  );
}
