'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BarChart3, TrendingUp, Users, BookOpen, Award, AlertCircle } from 'lucide-react';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';

export default function StudentDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { label: 'CGPA', value: '3.85', change: '+0.15', icon: Award, color: 'from-blue-500 to-blue-600' },
    { label: 'Attendance', value: '92%', change: '+2%', icon: TrendingUp, color: 'from-green-500 to-green-600' },
    { label: 'Credits Completed', value: '120/180', change: '67%', icon: BookOpen, color: 'from-purple-500 to-purple-600' },
    { label: 'Risk Score', value: 'Low', change: 'Stable', icon: AlertCircle, color: 'from-yellow-500 to-yellow-600' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar open={sidebarOpen} role="student" />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-auto">
          <div className="p-6 max-w-7xl mx-auto">
            {/* Welcome Section */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
              <p className="text-gray-600">Here's your academic performance overview</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <p className="text-gray-600 text-sm mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
                    <p className="text-xs text-green-600">{stat.change}</p>
                  </div>
                );
              })}
            </div>

            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Charts Section */}
              <div className="lg:col-span-2 space-y-6">
                {/* Attendance Chart */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Subject-wise Attendance</h3>
                  <div className="space-y-4">
                    {['Data Structures', 'Database Systems', 'Web Development', 'Algorithm Analysis'].map((subject, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between mb-2">
                          <span className="text-sm font-medium text-gray-700">{subject}</span>
                          <span className="text-sm text-gray-600">{85 + idx * 2}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"
                            style={{ width: `${85 + idx * 2}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Marks Overview */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Marks</h3>
                  <div className="space-y-3">
                    {['Midterm Exam', 'Assignment 1', 'Quiz 2', 'Project'].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm font-medium text-gray-700">{item}</span>
                        <span className="text-lg font-bold text-blue-600">{85 + idx * 2}/100</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar Cards */}
              <div className="space-y-6">
                {/* AI Recommendations */}
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white">
                  <h3 className="font-semibold mb-3">AI Recommendations</h3>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Focus on Data Structures practice</li>
                    <li>✓ Improve attendance in Web Dev</li>
                    <li>✓ Consider Database Systems internship</li>
                  </ul>
                </div>

                {/* Placement Readiness */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Placement Readiness</h3>
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="8" />
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="url(#gradient)"
                        strokeWidth="8"
                        strokeDasharray={`${2 * 3.14 * 45 * 0.75} ${2 * 3.14 * 45}`}
                        strokeLinecap="round"
                        transform="rotate(-90 50 50)"
                      />
                      <text x="50" y="55" textAnchor="middle" fontSize="20" fontWeight="bold" fill="#1e293b">
                        75%
                      </text>
                    </svg>
                  </div>
                  <p className="text-center text-sm text-gray-600">Ready for placements</p>
                </div>

                {/* Upcoming Events */}
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Upcoming Events</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm font-medium text-blue-900">Hackathon</p>
                      <p className="text-xs text-blue-700">15 Feb 2024</p>
                    </div>
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-sm font-medium text-green-900">Internship Fair</p>
                      <p className="text-xs text-green-700">22 Feb 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
