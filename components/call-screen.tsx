"use client"

import { useState, useEffect } from "react"
import { PhoneOff, Mic, MicOff } from "lucide-react"
import type { User } from "@/app/page"

export default function CallScreen({ driver, onEndCall }: { driver: User; onEndCall: () => void }) {
  const [duration, setDuration] = useState(0)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setDuration((prev) => prev + 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="h-full flex flex-col bg-primary text-primary-foreground">
      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        <div className="mb-8">
          <div className="relative">
            <img
              src={driver.photo || "/placeholder.svg"}
              alt={driver.name}
              className="w-32 h-32 rounded-full object-cover"
            />
            <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-primary-foreground/30 animate-ping" />
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2">{driver.name}</h2>
        <p className="text-primary-foreground/80 mb-8">Ligação em andamento</p>

        <div className="text-5xl font-bold mb-12">{formatDuration(duration)}</div>

        {/* Call Controls */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`w-16 h-16 rounded-full flex items-center justify-center transition-colors ${
              isMuted ? "bg-destructive" : "bg-primary-foreground/20"
            }`}
          >
            {isMuted ? <MicOff className="w-7 h-7" /> : <Mic className="w-7 h-7" />}
          </button>

          <button
            onClick={onEndCall}
            className="w-20 h-20 rounded-full bg-destructive flex items-center justify-center shadow-lg"
          >
            <PhoneOff className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* Info */}
      <div className="px-6 py-8 text-center">
        <p className="text-sm text-primary-foreground/60">Ligação criptografada de ponta a ponta</p>
      </div>
    </div>
  )
}
