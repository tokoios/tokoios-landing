"use client";

import { useState } from "react";

export default function InvoiceKitDemo() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // Icon components
  const FileTextIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
  );
  
  const PlusIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
  );
  
  const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
  );
  
  const SearchIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
  );
  
  const MoreVerticalIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/></svg>
  );
  
  const DollarSignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
  );
  
  const UsersIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SIDEBAR */}
      <div className="fixed left-0 top-0 w-64 h-full bg-slate-900 text-white p-6 hidden md:block">
        <div className="flex items-center gap-2 mb-8">
          <FileTextIcon />
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
              <PlusIcon />
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
                  <DollarSignIcon />
                </div>
                <span className="text-green-600 text-sm font-semibold">+12.5%</span>
              </div>
              <p className="text-gray-500 text-sm mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-800">Rp 45.2jt</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileTextIcon />
                </div>
                <span className="text-green-600 text-sm font-semibold">+8.2%</span>
              </div>
              <p className="text-gray-500 text-sm mb-1">Invoices</p>
              <p className="text-2xl font-bold text-gray-800">124</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <UsersIcon />
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
                  <SearchIcon />
                  <input 
                    type="text" 
                    placeholder="Search invoices..." 
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
                  <DownloadIcon />
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
                          <MoreVerticalIcon />
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
