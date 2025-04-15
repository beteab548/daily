// components/common/client-layout-wrapper.tsx
'use client';
import {} from 'react-spinners'
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import NavHeader from "@/components/common/nav-header";
import Footer from "@/components/common/footer";
export default function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
<div className="flex justify-center items-center h-screen w-screen bg-white">
<ClipLoader color="#3b82f6" size={60} />
        {/* <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-4 border-solid"></div> */}
      </div>
    );
  }

  return (
    <>
      <NavHeader />
      {children}
      <Footer />
    </>
  );
}
