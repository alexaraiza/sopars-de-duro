import tags from '../../content/tags';
import { handleTagSelect } from './recipe-grid';

import styles from './tags.module.scss';

export default function Tags() {
  return (
    <div className={styles.tags}>
      <h5>Etiquetes</h5>
      <form onChange={handleTagSelect}>
        {tags.map((tag) => (
          <div key={tag.id}>
            <label htmlFor={tag.id + '-tag'}>{tag.name}</label>
            <input id={tag.id + '-tag'} type="checkbox" value={tag.id} />
          </div>
        ))}
      </form>
    </div>
  );
}
