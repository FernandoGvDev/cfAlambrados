"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Fence, DoorOpen, Grid } from "lucide-react";

const services = [
  {
    id: "cercas",
    title: "Cercas de Cuiu",
    icon: Fence,
    text:
      "As cercas de cuiu são ideais para áreas rurais e propriedades que exigem resistência e durabilidade. Trabalhamos com materiais de qualidade e instalação firme, garantindo segurança e longa vida útil.",
    image: "/img/cercas.jpeg",
  },
  {
    id: "portoes",
    title: "Portões de Entrada e Currais",
    icon: DoorOpen,
    text:
      "Fabricamos portões sob medida para entradas e currais, priorizando funcionalidade, resistência e facilidade de uso no dia a dia. Cada projeto é adaptado à necessidade do local.",
    image: "/img/portoes.jpg",
  },
  {
    id: "alambrados",
    title: "Alambrados em Geral",
    icon: Grid,
    text:
      "Os alambrados são soluções versáteis para cercamento de áreas residenciais, rurais e industriais. Oferecemos instalação profissional com acabamento seguro e alinhado.",
    image: "/img/alambrados.jpg",
  },
];

export default function Services() {
  return (
    <section className="bg-white py-24 text-zinc-900">
      <div className="max-w-7xl mx-auto px-6">

        {/* TÍTULO */}
        <div className="mb-16 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-zinc-600">
            Trabalhamos com soluções resistentes, funcionais e feitas para durar,
            sempre respeitando a realidade de cada projeto.
          </p>
        </div>

        {/* CARDS DE NAVEGAÇÃO */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-24">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="
                  group
                  border border-zinc-200
                  p-6
                  hover:border-amber-700
                  transition
                "
              >
                <Icon
                  size={36}
                  className="text-amber-700 mb-4"
                />
                <h3 className="font-semibold text-lg group-hover:text-amber-700 transition">
                  {service.title}
                </h3>
              </a>
            );
          })}
        </div>

        {/* SERVIÇOS DETALHADOS */}
        <div className="space-y-32">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`
                grid md:grid-cols-2 gap-12 items-center
                ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* TEXTO */}
              <div>
                <div className="w-16 h-1 bg-amber-700 mb-6"></div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {service.title}
                </h3>

                <p className="text-zinc-700 leading-relaxed">
                  {service.text}
                </p>
              </div>

              {/* IMAGEM */}
              <div className="relative h-64 md:h-80">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
