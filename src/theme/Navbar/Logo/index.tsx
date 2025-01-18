import React from 'react';
import { TestTube } from 'lucide-react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig } from '@docusaurus/theme-common';

interface Props {
  className?: string;
  imageClassName?: string;
}

export default function NavbarLogo({
  className,
  imageClassName,
}: Props): JSX.Element {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle},
  } = useThemeConfig();

  return (
    <Link
      to="/"
      className="navbar__brand"
      aria-label={navbarTitle ?? title}>
      <div className="navbar__logo">
        <TestTube
          size={32}
          strokeWidth={1.5}
          className={`${imageClassName ?? ''}`}
        />
      </div>
      <b className="navbar__title text--truncate">{navbarTitle}</b>
    </Link>
  );
}
