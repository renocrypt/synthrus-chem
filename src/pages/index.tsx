import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { useScrollPosition } from "../hooks/useScrollPosition";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const scrollPosition = useScrollPosition();

  // Calculate text based on scroll position
  const getHeadingText = () => {
    if (scrollPosition < 30) {
      return "[SYNTHRUS]//";
    } else if (scrollPosition < 100) {
      return "[SYN]//";
    } else {
      return "//renocrypt";
    }
  };

  return (
    <header
      className={clsx("hero bg-slate-200 dark:bg-slate-500", styles.heroBanner)}
    >
      <div className="container">
        <Heading
          as="h1"
          className="hero__title transition-all duration-300 ease-in-out"
        >
          {getHeadingText()}
        </Heading>
        <p className="hero__subtitle">
          Advanced Chemistry Documentation for the Modern Era
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Explore Chemistry Docs →
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to [SYNTHRUS]//`}
      description="Modern chemistry documentation and resources for college-level audience"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
