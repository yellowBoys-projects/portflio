import React, { useState } from "react";
import AccordionItem from "./Accordion";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqs = [
    "What services do you offer?",
    "How does the design process work?",
    "How long does a project usually take?",
    "What do I need to provide before starting a project?",
    "Do you offer revisions?",
    "How do I get started?"
  ];

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ">
      <div className="lg:col-span-4">
        <div className="flex items-start gap-6">
          <div className="hidden md:block w-3 h-3 rounded-full bg-primaryPurple mt-3" />
          <div>
            <h3 className="font-display text-4xl md:text-5xl tracking-tight mb-4">FREQUENTLY ASKED QUESTIONS</h3>
            <p className="text-gray-600 max-w-md">
              Here are answers to some of the most common questions I receive as a freelance designer. If you don't see your question here, feel free to reach out — I'm happy to help!
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-8">
        <div className="border border-transparent">
          {faqs.map((q, i) => (
            <AccordionItem
              key={i}
              index={i + 1}
              title={q}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <p className="text-gray-600">
                This is a short answer explaining the topic. Customize each FAQ answer with your own content to provide helpful guidance to your clients.
              </p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}