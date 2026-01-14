"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/img/projetos/01.webp",
  "/img/projetos/02.webp",
  "/img/projetos/03.webp",
  "/img/projetos/04.webp",
  "/img/projetos/05.webp",
  "/img/projetos/06.webp",
  "/img/projetos/07.webp",
  "/img/projetos/08.webp",
  "/img/projetos/09.webp",
  "/img/projetos/10.webp",
  "/img/projetos/11.webp",
  "/img/projetos/12.webp",
  "/img/projetos/13.webp",
  "/img/projetos/14.webp",
  "/img/projetos/15.webp",
  "/img/projetos/16.webp",
  "/img/projetos/17.webp",
  "/img/projetos/18.webp",
  "/img/projetos/19.webp",
  "/img/projetos/20.webp",
  "/img/projetos/21.webp",
  "/img/projetos/22.webp",
  "/img/projetos/23.webp",
  "/img/projetos/24.webp",
  "/img/projetos/25.webp",
  "/img/projetos/26.webp",
  "/img/projetos/27.webp",
];

export default function Galeria() {
  return (
    <section className="bg-zinc-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12 max-w-3xl text-gray-950">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos Realizados
          </h2>
          <p className="text-gray-800">
            Alguns serviços já executados, mostrando resistência,
            acabamento e qualidade.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-72 md:h-80 border border-zinc-200">
                <Image
                  src={img}
                  alt={`Projeto ${index + 1}`}
                  fill
                  className="object-cover"
                />

                {/* Linha industrial */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-700" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}
