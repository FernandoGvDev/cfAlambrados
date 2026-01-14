"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative bg-zinc-900 py-24 text-white overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Precisa de cercamento ou portão sob medida?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-zinc-300 max-w-2xl mx-auto mb-10"
        >
          Fale direto com a CF e solicite um orçamento sem compromisso.
          Atendimento rápido e soluções feitas para durar.
        </motion.p>

        <motion.a
          href="https://wa.me/5500000000000"
          target="_blank"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            inline-flex items-center gap-3
            bg-green-600 hover:bg-green-700
            px-8 py-4
            text-base font-semibold
            transition
          "
        >
          <MessageCircle size={22} />
          Solicitar orçamento no WhatsApp
        </motion.a>
      </div>
    </section>
  );
}
