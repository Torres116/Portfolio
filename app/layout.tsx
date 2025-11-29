import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Inter, Figtree} from 'next/font/google'
import {Analytics} from "@vercel/analytics/next"

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const inter = Inter({
        subsets: ['latin'],
        variable: '--font-inter',
        display: 'swap',
    }
)

const figtree = Figtree({
        subsets: ['latin'],
        variable: '--font-figtree',
        display: 'swap',
    }
)

export const metadata: Metadata = {
    title: "João Torres",
    description: "Portfolio",
};

export default function RootLayout({children}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${inter.variable} antialiased m-0 p-0 `}>
                <Analytics/>
                {children}
            </body>
        </html>
    );
}
