import {useEffect, useState} from 'react';
import type {ReactNode} from 'react';
import {Theme} from '@astryxdesign/core/theme';
import {Divider} from '@astryxdesign/core/Divider';
import {Icon} from '@astryxdesign/core/Icon';
import {IconButton} from '@astryxdesign/core/IconButton';
import {HStack} from '@astryxdesign/core/Stack';
import {Link} from '@astryxdesign/core/Link';
import {MobileNav} from '@astryxdesign/core/MobileNav';
import {Section} from '@astryxdesign/core/Section';
import {SideNavItem} from '@astryxdesign/core/SideNav';
import {Text} from '@astryxdesign/core/Text';
import {TopNav, TopNavHeading, TopNavItem} from '@astryxdesign/core/TopNav';
import {matchaTheme} from '@astryxdesign/theme-matcha/built';
import {Moon, Sun} from 'lucide-react';

type Mode = 'light' | 'dark';

const NAV_ITEMS = [
  {label: 'Apps', href: '/#work', page: 'home'},
  {label: 'Expertise', href: '/#expertise', page: 'home'},
  {label: 'Support', href: '/support.html', page: 'support'},
  {label: 'Privacy', href: '/privacy.html', page: 'privacy'},
];

function initialMode(): Mode {
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  } catch {
    return 'light';
  }
}

export function SiteChrome({
  page,
  children,
}: {
  page: 'home' | 'privacy' | 'support';
  children: ReactNode;
}) {
  const [mode, setMode] = useState<Mode>(initialMode);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('theme', mode);
    } catch {
      // Private browsing: theme just won't persist.
    }
  }, [mode]);

  const toggleMode = () => setMode(mode === 'dark' ? 'light' : 'dark');

  return (
    <Theme theme={matchaTheme} mode={mode}>
      <header className="site-header">
        <div className="container">
          <TopNav
            label="Primary navigation"
            heading={
              <TopNavHeading
                logo={
                  <span className="logo-mark" aria-hidden="true">
                    RO
                  </span>
                }
                heading="russellry"
                headingHref="/"
              />
            }
            startContent={
              <div className="desktop-nav">
                {NAV_ITEMS.map(item => (
                  <TopNavItem
                    key={item.label}
                    label={item.label}
                    href={item.href}
                    isSelected={page !== 'home' && item.page === page}
                  />
                ))}
              </div>
            }
            endContent={
              <HStack gap={2} vAlign="center">
                <IconButton
                  variant="ghost"
                  label="Toggle color theme"
                  tooltip={mode === 'dark' ? 'Switch to light' : 'Switch to dark'}
                  icon={
                    <Icon
                      icon={mode === 'dark' ? Sun : Moon}
                      color="inherit"
                    />
                  }
                  onClick={toggleMode}
                />
                <div className="mobile-nav-toggle">
                  <IconButton
                    variant="ghost"
                    label="Open navigation"
                    icon={<Icon icon="menu" color="inherit" />}
                    onClick={() => setIsNavOpen(true)}
                  />
                </div>
              </HStack>
            }
          />
        </div>
      </header>

      <MobileNav
        isOpen={isNavOpen}
        onOpenChange={setIsNavOpen}
        header="russellry"
        side="end">
        {NAV_ITEMS.map(item => (
          <SideNavItem key={item.label} label={item.label} href={item.href} />
        ))}
      </MobileNav>

      <main>{children}</main>

      <footer>
        <Divider />
        <div className="container">
          <Section variant="transparent" padding={0} paddingBlock={6}>
            <HStack gap={4} hAlign="between" vAlign="center" wrap="wrap">
              <Text type="supporting" as="p">
                © {new Date().getFullYear()} Russell Ong. Built for the App
                Store.
              </Text>
              <HStack gap={4} vAlign="center" as="nav">
                <Link href="/" isStandalone>
                  Home
                </Link>
                <Link href="/privacy.html" isStandalone>
                  Privacy Policy
                </Link>
                <Link href="/support.html" isStandalone>
                  Support
                </Link>
              </HStack>
            </HStack>
          </Section>
        </div>
      </footer>
    </Theme>
  );
}
