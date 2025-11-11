"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"
import type { User } from "@/app/page"

export default function RatingScreen({
  driver,
  onSubmit,
}: {
  driver: User
  onSubmit: () => void
}) {
  const [comment, setComment] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      onSubmit()
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="h-full flex flex-col items-center justify-center bg-background px-6">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        <h2 className="text-2xl font-bold text-foreground mb-2">Feedback enviado!</h2>
        <p className="text-muted-foreground text-center">Obrigado pelo seu comentário</p>
      </div>
    )
  }

  return (
    <div className="h-full flex flex-col bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground px-6 py-6">
        <h1 className="text-xl font-bold text-center">Avaliar Carona</h1>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-8">
        <div className="flex flex-col items-center mb-8">
          <img
            src={driver.photo || "/placeholder.svg"}
            alt={driver.name}
            className="w-24 h-24 rounded-full object-cover mb-4"
          />
          <h2 className="text-xl font-bold text-foreground mb-1">{driver.name}</h2>
          <p className="text-sm text-muted-foreground">Como foi sua experiência?</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Deixe seu comentário</label>
            <Textarea
              placeholder="Conte-nos sobre sua experiência com esta carona..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="min-h-32 resize-none"
              required
            />
          </div>

          <Button type="submit" disabled={!comment.trim()} className="w-full h-12 text-base font-medium">
            Enviar Feedback
          </Button>
        </form>
      </div>
    </div>
  )
}
