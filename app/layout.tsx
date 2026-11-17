import type { Metadata } from "next";
import { JetBrains_Mono, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Samuel Chulu — Full-Stack Developer & UI/UX Designer",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="font-body selection:bg-cyan-500 selection:text-white relative min-h-screen bg-space-950 text-slate-100 dark:bg-space-950 dark:text-slate-100 light-mode-target transition-colors duration-500 overflow-x-hidden"
        style={{
          backgroundColor: "rgb(5, 7, 14)",
          backgroundImage: "radial-gradient(circle at 50% 10%, rgb(13, 18, 36) 0%, rgb(5, 7, 14) 100%)",
          color: "rgb(241, 245, 249)",
        }}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
