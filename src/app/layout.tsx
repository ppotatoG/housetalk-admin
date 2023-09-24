'use client';

import './common.css';
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

import Navigation from '@/app/component/Navigation';
import Header from '@/app/component/Header';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className} suppressHydrationWarning={true}>
        <div className="grid grid-cols-[12rem,1fr] h-screen text-gray-950 dark:text-gray-50 text-sm overflow-auto">
          <Navigation />
          <div className="flex flex-col">
            <Header />
            <div className="p-4">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
