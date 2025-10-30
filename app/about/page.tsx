import { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, Target, Users, Award, Globe, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About CalcPortal Pro',
  description: 'Learn about CalcPortal Pro\'s mission to provide free, accurate financial calculators and educational resources to help everyone make better financial decisions.',
  keywords: 'about CalcPortal Pro, financial calculator company, financial education mission, mortgage calculator, loan calculator, company story',
  openGraph: {
    title: 'About CalcPortal Pro',
    description: 'Learn about CalcPortal Pro\'s mission to provide free, accurate financial calculators and educational resources.',
    url: 'https://calcportalpro.com/about',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-primary-50">
      <div className="container-max py-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-secondary-500 mb-4">
            About CalcPortal Pro
          </h1>
          <p className="text-xl text-secondary-100 max-w-3xl mx-auto">
            We're on a mission to democratize financial knowledge and help everyone make smarter money decisions through free, accurate calculators and educational resources.
          </p>
        </div>

        {/* Mission Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target size={40} className="text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-secondary-500 mb-4">Our Mission</h2>
            <p className="text-lg text-secondary-100 max-w-3xl mx-auto">
              To provide everyone with access to professional-grade financial tools and education, 
              regardless of their background or financial situation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-secondary-500 mb-4">What We Believe</h3>
              <ul className="space-y-3 text-secondary-100">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Financial literacy should be accessible to everyone</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Accurate calculations are the foundation of good financial decisions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Education empowers people to take control of their finances</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Free tools should be as good as paid ones</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-secondary-500 mb-4">Our Promise</h3>
              <ul className="space-y-3 text-secondary-100">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>100% accurate calculations with transparent formulas</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Always free, no hidden costs or premium features</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Educational content that actually helps you learn</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span>Tools that work on any device, anywhere</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-500 mb-4">Our Story</h2>
            <p className="text-lg text-secondary-100 max-w-3xl mx-auto">
              CalcPortal Pro was born from a simple observation: financial tools shouldn't be expensive or complicated.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 font-bold text-lg">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-500 mb-2">The Problem</h3>
                <p className="text-secondary-100">
                  We noticed that many people struggled with financial decisions because they lacked access to good tools. 
                  Existing calculators were either too expensive, too complicated, or hidden behind paywalls.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 font-bold text-lg">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-500 mb-2">The Solution</h3>
                <p className="text-secondary-100">
                  We decided to build a platform that provides professional-grade financial calculators for free, 
                  along with educational content to help people understand the calculations behind their decisions.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-primary-600 font-bold text-lg">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-secondary-500 mb-2">The Result</h3>
                <p className="text-secondary-100">
                  Today, CalcPortal Pro serves thousands of users with accurate calculators, 
                  comprehensive educational content, and a commitment to making financial literacy accessible to everyone.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-500 mb-4">Our Values</h2>
            <p className="text-lg text-secondary-100 max-w-3xl mx-auto">
              These core values guide everything we do at CalcPortal Pro.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calculator size={32} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-500 mb-2">Accuracy</h3>
              <p className="text-secondary-100">
                Every calculation is double-checked and verified to ensure complete accuracy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-500 mb-2">Accessibility</h3>
              <p className="text-secondary-100">
                Our tools are designed to be easy to use for everyone, regardless of technical skill.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-500 mb-2">Quality</h3>
              <p className="text-secondary-100">
                We maintain the highest standards in everything we build and publish.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe size={32} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-500 mb-2">Transparency</h3>
              <p className="text-secondary-100">
                We're open about our methods, formulas, and how our tools work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart size={32} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-500 mb-2">Care</h3>
              <p className="text-secondary-100">
                We genuinely care about helping people improve their financial lives.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target size={32} className="text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-500 mb-2">Impact</h3>
              <p className="text-secondary-100">
                We measure success by the positive impact we have on people's financial decisions.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-500 mb-4">Our Team</h2>
            <p className="text-lg text-secondary-100 max-w-3xl mx-auto">
              Meet the passionate people behind CalcPortal Pro who are dedicated to making financial tools accessible to everyone.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">ZA</span>
              </div>
              <h3 className="text-lg font-bold text-secondary-500 mb-1">Ziblim Abdulai</h3>
              <p className="text-primary-600 font-medium mb-2">Founder & CEO</p>
              <p className="text-secondary-100 text-sm">
                Certified financial planner with 10+ years of experience helping individuals achieve their financial goals.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">JM</span>
              </div>
              <h3 className="text-lg font-bold text-secondary-500 mb-1">James Mitchell</h3>
              <p className="text-primary-600 font-medium mb-2">Head of Product</p>
              <p className="text-secondary-100 text-sm">
                Former fintech executive passionate about creating user-friendly financial tools.
              </p>
            </div>

            <div className="text-center">
              <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-primary-600 text-2xl font-bold">EF</span>
              </div>
              <h3 className="text-lg font-bold text-secondary-500 mb-1">Emily Foster</h3>
              <p className="text-primary-600 font-medium mb-2">Content Director</p>
              <p className="text-secondary-100 text-sm">
                Financial writer and educator with expertise in personal finance and investment strategies.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-primary-100 text-lg mb-6 max-w-2xl mx-auto">
            Try our calculators today and see how easy it is to make informed financial decisions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/calculators" className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200">
              Explore Calculators
            </Link>
            <Link href="/blog" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
              Read Our Blog
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
