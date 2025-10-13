import React from "react";

/**
 * Simple accordion item used by Services and FAQ.
 * Props:
 *  - title: string
 *  - index: number (optional)
 *  - open: boolean
 *  - onToggle: () => void
 *  - children: content when expanded
 */
export default function AccordionItem({ title, index, open, onToggle, children }) {
  return (
    <div className="border-b last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-6 text-left focus:outline-none"
      >
        <div className="flex items-center gap-4">
          {typeof index === "number" && (
            <span className="text-xl font-medium text-gray-600">{index}.</span>
          )}
          <span className="text-lg md:text-xl font-semibold tracking-wide">{title}</span>
        </div>
        <div className="text-2xl text-gray-400 transform transition-transform" aria-hidden>
          <svg
            className={`w-6 h-6 ${open ? "rotate-180" : "rotate-0"}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-80 py-4" : "max-h-0"}`}
      >
        <div className="text-gray-600">{children}</div>
      </div>
    </div>
  );
}