'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from './ThemeProvider';

interface NavItem {
  name: string;
  href: string;
  iconOff: string;
  iconOn: string;
}

const navItems: NavItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    iconOff: '/assets/icons/dashboard-off.svg',
    iconOn: '/assets/icons/dashboard-on.svg',
  },
  {
    name: 'Transactions',
    href: '/transactions',
    iconOff: '/assets/icons/transaction-off.svg',
    iconOn: '/assets/icons/transaction-on.svg',
  },
  {
    name: 'Invoices',
    href: '/invoices',
    iconOff: '/assets/icons/invoices-off.svg',
    iconOn: '/assets/icons/invoices-on.svg',
  },
  {
    name: 'My Wallets',
    href: '/wallets',
    iconOff: '/assets/icons/wallet-off.svg',
    iconOn: '/assets/icons/wallet-on.svg',
  },
  {
    name: 'Settings',
    href: '/settings',
    iconOff: '/assets/icons/settings-off.svg',
    iconOn: '/assets/icons/settings-on.svg',
  },
];

const footerItems: NavItem[] = [
  {
    name: 'Help',
    href: '/help',
    iconOff: '/assets/icons/help-off.svg',
    iconOn: '/assets/icons/help-on.svg',
  },
  {
    name: 'Logout',
    href: '/logout',
    iconOff: '/assets/icons/logout-off.svg',
    iconOn: '/assets/icons/logout-on.svg',
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  const NavItemComponent = ({ item }: { item: NavItem }) => {
    const isActive = pathname === item.href;
    
    return (
      <Link
        href={item.href}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isActive
            ? 'bg-primary text-primary-foreground'
            : 'text-muted-foreground hover:text-foreground hover:bg-muted'
        }`}
      >
        <Image
          src={isActive ? item.iconOn : item.iconOff}
          alt={item.name}
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <span className="font-medium">{item.name}</span>
      </Link>
    );
  };

  return (
    <div className="flex flex-col h-screen w-64 bg-background border-r border-border">
      {/* Header */}
      <div className="flex items-center gap-3 px-6 py-6 border-b border-border">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-primary-foreground font-bold text-lg">M</span>
        </div>
        <span className="text-foreground font-semibold text-lg">Maglo.</span>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <NavItemComponent key={item.name} item={item} />
        ))}
      </nav>

      {/* Footer */}
      <div className="px-4 py-6 space-y-2 border-t border-border">
        {footerItems.map((item) => (
          <NavItemComponent key={item.name} item={item} />
        ))}
        
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-all duration-200 w-full"
        >
          <div className="w-5 h-5 flex items-center justify-center">
            {theme === 'dark' ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </div>
          <span className="font-medium">
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </span>
        </button>
      </div>
    </div>
  );
} 