'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Terminal, Github, Twitter, Linkedin, Youtube, 
  MapPin, Mail, Phone, ExternalLink, Server
} from 'lucide-react';

export default function Footer10() {
  const [systemStatus, setSystemStatus] = useState('ONLINE');
  const [uptimeSeconds, setUptimeSeconds] = useState(0);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const interval = setInterval(() => {
      setUptimeSeconds((prev) => prev + 1);
    }, 1000);

    // Deterministic system status changes
    const statusInterval = setInterval(() => {
      const statuses = ['ONLINE', 'ACTIVE', 'RUNNING', 'OPERATIONAL'];
      setSystemStatus((prevStatus) => {
        const currentIndex = statuses.indexOf(prevStatus);
        const nextIndex = (currentIndex + 1) % statuses.length;
        return statuses[nextIndex];
      });
    }, 10000);

    return () => {
      clearInterval(interval);
      clearInterval(statusInterval);
    };
  }, []);

  const formatUptime = (seconds: number) => {
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${days}d ${hours}h ${minutes}m ${secs}s`;
  };

  const footerLinks = {
    product: [
      { name: '機能', href: '#機能' },
      { name: 'プロセス', href: '#プロセス' },
      { name: '料金', href: '#料金' },
      { name: 'デモ', href: '#デモ' }
    ],
    company: [
      { name: '会社概要', href: '#' },
      { name: 'ブログ', href: '#' },
      { name: '採用情報', href: '#' },
      { name: 'お問い合わせ', href: '#お問い合わせ' }
    ],
    legal: [
      { name: '利用規約', href: '#' },
      { name: 'プライバシーポリシー', href: '#' },
      { name: '特定商取引法', href: '#' },
      { name: 'Cookie設定', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'Github' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="relative bg-[#34495E] border-t border-[#5DADE2]/20 overflow-hidden">
      {/* Retro Terminal Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(93,173,226,0.1) 2px,
                rgba(93,173,226,0.1) 4px
              )
            `,
            backgroundSize: '100% 4px'
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        {/* Terminal Header */}
        <div className="py-4 border-b border-[#5DADE2]/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Terminal className="w-5 h-5 text-[#5DADE2]" />
              <div className="font-mono text-sm text-gray-400">
                <span className="text-[#5DADE2]">ARCHAIVE@SYSTEM</span>
                <span className="text-gray-500">:</span>
                <span className="text-[#B76E79]">~$</span>
                <span className="ml-2 animate-pulse">_</span>
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <div className="flex items-center gap-2">
                <Server className="w-4 h-4 text-[#5DADE2]" />
                <span className="text-gray-400">STATUS:</span>
                <span className="text-[#5DADE2]">{systemStatus}</span>
              </div>
              <div className="hidden md:flex items-center gap-2">
                <div className="w-2 h-2 bg-[#5DADE2] rounded-full animate-pulse" />
                <span className="text-gray-400">UPTIME:</span>
                <span className="text-[#B76E79]">{formatUptime(uptimeSeconds)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-300 mb-2">ARCHAIVE</h3>
                <p className="text-sm text-gray-400 font-mono mb-4">
                  {'> '} ビジネスの未来を再定義する
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  最先端のAI技術とクラウドソリューションで、企業のデジタル変革を加速します。
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <a href="tel:0120-123-456" className="flex items-center gap-3 text-gray-400 hover:text-[#5DADE2] transition-colors duration-300 group">
                  <Phone className="w-4 h-4" />
                  <span className="font-mono text-sm">0120-123-456</span>
                </a>
                <a href="mailto:contact@archaive.com" className="flex items-center gap-3 text-gray-400 hover:text-[#5DADE2] transition-colors duration-300 group">
                  <Mail className="w-4 h-4" />
                  <span className="font-mono text-sm">contact@archaive.com</span>
                </a>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span className="text-sm">
                    〒100-0001<br />
                    東京都千代田区千代田1-1-1
                  </span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="relative group"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-[#5DADE2] blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
                    <div className="relative w-10 h-10 bg-[#2C3E50] border border-[#5DADE2]/30 rounded-lg flex items-center justify-center group-hover:border-[#5DADE2]/60 transition-all duration-300">
                      <social.icon className="w-4 h-4 text-gray-400 group-hover:text-[#5DADE2] transition-colors duration-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-mono text-sm text-[#5DADE2] mb-4">
                {'> '} PRODUCT
              </h4>
              <ul className="space-y-2">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#5DADE2] transition-colors duration-300 text-sm flex items-center gap-1 group"
                    >
                      <span className="text-[#B76E79] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {'> '}
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-sm text-[#5DADE2] mb-4">
                {'> '} COMPANY
              </h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#5DADE2] transition-colors duration-300 text-sm flex items-center gap-1 group"
                    >
                      <span className="text-[#B76E79] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {'> '}
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-sm text-[#5DADE2] mb-4">
                {'> '} LEGAL
              </h4>
              <ul className="space-y-2">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-[#5DADE2] transition-colors duration-300 text-sm flex items-center gap-1 group"
                    >
                      <span className="text-[#B76E79] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {'> '}
                      </span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Terminal Footer */}
        <div className="py-6 border-t border-[#5DADE2]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="font-mono text-xs text-gray-500">
              <span className="text-[#5DADE2]">{'> '}</span>
              COPYRIGHT (C) {currentYear} ARCHAIVE CORPORATION. ALL RIGHTS RESERVED.
            </div>
            <div className="flex items-center gap-4 font-mono text-xs">
              <span className="text-gray-500">BUILD:</span>
              <span className="text-[#B76E79]">v10.0.0</span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-500">ENV:</span>
              <span className="text-[#5DADE2]">PRODUCTION</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#5DADE2] to-transparent opacity-50" />
      
      {/* Floating Dots */}
      <div className="absolute top-0 right-0 p-8">
        <div className="grid grid-cols-3 gap-2">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="w-1 h-1 bg-[#5DADE2] rounded-full opacity-20"
              style={{
                animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            />
          ))}
        </div>
      </div>
    </footer>
  );
}