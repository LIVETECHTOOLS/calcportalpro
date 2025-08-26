import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mortgage vs Rent: Which is Better for Your Financial Situation? | CalcPortal Pro',
  description: 'Compare renting vs buying with cost breakdowns, timelines, and key factors like taxes, maintenance, mobility, and opportunity cost.',
  alternates: { canonical: '/blog/mortgage-vs-rent-which-better' }
};

export default function Post() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max section-padding">
        <Link href="/blog" className="text-primary-500">← Back to Blog</Link>
        <h1 className="text-4xl font-bold text-secondary-500 mt-4">Mortgage vs Rent: Which is Better for Your Financial Situation?</h1>
        <div className="prose max-w-none mt-6">
          <p>Whether to rent or buy depends on time horizon, local prices, mortgage rates, maintenance, taxes, and your lifestyle needs.</p>
          <h2>When Buying Can Win</h2>
          <ul>
            <li>Long horizon (7+ years)</li>
            <li>Favorable price-to-rent ratios</li>
            <li>Stable income and emergency fund</li>
          </ul>
          <h2>When Renting Can Win</h2>
          <ul>
            <li>High mobility or uncertainty</li>
            <li>High mortgage rates and taxes</li>
            <li>Better investment opportunities elsewhere</li>
          </ul>
          <p className="mt-6">Estimate ownership costs with our <Link href="/calculators/mortgage" className="text-primary-500">Mortgage Calculator</Link> and compare investing the difference using the <Link href="/calculators/investment" className="text-primary-500">Investment Calculator</Link>.</p>
        </div>
      </div>
    </div>
  );
}
