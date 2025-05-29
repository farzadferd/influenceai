import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Users, Clock, Instagram, Youtube, Plus, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";

const Dashboard = () => {
  const stats = [
    { title: "Total Followers", value: "12,849", change: "+12%", icon: Users },
    { title: "Engagement Rate", value: "4.2%", change: "+0.8%", icon: TrendingUp },
    { title: "Posts This Month", value: "23", change: "+5", icon: BarChart3 },
    { title: "Avg. Response Time", value: "2.4h", change: "-30min", icon: Clock },
  ];

  const connectedAccounts = [
    { platform: "Instagram", username: "@johndoe", followers: "8.5K", connected: true, icon: Instagram },
    { platform: "YouTube", username: "John Doe", followers: "4.3K", connected: true, icon: Youtube },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your social media performance overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Connected Accounts */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Connected Accounts</span>
                <Link to="/connect">
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                    <Plus className="w-4 h-4 mr-2" />
                    Connect
                  </Button>
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {connectedAccounts.map((account, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50/50">
                    <div className="flex items-center space-x-3">
                      <account.icon className="w-8 h-8 text-pink-500" />
                      <div>
                        <p className="font-semibold text-gray-800">{account.platform}</p>
                        <p className="text-sm text-gray-600">{account.username}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">{account.followers}</p>
                      <p className="text-sm text-green-600">Connected</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Link to="/recommendations">
                  <Button className="w-full justify-start bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                    <TrendingUp className="w-5 h-5 mr-3" />
                    Get AI Recommendations
                  </Button>
                </Link>
                
                <Link to="/analytics">
                  <Button variant="outline" className="w-full justify-start">
                    <BarChart3 className="w-5 h-5 mr-3" />
                    View Detailed Analytics
                  </Button>
                </Link>
                
                <Link to="/connect">
                  <Button variant="outline" className="w-full justify-start">
                    <Plus className="w-5 h-5 mr-3" />
                    Connect More Accounts
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Performance */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mt-8">
          <CardHeader>
            <CardTitle>Recent Performance Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Engagement Spike Detected</h4>
                  <p className="text-gray-600">Your posts between 2-4 PM are getting 40% more engagement than usual.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 bg-green-50 rounded-lg">
                <Users className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800">Audience Growth</h4>
                  <p className="text-gray-600">You gained 124 new followers this week, mostly from the 25-34 age group.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
