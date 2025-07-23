import { Metadata } from 'next'
import { Providers } from "./providers"
import NewsletterPopup from '@/components/NewsLetterPopup'
import './globals.css'

export const metadata: Metadata = {
    title: 'Dates Shop',
    description: 'Browse, buy, and sell farm fresh dates to people across the world.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Providers>
                    {children}
                    <NewsletterPopup />
                </Providers>
            </body>
        </html>
    )
}

