import React from "react";
import { TrendingUp } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-primary p-1">
            <TrendingUp className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="font-semibold">PokerSpots</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} PokerSpots. All rights reserved.
        </p>
        <nav className="flex gap-4 text-sm text-muted-foreground">
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
