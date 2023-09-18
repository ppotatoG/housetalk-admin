'use client';

import './common.css';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

import Navigation from '@/app/component/Navigation';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="flex h-screen">
          <Navigation />
          <div className="w-3/4 p-4">{children}</div>
        </div>
      </body>
    </html>
  );
}
