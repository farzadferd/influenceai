import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Connect Your Accounts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Instagram</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Connect Instagram</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>YouTube</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Connect YouTube</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>TikTok</CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full">Connect TikTok</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 