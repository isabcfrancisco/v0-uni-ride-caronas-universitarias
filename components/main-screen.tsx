"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Car, MapPin, Clock, DollarSign, Plus, Search, User, Bell, Navigation } from "lucide-react"
import type { Ride, User as UserType } from "@/app/page"

const mockRides: Ride[] = [
  {
    id: "1",
    driver: {
      id: "2",
      name: "Maria Santos",
      email: "maria@example.com",
      photo: "/estudante-universitaria-brasileira.jpg",
      rating: 4.9,
      ridesOffered: 67,
      ridesTaken: 12,
      age: 21,
      city: "Piracicaba",
      university: "ESALQ-USP",
      course: "Medicina",
      semester: 6,
    },
    origin: "Campus ESALQ",
    destination: "Centro - Piracicaba",
    time: "18:30",
    date: "Hoje",
    seats: 3,
    price: 8,
  },
  {
    id: "2",
    driver: {
      id: "3",
      name: "Pedro Costa",
      email: "pedro@example.com",
      photo: "/estudante-universitario-brasileiro.jpg",
      rating: 4.7,
      ridesOffered: 43,
      ridesTaken: 8,
      age: 23,
      city: "Piracicaba",
      university: "UNIMEP",
      course: "Engenharia",
      semester: 8,
    },
    origin: "Campus UNIMEP",
    destination: "Bairro Paulista - Piracicaba",
    time: "19:00",
    date: "Hoje",
    seats: 2,
    price: 6,
  },
  {
    id: "3",
    driver: {
      id: "4",
      name: "Ana Oliveira",
      email: "ana@example.com",
      photo: "/estudante-universit-rio-brasileiro.jpg",
      rating: 5.0,
      ridesOffered: 89,
      ridesTaken: 5,
      age: 20,
      city: "Piracicaba",
      university: "ESALQ-USP",
      course: "Administração",
      semester: 4,
    },
    origin: "Campus ESALQ",
    destination: "Vila Rezende - Piracicaba",
    time: "17:45",
    date: "Hoje",
    seats: 4,
    price: 7,
  },
]

export default function MainScreen({
  user,
  onCreateRide,
  onSelectRide,
  onViewProfile,
  onViewRequests,
  onViewActiveRide,
}: {
  user: UserType
  onCreateRide: () => void
  onSelectRide: (ride: Ride) => void
  onViewProfile: () => void
  onViewRequests?: () => void
  onViewActiveRide?: () => void
}) {
  const [searchQuery, setSearchQuery] = useState("")
  const [pendingRequests] = useState(2)

  const filteredRides = mockRides.filter(
    (ride) =>
      ride.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.driver.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ride.origin.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 pt-4 pb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Car className="w-6 h-6" />
            <h1 className="text-xl font-bold">UniRide</h1>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={onViewRequests}
              className="relative w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center"
            >
              <Bell className="w-5 h-5" />
              {pendingRequests > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-secondary text-secondary-foreground rounded-full text-xs font-bold flex items-center justify-center">
                  {pendingRequests}
                </span>
              )}
            </button>
            <button
              onClick={onViewProfile}
              className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center"
            >
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar destino ou motorista..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12 bg-card text-card-foreground"
          />
        </div>
      </div>

      <div className="px-6 py-4 bg-muted/30 border-b space-y-3">
        <Button onClick={onCreateRide} className="w-full h-12">
          <Plus className="w-5 h-5 mr-2" />
          Criar Nova Carona
        </Button>
        <Button onClick={onViewActiveRide} variant="outline" className="w-full h-12 bg-transparent">
          <Navigation className="w-5 h-5 mr-2" />
          Minha Carona
        </Button>
      </div>

      <div className="relative h-48 bg-muted overflow-hidden">
        <img
          src="/ilustracao-campus-universitario.jpg"
          alt="Campus Universitário"
          className="absolute inset-0 w-full h-full object-cover opacity-40 animate-city-pan"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-card/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg">
            <p className="text-sm font-medium text-foreground">
              <MapPin className="inline w-4 h-4 mr-1 text-primary" />
              {filteredRides.length} {filteredRides.length === 1 ? "carona disponível" : "caronas disponíveis"}
            </p>
          </div>
        </div>
      </div>

      {/* Rides List */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Caronas disponíveis</h2>
          <span className="text-sm text-muted-foreground">Encontre sua carona</span>
        </div>

        {filteredRides.length === 0 ? (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">Nenhuma carona encontrada</p>
            <p className="text-sm text-muted-foreground">Tente buscar por outro destino ou motorista</p>
          </div>
        ) : (
          filteredRides.map((ride) => (
            <button
              key={ride.id}
              onClick={() => onSelectRide(ride)}
              className="w-full bg-card rounded-xl p-4 shadow-sm border border-border hover:shadow-md transition-shadow text-left"
            >
              <div className="flex items-start gap-3">
                <img
                  src={ride.driver.photo || "/placeholder.svg"}
                  alt={ride.driver.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-foreground truncate">{ride.driver.name}</h3>
                  </div>

                  <div className="space-y-1.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="truncate">
                        {ride.origin} → {ride.destination}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{ride.time}</span>
                        </div>
                        <div className="flex items-center gap-1 text-primary font-medium">
                          <DollarSign className="w-4 h-4" />
                          <span>R$ {ride.price}</span>
                        </div>
                      </div>
                      <span className="text-xs bg-muted px-2 py-1 rounded">{ride.seats} vagas</span>
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))
        )}
      </div>
    </div>
  )
}
