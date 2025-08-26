import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '5 Tips for Building an Investment Portfolio in 2025 | CalcPortal Pro',
  description: 'Practical steps to build a diversified, risk-aware investment portfolio in 2025, including asset allocation, costs, and rebalancing.',
  alternates: { canonical: '/blog/5-tips-building-investment-portfolio' }
};

export default function Post() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max section-padding">
        <Link href="/blog" className="text-primary-500">← Back to Blog</Link>
        <h1 className="text-4xl font-bold text-secondary-500 mt-4">5 Tips for Building an Investment Portfolio in 2025</h1>
        <div className="prose max-w-none mt-6">
          <ol>
            <li><strong>Define Goals and Horizons:</strong> Set timeframes and risk tolerance.</li>
            <li><strong>Diversify:</strong> Mix assets (stocks, bonds, cash, alternatives).</li>
            <li><strong>Minimize Costs:</strong> Prefer broad, low-cost index funds.</li>
            <li><strong>Automate Contributions:</strong> Dollar-cost average on a schedule.</li>
            <li><strong>Rebalance:</strong> Periodically restore target allocation.</li>
          </ol>
          <p className="mt-6">Project growth with our <Link href="/calculators/investment" className="text-primary-500">Investment Calculator</Link> and compounding with the <Link href="/calculators/compound-interest" className="text-primary-500">Compound Interest Calculator</Link>.</p>
        </div>
      </div>
    </div>
  );
}
