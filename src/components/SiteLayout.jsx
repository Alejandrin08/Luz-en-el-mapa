import { Link } from "react-router-dom";
import { Globe, Phone, BookOpen } from "lucide-react";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground font-bold">L</span>
      <span className="font-semibold text-primary">Luz en el mapa</span>
    </Link>
  );
}

export default function SiteLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b bg-background/80 backdrop-blur sticky top-0 z-30">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <Logo />
          <nav className="flex items-center gap-6 text-sm">
            <Link to="/mapa" className="text-foreground/80 hover:text-primary">Mapa Nacional</Link>
            <Link to="/recursos" className="text-foreground/80 hover:text-primary">Recursos</Link>
          </nav>
        </div>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="border-t bg-secondary/40 mt-16">
        <div className="mx-auto max-w-6xl px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-3 text-muted-foreground">
              Un esfuerzo colectivo para visibilizar la violencia y exigir sistemas de protección efectivos.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Acompañamiento</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Línea de Ayuda 24/7</li>
              <li>Directorio de Fiscalías</li>
              <li>Apoyo Psicológico</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Aviso de Privacidad</li>
              <li>Términos de Uso</li>
              <li>Metodología de Datos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <div className="flex gap-3 text-muted-foreground">
              <Globe className="h-5 w-5" />
              <Phone className="h-5 w-5" />
              <BookOpen className="h-5 w-5" />
            </div>
          </div>
        </div>
        <div className="border-t py-4 text-center text-xs text-muted-foreground">
          2026 Luz en el mapa. Iniciativa ciudadana por la protección de la infancia en México.
        </div>
      </footer>
    </div>
  );
}
