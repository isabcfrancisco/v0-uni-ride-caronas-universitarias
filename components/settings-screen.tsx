"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Bell, Lock, MapPin, HelpCircle, LogOut } from "lucide-react"

export default function SettingsScreen({ onBack }: { onBack: () => void }) {
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
          <h1 className="text-xl font-bold">Configurações</h1>
          <div className="w-10" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto">
        {/* Notifications */}
        <div className="px-6 py-6 border-b border-border">
          <h3 className="font-semibold text-foreground mb-4">Notificações</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm font-medium text-foreground">Notificações Push</p>
                  <p className="text-xs text-muted-foreground">Receber alertas de caronas</p>
                </div>
              </div>
              <input type="checkbox" defaultChecked className="w-5 h-5 accent-primary" />
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="px-6 py-6 border-b border-border">
          <h3 className="font-semibold text-foreground mb-4">Segurança</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center gap-3 text-left">
              <MapPin className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Localização</p>
                <p className="text-xs text-muted-foreground">Gerenciar permissões de localização</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 text-left">
              <Lock className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Alterar Senha</p>
                <p className="text-xs text-muted-foreground">Atualizar sua senha de acesso</p>
              </div>
            </button>
          </div>
        </div>

        {/* Support */}
        <div className="px-6 py-6 border-b border-border">
          <h3 className="font-semibold text-foreground mb-4">Suporte</h3>
          <div className="space-y-4">
            <button className="w-full flex items-center gap-3 text-left">
              <HelpCircle className="w-5 h-5 text-primary" />
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Central de Ajuda</p>
                <p className="text-xs text-muted-foreground">Perguntas frequentes e suporte</p>
              </div>
            </button>
          </div>
        </div>

        {/* Account */}
        <div className="px-6 py-6">
          <Button
            variant="destructive"
            className="w-full h-12 bg-destructive/10 text-destructive hover:bg-destructive/20"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Sair da Conta
          </Button>
        </div>
      </div>
    </div>
  )
}
