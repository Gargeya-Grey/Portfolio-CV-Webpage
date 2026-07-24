import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-zinc-50 flex flex-col items-center justify-center p-6 text-center">
      <Logo
        variant="light"
        size={72}
        className="w-16 h-16 sm:w-[72px] sm:h-[72px] rounded-2xl shadow-md ring-1 ring-zinc-200/80 mb-8"
        priority
      />
      <h2 className="text-4xl font-serif text-zinc-900 mb-4">404 - Page Not Found</h2>
      <p className="text-zinc-600 mb-8 max-w-md">
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link 
        href="/"
        className="px-8 py-4 bg-[#14b8a6] text-white rounded-full font-medium shadow-lg shadow-teal-500/20 transition-transform duration-200 hover:scale-105 active:scale-95"
      >
        Return Home
      </Link>
    </div>
  );
}
