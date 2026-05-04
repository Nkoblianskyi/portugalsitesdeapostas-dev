"use client"

import type { Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react"
import { Shield, CheckCircle } from "lucide-react"

interface HeroSectionProps {
  setIsAgeModalOpen: Dispatch<SetStateAction<boolean>>
  setIsAdvertiserModalOpen: Dispatch<SetStateAction<boolean>>
  setIsTopOffersModalOpen?: Dispatch<SetStateAction<boolean>>
}

export function HeroSection({ setIsAgeModalOpen, setIsAdvertiserModalOpen }: HeroSectionProps) {
  const [lastUpdated, setLastUpdated] = useState("")
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const date = new Date()
    const month = date.toLocaleString("pt-PT", { month: "long" })
    const year = date.getFullYear()
    setLastUpdated(`${month} ${year}`)
  }, [])

  return (
    <section className="relative border-b border-border py-12 md:py-20 overflow-hidden">
      {/* Background image — mobile only */}
      <div
        className="absolute inset-0 md:hidden"
        style={{
          backgroundImage: "url('/hero-sports.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      {/* Dark overlay — mobile only (sits on top of image) */}
      <div className="absolute inset-0 bg-[#0d1b2a]/80 md:hidden" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* Top meta row */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
              Ranking {currentYear}
            </span>
            {lastUpdated && (
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium border border-white/20">
                Atualizado: {lastUpdated}
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsAgeModalOpen(true)}
              className="px-3 py-1 text-xs font-bold text-red-400 border border-red-400/40 rounded-full hover:bg-red-400/10 transition-colors"
            >
              +18
            </button>
            <button
              onClick={() => setIsAdvertiserModalOpen(true)}
              className="px-3 py-1 text-xs text-white/60 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
            >
              Publicidade
            </button>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white text-balance mb-4">
            Os Melhores{" "}
            <span className="text-accent">Sites de Apostas</span>{" "}
            em Portugal
          </h1>
          <p className="text-base md:text-lg text-white/75 leading-relaxed max-w-2xl mb-8">
            Comparamos e analisamos de forma independente todos os operadores licenciados pelo SRIJ. Encontre a casa
            de apostas certa para si com base em critérios objetivos e verificados pela nossa equipa.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/50 border border-white/20 backdrop-blur-sm">
              <img src="/srij.svg" alt="SRIJ" className="w-5 h-5" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">SRIJ Licenciado</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/50 border border-white/20 backdrop-blur-sm">
              <Shield className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">100% Seguro</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/50 border border-white/20 backdrop-blur-sm">
              <CheckCircle className="w-4 h-4 text-accent" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Bónus Verificados</span>
            </div>
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-black/50 border border-white/20 backdrop-blur-sm">
              <img src="/flag.png" alt="Portugal" className="w-5 h-5 rounded-sm object-cover" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">Mercado PT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
