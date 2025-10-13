import React, { useState } from "react";
import AccordionItem from "./new1";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);
  const items = [
    { title: "UI/UX Design", content: "User research, wireframing, prototypes, and interfaces." },
    { title: "Graphic Design", content: "Branding, visual systems, illustrations, and print." },
    { title: "Web Design", content: "Responsive web interfaces, component systems, and layouts." },
    { title: "Branding", content: "Identity, tone, and visual storytelling for brands." }
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-7">
        <div className="flex items-start gap-6">
          <div className="hidden md:block w-3 h-3 rounded-full bg-primaryPurple mt-3" />
          <div>
            <h3 className="font-display text-4xl md:text-5xl tracking-tight mb-4">WHAT I CAN DO FOR YOU</h3>
            <p className="text-gray-600 max-w-xl">
              As a digital designer, I am a visual storyteller, crafting experiences that connect deeply and spark creativity.
            </p>
          </div>
        </div>

        <div className="mt-10">
          <div className="border-t border-gray-200">
            {items.map((it, i) => (
              <AccordionItem
                key={i}
                index={i + 1}
                title={it.title}
                open={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {it.content}
              </AccordionItem>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 flex justify-end">
        <div className="relative w-80 md:w-96">
          <div
            className="rounded-2xl overflow-hidden transform rotate-6 md:rotate-6 shadow-lg"
            style={{ transformOrigin: "center" }}
          >
            <img
              src="https://framerusercontent.com/images/IUYreEo8ON7qCLgK2tgDOW0xoI.jpg"
              alt="desk setup"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}