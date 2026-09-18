"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MessageSquare, Clock } from "lucide-react";

interface Consultation {
  _id: string;
  fullName: string;
  loanType: string;
  status: string;
  createdAt: string;
}

export default function AdminDashboardPage() {
  const [data, setData] = useState<Consultation[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/consultation?page=1&limit=5")
      .then(res => res.json())
      .then(json => {
        if (json.success) {
          setData(json.data || []);
          setTotal(json.total ?? 0);
        }
        setLoading(false);
      });
  }, []);

  const pendingCount = data.filter(d => d.status !== 'approved' && d.status !== 'rejected').length;

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cyprus">
          Welcome, Aman
        </h1>
        <p className="text-muted mt-2">Here is a quick overview of recent activity.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="rounded-3xl border border-border bg-surface p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted">
            <span className="text-sm font-bold uppercase tracking-wider">Total Enquiries</span>
            <MessageSquare size={20} className="text-cyprus" />
          </div>
          <div className="mt-4">
            {loading ? (
              <div className="h-10 w-20 bg-border/60 animate-pulse rounded-xl"></div>
            ) : (
              <h2 className="text-4xl font-serif font-bold text-cyprus">{total}</h2>
            )}
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-surface p-6 flex flex-col justify-between">
          <div className="flex items-center justify-between text-muted">
            <span className="text-sm font-bold uppercase tracking-wider">Action Needed</span>
            <Clock size={20} className="text-amber-500" />
          </div>
          <div className="mt-4">
            {loading ? (
              <div className="h-10 w-20 bg-border/60 animate-pulse rounded-xl"></div>
            ) : (
              <h2 className="text-4xl font-serif font-bold text-cyprus">{pendingCount}</h2>
            )}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-surface overflow-hidden">
        <div className="p-6 border-b border-border flex items-center justify-between bg-white">
          <h3 className="text-lg font-serif font-bold text-cyprus">Recent Enquiries</h3>
          <Link href="/admin/queries" className="text-sm font-bold text-cyprus hover:text-muted transition-colors">
            View All Enquiries
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-sand text-left border-b border-border">
              <tr>
                <th className="px-6 py-4 font-bold text-cyprus uppercase tracking-wider text-xs">Name</th>
                <th className="px-6 py-4 font-bold text-cyprus uppercase tracking-wider text-xs">Loan Type</th>
                <th className="px-6 py-4 font-bold text-cyprus uppercase tracking-wider text-xs">Status</th>
                <th className="px-6 py-4 font-bold text-cyprus uppercase tracking-wider text-xs">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {loading ? (
                Array.from({ length: 5 }).map((_, idx) => (
                  <tr key={idx} className="animate-pulse">
                    <td className="px-6 py-5"><div className="h-4 bg-border/60 rounded w-32"></div></td>
                    <td className="px-6 py-5"><div className="h-6 bg-border/60 rounded-lg w-24"></div></td>
                    <td className="px-6 py-5"><div className="h-6 bg-border/60 rounded-lg w-20"></div></td>
                    <td className="px-6 py-5"><div className="h-4 bg-border/60 rounded w-24"></div></td>
                  </tr>
                ))
              ) : data.length > 0 ? (
                data.map((item) => (
                  <tr key={item._id} className="hover:bg-sand/40">
                    <td className="px-6 py-4 font-bold text-cyprus whitespace-nowrap">{item.fullName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 text-xs font-bold bg-cyprus/10 text-cyprus rounded-lg">
                        {item.loanType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider border ${
                        item.status === 'approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                        item.status === 'rejected' ? 'bg-red-50 text-red-700 border-red-200' : 
                        'bg-amber-50 text-amber-700 border-amber-200'
                      }`}>
                        {item.status || "PENDING"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted font-medium whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleDateString('en-IN')}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-muted font-medium">
                    No enquiries found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}