"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Clock, Users, DollarSign, Star, User } from "lucide-react"
import type { Ride } from "@/app/page"

export default function RideDetailsScreen({
  ride,
  onBack,
  onRequestRide,
  onViewProfile,
}: {
  ride: Ride
  onBack: () => void
  onRequestRide: () => void
  onViewProfile: () => void
}) {
  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold">Detalhes da Carona</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Driver Info */}
        <div className="bg-card px-6 py-6 border-b border-border">
          <div className="flex items-center gap-4">
            <img
              src={ride.driver.photo || "/placeholder.svg"}
              alt={ride.driver.name}
              className="w-20 h-20 rounded-full object-cover"
            />
            <div className="flex-1">
              <h2 className="text-xl font-bold text-foreground mb-1">{ride.driver.name}</h2>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 text-secondary fill-current" />
                  <span className="font-medium text-foreground">{ride.driver.rating}</span>
                </div>
                <span>•</span>
                <span>{ride.driver.ridesOffered} caronas</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button onClick={onViewProfile} variant="outline" className="flex-1 gap-2 bg-transparent">
              <User className="w-4 h-4" />
              Ver Perfil
            </Button>
          </div>
        </div>

        {/* Route Info */}
        <div className="px-6 py-6 space-y-4">
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 pt-2">
                <p className="text-xs text-muted-foreground mb-1">Origem</p>
                <p className="font-semibold text-foreground">{ride.origin}</p>
              </div>
            </div>

            <div className="ml-5 border-l-2 border-dashed border-border h-8" />

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-secondary" />
              </div>
              <div className="flex-1 pt-2">
                <p className="text-xs text-muted-foreground mb-1">Destino</p>
                <p className="font-semibold text-foreground">{ride.destination}</p>
              </div>
            </div>
          </div>

          {/* Trip Details */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs">Horário</span>
              </div>
              <p className="font-semibold text-foreground">{ride.time}</p>
              <p className="text-xs text-muted-foreground">{ride.date}</p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs">Vagas</span>
              </div>
              <p className="font-semibold text-foreground">{ride.seats} disponíveis</p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <DollarSign className="w-4 h-4" />
                <span className="text-xs">Valor</span>
              </div>
              <p className="font-semibold text-foreground">R$ {ride.price.toFixed(2)}</p>
            </div>

            <div className="bg-muted/50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <MapPin className="w-4 h-4" />
                <span className="text-xs">Distância</span>
              </div>
              <p className="font-semibold text-foreground">{ride.distance}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="p-6 border-t border-border bg-card">
        <Button onClick={onRequestRide} className="w-full h-14 text-base font-medium">
          Pedir Carona
        </Button>
      </div>
    </div>
  )
}
