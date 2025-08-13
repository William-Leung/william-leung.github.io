import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Default Layout • Demo" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Page itself never scrolls; only our main pane will */}
      <body className="h-screen w-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
