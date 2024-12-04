"use client"

import React from "react";
import { ThemeProvider } from "next-themes"

export default function Providers({ children }: { readonly children: React.ReactNode }) {
    return (
        <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="system"
        disableTransitionOnChange
        >
        {children}
        </ThemeProvider>
    )
}
