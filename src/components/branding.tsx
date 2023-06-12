import Link from 'next/link';

import styles from './branding.module.scss';

export default function Branding() {
  return (
    <div className={styles.branding}>
      <Link href="/" className={styles.title}>
        Sopars de duro
      </Link>
      <div className={styles.description}>Menús sibarítics per a totes les butxaques</div>
    </div>
  );
}
