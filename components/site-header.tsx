"use client"

import Link from "next/link"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
          : "bg-white border-b border-border"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-14 md:h-16 px-4 md:px-6">
        {/* Wordmark */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Shield icon */}
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
              fill="#0d1b2a"
            />
            <path
              d="M17 1L3 7V20C3 28 17 37 17 37C17 37 31 28 31 20V7L17 1Z"
              fill="url(#shieldGrad)"
              opacity="0.15"
            />
            {/* Pentagon football center */}
            <circle cx="17" cy="19" r="6.5" fill="none" stroke="#c9a84c" strokeWidth="1.2" />
            <polygon points="17,13.5 21.5,16.5 20,21.5 14,21.5 12.5,16.5" fill="#c9a84c" opacity="0.9" />
            <defs>
              <linearGradient id="shieldGrad" x1="3" y1="1" x2="31" y2="37" gradientUnits="userSpaceOnUse">
                <stop stopColor="#c9a84c" />
                <stop offset="1" stopColor="#0d1b2a" />
              </linearGradient>
            </defs>
          </svg>

          {/* Text lockup */}
          <div className="flex flex-col leading-none">
            <div className="flex items-baseline gap-0">
              <span className="text-[15px] md:text-[17px] font-black tracking-tight text-[#0d1b2a]">
                Portugal
              </span>
              <span className="text-[15px] md:text-[17px] font-black tracking-tight text-[#c9a84c]">
                Sites
              </span>
              <span className="text-[15px] md:text-[17px] font-black tracking-tight text-[#0d1b2a]">
                De
              </span>
              <span className="text-[15px] md:text-[17px] font-black tracking-tight text-[#c9a84c]">
                Apostas
              </span>
            </div>
            <span className="text-[9px] font-semibold tracking-[0.18em] text-[#0d1b2a]/40 uppercase mt-0.5 hidden sm:block">
              Comparador Independente
            </span>
          </div>
        </Link>

        {/* Badges */}
        <div className="flex items-center gap-2 md:gap-3">
          {/* SRIJ Badge */}
          <div className="flex items-center gap-1.5 px-2 md:px-3 py-1 md:py-1.5 rounded border border-primary/20 bg-primary/5">
            <svg
              className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 12l2 2 4-4" />
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
            </svg>
            <span className="text-[10px] md:text-xs font-bold text-primary">SRIJ</span>
          </div>

          {/* 18+ Badge */}
          <div className="flex items-center justify-center px-2 py-1 rounded border border-destructive/20 bg-destructive/5">
            <span className="text-xs font-black text-destructive">18+</span>
          </div>
        </div>
      </div>
    </header>
  )
}
