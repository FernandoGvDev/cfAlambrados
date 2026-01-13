"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const words = [
  "sob medida",
  "com qualidade",
  "com garantia",
  "para seu terreno",
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full">
      {/* IMAGEM DE FUNDO */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://blog.mfrural.com.br/wp-content/uploads/2021/02/cerca-escolha.jpg.webp')",
        }}
      />

      {/* DEGRADÊ LARANJA BARRO */}
      <div className="absolute inset-0 bg-linear-to-r from-amber-800/95 via-amber-800/80 to-transparent" />

      {/* CONTEÚDO */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-100">
            Cercas, Portões e Alambrados
          </h1>

          {/* TEXTO DINÂMICO */}
          <div className="h-10 mt-3 text-xl md:text-2xl font-medium text-zinc-200">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="block"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* CTA */}
          <motion.a
            href="https://wa.me/5500000000000"
            target="_blank"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="
              inline-flex items-center gap-2
              mt-8
              border border-white/40
              px-6 py-3
              text-sm font-semibold
              hover:bg-green-600 hover:border-green-600
              transition
            "
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
