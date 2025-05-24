
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, Users, Lightbulb, Calendar, Target, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";

const Recommendations = () => {
  const contentIdeas = [
    {
      type: "Video Tutorial",
      title: "10 Productivity Hacks for Remote Workers",
      reason: "Tutorial content gets 3x more engagement in your niche",
      engagement: "+45%",
      trend: "trending"
    },
    {
      type: "Behind the Scenes",
      title: "My Morning Routine as a Content Creator",
      reason: "Personal content resonates well with your audience",
      engagement: "+32%",
      trend: "popular"
    },
    {
      type: "User-Generated Content",
      title: "Feature Customer Success Stories",
      reason: "UGC increases trust and engagement by 28%",
      engagement: "+28%",
      trend: "recommended"
    },
    {
      type: "Quick Tips",
      title: "5 Minute Social Media Audit Checklist",
      reason: "Quick, actionable content performs well at 2 PM",
      engagement: "+38%",
      trend: "trending"
    }
  ];

  const optimalTimes = [
    { day: "Monday", time: "2:00 PM", engagement: "High", audience: "Professional audience active" },
    { day: "Wednesday", time: "11:00 AM", engagement: "Medium", audience: "Mid-week engagement peak" },
    { day: "Friday", time: "5:00 PM", engagement: "High", audience: "Weekend prep content" },
    { day: "Sunday", time: "7:00 PM", engagement: "Very High", audience: "Peak relaxation time" }
  ];

  const audienceInsights = [
    { segment: "Primary Audience", demographic: "25-34 years", interest: "Productivity & Business", percentage: "42%" },
    { segment: "Secondary Audience", demographic: "35-44 years", interest: "Career Development", percentage: "28%" },
    { segment: "Emerging Audience", demographic: "18-24 years", interest: "Social Media Tips", percentage: "18%" },
  ];

  const getTrendBadge = (trend: string) => {
    const colors = {
      trending: "bg-red-100 text-red-800",
      popular: "bg-blue-100 text-blue-800",
      recommended: "bg-green-100 text-green-800"
    };
    return colors[trend as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-8">
          <div className="flex items-center space-x-3 mb-2">
            <Sparkles className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-800">AI Recommendations</h1>
          </div>
          <p className="text-gray-600">Personalized insights to maximize your social media impact and growth.</p>
        </div>

        {/* Content Ideas */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="w-6 h-6 text-yellow-500" />
              <span>Content Ideas</span>
            </CardTitle>
            <p className="text-gray-600">AI-generated content suggestions based on your audience and trending topics.</p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              {contentIdeas.map((idea, index) => (
                <div key={index} className="border rounded-lg p-4 bg-white/50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Badge variant="outline">{idea.type}</Badge>
                        <Badge className={getTrendBadge(idea.trend)}>{idea.trend}</Badge>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">{idea.title}</h4>
                      <p className="text-sm text-gray-600">{idea.reason}</p>
                    </div>
                    <div className="text-right ml-4">
                      <div className="text-green-600 font-semibold text-lg">{idea.engagement}</div>
                      <div className="text-xs text-gray-500">Expected boost</div>
                    </div>
                  </div>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                    Create Post
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Optimal Posting Times */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-blue-500" />
                <span>Optimal Posting Times</span>
              </CardTitle>
              <p className="text-gray-600">When your audience is most active and engaged.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {optimalTimes.map((time, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg bg-blue-50/50">
                    <div>
                      <div className="font-semibold text-gray-800">{time.day}</div>
                      <div className="text-2xl font-bold text-blue-600">{time.time}</div>
                      <div className="text-sm text-gray-600">{time.audience}</div>
                    </div>
                    <div className="text-right">
                      <Badge className={
                        time.engagement === "Very High" ? "bg-green-100 text-green-800" :
                        time.engagement === "High" ? "bg-yellow-100 text-yellow-800" :
                        "bg-blue-100 text-blue-800"
                      }>
                        {time.engagement}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Audience Insights */}
          <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="w-6 h-6 text-green-500" />
                <span>Audience Insights</span>
              </CardTitle>
              <p className="text-gray-600">Understand your followers and their preferences.</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {audienceInsights.map((insight, index) => (
                  <div key={index} className="p-4 border rounded-lg bg-green-50/50">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-800">{insight.segment}</h4>
                      <span className="text-2xl font-bold text-green-600">{insight.percentage}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      <strong>Demographics:</strong> {insight.demographic}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Primary Interest:</strong> {insight.interest}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Growth Strategy */}
        <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm mt-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="w-6 h-6 text-purple-500" />
              <span>Growth Strategy</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Engagement Goal</h4>
                <p className="text-3xl font-bold text-blue-600 mb-2">+25%</p>
                <p className="text-sm text-gray-600">Target for next month</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Follower Growth</h4>
                <p className="text-3xl font-bold text-green-600 mb-2">+500</p>
                <p className="text-sm text-gray-600">New followers/month</p>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                <Calendar className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">Content Frequency</h4>
                <p className="text-3xl font-bold text-purple-600 mb-2">5x</p>
                <p className="text-sm text-gray-600">Posts per week</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Recommendations;