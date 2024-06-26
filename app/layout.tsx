
'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { StoreProvider } from "@/lib/redux/StoreProvider";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <html lang="en">
          <body className={inter.className}>
            {children}
          </body>
        </html>
      </StoreProvider>
    </QueryClientProvider>
  );
}


