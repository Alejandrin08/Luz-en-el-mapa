import { Info } from "lucide-react";

export default function DatoDinamico({
  texto,
  label,
  loading = false,
}) {
  return (
    <div className="mt-6 flex gap-3 rounded-xl border border-primary/20 bg-primary/5 p-4">
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

      <div className="flex-1 min-w-0">
        <p className="text-xs font-semibold text-primary">
          {label}
        </p>

        {loading ? (
          <div className="mt-2 space-y-1.5">
            <div className="h-3 rounded bg-primary/10 animate-pulse w-full" />
            <div className="h-3 rounded bg-primary/10 animate-pulse w-4/5" />
          </div>
        ) : (
          <p className="mt-1 text-xs text-foreground/80 leading-relaxed">
            {texto}
          </p>
        )}
      </div>
    </div>
  );
}