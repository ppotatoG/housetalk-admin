'use client';

import { redirect } from 'next/navigation';

export default function Home() {
  // TODO: auto token check
  return redirect('/dashboard');
}
