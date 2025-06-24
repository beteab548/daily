// app/components/page-transition-spinner.jsx
'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { BarLoader } from 'react-spinners';

export default function PageTransitionSpinner() {
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleRouteChange = () => {
      setIsLoading(true);
      timeout = setTimeout(() => setIsLoading(false), 500); // Adjust timeout as needed
    };

    handleRouteChange(); // Trigger on initial render

    return () => {
      clearTimeout(timeout);
    };
  }, [pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <BarLoader
        color="orange" // Your brand color
        width="100%"
        height={4}
        cssOverride={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
        }}
      />
    </div>
  );
}