export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Billing Automation
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Auto-approve and pay contractor invoices{' '}
          <span className="text-[#58a6ff]">under your limits</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Connect your contractor invoicing system and payment provider. Set spending rules once — invoices under your threshold get approved and paid automatically, no manual review needed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start for $19 / mo
        </a>
        <p className="mt-3 text-xs text-[#484f58]">No credit card required to try. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Webhook-driven', body: 'Invoices trigger instant processing via webhooks — no polling, no delays.' },
            { title: 'Spending limits', body: 'Set per-contractor or global limits. Anything over the threshold queues for manual review.' },
            { title: 'Stripe & bank', body: 'Pay via Stripe or direct bank transfer. Full audit log for every transaction.' },
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-xs uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-sm text-[#8b949e] mb-6">per month</div>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited contractor profiles',
              'Auto-pay up to 500 invoices/mo',
              'Stripe & ACH bank integration',
              'Custom spending limit rules',
              'Real-time dashboard & audit log',
              'Email & webhook notifications',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-5">
          {[
            {
              q: 'Which payment providers are supported?',
              a: 'We support Stripe (credit/debit) and ACH bank transfers out of the box. Additional providers can be connected via our webhook API.',
            },
            {
              q: 'What happens when an invoice exceeds my limit?',
              a: 'Invoices over your preset threshold are flagged and held for manual review. You get an email notification and can approve or reject from the dashboard.',
            },
            {
              q: 'Is my payment data secure?',
              a: 'Yes. We never store raw card or bank credentials. All payment data is handled by PCI-compliant providers. Your API keys are encrypted at rest.',
            },
          ].map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{q}</h3>
              <p className="text-sm text-[#8b949e]">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        &copy; {new Date().getFullYear()} Contractor Invoice Autopay. All rights reserved.
      </footer>
    </main>
  )
}
