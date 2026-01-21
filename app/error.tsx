'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-5">
      <div className="text-center space-y-6 max-w-md">
        <h1 className="text-4xl font-bold text-dark">Oops!</h1>
        <h2 className="text-xl font-semibold text-dark">Terjadi Kesalahan</h2>
        <p className="text-gray-600">
          Maaf, terjadi kesalahan saat memuat halaman. Silakan coba lagi.
        </p>
        <Button
          onClick={reset}
          className="text-white bg-primary py-5 px-8"
        >
          Coba Lagi
        </Button>
      </div>
    </div>
  );
}
