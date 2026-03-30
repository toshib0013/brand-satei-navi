'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-gray-900">
            ブランド<span className="text-amber-600">査定</span>ナビ
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
            相場コラム
          </Link>
          <a
            href="/#companies"
            className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
          >
            業者を比較する
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-600"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="メニュー"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 space-y-4">
          <Link href="/blog" className="block text-gray-600 font-medium py-2" onClick={() => setIsOpen(false)}>
            相場コラム
          </Link>
          <a
            href="/#companies"
            className="block bg-amber-500 text-white text-center font-semibold px-5 py-3 rounded-full"
            onClick={() => setIsOpen(false)}
          >
            業者を比較する
          </a>
        </div>
      )}
    </header>
  );
}
