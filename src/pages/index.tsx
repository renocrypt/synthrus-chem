import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { AnimatedText } from '../components/AnimatedText';
import { motion } from 'framer-motion';

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const scrollPosition = useScrollPosition();

  return (
    <header
      className={clsx("hero bg-slate-200 dark:bg-slate-500", styles.heroBanner)}
    >
      <div className="container">
        <Heading as="h1">
          <AnimatedText 
            scrollPosition={scrollPosition}
            className="hero__title"
          />
        </Heading>
        <motion.p
          className="hero__subtitle"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Advanced Chemistry Documentation for the Modern Era
        </motion.p>
        <motion.div 
          className={styles.buttons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro"
          >
            Explore [SYNTH]RUS →
          </Link>
        </motion.div>
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
