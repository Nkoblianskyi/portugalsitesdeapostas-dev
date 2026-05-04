"use client"

import { useCookieConsent } from "@/context/cookie-consent-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const { showBanner, acceptAll, declineAll } = useCookieConsent()

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 md:p-5">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white border border-border rounded-xl shadow-xl p-4 md:p-5">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3 flex-1">
              <div>
                <h3 className="text-sm font-bold text-foreground mb-0.5">Preferências de Cookies</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Utilizamos cookies para melhorar a sua experiência e analisar o tráfego. Ao clicar em "Aceitar",
                  concorda com a nossa{" "}
                  <Link href="/cookie-policy" className="text-primary hover:underline font-medium">
                    Política de Cookies
                  </Link>
                  . Pode gerir as suas preferências a qualquer momento.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 w-full sm:w-auto flex-shrink-0">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-none border-black text-black hover:bg-secondary font-semibold text-xs"
                onClick={declineAll}
              >
                Recusar
              </Button>
              <Button
                size="sm"
                className="flex-1 sm:flex-none bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs"
                onClick={acceptAll}
              >
                Aceitar Todos
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
