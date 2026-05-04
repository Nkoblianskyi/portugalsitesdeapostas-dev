import Link from "next/link"
import Image from "next/image"
import { AlertTriangle, Mail, Shield } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#0d1b2a] text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              {/* Shield icon — inverted for dark bg */}
              <svg
                width="34"
                height="38"
                viewBox="0 0 34 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0"
              >
                <path
                  d="M17 1L3 7V20C3 28 17 37 17 37C17 37 31 28 31 20V7L17 1Z"
                  fill="white"
                  opacity="0.08"
                />
                <path
                  d="M17 1L3 7V20C3 28 17 37 17 37C17 37 31 28 31 20V7L17 1Z"
                  stroke="white"
                  strokeWidth="1"
                  strokeOpacity="0.2"
                  fill="none"
                />
                <circle cx="17" cy="19" r="6.5" fill="none" stroke="#c9a84c" strokeWidth="1.2" />
                <polygon points="17,13.5 21.5,16.5 20,21.5 14,21.5 12.5,16.5" fill="#c9a84c" opacity="0.9" />
              </svg>

              {/* Text lockup */}
              <div className="flex flex-col leading-none">
                <div className="flex items-baseline gap-0">
                  <span className="text-[15px] md:text-[17px] font-black tracking-tight text-white">
                    Portugal
                  </span>
                  <span className="text-[15px] md:text-[17px] font-black tracking-tight text-[#c9a84c]">
                    Sites
                  </span>
                  <span className="text-[15px] md:text-[17px] font-black tracking-tight text-white">
                    De
                  </span>
                  <span className="text-[15px] md:text-[17px] font-black tracking-tight text-[#c9a84c]">
                    Apostas
                  </span>
                </div>
                <span className="text-[9px] font-semibold tracking-[0.18em] text-white/30 uppercase mt-0.5">
                  Comparador Independente
                </span>
              </div>
            </Link>
            <p className="text-white/60 text-sm max-w-md leading-relaxed mb-6">
              Comparador independente das melhores casas de apostas desportivas licenciadas pelo SRIJ em Portugal.
              Análises imparciais, bónus verificados e informação de confiança desde 2019.
            </p>
            <div className="flex items-center gap-2 text-sm text-white/50">
              <Mail className="w-4 h-4 text-accent" />
              <span>info@portugalsitesdeapostas.com</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xs font-bold mb-4 text-white/40 uppercase tracking-widest">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/#betting-sites" className="text-white/70 hover:text-white transition-colors text-sm">
                  Casas de Apostas
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                  Sobre Nós
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-xs font-bold mb-4 text-white/40 uppercase tracking-widest">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy-policy" className="text-white/70 hover:text-white transition-colors text-sm">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="text-white/70 hover:text-white transition-colors text-sm">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <a
                  href="https://jogoresponsavel.pt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors text-sm"
                >
                  Jogo Responsável
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-12 pb-12 border-b border-white/10">
          <h4 className="text-xs font-bold mb-6 text-center text-white/40 uppercase tracking-widest flex items-center justify-center gap-2">
            <Shield className="h-3.5 w-3.5 text-accent" />
            Parceiros de Jogo Responsável
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
            {[
              { href: "https://www.srij.turismodeportugal.pt/", src: "/srij-new.svg", alt: "SRIJ" },
              { href: "https://www.icad.pt/", src: "/icad.png", alt: "SICAD" },
              { href: "https://www.gamcare.org.uk/", src: "/gamecare-new.svg", alt: "GamCare" },
              { href: "https://www.gambleaware.org/", src: "/gamble-aware.webp", alt: "GambleAware" },
              { href: "https://www.jogoresponsavel.pt/", src: "/jogo-responsavel-new.png", alt: "Jogo Responsável" },
            ].map((partner, idx, arr) => (
              <Link
                key={partner.alt}
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded hover:opacity-90 transition-opacity ${
                  idx === arr.length - 1
                    ? "bg-transparent border border-white/30"
                    : "bg-white"
                }`}
              >
                <div className="relative w-[100px] h-[48px]">
                  <Image src={partner.src || "/placeholder.svg"} alt={partner.alt} fill className="object-contain" />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-white/50 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-accent text-foreground px-3 py-1.5 rounded font-black text-sm">18+</div>
            <span className="font-semibold text-white/80">Apenas para maiores de 18 anos</span>
          </div>

          <p className="max-w-3xl mx-auto text-white/50 leading-relaxed text-xs md:text-sm">
            PortugalSitesDeApostas é um site de comparação independente. Não somos uma casa de apostas. Todo o
            conteúdo é destinado a maiores de 18 anos residentes em Portugal. Os links externos direcionam para
            operadores licenciados pelo SRIJ.
          </p>

          <p className="flex items-center justify-center gap-2 text-destructive font-semibold text-sm">
            <AlertTriangle className="h-4 w-4" />
            <span>O jogo pode causar dependência. Aposte com responsabilidade.</span>
          </p>

          <p className="font-medium text-white/30 pt-4 border-t border-white/10 text-xs">
            © {new Date().getFullYear()} PortugalSitesDeApostas. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
