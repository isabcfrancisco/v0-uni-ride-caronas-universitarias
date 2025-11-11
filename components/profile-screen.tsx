"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Car, Users, MapPin, Settings, GraduationCap, Phone } from "lucide-react"
import type { User } from "@/app/page"

export default function ProfileScreen({
  user,
  onBack,
  onEditProfile,
  onSettings,
}: {
  user: User
  onBack: () => void
  onEditProfile?: () => void
  onSettings?: () => void
}) {
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
          <h1 className="text-xl font-bold">Perfil</h1>
          <button
            onClick={onSettings}
            className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Profile Header */}
        <div className="bg-card px-6 py-8 border-b border-border">
          <div className="flex flex-col items-center">
            <img
              src={user.photo || "/placeholder.svg"}
              alt={user.name}
              className="w-28 h-28 rounded-full object-cover mb-4"
            />
            <h2 className="text-2xl font-bold text-foreground mb-1">{user.name}</h2>
            <p className="text-sm text-muted-foreground mb-1">{user.email}</p>
            {user.phone && (
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <Phone className="w-3 h-3" />
                {user.phone}
              </p>
            )}
            <p className="text-sm text-muted-foreground">
              {user.age} anos • {user.city}
            </p>
          </div>
        </div>

        <div className="px-6 py-6 border-b border-border">
          <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-primary" />
            Informações Acadêmicas
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Faculdade</span>
              <span className="text-sm font-medium text-foreground">{user.university}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Curso</span>
              <span className="text-sm font-medium text-foreground">{user.course}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Semestre</span>
              <span className="text-sm font-medium text-foreground">{user.semester}º semestre</span>
            </div>
          </div>
        </div>

        <div className="px-6 py-6">
          <h3 className="font-semibold text-foreground mb-4">Estatísticas</h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Car className="w-5 h-5" />
                <span className="text-sm font-medium">Caronas oferecidas</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{user.ridesOffered}</p>
            </div>

            <div className="bg-primary/5 rounded-xl p-4 border border-primary/20">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">Caronas realizadas</span>
              </div>
              <p className="text-2xl font-bold text-foreground">{user.ridesTaken}</p>
            </div>

            <div className="bg-secondary/5 rounded-xl p-4 border border-secondary/20 col-span-2">
              <div className="flex items-center gap-2 text-secondary mb-2">
                <MapPin className="w-5 h-5" />
                <span className="text-sm font-medium">Km percorridos</span>
              </div>
              <p className="text-2xl font-bold text-foreground">1.234</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action */}
      <div className="p-6 border-t border-border bg-card">
        <Button onClick={onEditProfile} variant="outline" className="w-full h-12 bg-transparent">
          Editar Perfil
        </Button>
      </div>
    </div>
  )
}
