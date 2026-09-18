"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search, Copy, Check, ChevronLeft, ChevronRight, Loader2, MailQuestion } from "lucide-react";

interface Subscriber {
  _id: string;
  email: string;
  subscribedAt: string;
}

const LIMIT = 10;

function NewsletterContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page") || "1", 10);
  const search = searchParams.get("search") || "";

  const [result, setResult] = useState<{
    data: Subscriber[];
    total: number;
    totalPages: number;
  }>({ data: [], total: 0, totalPages: 0 });

  const [loading, setLoading] = useState(true);
  const [copiedEmail, setCopiedEmail] = useState("");

  const updateQuery = (updates: Record<string, string | number | null>) => {
    const params = new URLSearchParams(searchParams.toString());
    Object.entries(updates).forEach(([key, val]) => {
      if (val === null || val === "") params.delete(key);
      else params.set(key, String(val));
    });
    router.replace(`/admin/newsletter?${params.toString()}`);
  };

  useEffect(() => {
    let ignore = false;
    setLoading(true);

    const params = new URLSearchParams({
      page: String(page),
      limit: String(LIMIT),
      ...(search && { search }),
    });

    fetch(`/api/newsletter?${params.toString()}`)
      .then((res) => res.json())
      .then((json) => {
        if (!ignore && json.success) {
          setResult({
            data: json.data,
            total: json.total,
            totalPages: json.totalPages,
          });
        }
      })
      .catch((err) => console.error(err))
      .finally(() => {
        if (!ignore) setLoading(false);
      });

    return () => {
      ignore = true;
    };
  }, [page, search]);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(""), 1500);
  };

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-cyprus">
          Newsletter Subscribers
        </h1>
        <p className="mt-2 text-sm font-medium text-muted">
          Manage your email distribution lists.
        </p>
      </div>

      <div className="max-w-md relative">
        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          placeholder="Search by email..."
          defaultValue={search}
          onChange={(e) => updateQuery({ search: e.target.value, page: 1 })}
          className="h-14 w-full rounded-2xl bg-surface border border-border pl-11 pr-5 text-sm font-medium text-cyprus outline-none focus:border-cyprus focus:ring-2 focus:ring-cyprus/20 transition-all shadow-sm"
        />
      </div>

      <div className="rounded-3xl border border-border bg-surface shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-sand text-left border-b border-border">
              <tr>
                <th className="px-6 py-4 font-bold text-cyprus uppercase tracking-wider text-xs">Email</th>
                <th className="px-6 py-4 font-bold text-cyprus uppercase tracking-wider text-xs">Subscribed On</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {loading ? (
                <tr>
                  <td colSpan={2} className="py-16 text-center text-muted">
                    <div className="flex flex-col items-center gap-3">
                      <Loader2 size={28} className="animate-spin text-cyprus" />
                      <span className="font-medium">Loading subscriber entries...</span>
                    </div>
                  </td>
                </tr>
              ) : result.data.length > 0 ? (
                result.data.map((item) => (
                  <tr key={item._id} className="hover:bg-sand/40 transition-colors">
                    <td className="px-6 py-5 font-bold text-cyprus whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <span>{item.email}</span>
                        <button
                          onClick={() => handleCopy(item.email)}
                          className="p-1.5 text-muted hover:text-cyprus hover:bg-sand rounded-lg transition-colors border border-transparent hover:border-border"
                          title="Copy email"
                        >
                          {copiedEmail === item.email ? (
                            <Check size={16} className="text-emerald-600" />
                          ) : (
                            <Copy size={16} />
                          )}
                        </button>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-muted font-medium whitespace-nowrap">
                      {new Date(item.subscribedAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="py-16 text-center text-muted">
                    <div className="flex flex-col items-center gap-3">
                      <MailQuestion size={32} className="text-muted/50" />
                      <span className="font-medium">No subscribers found.</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {result.totalPages > 1 && (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 border-t border-border bg-white">
            <span className="text-sm font-medium text-muted">
              Showing {(page - 1) * LIMIT + 1}–{Math.min(page * LIMIT, result.total)} of {result.total}
            </span>
            <div className="flex items-center gap-2">
              <button
                disabled={page <= 1 || loading}
                onClick={() => updateQuery({ page: page - 1 })}
                className="p-2 rounded-xl border border-border bg-surface text-cyprus hover:bg-sand disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                <ChevronLeft size={18} />
              </button>
              <span className="px-4 py-2 text-sm font-bold text-cyprus">
                Page {page} of {result.totalPages}
              </span>
              <button
                disabled={page >= result.totalPages || loading}
                onClick={() => updateQuery({ page: page + 1 })}
                className="p-2 rounded-xl border border-border bg-surface text-cyprus hover:bg-sand disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-sm"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AdminNewsletterPage() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center py-32 text-cyprus gap-3 font-medium">
        <Loader2 size={28} className="animate-spin" />
        <span>Loading...</span>
      </div>
    }>
      <NewsletterContent />
    </Suspense>
  );
}