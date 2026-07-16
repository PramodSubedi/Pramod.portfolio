"use client";

import { Search } from "lucide-react";
import { memo } from "react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = memo(function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/70 p-3">
      <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-200">
        <Search size={14} className="text-emerald-300" /> Search projects
      </label>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search project, place, or topic"
        className="w-full rounded-xl border border-slate-700/80 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-emerald-400/60"
      />
    </div>
  );
});

export default SearchBar;
