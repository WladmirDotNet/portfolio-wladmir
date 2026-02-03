import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wladmir Bonazza - Software Architect",
  description:
    "Arquiteto de Software com +30 anos de jornada tecnológica. Especialista em Clean Architecture, DDD, CQRS, Microservices, AWS, Azure e Kubernetes.",
  keywords: [
    ".NET",
    "C#",
    "Software Architect",
    "Clean Architecture",
    "DDD",
    "CQRS",
    "Microservices",
    "AWS",
    "Azure",
    "Kubernetes",
    "DevOps",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
