"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 bg-black text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 ">
        
        {/* LOGO */}
        <div className="relative">
          <div
            className="
              bg-amber-800
              border-2 border-black
              h-24
              px-6
              flex items-center
              -mb-4
              clip-diagonal
            "
          >
            <Image
              src="/img/logo.png"
              alt="Logo da empresa"
              width={140}
              height={60}
              priority
            />
          </div>
        </div>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/servicos" className="hover:text-orange-400 transition">
            Serviços
          </Link>
          <Link href="/sobre" className="hover:text-orange-400 transition">
            Sobre
          </Link>

          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            className="
              flex items-center gap-2
              bg-green-600 hover:bg-green-700
              px-5 py-2
              text-sm font-semibold
              transition
              mr-13
              ml-5
            "
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </nav>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden mr-4"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-zinc-900 border-t border-zinc-800">
          <nav className="flex flex-col p-6 gap-6">
            <Link href="/servicos" onClick={() => setOpen(false)}>
              Serviços
            </Link>
            <Link href="/sobre" onClick={() => setOpen(false)}>
              Sobre
            </Link>

            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              className="
                flex items-center justify-center gap-2
                bg-green-600 hover:bg-green-700
                py-3 font-semibold
              "
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
