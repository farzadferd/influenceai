
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Instagram, Youtube, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import { useToast } from "@/hooks/use-toast";

const ConnectSocial = () => {
  const [connections, setConnections] = useState({
    instagram: { connected: true, username: "@johndoe" },
    youtube: { connected: true, channel: "John Doe" },
    tiktok: { connected: false, username: "" },
    twitter: { connected: false, username: "" }
  });

  const { toast } = useToast();

  const handleConnect = (platform: string) => {
    toast({
      title: "Connection Successful!",
      description: `Your ${platform} account has been connected.`,
    });
  };

  const platforms = [
    {
      id: "instagram",
      name: "Instagram",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      description: "Connect your Instagram account to analyze your posts, stories, and engagement.",
      connected: connections.instagram.connected,
      username: connections.instagram.username
    },
    {
      id: "youtube",
      name: "YouTube",
      icon: Youtube,
      color: "from-red-500 to-red-600",
      description: "Analyze your video performance, subscriber growth, and optimize your content.",
      connected: connections.youtube.connected,
      username: connections.youtube.channel
    },
    {
      id: "tiktok",
      name: "TikTok",
      icon: () => (
        <div className="w-6 h-6 bg-black rounded-lg flex items-center justify-center">
          <span className="text-white text-xs font-bold">T</span>
        </div>
      ),
      color: "from-black to-gray-800",
      description: "Track your viral content and understand what makes your TikToks successful.",
      connected: connections.tiktok.connected,
      username: connections.tiktok.username
    },
    {
      id: "twitter",
      name: "Twitter/X",
      icon: () => (
        <div className="w-6 h-6 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white text-xs font-bold">X</span>
        </div>
      ),
      color: "from-blue-500 to-blue-600",
      description: "Monitor your tweets, retweets, and engagement metrics.",
      connected: connections.twitter.connected,
      username: connections.twitter.username
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Connect Social Media</h1>
          <p className="text-gray-600">Link your social media accounts to start getting AI-powered insights and recommendations.</p>
        </div>

        <div className="grid gap-6">
          {platforms.map((platform) => (
            <Card key={platform.id} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-lg flex items-center justify-center`}>
                      <platform.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-semibold text-gray-800">{platform.name}</h3>
                        {platform.connected ? (
                          <CheckCircle className="w-5 h-5 text-green-500" />
                        ) : (
                          <AlertCircle className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{platform.description}</p>
                      
                      {platform.connected ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <p className="text-green-800 font-medium">
                            Connected: {platform.username}
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor={`${platform.id}-username`}>Username/Handle</Label>
                            <Input
                              id={`${platform.id}-username`}
                              placeholder={`Enter your ${platform.name} username`}
                              className="mt-1"
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="ml-4">
                    {platform.connected ? (
                      <Button variant="outline" size="sm">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Manage
                      </Button>
                    ) : (
                      <Button 
                        onClick={() => handleConnect(platform.name)}
                        className={`bg-gradient-to-r ${platform.color} hover:opacity-90`}
                      >
                        Connect Account
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mt-8">
          <CardHeader>
            <CardTitle>Why Connect Your Accounts?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Data Privacy</h4>
                <p className="text-gray-600 text-sm">
                  We only access public metrics and never post on your behalf. Your login credentials are secured with enterprise-grade encryption.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">AI Analysis</h4>
                <p className="text-gray-600 text-sm">
                  Our AI analyzes your content patterns, engagement trends, and audience behavior to provide personalized recommendations.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ConnectSocial;