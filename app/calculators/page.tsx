import Link from 'next/link';

export const metadata = {
  title: 'All Calculators',
  description: 'Browse all financial, academic and health calculators on CalcPortal Pro.' 
};

const calculators = [
  { name: 'Compound Interest', href: '/calculators/compound-interest' },
  { name: 'Mortgage', href: '/calculators/mortgage' },
  { name: 'CD Calculator', href: '/calculators/cd' },
  { name: 'Roth IRA Calculator', href: '/calculators/roth-ira' },
  { name: 'Loan', href: '/calculators/loan' },
  { name: 'Savings', href: '/calculators/savings' },
  { name: 'Retirement', href: '/calculators/retirement' },
  { name: 'Investment', href: '/calculators/investment' },
  { name: 'Tax', href: '/calculators/tax' },
  { name: 'Salary', href: '/calculators/salary' },
  { name: 'GPA', href: '/calculators/gpa' },
  { name: 'Grade', href: '/calculators/grade' },
  { name: 'Time', href: '/calculators/time' },
  { name: 'Calorie', href: '/calculators/calorie' },
  { name: 'BMI', href: '/calculators/bmi' },
  { name: 'Auto Loan', href: '/calculators/auto-loan' },
  { name: 'Student Loan', href: '/calculators/student-loan' },
  { name: 'Business Loan', href: '/calculators/business-loan' },
];

export default function CalculatorsIndexPage() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max section-padding">
        <h1 className="text-4xl font-bold text-secondary-500 mb-6">All Calculators</h1>
        <p className="text-secondary-100 mb-8">Choose a calculator to get started.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {calculators.map((c) => (
            <Link key={c.href} href={c.href} className="card p-5 hover:shadow-xl transition-shadow">
              <div className="text-lg font-semibold text-secondary-500">{c.name}</div>
              <div className="text-sm text-secondary-100 mt-1">Open →</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
