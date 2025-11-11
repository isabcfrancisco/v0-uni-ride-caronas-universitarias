"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, MapPin, Clock, Users, DollarSign } from "lucide-react"
import type { User } from "@/app/page"

export default function CreateRideScreen({
  user,
  onBack,
  onCreateSuccess,
}: {
  user: User
  onBack: () => void
  onCreateSuccess: () => void
}) {
  const [origin, setOrigin] = useState("")
  const [destination, setDestination] = useState("")
  const [date, setDate] = useState("")
  const [time, setTime] = useState("")
  const [seats, setSeats] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate ride creation
    setTimeout(() => {
      onCreateSuccess()
    }, 500)
  }

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
          <h1 className="text-xl font-bold">Criar Carona</h1>
        </div>
      </div>

      {/* Form */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="origin" className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              Origem
            </Label>
            <Input
              id="origin"
              type="text"
              placeholder="Ex: Campus Central"
              value={origin}
              onChange={(e) => setOrigin(e.target.value)}
              className="h-12"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="destination" className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-secondary" />
              Destino
            </Label>
            <Input
              id="destination"
              type="text"
              placeholder="Ex: Centro - São Paulo"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="h-12"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Data</Label>
              <Input
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                Horário
              </Label>
              <Input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="h-12"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="seats" className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary" />
                Vagas
              </Label>
              <Input
                id="seats"
                type="number"
                min="1"
                max="6"
                placeholder="1-6"
                value={seats}
                onChange={(e) => setSeats(e.target.value)}
                className="h-12"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="price" className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-secondary" />
                Valor (R$)
              </Label>
              <Input
                id="price"
                type="number"
                min="0"
                step="0.01"
                placeholder="15.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="h-12"
                required
              />
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-4 space-y-2">
            <h3 className="font-medium text-sm">Informações importantes</h3>
            <ul className="text-xs text-muted-foreground space-y-1">
              <li>• Seja pontual no horário combinado</li>
              <li>• Mantenha o veículo limpo e organizado</li>
              <li>• Respeite as regras de trânsito</li>
              <li>• Seja cordial com os passageiros</li>
            </ul>
          </div>

          <Button type="submit" className="w-full h-12 text-base font-medium">
            Criar Carona
          </Button>
        </form>
      </div>
    </div>
  )
}
