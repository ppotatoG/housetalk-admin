'use client';

import './common.css';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.css';

import { Inter } from 'next/font/google';
import React from 'react';
import { ToastContainer } from 'react-toastify';

import Loading from '@/component/common/loading';

import { Providers } from './provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          {children}
          <ToastContainer />
          <Loading />
        </Providers>
      </body>
    </html>
  );
}
