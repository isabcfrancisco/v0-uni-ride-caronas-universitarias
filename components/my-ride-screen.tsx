"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, MapPin, Clock, DollarSign, Users, Navigation, XCircle } from "lucide-react"
import type { User } from "@/app/page"

const mockActiveRide = {
  id: "1",
  origin: "Campus Central",
  destination: "Centro - São Paulo",
  time: "18:30",
  date: "Hoje",
  seats: 3,
  price: 15,
  confirmedPassengers: [
    {
      id: "5",
      name: "João Silva",
      photo: "/estudante-universitario-brasileiro.jpg",
      rating: 4.8,
    },
    {
      id: "6",
      name: "Carla Mendes",
      photo: "/estudante-universitaria-brasileira.jpg",
      rating: 4.9,
    },
  ],
}

export default function MyRideScreen({ user, onBack }: { user: User; onBack: () => void }) {
  const hasActiveRide = true // Simulação - pode ser controlado por estado

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-4">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-primary-foreground/10 rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold">Minha Carona</h1>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4">
        {!hasActiveRide ? (
          <div className="text-center py-12">
            <Navigation className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">Você não tem caronas ativas</p>
            <p className="text-sm text-muted-foreground">Crie uma nova carona para começar</p>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Ride Details Card */}
            <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
              <h2 className="font-semibold text-lg mb-3">Detalhes da Carona</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Origem</p>
                    <p className="font-medium">{mockActiveRide.origin}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="text-sm text-muted-foreground">Destino</p>
                    <p className="font-medium">{mockActiveRide.destination}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">{mockActiveRide.time}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-5 h-5 text-primary" />
                    <span className="font-medium">R$ {mockActiveRide.price}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">{mockActiveRide.seats} vagas</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirmed Passengers */}
            <div className="bg-card rounded-xl p-4 shadow-sm border border-border">
              <h2 className="font-semibold text-lg mb-3">
                Passageiros Confirmados ({mockActiveRide.confirmedPassengers.length})
              </h2>
              <div className="space-y-3">
                {mockActiveRide.confirmedPassengers.map((passenger) => (
                  <div key={passenger.id} className="flex items-center gap-3">
                    <img
                      src={passenger.photo || "/placeholder.svg"}
                      alt={passenger.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-medium">{passenger.name}</p>
                      <p className="text-sm text-muted-foreground">⭐ {passenger.rating}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-2">
              <Button className="w-full h-12">
                <Navigation className="w-5 h-5 mr-2" />
                Iniciar Carona
              </Button>
              <Button variant="outline" className="w-full h-12 bg-transparent text-red-600 hover:text-red-700">
                <XCircle className="w-5 h-5 mr-2" />
                Cancelar Carona
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
