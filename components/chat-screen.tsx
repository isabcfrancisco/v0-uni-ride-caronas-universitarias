"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send } from "lucide-react"
import type { User, Message } from "@/app/page"

const mockMessages: Message[] = [
  {
    id: "1",
    senderId: "driver",
    text: "Olá! Estou a caminho do ponto de encontro.",
    timestamp: "18:25",
  },
  {
    id: "2",
    senderId: "passenger",
    text: "Ótimo! Já estou esperando aqui.",
    timestamp: "18:26",
  },
  {
    id: "3",
    senderId: "driver",
    text: "Chego em 5 minutos!",
    timestamp: "18:27",
  },
]

export default function ChatScreen({ driver, onBack }: { driver: User; onBack: () => void }) {
  const [messages, setMessages] = useState<Message[]>(mockMessages)
  const [newMessage, setNewMessage] = useState("")

  const handleSend = () => {
    if (newMessage.trim()) {
      const message: Message = {
        id: Date.now().toString(),
        senderId: "passenger",
        text: newMessage,
        timestamp: new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, message])
      setNewMessage("")
    }
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
          <img src={driver.photo || "/placeholder.svg"} alt={driver.name} className="w-10 h-10 rounded-full" />
          <div className="flex-1">
            <h1 className="text-lg font-bold">{driver.name}</h1>
            <p className="text-xs text-primary-foreground/80">Online</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.senderId === "passenger" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                message.senderId === "passenger"
                  ? "bg-primary text-primary-foreground rounded-br-sm"
                  : "bg-muted text-foreground rounded-bl-sm"
              }`}
            >
              <p className="text-sm">{message.text}</p>
              <p
                className={`text-xs mt-1 ${message.senderId === "passenger" ? "text-primary-foreground/70" : "text-muted-foreground"}`}
              >
                {message.timestamp}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="bg-card px-6 py-4 border-t border-border">
        <div className="flex items-center gap-2">
          <Input
            type="text"
            placeholder="Digite sua mensagem..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            className="flex-1 h-12"
          />
          <Button onClick={handleSend} size="icon" className="h-12 w-12 flex-shrink-0">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
