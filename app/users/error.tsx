'use client';

import { useEffect } from 'react';
import { CircleAlertIcon } from '@/components/atoms/icons';

export default function ErrorPage({ error,}: {
  error: Error & { digest?: string };
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  const errorIcon = CircleAlertIcon();

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      {errorIcon}
      <p className="text-center text-2xl font-bold">Something went wrong!</p>
      <p className="text-center text-sm">Please Contact Admin for Assistance</p>
    </main>
  );
}