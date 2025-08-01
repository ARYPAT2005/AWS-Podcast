"use client"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Play, TrendingUp, Users, Clock, Headphones, Mic, Radio } from "lucide-react"
import { Fade } from "react-awesome-reveal";
import Link from "next/link"

export default function Home() {
  const { setTheme } = useTheme()

  return (
    <Fade>
      <div className="min-h-screen">
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Discover Your Next
              <span className="text-primary block">Favorite Podcast</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Explore podcasts across every genre. Discover audio content that matches your interests and helps creators thrive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/podcasts">
              <Button size="lg" className="text-lg px-8 py-6">
                  <Play className="mr-2 h-5 w-5" />
                  Start Listening
              </Button>
              </Link>
              <Link href="/register">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  Sign Up Free
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  )
}

