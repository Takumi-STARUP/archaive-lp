import React from 'react';

type IconType = 'ai' | 'speed' | 'chat' | 'doc' | 'diff' | 'user' | 'company' | 'arrow' | 'check';

export default function Icon({ type, className = '', size = 32 }: { type: IconType; className?: string; size?: number }) {
  switch (type) {
    case 'ai':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><circle cx="16" cy="16" r="14" stroke="#37B7C4" strokeWidth="3" /><path d="M10 16L15 21L22 11" stroke="#37B7C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'speed':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><circle cx="16" cy="16" r="14" stroke="#37B7C4" strokeWidth="3" /><path d="M16 8V16L22 20" stroke="#37B7C4" strokeWidth="3" strokeLinecap="round" /></svg>
      );
    case 'chat':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><rect x="4" y="6" width="24" height="16" rx="4" stroke="#37B7C4" strokeWidth="3" /><path d="M8 22V26L16 22H24" stroke="#37B7C4" strokeWidth="3" strokeLinecap="round" /></svg>
      );
    case 'doc':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><rect x="7" y="4" width="18" height="24" rx="3" stroke="#37B7C4" strokeWidth="3" /><path d="M11 10H21M11 16H21M11 22H17" stroke="#37B7C4" strokeWidth="2" strokeLinecap="round" /></svg>
      );
    case 'diff':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><rect x="4" y="8" width="24" height="16" rx="4" stroke="#37B7C4" strokeWidth="3" /><path d="M12 16H20M16 12V20" stroke="#37B7C4" strokeWidth="2" strokeLinecap="round" /></svg>
      );
    case 'user':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><circle cx="16" cy="12" r="6" stroke="#37B7C4" strokeWidth="3" /><path d="M6 26C6 21.58 10.03 18 16 18C21.97 18 26 21.58 26 26" stroke="#37B7C4" strokeWidth="3" /></svg>
      );
    case 'company':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><rect x="6" y="10" width="20" height="14" rx="3" stroke="#37B7C4" strokeWidth="3" /><rect x="12" y="6" width="8" height="8" rx="2" stroke="#37B7C4" strokeWidth="3" /></svg>
      );
    case 'arrow':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><path d="M8 16H24M18 10L24 16L18 22" stroke="#37B7C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    case 'check':
      return (
        <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}><circle cx="16" cy="16" r="14" stroke="#37B7C4" strokeWidth="3" /><path d="M10 16L15 21L22 11" stroke="#37B7C4" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
      );
    default:
      return null;
  }
} 