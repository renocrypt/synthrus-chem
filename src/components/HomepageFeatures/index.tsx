import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Enterprise Security',
    Svg: require('@site/static/img/undraw_security.svg').default,
    description: (
      <>
        Renocrypt provides enterprise-grade security solutions designed to protect
        your most valuable assets and data.
      </>
    ),
  },
  {
    title: 'Advanced Technology',
    Svg: require('@site/static/img/undraw_technology.svg').default,
    description: (
      <>
        Built on cutting-edge technology, Renocrypt delivers innovative solutions
        for modern security challenges.
      </>
    ),
  },
  {
    title: 'Developer-First',
    Svg: require('@site/static/img/undraw_developer.svg').default,
    description: (
      <>
        Comprehensive APIs and developer tools make integration seamless.
        Start building secure applications today.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
