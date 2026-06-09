'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">BR</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Beyond Records</span>
            </div>

            <div className="hidden md:flex gap-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            </div>

            <div className="hidden md:flex gap-4">
              <Link href="/login" className="px-4 py-2 text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                Login
              </Link>
              <Link href="/register" className="px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:shadow-lg transition">
                Get Started
              </Link>
            </div>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <div className="flex flex-col gap-4 pt-4">
                <a href="#features" className="text-gray-600">Features</a>
                <a href="#pricing" className="text-gray-600">Pricing</a>
                <div className="flex gap-4 pt-4">
                  <Link href="/login" className="flex-1 text-center px-4 py-2 border border-gray-300 rounded-lg">Login</Link>
                  <Link href="/register" className="flex-1 text-center px-4 py-2 bg-blue-600 text-white rounded-lg">Register</Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">AI-Powered Academic Operating System</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Transform college management with intelligent automation, predictive analytics, and personalized student guidance powered by AI.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition">
              Login to Dashboard
            </Link>
            <a href="#features" className="px-8 py-3 border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-50 transition">
              View Features
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Features</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { icon: '🎓', title: 'Student Dashboard', desc: 'Attendance, CGPA, marks & recommendations' },
              { icon: '🤖', title: 'AI Advisor', desc: 'Copilot-style guidance' },
              { icon: '👥', title: 'Digital Twin', desc: '6D student profiles' },
              { icon: '📊', title: 'Analytics', desc: 'Role-based dashboards' },
              { icon: '📁', title: 'Bulk Import', desc: 'CSV/Excel support' },
              { icon: '🎯', title: 'Opportunities', desc: 'Jobs & internships' },
            ].map((f, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-gray-200 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-5 gap-4 mt-16">
            {[{ r: 'Administrator', c: 'from-blue-600 to-blue-700' }, { r: 'Management', c: 'from-purple-600 to-purple-700' }, { r: 'HOD', c: 'from-pink-600 to-pink-700' }, { r: 'Faculty', c: 'from-green-600 to-green-700' }, { r: 'Student', c: 'from-yellow-600 to-yellow-700' }].map((item) => (
              <div key={item.r} className={`p-4 rounded-lg bg-gradient-to-br ${item.c} text-white text-center font-semibold`}>{item.r}</div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Access */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Try Demo Now</h2>
          <p className="text-lg mb-4">Use these credentials to test the application:</p>
          <div className="bg-white/10 backdrop-blur p-6 rounded-lg mb-8 inline-block">
            <p className="mb-2"><span className="font-semibold">Email:</span> demo@beyondrecords.com</p>
            <p><span className="font-semibold">Password:</span> Demo@123</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="px-8 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition">
              Login Now
            </Link>
            <Link href="/register" className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition">
              Sign Up
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p>&copy; 2024 Beyond Records. AI-Powered Academic Operating System.</p>
        </div>
      </footer>
    </div>
  );
}
