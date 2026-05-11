'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import SearchModal from './SearchModal';

const navLinks = [
  { label: 'Home', href: '/', icon: '🏠' },
  { label: 'Weekly Digest', href: '/digest', icon: '📰' },
  { label: 'Categories', href: '/categories', icon: '📂' },
  { label: 'Community', href: '/community', icon: '👥' },
  { label: 'About', href: '/about', icon: 'ℹ️' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileOpen]);

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);
  const toggleMobile = useCallback(() => setMobileOpen(prev => !prev), []);

  return (
    <>
      {/* ══════════════════════════════════════
          TOP NAV BAR
          ══════════════════════════════════════ */}
      <nav
        className={`fixed top-0 left-0 right-0 transition-all duration-300 ${
          scrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
        }`}
        style={{ zIndex: 2147483646 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.5)] relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-white font-bold text-lg relative z-10">S</span>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-white tracking-tight leading-none group-hover:text-indigo-200 transition-colors">SidZsol</span>
                <span className="text-[10px] text-indigo-400 font-bold tracking-widest uppercase mt-1">Digest</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 rounded-2xl p-1 backdrop-blur-md">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200 ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className="absolute inset-0 bg-white/10 rounded-xl border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.1)]"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-white/10 hover:border-indigo-500/50 transition-all duration-300 shadow-[0_0_10px_rgba(0,0,0,0.5)]"
                aria-label="Search"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </button>
              
              <a
                href="https://discord.gg/sidzsol"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex btn-gradient px-5 py-2.5 rounded-xl text-sm font-bold"
              >
                Join Discord
              </a>

              {/* Hamburger — mobile only */}
              <button
                id="mobile-menu-toggle"
                onClick={toggleMobile}
                className="lg:hidden"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '44px',
                  height: '44px',
                  minWidth: '44px',
                  minHeight: '44px',
                  borderRadius: '12px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#cbd5e1',
                  cursor: 'pointer',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'transparent',
                  position: 'relative',
                  zIndex: 2147483647,
                }}
              >
                <div style={{ width: '20px', height: '14px', position: 'relative' }}>
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 0,
                      display: 'block',
                      height: '2px',
                      width: '20px',
                      backgroundColor: 'currentColor',
                      borderRadius: '2px',
                      transition: 'transform 0.3s ease',
                      transformOrigin: 'center center',
                      transform: mobileOpen
                        ? 'translateY(6px) rotate(45deg)'
                        : 'translateY(0) rotate(0)',
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '6px',
                      display: 'block',
                      height: '2px',
                      width: '20px',
                      backgroundColor: 'currentColor',
                      borderRadius: '2px',
                      transition: 'opacity 0.2s ease',
                      opacity: mobileOpen ? 0 : 1,
                    }}
                  />
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      bottom: 0,
                      display: 'block',
                      height: '2px',
                      width: '20px',
                      backgroundColor: 'currentColor',
                      borderRadius: '2px',
                      transition: 'transform 0.3s ease',
                      transformOrigin: 'center center',
                      transform: mobileOpen
                        ? 'translateY(-6px) rotate(-45deg)'
                        : 'translateY(0) rotate(0)',
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ══════════════════════════════════════
          FULLSCREEN MOBILE MENU
          Always in DOM, visibility controlled by CSS.
          No portal. No AnimatePresence. No complex state.
          ══════════════════════════════════════ */}
      <div
        id="mobile-menu-overlay"
        onClick={closeMobile}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 2147483645,
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          opacity: mobileOpen ? 1 : 0,
          visibility: mobileOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          touchAction: 'none',
        }}
      />

      <div
        id="mobile-menu-panel"
        role="dialog"
        aria-modal={mobileOpen}
        aria-label="Mobile navigation"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(85vw, 340px)',
          zIndex: 2147483646,
          transform: mobileOpen ? 'translateX(0%)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.32, 0.72, 0, 1)',
          willChange: 'transform',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-y',
        }}
      >
        {/* Solid dark background — no transparency issues */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: '#060810',
            borderLeft: '1px solid rgba(99, 102, 241, 0.15)',
          }}
        />

        {/* Top ambient glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '250px',
            background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.05) 40%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Bottom ambient glow */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '200px',
            background: 'linear-gradient(0deg, rgba(168, 85, 247, 0.06) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Left edge glow line */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            width: '1px',
            background: 'linear-gradient(180deg, rgba(99, 102, 241, 0.3) 0%, rgba(168, 85, 247, 0.2) 50%, rgba(99, 102, 241, 0.1) 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Menu content */}
        <div
          style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
            paddingTop: '90px',
            paddingBottom: '40px',
            paddingLeft: '28px',
            paddingRight: '28px',
          }}
        >
          {/* Section label */}
          <p
            style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#6366f1',
              textTransform: 'uppercase',
              letterSpacing: '0.25em',
              marginBottom: '20px',
              paddingLeft: '16px',
            }}
          >
            Navigation
          </p>

          {/* ──── Navigation Links ──── */}
          <nav>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobile}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '14px',
                    padding: '16px',
                    marginBottom: '4px',
                    borderRadius: '14px',
                    fontSize: '16px',
                    fontWeight: isActive ? 600 : 500,
                    textDecoration: 'none',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(139, 92, 246, 0.15))'
                      : 'transparent',
                    border: isActive
                      ? '1px solid rgba(99, 102, 241, 0.25)'
                      : '1px solid transparent',
                    boxShadow: isActive
                      ? '0 0 20px rgba(99, 102, 241, 0.1), inset 0 0 20px rgba(99, 102, 241, 0.05)'
                      : 'none',
                    WebkitTapHighlightColor: 'rgba(99, 102, 241, 0.15)',
                    touchAction: 'manipulation',
                    minHeight: '52px',
                    cursor: 'pointer',
                    transition: 'background 0.2s ease, color 0.2s ease, border-color 0.2s ease',
                  }}
                >
                  <span style={{ fontSize: '20px', lineHeight: 1, width: '28px', textAlign: 'center' }}>
                    {link.icon}
                  </span>
                  <span style={{ flex: 1 }}>{link.label}</span>
                  {isActive && (
                    <span
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #818cf8, #a78bfa)',
                        boxShadow: '0 0 10px rgba(99, 102, 241, 0.7), 0 0 20px rgba(99, 102, 241, 0.3)',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Spacer */}
          <div style={{ flex: 1, minHeight: '40px' }} />

          {/* ──── Bottom section ──── */}
          <div>
            {/* Decorative divider */}
            <div
              style={{
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2), transparent)',
                marginBottom: '24px',
              }}
            />

            {/* Discord CTA */}
            <a
              href="https://discord.gg/sidzsol"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                width: '100%',
                padding: '15px 20px',
                borderRadius: '14px',
                fontSize: '15px',
                fontWeight: 700,
                textDecoration: 'none',
                color: '#ffffff',
                background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)',
                boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3), 0 0 40px rgba(99, 102, 241, 0.1)',
                WebkitTapHighlightColor: 'rgba(99, 102, 241, 0.2)',
                touchAction: 'manipulation',
                minHeight: '52px',
                cursor: 'pointer',
                border: 'none',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
              </svg>
              Join Discord
            </a>

            <p
              style={{
                fontSize: '11px',
                color: '#475569',
                textAlign: 'center',
                marginTop: '16px',
                letterSpacing: '0.05em',
              }}
            >
              © {new Date().getFullYear()} SidZsol Technologies
            </p>
          </div>
        </div>
      </div>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
