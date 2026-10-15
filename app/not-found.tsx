import Link from "next/link";
import Logo from "@/components/Logo";

export default function NotFound() {
  return (
    <main id="main-content" className="not-found">
      <Logo size={56} alt="" />
      <h1>Page not found. <em>It may have moved.</em></h1>
      <p>The page you are looking for doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="button button-primary">Return to the CV</Link>
    </main>
  );
}
