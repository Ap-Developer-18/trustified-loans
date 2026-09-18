"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Search, ChevronLeft, ChevronRight, Inbox, Eye } from "lucide-react";

interface Consultation {
  _id: string;
  fullName: string;
  state: string;
  phone: string;
  loanType: string;
  status: string;
  createdAt: string;
}

const LIMIT = 10;

function QueriesContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = parseInt(searchParams.get("page") || "1", 10);
  const search = searchParams.get("search") || "";
  
  const [result, setResult] = useState<{data: Consultation[], total: number, totalPages: number}>({ data: [], total: 0, totalPages: 0 });
  const [loading, setLoading] = useState(true);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const updateQuery = (updates: Record<string, string | number | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, val]) => val ? params.set(key, String(val)) : params.delete(key));
    router.replace(`/admin/queries?${params.toString()}`);
  };

  const fetchQueries = () => {
    setLoading(true);
    fetch(`/api/consultation?page=${page}&limit=${LIMIT}&search=${search}`)
      .then(res => res.json())
      .then(json => {
        if (json.success) setResult({ data: json.data, total: json.total, totalPages: json.totalPages });
        setLoading(false);
      });
  };

  useEffect(() => fetchQueries(), [page, search]);

  const handleStatusChange = async (id: string, newStatus: string) => {
    setUpdatingId(id);
    await fetch("/api/consultation", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: newStatus }),
    });
    fetchQueries();
    setUpdatingId(null);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl font-bold text-cyprus">All Enquiries</h1>
        <p className="text-sm text-muted mt-1">Manage, update status, and review full details.</p>
      </div>

      <div className="relative max-w-md">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          placeholder="Search by name or phone..."
          defaultValue={search}
          onChange={(e) => updateQuery({ search: e.target.value, page: 1 })}
          className="h-14 w-full rounded-2xl bg-surface border border-border pl-11 pr-5 text-sm font-medium text-cyprus outline-none focus:border-cyprus transition-all"
        />
      </div>

      <div className="rounded-3xl border border-border bg-surface overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-sand text-left border-b border-border">
              <tr>
                <th className="px-6 py-4 font-bold text-cyprus uppercase text-xs whitespace-nowrap">Date & Time</th>
                <th className="px-6 py-4 font-bold text-cyprus uppercase text-xs">Name</th>
                <th className="px-6 py-4 font-bold text-cyprus uppercase text-xs">Phone</th>
                <th className="px-6 py-4 font-bold text-cyprus uppercase text-xs">State</th>
                <th className="px-6 py-4 font-bold text-cyprus uppercase text-xs">Loan</th>
                <th className="px-6 py-4 font-bold text-cyprus uppercase text-xs">Status</th>
                <th className="px-6 py-4 font-bold text-cyprus uppercase text-xs text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {loading ? (
                 Array.from({ length: 5 }).map((_, idx) => (
                  <tr key={idx} className="animate-pulse">
                    <td className="px-6 py-5"><div className="h-4 bg-border/60 rounded w-28"></div></td>
                    <td className="px-6 py-5"><div className="h-4 bg-border/60 rounded w-24"></div></td>
                    <td className="px-6 py-5"><div className="h-4 bg-border/60 rounded w-24"></div></td>
                    <td className="px-6 py-5"><div className="h-4 bg-border/60 rounded w-28"></div></td>
                    <td className="px-6 py-5"><div className="h-6 bg-border/60 rounded-lg w-20"></div></td>
                    <td className="px-6 py-5"><div className="h-8 bg-border/60 rounded-lg w-24"></div></td>
                    <td className="px-6 py-5 flex justify-end"><div className="h-8 w-8 bg-border/60 rounded-lg"></div></td>
                  </tr>
                ))
              ) : result.data.length > 0 ? (
                result.data.map((item) => (
                  <tr key={item._id} className="hover:bg-sand/40">
                    <td className="px-6 py-4 whitespace-nowrap text-muted text-xs font-medium">
                      {new Date(item.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                    </td>
                    <td className="px-6 py-4 font-bold text-cyprus whitespace-nowrap">{item.fullName}</td>
                    <td className="px-6 py-4 font-medium text-muted whitespace-nowrap">{item.phone}</td>
                    <td className="px-6 py-4 font-medium text-muted whitespace-nowrap">{item.state}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-3 py-1 rounded-lg text-xs font-bold bg-sand text-cyprus border border-border">
                        {item.loanType}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        disabled={updatingId === item._id}
                        value={item.status || "pending"}
                        onChange={(e) => handleStatusChange(item._id, e.target.value)}
                        className={`text-xs font-bold px-3 py-1.5 rounded-lg border outline-none cursor-pointer ${
                          item.status === 'approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
                          item.status === 'rejected' ? 'bg-red-50 text-red-700 border-red-200' : 
                          'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Link href={`/admin/queries/${item._id}`} className="inline-flex p-2 text-muted hover:text-cyprus hover:bg-sand rounded-lg transition-colors border border-transparent hover:border-border">
                        <Eye size={18} />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr><td colSpan={7} className="py-16 text-center text-muted"><Inbox className="mx-auto mb-2 opacity-50"/> No enquiries found.</td></tr>
              )}
            </tbody>
          </table>
        </div>

        {result.totalPages > 1 && (
          <div className="flex items-center justify-between p-5 border-t border-border bg-white">
             <span className="text-sm font-medium text-muted">
              Showing {(page - 1) * LIMIT + 1}–{Math.min(page * LIMIT, result.total)} of {result.total}
            </span>
            <div className="flex gap-2">
              <button disabled={page <= 1} onClick={() => updateQuery({ page: page - 1 })} className="p-2 border border-border rounded-xl hover:bg-sand disabled:opacity-40 text-cyprus transition-colors"><ChevronLeft size={18} /></button>
              <button disabled={page >= result.totalPages} onClick={() => updateQuery({ page: page + 1 })} className="p-2 border border-border rounded-xl hover:bg-sand disabled:opacity-40 text-cyprus transition-colors"><ChevronRight size={18} /></button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminQueriesPage() {
  return <Suspense><QueriesContent /></Suspense>;
}