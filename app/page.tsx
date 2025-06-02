// app/page.tsx
'use client';

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <header className="text-3xl font-bold">Welcome to News-Nation</header>
      <h5 className="text-lg text-center max-w-md">
        A platform for worldwide news and daily updates
      </h5>
      <div className="flex gap-4">
        <Button onClick={() => router.push('/login')}>Login</Button>
        <Button onClick={() => router.push('/signup')}>Signup</Button>
      </div>
    </div>
  );
}
