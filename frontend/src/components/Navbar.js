// "use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 flex items-center w-full h-16 ">
      {/* LOGO */}
      <Link href="/" className="relative w-20 h-20 md:w-24 md:h-24">
        <Image
          src="/logo-1.png"
          alt="Next Stop Logo"
          fill
          objectFit="contain"
          className="object-cover"
          priority
        />
      </Link>
    </div>
  );
}
