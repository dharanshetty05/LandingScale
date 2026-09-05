export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#E8E3DF] bg-white/70 px-4 py-1.5 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-[#6852B8]">
      {children}
    </span>
  );
}
