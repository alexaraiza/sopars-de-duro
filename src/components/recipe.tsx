'use client';
import { cubicBezier, motion } from 'motion/react';
import type { Recipe } from '../../content/recipes';

import styles from './recipe.module.scss';

export default function Recipe({ recipe }: { recipe: Recipe }) {
  return (
    <main>
      <div className={styles.header}>
        <motion.img
          src={`/${recipe.id}.jpg`}
          alt={recipe.title}
          width={640}
          height={425}
          loading="eager"
          layoutId={recipe.id}
          transition={{
            layout: { duration: 0.3, ease: cubicBezier(0.6, 0, 0.4, 1) },
          }}
        />
        <h1>{recipe.title}</h1>
      </div>
      <article>
        {recipe.intro.map((element) => getHTML(element))}
        <h3>{recipe.cost}</h3>
        <h2>Ingredients</h2>
        {recipe.ingredients.map((element) => getHTML(element))}
        <h2>Preparació</h2>
        {recipe.prep.map((element) => getHTML(element))}
        {recipe.variants && <h2>Variants</h2>}
        {recipe.variants && recipe.variants.map((element) => getHTML(element))}
        {recipe.extras && recipe.extras.map((element) => getHTML(element))}
      </article>
    </main>
  );
}

function getHTML(element: { h2?: string; h3?: string; h4?: string; ol?: string[]; p?: string; ul?: string[] }) {
  for (const tagName in element) {
    if (!element[tagName as 'h2' | 'h3' | 'h4' | 'ol' | 'p' | 'ul']) continue;

    if (tagName === 'ol')
      return (
        <ol key="ol">
          {element[tagName]!.map((item) => (
            <li dangerouslySetInnerHTML={{ __html: item }} key={item}></li>
          ))}
        </ol>
      );
    if (tagName === 'ul')
      return (
        <ul key="ul">
          {element[tagName]!.map((item) => (
            <li dangerouslySetInnerHTML={{ __html: item }} key={item}></li>
          ))}
        </ul>
      );

    const Tag = (
      {
        h2: 'h2',
        h3: 'h3',
        h4: 'h4',
        p: 'p',
      } as const
    )[tagName]!;

    return (
      <Tag
        dangerouslySetInnerHTML={{ __html: element[tagName as 'h2' | 'h3' | 'h4' | 'p']! }}
        key={element[tagName as 'h2' | 'h3' | 'h4' | 'p']}
      ></Tag>
    );
  }
}
