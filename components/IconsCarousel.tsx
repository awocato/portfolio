"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { skills } from "@/data/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import type { EmblaOptionsType } from "embla-carousel";


type PropType = {
  options?: EmblaOptionsType;
};

export function IconsCarousel(props: PropType) {
  const plugin = React.useRef(Autoplay({ delay: 1000 }));
  const options = { loop: true };
  
  return (
    <Carousel plugins={[plugin.current]} 
    opts={options}
    
    
    className="w-full">
      <CarouselContent>
        {skills.map((skill) => (
          <CarouselItem className="basis-2/12" key={skill.name}>
            <div className="p-1">
              <span className="text-4xl font-semibold">{skill.icon}</span>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
