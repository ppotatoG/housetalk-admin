'use client';

import { useRouter } from 'next/navigation';

import Button from '@/component/common/Button';
const NotFound = () => {
  const router = useRouter();

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center h-screen gap-4 text-center">
        <h1 className="text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
          404
        </h1>
        <p className="text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
          Something&apos;s missing.
        </p>
        <p className="text-lg font-light text-gray-500 dark:text-gray-400">
          Sorry, we can&apos;t find that page. You&apos;ll find lots to explore
          on the home page.
        </p>
        <Button
          onClick={router.back}
          variant="filled"
          className="ml-auto mr-auto"
          text="Back to Homepage"
        />
      </div>
    </section>
  );
};

export default NotFound;
