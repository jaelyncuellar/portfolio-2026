import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://jaelyncuellar.com"), 
  icons: { 
    icon: [ 
      { url: "/favicon.ico"}, 
      { url: "/favicon-16x16.png"}, 
      { url: "/favicon-32x32.png"}, 
    ], 
    apple: "/apple-touch-icon.png", 
    other: [ 
      { 
        rel: "android-chrome",
        url: "/android-chrome-192x192.png"
      },
      { 
        rel: "android-chrome",
        url: "/android-chrome-512x512.png"
      },
    ],
  }, 
  title: "JaelynCuellar | Official Site",
  description: "Portfolio - Jaelyn Cuellar. Software Engineer & Web Developer.",
  openGraph: { 
    title: "JaelynCuellar", 
    description: "Portfolio - Jaelyn Cuellar. Software Engineer & Web Developer.",
    url: "https://jaelyncuellar.com", 
    siteName: "JaelynCuellar", 
    images: [ 
      { 
        url: "/favicon.ico", 
        width: 1200, 
        height: 630, 
      }, 
    ], 
  type: "website", 
},
twitter: { 
  card: "summary_large_image", 
  images: ["/favicon.ico"],
}, 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
