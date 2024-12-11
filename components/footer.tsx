import Link from 'next/link';
import { Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:flex md:items-center md:justify-between">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="https://instagram.com/curateglasgow" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Instagram</span>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="https://twitter.com/curateglasgow" className="text-muted-foreground hover:text-foreground">
              <span className="sr-only">Twitter</span>
              <Twitter className="h-6 w-6" />
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-muted-foreground">
              &copy; {new Date().getFullYear()} CurateGlasgow. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}