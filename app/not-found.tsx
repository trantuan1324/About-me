import Link from 'next/link';
import { Terminal, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-developer-grid bg-radial-spotlight px-4">
      <div className="glass-panel p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl text-center max-w-lg w-full">
        <div className="w-16 h-16 rounded-2xl bg-red-500/10 text-red-500 flex items-center justify-center mx-auto mb-6">
          <Terminal className="w-8 h-8" />
        </div>

        <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-red-500/10 text-red-500 border border-red-500/20">
          HTTP 404 — NOT FOUND
        </span>

        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
          Endpoint Not Found
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
          The route you requested could not be resolved by the server router. Please check your URL or return to the main portfolio.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-500/20 transition-all hover:scale-105"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
