import type { ReactNode } from 'react';
import { useRef, useState } from 'react';

import styles from './drop-down.module.scss';

export default function DropDown({ mainLink, secondaryLinks }: { mainLink: ReactNode; secondaryLinks: ReactNode[] }) {
  const linkListRef = useRef<HTMLDivElement>(null);
  const [dropDownIsExpanded, setDropDownIsExpanded] = useState(true);

  return (
    <div>
      <div className={styles.dropDown}>
        {mainLink}
        <button
          type="button"
          className={styles.expand}
          onClick={() => setDropDownIsExpanded((dropDownIsExpanded) => !dropDownIsExpanded)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 13H5v-2h14v2z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className={`${styles.disappear} ${dropDownIsExpanded ? styles.hidden : ''}`}
          >
            <path d="M11 5h2v14h-2z" />
          </svg>
        </button>
      </div>
      <div
        className={styles.linkList}
        ref={linkListRef}
        style={{ height: dropDownIsExpanded ? linkListRef.current?.scrollHeight ?? '' : 0 }}
      >
        {secondaryLinks}
      </div>
    </div>
  );
}
