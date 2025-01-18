import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import { FlaskRound, Atom, BookOpen } from 'lucide-react';

type FeatureItem = {
  title: string;
  Icon: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Modern Synthesis',
    Icon: FlaskRound,
    description: (
      <>
        Comprehensive guides on modern synthetic methodologies, 
        from classic reactions to cutting-edge catalytic processes.
      </>
    ),
  },
  {
    title: 'Computational Chemistry',
    Icon: Atom,
    description: (
      <>
        Advanced computational approaches to chemical problems,
        featuring modern molecular modeling and prediction tools.
      </>
    ),
  },
  {
    title: 'Academic Excellence',
    Icon: BookOpen,
    description: (
      <>
        Curated by PhD chemists and developers, bridging the gap
        between traditional chemistry and modern technology.
      </>
    ),
  },
];

function Feature({title, Icon, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Icon className={styles.featureSvg} aria-hidden="true" />
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
