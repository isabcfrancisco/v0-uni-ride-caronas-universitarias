"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Car, MapPin } from "lucide-react"
import type { User } from "@/app/page"

export default function WelcomeScreen({ onLogin }: { onLogin: (user: User) => void }) {
  const [isLogin, setIsLogin] = useState(true)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [university, setUniversity] = useState("")
  const [course, setCourse] = useState("")
  const [semester, setSemester] = useState("")
  const [locationConsent, setLocationConsent] = useState(false)
  const [phone, setPhone] = useState("") // Added state for phone

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const user: User = {
      id: "1",
      name: name || "João Silva",
      email: email || "joao@example.com",
      photo: "/estudante-universit-rio-brasileiro.jpg",
      rating: 4.8,
      ridesOffered: 45,
      ridesTaken: 32,
      age: 22,
      city: "São Paulo",
      university: university || "USP",
      course: course || "Engenharia de Computação",
      semester: Number.parseInt(semester) || 6,
      reviews: [
        {
          id: "1",
          rating: 5,
          comment: "Excelente motorista! Muito pontual e educado.",
          date: "15/01/2025",
          reviewer: "Maria Santos",
        },
        {
          id: "2",
          rating: 4.5,
          comment: "Ótima carona, conversa agradável.",
          date: "10/01/2025",
          reviewer: "Pedro Costa",
        },
        {
          id: "3",
          rating: 5,
          comment: "Super recomendo! Carona tranquila e segura.",
          date: "05/01/2025",
          reviewer: "Ana Oliveira",
        },
      ],
    }
    onLogin(user)
  }

  return (
    <div className="h-full flex flex-col bg-primary text-primary-foreground">
      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-8">
        <div className="flex items-center gap-3 mb-2">
          <Car className="w-10 h-10" />
          <h1 className="text-4xl font-bold">UniRide</h1>
        </div>
        <p className="text-primary-foreground/80 text-center text-sm">
          Conectando estudantes para caronas universitárias
        </p>
      </div>

      {/* Login/Signup Form */}
      <div className="bg-card text-card-foreground rounded-t-[2rem] px-6 py-8 space-y-6 max-h-[70vh] overflow-y-auto">
        <div className="flex gap-2 bg-muted p-1 rounded-lg">
          <button
            onClick={() => setIsLogin(true)}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
              isLogin ? "bg-card shadow-sm" : "text-muted-foreground"
            }`}
          >
            Entrar
          </button>
          <button
            onClick={() => setIsLogin(false)}
            className={`flex-1 py-2 rounded-md text-sm font-medium transition-colors ${
              !isLogin ? "bg-card shadow-sm" : "text-muted-foreground"
            }`}
          >
            Cadastrar
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="space-y-2">
              <Label htmlFor="name">Nome completo</Label>
              <Input
                id="name"
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-12"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Senha</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12"
            />
          </div>

          {!isLogin && (
            <>
              {/* Added field for phone */}
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

              <div className="space-y-2">
                <Label htmlFor="university">Faculdade</Label>
                <Input
                  id="university"
                  type="text"
                  placeholder="Nome da sua faculdade"
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
                  placeholder="Seu curso"
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
                  placeholder="Semestre atual"
                  value={semester}
                  onChange={(e) => setSemester(e.target.value)}
                  className="h-12"
                  min="1"
                  max="12"
                />
              </div>

              <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg border border-border">
                <input
                  type="checkbox"
                  id="location"
                  checked={locationConsent}
                  onChange={(e) => setLocationConsent(e.target.checked)}
                  className="mt-1 w-4 h-4 accent-primary"
                />
                <label htmlFor="location" className="text-sm text-muted-foreground flex-1 cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span className="font-medium text-foreground">Autorização de Localização</span>
                  </div>
                  Concordo em compartilhar minha localização para melhorar a experiência de caronas e segurança.
                </label>
              </div>
            </>
          )}

          <Button type="submit" className="w-full h-12 text-base font-medium">
            {isLogin ? "Entrar" : "Criar conta"}
          </Button>
        </form>
      </div>
    </div>
  )
}
