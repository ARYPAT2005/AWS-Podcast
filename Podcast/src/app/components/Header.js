"use client"

import Link from "next/link"
import { useState, useEffect, use } from "react"
import { ModeToggle } from "./ModeToggle"
import { MdOutlinePodcasts } from "react-icons/md"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useAuthStore } from "@/store/authstore";
import { fromTheme } from "tailwind-merge"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { isAuthenticated, logout } = useAuthStore();
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="w-full px-2">
        <div className="flex h-16 items-center justify-start gap-8">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center gap-2 transition-colors hover:text-primary">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <MdOutlinePodcasts className="h-5 w-5" />
              </div>
              <h1 className="text-2xl font-bold tracking-tight">Podverse</h1>
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="/podcasts"
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary relative py-2",
                  pathname === "/podcasts"
                    ? "text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-muted-foreground",
                )}
              >
                Podcasts
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-4 ml-auto">
          
                <div className="flex items-center gap-2">
                {!isAuthenticated ? (
                  <>
                    <div className="hidden sm:flex items-center gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="/login">Sign In</Link>
                      </Button>
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="/register">Get Started</Link>
                      </Button>
                    </div>
                    <div className="flex sm:hidden items-center gap-2">
                      <Button variant="ghost" size="sm" asChild>
                        <Link href="/login">Login</Link>
                      </Button>
                    </div>
                  </>
                ) : (
                  <Button variant="ghost" size="sm" onClick={logout}>
                      Logout
                  </Button>
                )}
                </div>
                
            <div className="flex items-center">
              <ModeToggle />
            </div>
          </div>
        </div>
        <div className="flex md:hidden items-center gap-6 pb-3 pt-1">
          <Link
            href="/podcasts"
            className={cn(
              "text-sm font-medium transition-colors hover:text-primary",
              pathname === "/podcasts" ? "text-foreground" : "text-muted-foreground",
            )}
          >
            Podcasts
          </Link>
        </div>
      </nav>
    </header>
  )
}
