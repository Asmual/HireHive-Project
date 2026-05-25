"use client";

import Link from "next/link";

export default function Footer() {
  // ফুটারের লিঙ্ক ডাটা স্ট্রাকচার
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Job discovery", href: "/jobs" },
        { label: "Worker AI", href: "/worker-ai" },
        { label: "Companies", href: "/companies" },
        { label: "Salary data", href: "/salary" },
      ],
    },
    {
      title: "Navigations",
      links: [
        { label: "Help center", href: "/help" },
        { label: "Career library", href: "/library" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Brand Guideline", href: "/brand" },
        { label: "Newsroom", href: "/news" },
      ],
    },
  ];

  return (
    <footer className="w-full bg-[#09090b] text-zinc-400 border-t border-zinc-900 pt-16 pb-8 px-6 sm:px-12 lg:px-16 mt-20">
      <div className="mx-auto max-w-7xl">
        
        {/* উপরের অংশ: লোগো বনাম লিঙ্ক গ্রিড */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 pb-12 border-b border-zinc-900">
          
          {/* বাম পাশ: লোগো এবং বিবরণ (১২ কলামের মধ্যে ৫ কলাম দখল করবে) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-wide group w-fit">
              <span className="bg-emerald-500 text-zinc-950 px-2.5 py-1 rounded-lg text-lg font-black shadow-[0_0_15px_rgba(16,185,129,0.5)] group-hover:shadow-[0_0_20px_rgba(16,185,129,0.8)] transition-all duration-300">
                H
              </span>
              <span className="text-zinc-100 font-semibold text-lg">
                Hire<span className="text-emerald-400 drop-shadow-[0_0_8px_rgba(52,211,153,0.4)]">Hive</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-zinc-500">
              The AI-native career platform. Built for people who take their work seriously.
            </p>
          </div>

          {/* ডান পাশ: লিঙ্ক ক্যাটাগরিগুলো (১২ কলামের মধ্যে ৭ কলাম দখল করবে) */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col gap-4">
                {/* ক্যাটাগরি টাইটেল - আপনার স্ক্রিনশটের মতো বেগুনী/নীল শেডের বদলে গ্রিন থিমে মেলানো */}
                <h3 className="text-sm font-semibold text-emerald-400/90 drop-shadow-[0_0_6px_rgba(52,211,153,0.2)] tracking-wider">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* নিচের অংশ: সোশ্যাল আইকন এবং কপিরাইট টেক্সট */}
        <div className="pt-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          
          {/* সোশ্যাল মিডিয়া বাটন (ডিজাইন অনুযায়ী রাউন্ডেড বক্স) */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.8c4.56-.93 8-4.96 8-9.8z"/>
              </svg>
            </a>
            {/* Pinterest / Internet icon */}
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.53c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
            </a>
          </div>

          {/* ডান সাইড: কপিরাইট ও পলিসি টেক্সট */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6 text-xs text-zinc-600">
            <p>Copyright 2026 — HireHive</p>
            <div className="flex gap-4">
              <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms & Policy</Link>
              <span>-</span>
              <Link href="/privacy" className="hover:text-zinc-400 transition-colors">Privacy Guideline</Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}