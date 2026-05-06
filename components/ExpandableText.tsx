"use client";

import { useState, useRef, useEffect } from "react";

interface Props {
  text: string;
  lines?: number;
}

export default function ExpandableText({ text, lines = 3 }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [clamped, setClamped] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) setClamped(el.scrollHeight > el.clientHeight);
  }, [text]);

  return (
    <div>
      <p
        ref={ref}
        style={
          expanded
            ? undefined
            : { display: "-webkit-box", WebkitLineClamp: lines, WebkitBoxOrient: "vertical", overflow: "hidden" }
        }
        className="text-[#64748b] text-base leading-relaxed"
      >
        {text}
      </p>
      {(clamped || expanded) && (
        <button
          onClick={() => setExpanded((e) => !e)}
          className="mt-1.5 text-[13px] font-semibold text-indigo-600 hover:text-indigo-500 transition-colors"
        >
          {expanded ? "Kamroq" : "Ko'proq"}
        </button>
      )}
    </div>
  );
}
