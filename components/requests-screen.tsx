"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowLeft, User, Star, CheckCircle, XCircle } from "lucide-react"

type Request = {
  id: string
  passenger: {
    id: string
    name: string
    photo: string
    rating: number
    university: string
    course: string
  }
  status: "pending" | "accepted" | "rejected"
}

const mockRequests: Request[] = [
  {
    id: "1",
    passenger: {
      id: "5",
      name: "João Silva",
      photo: "/estudante-universitario-brasileiro.jpg",
      rating: 4.8,
      university: "USP",
      course: "Engenharia",
    },
    status: "pending",
  },
  {
    id: "2",
    passenger: {
      id: "6",
      name: "Carla Mendes",
      photo: "/estudante-universitaria-brasileira.jpg",
      rating: 4.9,
      university: "USP",
      course: "Medicina",
    },
    status: "pending",
  },
]

export default function RequestsScreen({ onBack }: { onBack: () => void }) {
  const [requests, setRequests] = useState<Request[]>(mockRequests)

  const handleAccept = (requestId: string) => {
    setRequests((prev) => prev.map((req) => (req.id === requestId ? { ...req, status: "accepted" as const } : req)))
  }

  const handleReject = (requestId: string) => {
    setRequests((prev) => prev.map((req) => (req.id === requestId ? { ...req, status: "rejected" as const } : req)))
  }

  const pendingRequests = requests.filter((req) => req.status === "pending")

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-4">
        <div className="flex items-center gap-3 mb-2">
          <button onClick={onBack} className="p-2 -ml-2 hover:bg-primary-foreground/10 rounded-full">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-xl font-bold">Solicitações</h1>
        </div>
        <p className="text-sm text-primary-foreground/80">
          {pendingRequests.length} {pendingRequests.length === 1 ? "solicitação pendente" : "solicitações pendentes"}
        </p>
      </div>

      {/* Requests List */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
        {requests.length === 0 ? (
          <div className="text-center py-12">
            <User className="w-12 h-12 text-muted-foreground mx-auto mb-3" />
            <p className="text-muted-foreground">Nenhuma solicitação</p>
            <p className="text-sm text-muted-foreground">Quando alguém solicitar sua carona, aparecerá aqui</p>
          </div>
        ) : (
          requests.map((request) => (
            <div key={request.id} className="bg-card rounded-xl p-4 shadow-sm border border-border">
              <div className="flex items-start gap-3 mb-3">
                <img
                  src={request.passenger.photo || "/placeholder.svg"}
                  alt={request.passenger.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{request.passenger.name}</h3>
                  <div className="flex items-center gap-1 text-secondary text-sm">
                    <Star className="w-4 h-4 fill-current" />
                    <span>{request.passenger.rating}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    {request.passenger.course} - {request.passenger.university}
                  </p>
                </div>
              </div>

              {request.status === "pending" && (
                <div className="flex gap-2">
                  <Button onClick={() => handleAccept(request.id)} className="flex-1 h-10">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Aceitar
                  </Button>
                  <Button
                    onClick={() => handleReject(request.id)}
                    variant="outline"
                    className="flex-1 h-10 bg-transparent"
                  >
                    <XCircle className="w-4 h-4 mr-2" />
                    Recusar
                  </Button>
                </div>
              )}

              {request.status === "accepted" && (
                <div className="bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-2 rounded-lg text-sm font-medium text-center">
                  ✓ Solicitação aceita
                </div>
              )}

              {request.status === "rejected" && (
                <div className="bg-red-500/10 text-red-600 dark:text-red-400 px-3 py-2 rounded-lg text-sm font-medium text-center">
                  ✗ Solicitação recusada
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  )
}
