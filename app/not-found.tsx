import Link from 'next/link'
import { Home, Search, Calculator } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-primary-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Search className="w-12 h-12 text-primary-600" />
          </div>
          <h1 className="text-6xl font-bold text-primary-600 mb-2">404</h1>
          <h2 className="text-2xl font-bold text-secondary-500 mb-2">Page Not Found</h2>
          <p className="text-secondary-100">
            Sorry, we couldn't find the page you're looking for.
          </p>
        </div>

        <div className="space-y-4">
          <Link
            href="/"
            className="w-full btn-primary inline-flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
          
          <Link
            href="/calculators"
            className="w-full btn-secondary inline-flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            Browse Calculators
          </Link>
        </div>

        <div className="mt-8 text-sm text-secondary-100">
          <p>Looking for something specific?</p>
          <p>Try our popular calculators or search our blog.</p>
        </div>
      </div>
    </div>
  )
}

