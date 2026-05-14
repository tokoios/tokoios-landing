"use client";

import { FileText, Plus, Download, Search, MoreVertical, DollarSign, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

export default function InvoiceKitDemo() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <div className="fixed left-0 top-0 w-64 h-full bg-slate-900 text-white p-6 hidden md:block">
        <div className="flex items-center gap-2 mb-8">
          <FileText className="text-emerald-400" size={32} />
          <span className="text-xl font-bold">Invoice<span className="text-emerald-400">Kit</span></span>
        </div>
        <nav className="space-y-2">
          <button 
            onClick={() => setActiveTab("dashboard")}
            className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === "dashboard" ? "bg-emerald-600" : "hover:bg-slate-800"}`}
          >
            Dashboard
          </button>
          <button 
            onClick={() => setActiveTab("invoices")}
            className={`w-full text-left px-4 py-3 rounded-lg transition ${activeTab === "invoices" ? "bg-emerald-600" : "hover:bg-slate-800"}`}
          >
            Invoices
          </button>
          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            Clients
          </button>
          <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-slate-800 transition">
            Settings
          </button>
        </nav>
      </div>

      {/* MAIN CONTENT */}
      <div className="md:ml-64">
        {/* TOP BAR */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <button className="bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-emerald-500 transition flex items-center gap-2">
              <Plus size={20} />
              Buat Invoice
            </button>
          </div>
        </header>

        {/* DASHBOARD CONTENT */}
        <main className="p-6">
          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="text-emerald-600" size={24} />
                </div>
                <span className="text-green-600 text-sm font-semibold">+12.5%</span>
              </div>
              <p className="text-gray-500 text-sm mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800">Rp 45.2jt</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="text-blue-600" size={24} />
                </div>
                <span className="text-green-600 text-sm font-semibold">+8.2%</span>
              </div>
              <p className="text-gray-500 text-sm mb-1">Invoices</p>
              <p className="text-2xl font-bold text-gray-800">124</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Users className="text-purple-600" size={24} />
                </div>
                <span className="text-green-600 text-sm font-semibold">+15.3%</span>
              </div>
              <p className="text-gray-500 text-sm mb-1">Clients</p>
              <p className="text-2xl font-bold text-gray-800">38</p>
            </div>
          </div>

          {/* RECENT INVOICES */}
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Invoices</h2>
              <div className="flex gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                  <input 
                    type="text" 
                    placeholder="Search invoices..." 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                  <Download size={20} />
                  Export
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase px-6 py-3">Invoice</th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase px-6 py-3">Client</th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase px-6 py-3">Amount</th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase px-6 py-3">Status</th>
                    <th className="text-left text-xs font-semibold text-gray-500 uppercase px-6 py-3">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {[
                    { id: "INV-001", client: "PT. Maju Jaya", amount: "Rp 5.000.000", status: "Paid", statusColor: "bg-green-100 text-green-700" },
                    { id: "INV-002", client: "CV. Sejahtera", amount: "Rp 3.500.000", status: "Pending", statusColor: "bg-yellow-100 text-yellow-700" },
                    { id: "INV-003", client: "Toko Abadi", amount: "Rp 2.750.000", status: "Paid", statusColor: "bg-green-100 text-green-700" },
                    { id: "INV-004", client: "UD. Berkah", amount: "Rp 4.200.000", status: "Overdue", statusColor: "bg-red-100 text-red-700" },
                  ].map((invoice, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-semibold text-gray-800">{invoice.id}</td>
                      <td className="px-6 py-4 text-gray-600">{invoice.client}</td>
                      <td className="px-6 py-4 font-semibold text-gray-800">{invoice.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${invoice.statusColor}`}>
                          {invoice.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-gray-400 hover:text-gray-600">
                          <MoreVertical size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
