import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import { ThemeProvider } from "./components/theme-provider.js";



export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >   
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
