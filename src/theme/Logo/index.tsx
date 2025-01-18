import React from 'react';
import { TestTube } from 'lucide-react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useThemeConfig } from '@docusaurus/theme-common';
import ThemedImage from '@theme/ThemedImage';

export default function Logo(): JSX.Element {
  const {
    siteConfig: {title},
  } = useDocusaurusContext();
  const {
    navbar: {title: navbarTitle, logo},
  } = useThemeConfig();

  const logoLink = useBaseUrl(logo?.href || '/');

  return (
    <Link
      to={logoLink}
      className="navbar__brand"
      aria-label={navbarTitle ?? title}>
      <TestTube
        size={32}
        strokeWidth={1.5}
        className="navbar-logo"
      />
      {navbarTitle != null && (
        <span className="navbar__title">{navbarTitle}</span>
      )}
    </Link>
  );
}
