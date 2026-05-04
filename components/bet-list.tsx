"use client"

import { BetCard } from "@/components/bet-card"
import { bettingSites } from "@/data/bet-sites"

export function BetList() {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-[1250px] mx-auto">
          {/* Section header */}
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/20">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-white">
                Casas de Apostas Licenciadas em Portugal
              </h2>
              <p className="text-sm text-white/60 mt-0.5">
                {bettingSites.length} operadores analisados e verificados pelo SRIJ
              </p>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-xs text-white/70 bg-white/10 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/15">
              <span className="w-2 h-2 rounded-full bg-primary inline-block" />
              Ordenados por avaliação
            </div>
          </div>

          <div className="space-y-3 md:space-y-4">
            {bettingSites.map((site, index) => (
              <BetCard key={site.name} site={site} rank={index + 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
