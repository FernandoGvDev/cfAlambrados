"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

const images = [
  "/img/projetos/1.jpg",
  "/img/projetos/2.jpg",
  "/img/projetos/3.jpg",
  "/img/projetos/4.jpg",
];

export default function Galeria() {
  return (
    <section className="bg-zinc-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-12 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos Realizados
          </h2>
          <p className="text-zinc-600">
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
