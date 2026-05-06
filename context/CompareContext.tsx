"use client";

import { createContext, useContext, useState } from "react";

interface CompareContextType {
  selected: string[];
  toggle: (slug: string) => void;
  clear: () => void;
  isSelected: (slug: string) => boolean;
  canAdd: boolean;
}

const CompareContext = createContext<CompareContextType | null>(null);

export function CompareProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<string[]>([]);

  function toggle(slug: string) {
    setSelected((prev) => {
      if (prev.includes(slug)) return prev.filter((s) => s !== slug);
      if (prev.length >= 2) return prev;
      return [...prev, slug];
    });
  }

  return (
    <CompareContext.Provider
      value={{
        selected,
        toggle,
        clear: () => setSelected([]),
        isSelected: (slug) => selected.includes(slug),
        canAdd: selected.length < 2,
      }}
    >
      {children}
    </CompareContext.Provider>
  );
}

export function useCompare() {
  const ctx = useContext(CompareContext);
  if (!ctx) throw new Error("useCompare must be used within CompareProvider");
  return ctx;
}
