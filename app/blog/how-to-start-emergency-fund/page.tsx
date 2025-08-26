import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'How to Start an Emergency Fund: A Complete Guide for 2025 | CalcPortal Pro',
  description: 'Building an emergency fund is the foundation of financial security. Learn how to create and maintain a safety net that covers 3-6 months of expenses.',
  keywords: 'emergency fund, savings, financial security, personal finance, budgeting, financial planning',
  openGraph: {
    title: 'How to Start an Emergency Fund: A Complete Guide for 2025 | CalcPortal Pro',
    description: 'Building an emergency fund is the foundation of financial security. Learn how to create and maintain a safety net that covers 3-6 months of expenses.',
    url: 'https://calcportalpro.com/blog/how-to-start-emergency-fund',
  },
  alternates: {
    canonical: '/blog/how-to-start-emergency-fund',
  },
};

export default function EmergencyFundPost() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max py-8">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-500 hover:text-primary-600 font-medium"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-12">
            <div className="flex items-center space-x-4 text-sm text-secondary-100 mb-4">
              <span className="bg-accent-100 text-accent-700 px-3 py-1 rounded-full text-sm font-medium">
                Savings
              </span>
              <div className="flex items-center space-x-1">
                <Calendar size={14} />
                <span>January 15, 2025</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={14} />
                <span>6 min read</span>
              </div>
              <div className="flex items-center space-x-1">
                <User size={14} />
                <span>Sarah Collins</span>
              </div>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-6 leading-tight">
              How to Start an Emergency Fund: A Complete Guide for 2025
            </h1>
            
            <p className="text-xl text-secondary-100 leading-relaxed">
              Building an emergency fund is the foundation of financial security. Learn how to create and maintain a safety net that covers 3-6 months of expenses.
            </p>
          </header>

          {/* Article Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-secondary-100 mb-6">
                An emergency fund is one of the most important financial tools you can have. It's your safety net when life throws unexpected expenses your way—whether it's a medical emergency, car repair, job loss, or any other unforeseen financial challenge.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                What is an Emergency Fund?
              </h2>
              <p className="text-secondary-100 mb-6">
                An emergency fund is a dedicated savings account that contains enough money to cover 3-6 months of your essential living expenses. This money should be easily accessible but separate from your regular checking and savings accounts.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Why You Need an Emergency Fund
              </h2>
              <p className="text-secondary-100 mb-4">
                Having an emergency fund provides several key benefits:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-6">
                <li><strong>Financial Security:</strong> You won't have to rely on credit cards or loans for unexpected expenses</li>
                <li><strong>Peace of Mind:</strong> Knowing you have a safety net reduces financial stress and anxiety</li>
                <li><strong>Flexibility:</strong> You can make better financial decisions without being forced into expensive options</li>
                <li><strong>Protection:</strong> Your emergency fund protects your long-term financial goals from short-term setbacks</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                How Much Should You Save?
              </h2>
              <p className="text-secondary-100 mb-4">
                The general rule of thumb is to save 3-6 months of essential expenses. To calculate your target:
              </p>
              <ol className="list-decimal list-inside text-secondary-100 space-y-2 mb-6">
                <li>List all your essential monthly expenses (housing, food, utilities, transportation, insurance)</li>
                <li>Multiply by 3 for a basic emergency fund, or by 6 for a more robust safety net</li>
                <li>Consider your personal situation—single income households may want to aim for 6 months</li>
              </ol>

              <div className="bg-primary-50 rounded-lg p-6 my-6">
                <h3 className="text-lg font-bold text-primary-700 mb-3">💡 Pro Tip</h3>
                <p className="text-primary-600">
                  Start with a smaller goal of $1,000, then gradually build up to your full emergency fund. This approach makes the goal more achievable and gives you quick wins to stay motivated.
                </p>
              </div>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Where to Keep Your Emergency Fund
              </h2>
              <p className="text-secondary-100 mb-4">
                Your emergency fund should be:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-6">
                <li><strong>Easily Accessible:</strong> You need to be able to get to this money quickly</li>
                <li><strong>Separate:</strong> Keep it in a different account from your regular spending money</li>
                <li><strong>Safe:</strong> Choose a federally insured bank or credit union</li>
                <li><strong>Liquid:</strong> Avoid investments that could lose value when you need the money</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                How to Build Your Emergency Fund
              </h2>
              <p className="text-secondary-100 mb-4">
                Building an emergency fund doesn't happen overnight, but with consistent effort, you can reach your goal:
              </p>

              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                1. Start Small
              </h3>
              <p className="text-secondary-100 mb-4">
                Begin by saving just $25 or $50 per week. Even small amounts add up over time. The key is consistency.
              </p>

              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                2. Automate Your Savings
              </h3>
              <p className="text-secondary-100 mb-4">
                Set up automatic transfers from your checking account to your emergency fund. This ensures you save before you have a chance to spend the money.
              </p>

              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                3. Use Windfalls
              </h3>
              <p className="text-secondary-100 mb-4">
                Put unexpected money—tax refunds, bonuses, gifts—directly into your emergency fund. This can significantly boost your progress.
              </p>

              <h3 className="text-xl font-bold text-secondary-500 mt-6 mb-3">
                4. Cut Expenses
              </h3>
              <p className="text-secondary-100 mb-4">
                Look for areas where you can reduce spending and redirect that money to your emergency fund. Even small cuts can make a big difference.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                When to Use Your Emergency Fund
              </h2>
              <p className="text-secondary-100 mb-4">
                Only use your emergency fund for true emergencies:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-6">
                <li>Medical emergencies</li>
                <li>Car repairs that prevent you from getting to work</li>
                <li>Home repairs that affect safety or livability</li>
                <li>Job loss or significant reduction in income</li>
                <li>Essential appliance breakdowns</li>
              </ul>

              <p className="text-secondary-100 mb-4">
                <strong>Don't use it for:</strong> vacations, shopping, entertainment, or other non-essential expenses.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Rebuilding Your Emergency Fund
              </h2>
              <p className="text-secondary-100 mb-6">
                After using your emergency fund, make rebuilding it a priority. Resume your regular savings contributions and consider temporarily increasing them to get back to your target amount quickly.
              </p>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Common Mistakes to Avoid
              </h2>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-6">
                <li><strong>Not starting:</strong> The biggest mistake is not starting at all</li>
                <li><strong>Setting unrealistic goals:</strong> Start small and build gradually</li>
                <li><strong>Using it for non-emergencies:</strong> Keep it strictly for true emergencies</li>
                <li><strong>Not replenishing:</strong> Always rebuild after using your emergency fund</li>
                <li><strong>Keeping it too accessible:</strong> Make it accessible but not so easy that you're tempted to spend it</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Tools to Help You Save
              </h2>
              <p className="text-secondary-100 mb-4">
                Several tools can help you build and maintain your emergency fund:
              </p>
              <ul className="list-disc list-inside text-secondary-100 space-y-2 mb-6">
                <li><strong>Savings Calculator:</strong> Use our <Link href="/calculators/savings" className="text-primary-500 hover:text-primary-600">savings calculator</Link> to see how your money grows over time</li>
                <li><strong>Budgeting Apps:</strong> Track your spending and identify areas to save</li>
                <li><strong>High-Yield Savings Accounts:</strong> Earn more interest on your emergency fund</li>
                <li><strong>Automatic Transfers:</strong> Set up recurring transfers to build your fund automatically</li>
              </ul>

              <h2 className="text-2xl font-bold text-secondary-500 mt-8 mb-4">
                Conclusion
              </h2>
              <p className="text-secondary-100 mb-6">
                Building an emergency fund is one of the most important steps you can take toward financial security. While it may take time to reach your goal, the peace of mind and financial protection it provides are invaluable.
              </p>

              <p className="text-secondary-100 mb-6">
                Start today, even if it's with a small amount. Remember, the best time to start saving was yesterday, but the second-best time is today.
              </p>

              <div className="bg-green-50 rounded-lg p-6 my-6">
                <h3 className="text-lg font-bold text-green-700 mb-3">🚀 Ready to Start?</h3>
                <p className="text-green-600 mb-4">
                  Use our <Link href="/calculators/savings" className="text-green-700 hover:text-green-800 font-medium">savings calculator</Link> to see how quickly your emergency fund can grow with regular contributions.
                </p>
                <Link
                  href="/calculators/savings"
                  className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                >
                  <BookOpen size={16} className="mr-2" />
                  Try Our Savings Calculator
                </Link>
              </div>
            </div>
          </div>

          {/* Author Bio */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-xl font-bold">SC</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary-500 mb-2">About Sarah Collins</h3>
                <p className="text-secondary-100">
                  Sarah Collins is a certified financial planner with over 10 years of experience helping individuals and families achieve their financial goals. She specializes in budgeting, saving strategies, and emergency fund planning.
                </p>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-secondary-500 mb-4">Related Articles</h3>
            <div className="space-y-3">
              <Link href="/blog/understanding-different-types-loans" className="block text-primary-500 hover:text-primary-600">
                Understanding Different Types of Loans: Which One is Right for You?
              </Link>
              <Link href="/blog/5-tips-building-investment-portfolio" className="block text-primary-500 hover:text-primary-600">
                5 Tips for Building an Investment Portfolio in 2025
              </Link>
              <Link href="/blog/mortgage-vs-rent-which-better" className="block text-primary-500 hover:text-primary-600">
                Mortgage vs Rent: Which is Better for Your Financial Situation?
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
