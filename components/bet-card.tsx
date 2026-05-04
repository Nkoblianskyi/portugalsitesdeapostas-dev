"use client"

import { ExternalLink, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { BettingSite } from "@/data/bet-sites"

interface BetCardProps {
  site: BettingSite
  rank: number
}

export function BetCard({ site, rank }: BetCardProps) {
  const formatReviews = (reviews: number) => {
    return reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "Melhor Escolha"
      case 2:
        return "Recomendado"
      case 3:
        return "Popular"
      default:
        return "Verificado"
    }
  }

  const renderStars = (rating: number, size = 14) => {
    // Convert 0-10 rating to 0-5 stars, snapped to nearest 0.2 step
    const starRating = Math.round((rating / 2) * 5) / 5
    const stars = []

    for (let i = 0; i < 5; i++) {
      const fill = Math.min(1, Math.max(0, starRating - i))
      const fillPct = Math.round(fill * 100)
      const id = `star-${rating}-${i}`

      stars.push(
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ display: "block", flexShrink: 0 }}
        >
          <defs>
            <clipPath id={id}>
              <rect x="0" y="0" width={fillPct === 100 ? 14 : (14 * fillPct) / 100} height="14" />
            </clipPath>
          </defs>
          {/* Empty star */}
          <path
            d="M7 1.5L8.545 5.196L12.5 5.635L9.65 8.254L10.45 12.188L7 10.25L3.55 12.188L4.35 8.254L1.5 5.635L5.455 5.196L7 1.5Z"
            fill="#e5e7eb"
          />
          {/* Filled star clipped to fillPct */}
          {fillPct > 0 && (
            <path
              d="M7 1.5L8.545 5.196L12.5 5.635L9.65 8.254L10.45 12.188L7 10.25L3.55 12.188L4.35 8.254L1.5 5.635L5.455 5.196L7 1.5Z"
              fill="#c9a84c"
              clipPath={`url(#${id})`}
            />
          )}
        </svg>,
      )
    }
    return stars
  }

  const isTop = rank === 1

  return (
    <div
      className={cn(
        "group relative bg-white rounded-xl border transition-all duration-200 hover:shadow-md overflow-hidden",
        isTop
          ? "border-primary shadow-sm shadow-primary/10 ring-1 ring-primary/20"
          : "border-gray-200 hover:border-primary/50",
      )}
    >
      {/* Top label strip */}
      <div
        className={cn(
          "flex items-center gap-0 text-xs font-bold",
          isTop ? "bg-primary text-primary-foreground" : "bg-gray-100 text-gray-600",
        )}
      >
        <span className="px-3 py-1.5 border-r border-white/20">#{rank}</span>
        <span className="px-3 py-1.5">{getRankLabel(rank)}</span>
        {isTop && (
          <span className="ml-auto px-3 py-1.5 border-l border-white/20 text-[10px] font-semibold opacity-80">
            SRIJ Licenciado
          </span>
        )}
      </div>

      <Link href={site.url} target="_blank" rel="noopener noreferrer sponsored" className="block">
        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-0 items-stretch">
          {/* Logo */}
          <div className="col-span-3 flex items-center justify-center p-5 border-r border-border bg-black">
            <div className="w-full max-w-[180px] h-20 flex items-center justify-center">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                width={180}
                height={80}
                className="max-h-full w-auto object-contain"
              />
            </div>
          </div>

          {/* Bonus */}
          <div className="col-span-4 flex flex-col items-center justify-center p-5 border-r border-border text-center">
            <span className="text-[10px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5">
              Bónus de Boas-Vindas
            </span>
            <p className={cn("text-xl font-black leading-tight", isTop ? "text-primary" : "text-gray-900")}>
              {site.bonus}
            </p>
          </div>

          {/* Rating */}
          <div className="col-span-3 flex flex-col items-center justify-center p-5 border-r border-border text-center">
            <div className="flex justify-center gap-[2px] mb-1.5">{renderStars(site.rating)}</div>
            <div className="flex items-baseline gap-1">
              <span className={cn("text-3xl font-black", isTop ? "text-primary" : "text-gray-900")}>
                {site.rating.toFixed(1)}
              </span>
              <span className="text-sm text-gray-500">/10</span>
            </div>
            <p className="text-[10px] text-gray-400 mt-1">({formatReviews(site.reviews)} avaliações)</p>
          </div>

          {/* CTA */}
          <div className="col-span-2 flex flex-col items-center justify-center p-5 gap-2.5">
            <Button
              className={cn(
                "w-full font-bold transition-all",
                isTop
                  ? "bg-accent hover:bg-accent/90 text-foreground"
                  : "bg-primary hover:bg-primary/90 text-primary-foreground",
              )}
            >
              Obter Bónus
              <ExternalLink className="ml-1.5 w-3.5 h-3.5" />
            </Button>
            <div className="flex items-center gap-1 text-[10px] text-gray-500">
              <CheckCircle className="w-3 h-3 text-primary" />
              <span>Verificado SRIJ</span>
            </div>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden md:block lg:hidden p-4">
          <div className="grid grid-cols-3 gap-4 items-center mb-4">
            <div className="flex justify-center">
              <div className="w-full max-w-[140px] h-16 flex items-center justify-center bg-black rounded-lg p-2">
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  width={140}
                  height={64}
                  className="max-h-full w-auto object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col items-center text-center border-l border-r border-border px-2">
              <span className="text-[9px] font-semibold text-gray-500 uppercase tracking-widest mb-1">
                Bónus
              </span>
              <p className={cn("text-base font-black leading-tight", isTop ? "text-primary" : "text-gray-900")}>
                {site.bonus}
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="flex gap-[2px] mb-1">{renderStars(site.rating)}</div>
              <div className="flex items-baseline gap-1">
                <span className={cn("text-2xl font-black", isTop ? "text-primary" : "text-gray-900")}>
                  {site.rating.toFixed(1)}
                </span>
                <span className="text-xs text-gray-500">/10</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button
              className={cn(
                "flex-1 max-w-xs font-bold",
                isTop ? "bg-accent hover:bg-accent/90 text-foreground" : "bg-primary hover:bg-primary/90 text-primary-foreground",
              )}
            >
              Obter Bónus
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <CheckCircle className="w-3.5 h-3.5 text-primary" />
              <span>SRIJ Verificado</span>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden p-4">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-28 h-16 shrink-0 flex items-center justify-center bg-black rounded-lg p-2">
              <Image
                src={site.logo || "/placeholder.svg"}
                alt={site.name}
                width={112}
                height={64}
                className="max-h-full w-auto object-contain"
              />
            </div>
            <div className="flex-1 text-center">
              <span className="text-[9px] font-semibold text-gray-500 uppercase block mb-0.5">Bónus</span>
              <p className={cn("text-lg font-black leading-tight", isTop ? "text-primary" : "text-gray-900")}>
                {site.bonus}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <span className={cn("text-xl font-black", isTop ? "text-primary" : "text-gray-900")}>
                {site.rating.toFixed(1)}
              </span>
              <span className="text-xs text-gray-500">/10</span>
            </div>
            <div className="flex gap-[2px]">{renderStars(site.rating)}</div>
            <Button
              size="sm"
              className={cn(
                "font-bold text-xs",
                isTop ? "bg-accent hover:bg-accent/90 text-foreground" : "bg-primary hover:bg-primary/90 text-primary-foreground",
              )}
            >
              Bónus
              <ExternalLink className="ml-1 w-3 h-3" />
            </Button>
          </div>
        </div>
      </Link>

      {/* Disclaimer strip */}
      <div className="px-4 py-1.5 border-t border-gray-100 bg-gray-50">
        <p className="text-[10px] text-center text-muted-foreground">
          +18 | Jogo Responsável |{" "}
          <a
            href="https://jogoresponsavel.pt/"
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="text-primary hover:underline"
          >
            jogoresponsavel.pt
          </a>
          {" "}| Aplicam-se T&C
        </p>
      </div>
    </div>
  )
}
