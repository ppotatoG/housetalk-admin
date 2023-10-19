'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

import Button from '@/component/common/Button';
import { totalTicks, H_VH_MINUS_HEADER } from '@/constants/layout';

export default function InvalidLayout({
  message,
  children,
  useHeader = true,
}: {
  message: string;
  children?: React.ReactNode;
  useHeader?: boolean;
}) {
  const router = useRouter();
  const [ticksLeft, setTicksLeft] = useState<number>(totalTicks);

  useEffect(() => {
    const interval = setInterval(() => {
      setTicksLeft(prevTicks => prevTicks - 1);
      if (ticksLeft <= 0) {
        router.push('/dashboard');
      }
    }, 100);

    return () => clearInterval(interval);
  }, [ticksLeft, router]);

  const progressBarWidth = ((totalTicks - ticksLeft) / totalTicks) * 100;

  return (
    <section className="bg-white dark:bg-gray-900">
      <div
        className="flex flex-col items-center justify-center gap-4 text-center"
        style={{
          height: `calc(100vh - ${useHeader ? H_VH_MINUS_HEADER : '0px'})`,
        }}
      >
        <h2 className="text-6xl font-extrabold text-indigo-950">{message}</h2>
        <p className="text-sm text-gray-500">
          {(ticksLeft / 10).toFixed(0)}초 후 대시보드 페이지로 이동됩니다.
        </p>
        <div className="w-full max-w-md bg-gray-200 rounded">
          <div
            className="bg-indigo-950 h-2 rounded transition-all"
            style={{ width: `${progressBarWidth}%` }}
          ></div>
        </div>
        {children}
        <div className="flex gap-4 justify-center">
          <Button
            onClick={() => router.push('/dashboard')}
            variant="filled"
            className="ml-auto mr-auto"
            text="Home"
          />
          <Button
            onClick={router.back}
            variant="outlined"
            className="ml-auto mr-auto"
            text="Back"
          />
        </div>
      </div>
    </section>
  );
}
