"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Camera } from "lucide-react"
import type { User } from "@/app/page"

export default function EditProfileScreen({
  user,
  onBack,
  onSave,
}: { user: User; onBack: () => void; onSave?: (updatedUser: Partial<User>) => void }) {
  const [name, setName] = useState(user.name)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone || "")
  const [age, setAge] = useState(user.age.toString())
  const [city, setCity] = useState(user.city)
  const [university, setUniversity] = useState(user.university)
  const [course, setCourse] = useState(user.course)
  const [semester, setSemester] = useState(user.semester.toString())

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSave) {
      onSave({
        name,
        email,
        phone,
        age: Number.parseInt(age),
        city,
        university,
        course,
        semester: Number.parseInt(semester),
      })
    }
    onBack()
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
          <h1 className="text-xl font-bold">Editar Perfil</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Photo */}
          <div className="flex flex-col items-center mb-6">
            <div className="relative">
              <img
                src={user.photo || "/placeholder.svg"}
                alt={user.name}
                className="w-28 h-28 rounded-full object-cover"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center shadow-lg"
              >
                <Camera className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Personal Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Informações Pessoais</h3>

            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className="h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="(19) 99999-9999"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="age">Idade</Label>
                <Input
                  id="age"
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  className="h-12"
                  min="16"
                  max="100"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">Cidade</Label>
                <Input id="city" type="text" value={city} onChange={(e) => setCity(e.target.value)} className="h-12" />
              </div>
            </div>
          </div>

          {/* Academic Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Informações Acadêmicas</h3>

            <div className="space-y-2">
              <Label htmlFor="university">Faculdade</Label>
              <Input
                id="university"
                type="text"
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="course">Curso</Label>
              <Input
                id="course"
                type="text"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="semester">Semestre</Label>
              <Input
                id="semester"
                type="number"
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                className="h-12"
                min="1"
                max="12"
              />
            </div>
          </div>
        </form>
      </div>

      {/* Bottom Actions */}
      <div className="p-6 border-t border-border bg-card space-y-3">
        <Button onClick={handleSubmit} className="w-full h-12">
          Salvar Alterações
        </Button>
        <Button onClick={onBack} variant="outline" className="w-full h-12 bg-transparent">
          Cancelar
        </Button>
      </div>
    </div>
  )
}
