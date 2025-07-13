"use client"

import { TrendingUp, Users, Eye, MousePointer, Clock, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const analyticsData = {
  overview: {
    totalVisitors: 45230,
    pageViews: 128450,
    avgSessionDuration: "4m 32s",
    bounceRate: "32.4%",
  },
  trafficSources: [
    { source: "Organic Search", visitors: 18500, percentage: 41 },
    { source: "Direct", visitors: 12800, percentage: 28 },
    { source: "Social Media", visitors: 8900, percentage: 20 },
    { source: "Referral", visitors: 5030, percentage: 11 },
  ],
  topPages: [
    { page: "/programs", views: 25400, title: "Study Programs" },
    { page: "/universities", views: 18200, title: "Universities" },
    { page: "/scholarships", views: 15800, title: "Scholarships" },
    { page: "/destinations", views: 12600, title: "Study Destinations" },
    { page: "/advice", views: 9400, title: "Study Advice" },
  ],
  userEngagement: [
    { metric: "New Users", value: "68%", trend: "+12%" },
    { metric: "Returning Users", value: "32%", trend: "-3%" },
    { metric: "Session Duration", value: "4m 32s", trend: "+8%" },
    { metric: "Pages per Session", value: "3.2", trend: "+5%" },
  ],
}

export default function AdminAnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
        <p className="text-gray-600">Track website performance and user engagement</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Visitors</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.overview.totalVisitors.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Page Views</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.overview.pageViews.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+8.2%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg. Session</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.overview.avgSessionDuration}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+5.1%</span> from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Bounce Rate</CardTitle>
            <MousePointer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{analyticsData.overview.bounceRate}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600">-2.1%</span> from last month
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Traffic Sources */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="h-5 w-5" />
              Traffic Sources
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {analyticsData.trafficSources.map((source, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{source.source}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-600">{source.visitors.toLocaleString()}</span>
                    <Badge variant="secondary">{source.percentage}%</Badge>
                  </div>
                </div>
                <Progress value={source.percentage} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Top Pages */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Top Pages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{page.title}</div>
                    <div className="text-sm text-gray-600">{page.page}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">{page.views.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">views</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* User Engagement */}
      <Card>
        <CardHeader>
          <CardTitle>User Engagement Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsData.userEngagement.map((metric, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <div className="text-2xl font-bold mb-1">{metric.value}</div>
                <div className="text-sm text-gray-600 mb-2">{metric.metric}</div>
                <Badge
                  variant={metric.trend.startsWith("+") ? "default" : "destructive"}
                  className={metric.trend.startsWith("+") ? "bg-green-100 text-green-800" : ""}
                >
                  {metric.trend}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
