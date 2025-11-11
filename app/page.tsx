"use client"

import { useState } from "react"
import WelcomeScreen from "@/components/welcome-screen"
import MainScreen from "@/components/main-screen"
import CreateRideScreen from "@/components/create-ride-screen"
import RideDetailsScreen from "@/components/ride-details-screen"
import RatingScreen from "@/components/rating-screen"
import ProfileScreen from "@/components/profile-screen"
import EditProfileScreen from "@/components/edit-profile-screen"
import SettingsScreen from "@/components/settings-screen"
import WaitingScreen from "@/components/waiting-screen"
import LiveTrackingScreen from "@/components/live-tracking-screen"
import ChatScreen from "@/components/chat-screen"
import CallScreen from "@/components/call-screen"
import RequestsScreen from "@/components/requests-screen"
import MyRideScreen from "@/components/my-ride-screen"

export type User = {
  id: string
  name: string
  email: string
  phone?: string
  photo: string
  rating: number
  ridesOffered: number
  ridesTaken: number
  age: number
  city: string
  university: string
  course: string
  semester: number
}

export type Ride = {
  id: string
  driver: User
  origin: string
  destination: string
  time: string
  date: string
  seats: number
  price: number
}

export type Message = {
  id: string
  senderId: string
  text: string
  timestamp: string
}

export default function UniRideApp() {
  const [currentScreen, setCurrentScreen] = useState<
    | "welcome"
    | "main"
    | "create"
    | "details"
    | "rating"
    | "profile"
    | "editProfile"
    | "settings"
    | "waiting"
    | "tracking"
    | "chat"
    | "call"
    | "requests"
    | "myRide"
  >("welcome")
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [selectedRide, setSelectedRide] = useState<Ride | null>(null)

  const handleLogin = (user: User) => {
    setCurrentUser(user)
    setCurrentScreen("main")
  }

  const handleSelectRide = (ride: Ride) => {
    setSelectedRide(ride)
    setCurrentScreen("details")
  }

  const handleRideRequest = () => {
    setCurrentScreen("waiting")
  }

  const handleRideAccepted = () => {
    setCurrentScreen("tracking")
  }

  const handleOpenChat = () => {
    setCurrentScreen("chat")
  }

  const handleOpenCall = () => {
    setCurrentScreen("call")
  }

  const handleEndCall = () => {
    setCurrentScreen("tracking")
  }

  const handleCompleteRide = () => {
    setCurrentScreen("rating")
  }

  const handleSaveProfile = (updatedUser: Partial<User>) => {
    if (currentUser) {
      setCurrentUser({ ...currentUser, ...updatedUser })
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md h-[812px] bg-card rounded-[2.5rem] shadow-2xl overflow-hidden relative border-8 border-foreground/10">
        {/* Status Bar */}
        <div className="absolute top-0 left-0 right-0 h-11 bg-card z-50 flex items-center justify-between px-8 pt-2">
          <span className="text-xs font-medium text-foreground">9:41</span>
          <div className="flex items-center gap-1">
            <div className="w-4 h-3 border border-foreground/30 rounded-sm relative">
              <div className="absolute inset-0.5 bg-foreground rounded-[1px]" />
            </div>
          </div>
        </div>

        {/* Screen Content */}
        <div className="h-full pt-11">
          {currentScreen === "welcome" && <WelcomeScreen onLogin={handleLogin} />}
          {currentScreen === "main" && currentUser && (
            <MainScreen
              user={currentUser}
              onCreateRide={() => setCurrentScreen("create")}
              onSelectRide={handleSelectRide}
              onViewProfile={() => setCurrentScreen("profile")}
              onViewRequests={() => setCurrentScreen("requests")}
              onViewActiveRide={() => setCurrentScreen("myRide")}
            />
          )}
          {currentScreen === "create" && currentUser && (
            <CreateRideScreen user={currentUser} onBack={() => setCurrentScreen("main")} />
          )}
          {currentScreen === "details" && selectedRide && (
            <RideDetailsScreen
              ride={selectedRide}
              onBack={() => setCurrentScreen("main")}
              onRequestRide={handleRideRequest}
              onViewProfile={() => setCurrentScreen("profile")}
            />
          )}
          {currentScreen === "waiting" && selectedRide && (
            <WaitingScreen
              ride={selectedRide}
              onBack={() => setCurrentScreen("main")}
              onAccepted={handleRideAccepted}
            />
          )}
          {currentScreen === "tracking" && selectedRide && (
            <LiveTrackingScreen
              ride={selectedRide}
              onOpenChat={handleOpenChat}
              onOpenCall={handleOpenCall}
              onComplete={handleCompleteRide}
            />
          )}
          {currentScreen === "chat" && selectedRide && (
            <ChatScreen driver={selectedRide.driver} onBack={() => setCurrentScreen("tracking")} />
          )}
          {currentScreen === "call" && selectedRide && (
            <CallScreen driver={selectedRide.driver} onEndCall={handleEndCall} />
          )}
          {currentScreen === "rating" && selectedRide && (
            <RatingScreen driver={selectedRide.driver} onSubmit={() => setCurrentScreen("main")} />
          )}
          {currentScreen === "profile" && currentUser && (
            <ProfileScreen
              user={currentUser}
              onBack={() => setCurrentScreen("main")}
              onEditProfile={() => setCurrentScreen("editProfile")}
              onSettings={() => setCurrentScreen("settings")}
            />
          )}
          {currentScreen === "editProfile" && currentUser && (
            <EditProfileScreen
              user={currentUser}
              onBack={() => setCurrentScreen("profile")}
              onSave={handleSaveProfile}
            />
          )}
          {currentScreen === "settings" && <SettingsScreen onBack={() => setCurrentScreen("profile")} />}
          {currentScreen === "requests" && currentUser && <RequestsScreen onBack={() => setCurrentScreen("main")} />}
          {currentScreen === "myRide" && currentUser && (
            <MyRideScreen user={currentUser} onBack={() => setCurrentScreen("main")} />
          )}
        </div>
      </div>
    </div>
  )
}
