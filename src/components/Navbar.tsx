import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          InfluenceAI
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/dashboard">
            <Button variant="ghost">Dashboard</Button>
          </Link>
          <Link href="/analytics">
            <Button variant="ghost">Analytics</Button>
          </Link>
          <Link href="/recommendations">
            <Button variant="ghost">Recommendations</Button>
          </Link>
          <Button variant="default">Sign In</Button>
        </div>
      </div>
    </nav>
  )
} 