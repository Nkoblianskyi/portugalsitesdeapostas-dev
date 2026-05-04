"use client"

import { useState } from "react"
import { bettingSites } from "@/data/bet-sites"
import { Star, ExternalLink, Shield, CheckCircle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function OurTopCasinoChoiceSection() {
  const [topSite] = useState(bettingSites[0])

  if (!topSite) return null

  const fullStars = Math.floor(topSite.stars)

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
      <div className="bg-white rounded-2xl max-w-[1250px] mx-auto px-8 py-12 shadow-sm">
        {/* Section Header — centered */}
        <div className="max-w-2xl mx-auto text-center mb-10 md:mb-14">
          <p className="text-xs font-bold text-primary uppercase tracking-widest mb-3">Destaque do Editor</p>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 font-serif text-balance">
            A Nossa Primeira Escolha Para Apostadores Portugueses
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            Após análise detalhada de todos os critérios, este é o operador que recomendamos com maior confiança para
            quem inicia ou quer melhorar a sua experiência de apostas desportivas em Portugal.
          </p>
        </div>

        {/* Featured Card — centered, max width constrained */}
        <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl border-2 border-primary shadow-xl overflow-hidden">
            {/* Top bar */}
            <div className="bg-primary text-primary-foreground px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span className="font-bold text-sm tracking-wide">#1 — Melhor Escolha {new Date().getFullYear()}</span>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold opacity-85">
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  SRIJ Licenciado
                </span>
                <span className="flex items-center gap-1">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Verificado
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                {/* Left — Logo + Rating */}
                <div className="flex flex-col items-center text-center flex-shrink-0">
                  <div className="w-52 h-28 flex items-center justify-center bg-black rounded-xl p-4 mb-5">
                    <Image
                      src={topSite.logo || "/placeholder.svg"}
                      alt={topSite.name}
                      width={180}
                      height={80}
                      className="max-h-full w-auto object-contain"
                    />
                  </div>

                  {/* Stars */}
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${i < fullStars ? "fill-accent text-accent" : "text-muted-foreground/30"}`}
                        strokeWidth={i < fullStars ? 0 : 1.5}
                      />
                    ))}
                  </div>

                  {/* Score */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-black text-primary">{topSite.rating.toFixed(1)}</span>
                    <span className="text-lg text-gray-400 font-medium">/10</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {topSite.reviews.toLocaleString("pt-PT")} avaliações
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px self-stretch bg-border" />
                <div className="block md:hidden h-px w-full bg-border" />

                {/* Right — Bonus + CTA */}
                <div className="flex-1 w-full">
                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 mb-5 text-center">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">
                      Bónus Exclusivo de Boas-Vindas
                    </p>
                    <p className="text-2xl md:text-3xl font-black text-primary leading-tight mb-2">
                      {topSite.bonus}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Termos e condições aplicam-se. Aposte com responsabilidade.
                    </p>
                  </div>

                  <Link href={topSite.url} target="_blank" rel="noopener noreferrer sponsored">
                    <Button
                      size="lg"
                      className="w-full bg-accent hover:bg-accent/90 text-foreground font-bold text-base h-14"
                    >
                      Reivindicar Bónus Agora
                      <ExternalLink className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>

                  <p className="text-[11px] text-gray-400 mt-3 text-center">
                    +18 | Apenas para novos utilizadores | Jogue com responsabilidade
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}
