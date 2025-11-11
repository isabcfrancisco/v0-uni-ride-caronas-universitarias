"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone, Navigation, MapPin } from "lucide-react"
import type { Ride } from "@/app/page"

export default function LiveTrackingScreen({
  ride,
  onOpenChat,
  onOpenCall,
  onComplete,
}: {
  ride: Ride
  onOpenChat: () => void
  onOpenCall: () => void
  onComplete: () => void
}) {
  const [eta, setEta] = useState(12)

  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => {
        if (prev <= 1) {
          clearInterval(interval)
          setTimeout(onComplete, 1000)
          return 0
        }
        return prev - 1
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Map Section */}
      <div className="relative flex-1 bg-muted">
        <img src="/city-map-route.png" alt="Mapa em tempo real" className="w-full h-full object-cover" />

        {/* Overlay Info */}
        <div className="absolute top-4 left-4 right-4">
          <div className="bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                <span className="font-semibold text-foreground">Carona em andamento</span>
              </div>
              <span className="text-sm text-muted-foreground">{eta} min</span>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <Navigation className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
              <div className="flex-1">
                <p className="text-muted-foreground">Destino</p>
                <p className="font-medium text-foreground">{ride.destination}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Driver Location Marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-primary shadow-lg flex items-center justify-center animate-bounce">
              <MapPin className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="absolute inset-0 w-12 h-12 rounded-full bg-primary/30 animate-ping" />
          </div>
        </div>
      </div>

      {/* Bottom Panel */}
      <div className="bg-card px-6 py-6 border-t border-border">
        {/* Driver Info */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={ride.driver.photo || "/placeholder.svg"}
            alt={ride.driver.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground">{ride.driver.name}</h3>
            <p className="text-sm text-muted-foreground">Chegando em {eta} minutos</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <Button onClick={onOpenChat} variant="outline" className="h-12 gap-2 bg-transparent">
            <MessageCircle className="w-5 h-5" />
            Mensagem
          </Button>
          <Button onClick={onOpenCall} className="h-12 gap-2">
            <Phone className="w-5 h-5" />
            Ligar
          </Button>
        </div>
      </div>
    </div>
  )
}
