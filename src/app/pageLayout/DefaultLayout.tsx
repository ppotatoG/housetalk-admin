'use client';

import React from 'react';

import Header from '@/component/Header';
import Navigation from '@/component/Navigation';

export default function defaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[12rem,1fr] h-screen text-gray-950 dark:text-gray-50 text-sm overflow-auto font-normal	">
      <Navigation />
      <div className="flex flex-col">
        <Header />
        <div className="p-4">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
