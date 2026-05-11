import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Contractor Invoice Autopay — Auto-approve and pay contractor invoices under limits',
  description: 'Automatically approves and pays contractor invoices under preset limits via Stripe/bank integration. Built for small businesses and startups with regular contractors.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="90ccd093-5461-4478-b8bd-fbd03ba24f84"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
