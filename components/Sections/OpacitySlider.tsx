"use client";

import { memo } from "react";

interface OpacitySliderProps {
  value: number;
  onChange: (value: number) => void;
}

const OpacitySlider = memo(function OpacitySlider({ value, onChange }: OpacitySliderProps) {
  return (
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      value={value}
      onChange={(event) => onChange(Number(event.target.value))}
      className="h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-700 accent-emerald-400"
    />
  );
});

export default OpacitySlider;
