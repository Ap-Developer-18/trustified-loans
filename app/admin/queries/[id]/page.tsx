"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, Loader2, Phone, MapPin, Briefcase, Calendar } from "lucide-react";

export default function EnquiryDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Sanity API endpoint for single doc (you can use GROQ API directly or create a specific route)
    const query = encodeURIComponent(`*[_type == "consultation" && _id == "${params.id}"][0]`);
    fetch(`https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2024-01-01/data/query/${process.env.NEXT_PUBLIC_SANITY_DATASET}?query=${query}`)
      .then(res => res.json())
      .then(json => {
        setData(json.result);
        setLoading(false);
      });
  }, [params.id]);

  if (loading) return <div className="py-20 text-center"><Loader2 className="animate-spin text-cyprus mx-auto" /></div>;
  if (!data) return <div className="py-20 text-center text-red-500 font-bold">Enquiry not found.</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <button onClick={() => router.back()} className="flex items-center gap-2 text-sm font-bold text-muted hover:text-cyprus transition-colors">
        <ArrowLeft size={16} /> Back to Enquiries
      </button>

      <div className="bg-surface border border-border rounded-3xl p-8 shadow-sm">
        <div className="flex justify-between items-start mb-8 pb-6 border-b border-border">
          <div>
            <h1 className="text-3xl font-serif font-bold text-cyprus">{data.fullName}</h1>
            <p className="text-sm font-medium text-muted mt-2 flex items-center gap-2">
              <Calendar size={14}/> {new Date(data.createdAt).toLocaleString('en-IN', { dateStyle: 'full', timeStyle: 'short' })}
            </p>
          </div>
          <span className={`px-4 py-1.5 rounded-xl text-sm font-bold capitalize border ${
            data.status === 'approved' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 
            data.status === 'rejected' ? 'bg-red-50 text-red-700 border-red-200' : 
            'bg-amber-50 text-amber-700 border-amber-200'
          }`}>
            {data.status || 'Pending'}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Phone Number</p>
            <p className="text-lg font-bold text-cyprus flex items-center gap-2">
              <Phone size={18} className="text-cyprus/50"/> +91 {data.phone}
            </p>
          </div>
          
          <div>
            <p className="text-xs font-bold text-muted uppercase tracking-wider mb-2">State / Region</p>
            <p className="text-lg font-bold text-cyprus flex items-center gap-2">
              <MapPin size={18} className="text-cyprus/50"/> {data.state}
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-xs font-bold text-muted uppercase tracking-wider mb-2">Requested Loan Type</p>
            <div className="bg-sand rounded-2xl p-5 border border-border inline-flex items-center gap-3">
              <Briefcase className="text-cyprus" size={24}/>
              <span className="text-xl font-serif font-bold text-cyprus capitalize">{data.loanType.replace(/-/g, ' ')}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}