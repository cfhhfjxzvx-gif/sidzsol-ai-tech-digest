'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
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

/* ─── Mobile Menu (rendered via portal) ─── */
function MobileMenu({
  isOpen,
  onClose,
  pathname,
}: {
  isOpen: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  // Controls whether the component is in the DOM at all
  const [shouldRender, setShouldRender] = useState(false);
  // Controls the CSS transition state (open/closed)
  const [animState, setAnimState] = useState<'closed' | 'open'>('closed');

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Manage mount/unmount + animation lifecycle */
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      // Force a layout read before setting open state so the browser paints the initial position
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setAnimState('open');
        });
      });
    } else {
      setAnimState('closed');
      // Wait for the CSS transition to finish before unmounting
      const timer = setTimeout(() => setShouldRender(false), 350);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  /* Lock body scroll */
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!mounted || !shouldRender) return null;

  const isAnimOpen = animState === 'open';

  return createPortal(
    <div
      id="mobile-nav-root"
      className="lg:hidden"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999, // Above the noise overlay (z-9999)
        pointerEvents: isAnimOpen ? 'auto' : 'none',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          backdropFilter: 'blur(4px)',
          WebkitBackdropFilter: 'blur(4px)',
          opacity: isAnimOpen ? 1 : 0,
          transition: 'opacity 0.3s ease',
          touchAction: 'none',
        }}
      />

      {/* Slide-in panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(80vw, 320px)',
          transform: isAnimOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.32, 0.72, 0, 1)',
          willChange: 'transform',
          touchAction: 'pan-y',
        }}
      >
        {/* Glass background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(6, 8, 13, 0.95)',
            backdropFilter: 'blur(40px) saturate(180%)',
            WebkitBackdropFilter: 'blur(40px) saturate(180%)',
            borderLeft: '1px solid rgba(99, 102, 241, 0.1)',
          }}
        />

        {/* Ambient top glow */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '200px',
            background:
              'linear-gradient(180deg, rgba(99, 102, 241, 0.08) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />
        {/* Ambient bottom glow */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: '200px',
            background:
              'linear-gradient(0deg, rgba(168, 85, 247, 0.05) 0%, transparent 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Content container */}
        <div
          style={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '80px',
            paddingLeft: '24px',
            paddingRight: '24px',
            paddingBottom: '32px',
            overflowY: 'auto',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {/* Section label */}
          <p
            style={{
              fontSize: '10px',
              fontWeight: 700,
              color: '#64748b',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '16px',
              paddingLeft: '4px',
            }}
          >
            Navigation
          </p>

          {/* Navigation links */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px 16px',
                    borderRadius: '12px',
                    fontSize: '15px',
                    fontWeight: 500,
                    textDecoration: 'none',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    background: isActive
                      ? 'rgba(99, 102, 241, 0.15)'
                      : 'transparent',
                    border: isActive
                      ? '1px solid rgba(99, 102, 241, 0.2)'
                      : '1px solid transparent',
                    transition: 'all 0.2s ease',
                    WebkitTapHighlightColor: 'rgba(99, 102, 241, 0.1)',
                    touchAction: 'manipulation',
                    opacity: isAnimOpen ? 1 : 0,
                    transform: isAnimOpen
                      ? 'translateX(0)'
                      : 'translateX(20px)',
                    transitionDelay: isAnimOpen ? `${80 + i * 50}ms` : '0ms',
                    transitionProperty: 'opacity, transform, color, background, border',
                    transitionDuration: '0.3s',
                    minHeight: '48px',
                  }}
                >
                  <span style={{ fontSize: '18px', lineHeight: 1 }}>
                    {link.icon}
                  </span>
                  <span>{link.label}</span>
                  {isActive && (
                    <span
                      style={{
                        marginLeft: 'auto',
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: '#818cf8',
                        boxShadow: '0 0 8px rgba(99, 102, 241, 0.6)',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Bottom CTA */}
          <div
            style={{
              marginTop: '32px',
              opacity: isAnimOpen ? 1 : 0,
              transform: isAnimOpen ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.3s ease 0.35s, transform 0.3s ease 0.35s',
            }}
          >
            {/* Divider */}
            <div
              style={{
                height: '1px',
                background:
                  'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                marginBottom: '20px',
              }}
            />

            <a
              href="https://discord.gg/sidzsol"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                width: '100%',
                padding: '14px 20px',
                borderRadius: '12px',
                fontSize: '14px',
                fontWeight: 700,
                textDecoration: 'none',
                color: '#ffffff',
                WebkitTapHighlightColor: 'rgba(99, 102, 241, 0.2)',
                touchAction: 'manipulation',
                minHeight: '48px',
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03z" />
              </svg>
              Join Discord
            </a>

            <p
              style={{
                fontSize: '11px',
                color: '#475569',
                textAlign: 'center',
                marginTop: '12px',
              }}
            >
              © {new Date().getFullYear()} SidZsol Technologies
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
}

/* ─── Main Navbar ─── */
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

  // Close menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
        }`}
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
                onClick={() => setMobileOpen((prev) => !prev)}
                className="lg:hidden relative flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileOpen}
                aria-controls="mobile-nav-root"
                style={{
                  width: '44px',
                  height: '44px',
                  minWidth: '44px',
                  minHeight: '44px',
                  touchAction: 'manipulation',
                  WebkitTapHighlightColor: 'rgba(99, 102, 241, 0.15)',
                  // Ensure it sits above the noise overlay
                  position: 'relative',
                  zIndex: 100000,
                }}
              >
                <div
                  style={{
                    width: '20px',
                    height: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      display: 'block',
                      height: '2px',
                      width: '20px',
                      backgroundColor: 'currentColor',
                      borderRadius: '2px',
                      transition: 'transform 0.3s ease, opacity 0.3s ease',
                      transformOrigin: 'center',
                      transform: mobileOpen
                        ? 'translateY(6px) rotate(45deg)'
                        : 'none',
                    }}
                  />
                  <span
                    style={{
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
                      display: 'block',
                      height: '2px',
                      width: '20px',
                      backgroundColor: 'currentColor',
                      borderRadius: '2px',
                      transition: 'transform 0.3s ease, opacity 0.3s ease',
                      transformOrigin: 'center',
                      transform: mobileOpen
                        ? 'translateY(-6px) rotate(-45deg)'
                        : 'none',
                    }}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu — rendered via portal to document.body */}
      <MobileMenu
        isOpen={mobileOpen}
        onClose={closeMobile}
        pathname={pathname}
      />

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
