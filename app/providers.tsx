"use client"

import React from "react";
import { ThemeProvider,useTheme } from "next-themes"
import { Toaster } from "@/components/ui/sonner";

export default function Providers({ children }: { readonly children: React.ReactNode }) {
    return (
        <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="system"
        disableTransitionOnChange
        >
        {children}
        <ToasterProvider/>
        </ThemeProvider>
    )
}

function ToasterProvider() {
    const { resolvedTheme } = useTheme()
  
    return (
      <Toaster
        position='top-right'
        theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
      />
    )
  }