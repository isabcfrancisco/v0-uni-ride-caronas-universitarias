"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, X } from "lucide-react"
import type { Ride } from "@/app/page"

export default function WaitingScreen({
  ride,
  onBack,
  onAccepted,
}: {
  ride: Ride
  onBack: () => void
  onAccepted: () => void
}) {
  const [dots, setDots] = useState(".")
  const [showCancelNotification, setShowCancelNotification] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "." : prev + "."))
    }, 500)

    // Simular aceitação após 5 segundos
    const timeout = setTimeout(() => {
      onAccepted()
    }, 5000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [onAccepted])

  const handleCancel = () => {
    setShowCancelNotification(true)
    setTimeout(() => {
      onBack()
    }, 2000)
  }

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold">Aguardando Confirmação</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mb-6 animate-pulse">
          <Clock className="w-16 h-16 text-primary" />
        </div>

        <h2 className="text-2xl font-bold text-foreground mb-2 text-center">Aguardando motorista{dots}</h2>
        <p className="text-muted-foreground text-center mb-8">Sua solicitação foi enviada para {ride.driver.name}</p>

        {/* Driver Info */}
        <div className="w-full bg-card rounded-xl p-4 shadow-sm border border-border mb-6">
          <div className="flex items-center gap-3">
            <img
              src={ride.driver.photo || "/placeholder.svg"}
              alt={ride.driver.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="flex-1">
              <h3 className="font-semibold text-foreground">{ride.driver.name}</h3>
              <p className="text-sm text-muted-foreground">
                {ride.origin} → {ride.destination}
              </p>
              <p className="text-sm text-primary font-medium mt-1">{ride.time}</p>
            </div>
          </div>
        </div>

        <Button onClick={handleCancel} variant="outline" className="w-full h-12 gap-2 bg-transparent">
          <X className="w-5 h-5" />
          Cancelar Solicitação
        </Button>
      </div>

      {/* Notification */}
      {showCancelNotification && (
        <div className="absolute top-20 left-4 right-4 bg-destructive text-destructive-foreground px-4 py-3 rounded-lg shadow-lg animate-in slide-in-from-top">
          <p className="font-medium text-center">Sua carona foi cancelada!</p>
        </div>
      )}
    </div>
  )
}
