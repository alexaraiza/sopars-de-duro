import Link from 'next/link';
import categories from '../../content/categories';
import DropDown from './drop-down';

import styles from './navigation.module.scss';

export default function Navigation() {
  return (
    <nav className={styles.nav}>
      <DropDown
        mainLink={<Link href="/">Els meus plats</Link>}
        secondaryLinks={categories.map((category) => (
          <Link href={'/' + category.id} key={category.id}>
            {category.name}
          </Link>
        ))}
      />
      <Link href="/els-sopars-de-duro">Els sopars de duro</Link>
      <Link href="/qui-soc">Qui soc</Link>
      <Link href="/contacte">Contacte</Link>
    </nav>
  );
}
