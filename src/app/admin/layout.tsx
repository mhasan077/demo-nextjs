"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

function DashboardIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/></svg>;
}

function ToursIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>;
}

function SettingsIcon() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const links = [
    { href: '/admin', label: 'Ana Panel', icon: <DashboardIcon /> },
    { href: '/admin/tours', label: 'Turlar', icon: <ToursIcon /> },
    { href: '/admin/settings', label: 'Əlaqə Ayarları', icon: <SettingsIcon /> },
  ];

  return (
    <div className="flex h-screen bg-[#f3f4f6] text-gray-900 font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm z-10 hidden md:flex">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
           <div className="w-8 h-8 bg-[#174d65] rounded flex items-center justify-center mr-3">
              <span className="text-white font-bold text-sm">TR</span>
           </div>
           <span className="font-bold text-xl text-[#0b1110] tracking-tight">Traavellio</span>
        </div>
        <nav className="flex-1 p-4 space-y-1.5">
           {links.map(link => {
             const isActive = pathname === link.href || (link.href !== '/admin' && pathname.startsWith(link.href));
             return (
               <Link 
                 key={link.href} 
                 href={link.href} 
                 className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${isActive ? 'bg-[#174d65]/10 text-[#174d65] font-semibold' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'}`}
               >
                 <span className={isActive ? 'text-[#174d65]' : 'text-gray-400'}>{link.icon}</span>
                 {link.label}
               </Link>
             )
           })}
        </nav>
        
        {/* User profile simple */}
        <div className="p-4 border-t border-gray-100">
           <div className="flex items-center gap-3 px-4 py-2">
             <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center font-bold text-gray-500 text-sm">
               H
             </div>
             <div>
               <p className="text-sm font-bold text-gray-900">Tur Agentliyi</p>
               <p className="text-xs text-gray-500">Admin</p>
             </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden h-16 bg-white border-b border-gray-200 flex items-center px-4 shrink-0">
          <span className="font-bold text-lg text-[#0b1110]">Traavellio Admin</span>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8 relative">
          <div className="max-w-5xl mx-auto w-full pb-20">
            {children}
          </div>
        </div>
      </main>
    </div>
  )
}
