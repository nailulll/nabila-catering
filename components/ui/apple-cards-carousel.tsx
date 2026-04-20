"use client";

import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
};

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      {/* Navigation arrows */}
      <div className="flex justify-center gap-3 mb-8">
        <button
          className={cn(
            "h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-200",
            canScrollLeft
              ? "border-primary/30 text-primary bg-white hover:bg-primary hover:text-white hover:border-primary shadow-sm hover:shadow-md hover:shadow-primary/20"
              : "border-gray-200 text-gray-300 bg-white cursor-not-allowed",
          )}
          onClick={scrollLeft}
          disabled={!canScrollLeft}
          aria-label="Scroll ke kiri"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          className={cn(
            "h-10 w-10 rounded-full border flex items-center justify-center transition-all duration-200",
            canScrollRight
              ? "border-primary/30 text-primary bg-white hover:bg-primary hover:text-white hover:border-primary shadow-sm hover:shadow-md hover:shadow-primary/20"
              : "border-gray-200 text-gray-300 bg-white cursor-not-allowed",
          )}
          onClick={scrollRight}
          disabled={!canScrollRight}
          aria-label="Scroll ke kanan"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Scroll container */}
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="flex flex-row gap-5 px-5 md:px-10 pb-6 mx-auto">
          {items.map((item, index) => (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.12 * index,
                  ease: "easeOut",
                },
              }}
              key={"card" + index}
              className="flex-shrink-0"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card = ({
  card,
  layout = false,
}: {
  card: Card;
  layout?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative group rounded-2xl overflow-hidden cursor-pointer"
      style={{ width: "300px", height: "380px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={`${card.title} - ${card.category}`}
    >
      {/* Image */}
      <BlurImage
        src={card.src}
        alt={`${card.title} - menu catering Nabila`}
        fill
        className={cn(
          "object-cover transition-transform duration-500",
          hovered ? "scale-105" : "scale-100",
        )}
        sizes="300px"
      />

      {/* Gradient overlay — always visible at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 pointer-events-none" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 z-20 p-6">
        {/* Price badge */}
        <div className="inline-flex items-center mb-3">
          <span
            className="text-xs font-semibold px-2.5 py-1 rounded-full text-white/90"
            style={{ backgroundColor: "hsl(4, 72%, 38%)" }}
          >
            {card.category}
          </span>
        </div>
        {/* Title */}
        <p className="text-white font-bold text-xl leading-tight">
          {card.title}
        </p>

        {/* Hover CTA */}
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 6 }}
          transition={{ duration: 0.2 }}
          className="mt-3 flex items-center gap-1.5 text-white/80 text-xs font-medium"
        >
          <span>Pesan sekarang</span>
          <ChevronRight size={13} />
        </motion.div>
      </div>

      {/* Top-right label */}
      <div className="absolute top-4 right-4 z-20">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/60 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
          Menu
        </span>
      </div>
    </div>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-500",
        isLoading ? "blur-sm scale-105" : "blur-0 scale-100",
        className,
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Menu katering Nabila"}
      {...rest}
    />
  );
};
