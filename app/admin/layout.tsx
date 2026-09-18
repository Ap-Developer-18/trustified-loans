"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { LayoutDashboard, MessageSquare, LogOut, Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_ITEMS = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Enquiries", href: "/admin/queries", icon: MessageSquare },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMobileMenuOpen(false), [pathname]);

  const handleLogout = async () => {
    await fetch("/api/admin-logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  if (pathname === "/admin/login") return <>{children}</>;

  return (
    <div className="min-h-screen bg-sand text-cyprus flex font-sans">
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div 
          onClick={() => setMobileMenuOpen(false)} 
          className="fixed inset-0 z-40 bg-cyprus/20 backdrop-blur-sm md:hidden" 
        />
      )}

      {/* Sidebar (Hidden on mobile unless toggled, fixed on desktop) */}
      <aside className={`fixed top-0 bottom-0 left-0 z-50 w-64 border-r border-border bg-surface flex flex-col justify-between p-5 transition-transform duration-300 md:translate-x-0 ${mobileMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="space-y-8">
           <div
              className="flex items-center gap-1"
            >
              <Image width={40} height={40} src={"/logo.svg"} alt="logo" />
              <span className="font-serif text-2xl font-bold tracking-tight text-cyprus md:text-3xl">
                Trustified Loans
              </span>
            </div>

          <nav className="space-y-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
              return (
                <Link key={item.name} href={item.href} className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-medium text-sm transition-all duration-200 ${isActive ? "bg-cyprus text-sand shadow-md" : "text-muted hover:text-cyprus hover:bg-sand/50"}`}>
                  <item.icon size={18} /><span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="border-t border-border pt-5">
          <div className="flex items-center justify-between p-3 rounded-2xl bg-sand border border-border">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-cyprus text-sand flex items-center justify-center font-bold text-xs">AD</div>
              <p className="text-xs font-bold text-cyprus">Admin</p>
            </div>
            <button onClick={handleLogout} className="p-2 text-muted hover:text-red-600 rounded-xl hover:bg-white transition-colors">
              <LogOut size={18} />
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:pl-64 min-w-0">
        
        {/* Mobile Header - Visible only on small screens */}
        <header className="md:hidden flex items-center justify-between p-4 border-b border-border bg-surface sticky top-0 z-30">
          <div
              className="flex items-center gap-1"
            >
              <Image width={40} height={40} src={"/logo.svg"} alt="logo" />
              <span className="font-serif text-2xl font-bold tracking-tight text-cyprus md:text-3xl">
                Trustified Loans
              </span>
            </div>
          <button 
            onClick={() => setMobileMenuOpen(true)} 
            className="p-2.5 rounded-xl bg-cyprus text-sand hover:bg-cyprus/90 transition-colors"
          >
            <Menu size={20} />
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-5 sm:p-6 md:p-10 max-w-7xl w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}