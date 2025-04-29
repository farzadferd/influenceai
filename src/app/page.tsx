import React from 'react'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Welcome to InfluenceAI</h1>
        <Button className="mt-4">Get Started</Button>
      </div>
    </main>
  )
} 