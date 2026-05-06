"use client";

import { useState, useRef, useEffect } from "react";

interface SelectProps {
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

export default function Select({ value, onChange, options, placeholder, className = "" }: SelectProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const selected = options.find((o) => o.value === value);
  const allLabels = placeholder ? [placeholder, ...options.map((o) => o.label)] : options.map((o) => o.label);
  const longestLabel = allLabels.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <div ref={ref} className={`relative w-fit min-w-[200px] ${className}`}>
      {/* invisible sizer — container kengligi eng uzun item ga teng bo'ladi */}
      <div className="invisible h-0 overflow-hidden px-4 py-2.5 text-sm whitespace-nowrap pr-10">
        {longestLabel}
      </div>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className={`w-full flex items-center justify-between gap-2 bg-white border text-sm rounded-xl px-4 py-2.5 shadow-sm transition-all cursor-pointer hover:border-[#cbd5e1] ${
          open
            ? "border-indigo-400 ring-2 ring-indigo-100"
            : "border-[#e2e8f0]"
        }`}
      >
        <span className={selected ? "text-[#1a202c]" : "text-[#94a3b8]"}>
          {selected ? selected.label : placeholder}
        </span>
        <svg
          className={`w-4 h-4 text-[#94a3b8] shrink-0 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute z-50 mt-1.5 w-full bg-white border border-[#e2e8f0] rounded-xl shadow-lg overflow-hidden">
          {placeholder && (
            <button
              type="button"
              onClick={() => { onChange(""); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                !value
                  ? "bg-indigo-50 text-indigo-700 font-medium"
                  : "text-[#94a3b8] hover:bg-[#f8fafc]"
              }`}
            >
              {placeholder}
            </button>
          )}
          <div className="max-h-52 overflow-y-auto">
            {options.map((opt) => (
              <button
                key={opt.value}
                type="button"
                onClick={() => { onChange(opt.value); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm flex items-center justify-between transition-colors ${
                  value === opt.value
                    ? "bg-indigo-50 text-indigo-700 font-medium"
                    : "text-[#1a202c] hover:bg-[#f8fafc] hover:text-indigo-600"
                }`}
              >
                {opt.label}
                {value === opt.value && (
                  <svg className="w-4 h-4 text-indigo-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
