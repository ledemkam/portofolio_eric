"use client"

import { useTheme } from "next-themes"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"
import { MoonIcon, SunIcon } from "lucide-react"

const ThemeToggle = () => {
  const{setTheme, resolvedTheme} = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
      }}
    >
      {resolvedTheme === "dark" ? (
        <SunIcon size={16}  className="text-orange-300"/>
      ):
      (
        <MoonIcon size={16} className="text-sky-950"/>
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
export default ThemeToggle