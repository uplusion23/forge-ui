import { IBM_Plex_Mono as FontMono } from "next/font/google"
import { GeistSans } from "geist/font/sans"

export const fontSans = GeistSans

export const fontMono = FontMono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono",
})
