import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The  Blog",
  description: "Essa seria a descrição  dessa  página.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <h1>Header</h1>
        </header>
        {children}
        <footer>
          <h1>Footer</h1>
        </footer>
      </body>
    </html>
  );
}
