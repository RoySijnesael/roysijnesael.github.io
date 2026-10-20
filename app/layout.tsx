import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://roysijnesael.github.io"),
  title: {
    default: "Roy Sijnesael",
    template: "%s · Roy Sijnesael",
  },
  description: "Notes, projects and things I'm working on.",
  openGraph: {
    title: "Roy Sijnesael",
    description: "Notes, projects and things I'm working on.",
    url: "https://roysijnesael.github.io",
    siteName: "Roy Sijnesael",
    locale: "en_US",
    type: "website",
  },
  // Temporary: keep the placeholder out of search results while the site is
  // being rebuilt. Remove this block when the real site goes live.
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <div className="container header-inner">
            <Link href="/" className="brand">
              Roy Sijnesael
            </Link>
            <nav className="site-nav" aria-label="Main">
              <a href="https://github.com/RoySijnesael">GitHub</a>
            </nav>
          </div>
        </header>

        <main className="container">{children}</main>

        <footer className="site-footer">
          <div className="container footer-inner">
            <span>© {new Date().getFullYear()} Roy Sijnesael</span>
            <a href="mailto:roy@vorteq.nl">roy@vorteq.nl</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
