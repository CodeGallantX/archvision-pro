"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-[#0A192F] text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-300 hover:text-blue-400 transition">
          ArchVision
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-lg">
          <Link href="/features" className="hover:text-blue-300 transition">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-blue-300 transition">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-blue-300 transition">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setSidebarOpen(true)}
        >
          <FaBars className="text-2xl text-blue-300 hover:text-blue-400 transition" />
        </Button>
      </div>

      {/* Sidebar Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300",
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar (Mobile) */}
      <aside
        className={cn(
          "fixed top-0 left-0 w-72 h-full bg-[#0A192F] shadow-xl transform transition-transform duration-300 pt-16 px-6 md:hidden",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl text-blue-300 hover:text-blue-400 transition"
          onClick={() => setSidebarOpen(false)}
        >
          <FaTimes />
        </button>

        {/* Sidebar Links */}
        <nav className="mt-10 flex flex-col gap-6 text-lg">
          <Link href="/" className="hover:text-blue-300 transition" onClick={() => setSidebarOpen(false)}>
            Home
          </Link>
          <Link href="/features" className="hover:text-blue-300 transition" onClick={() => setSidebarOpen(false)}>
            Features
          </Link>
          <Link href="/pricing" className="hover:text-blue-300 transition" onClick={() => setSidebarOpen(false)}>
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-blue-300 transition" onClick={() => setSidebarOpen(false)}>
            Contact
          </Link>
        </nav>
      </aside>
    </header>
  );
}
