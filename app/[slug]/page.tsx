'use client';
import { AnimatePresence, cubicBezier, motion } from 'framer-motion';
import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import categories from '../../content/categories.json';
import recipes from '../../content/recipes.json';
import RecipeGrid from '../components/recipe-grid';
import styles from './recipe.module.scss';

// export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
//   const category = categories.find((category) => category.id === params.slug);
//   const recipe = recipes.find((recipe) => recipe.id === params.slug);

//   if (category) {
//     return {
//       title: category.name,
//     };
//   }

//   if (recipe) {
//     return {
//       title: recipe.title,
//     };
//   }
// }

// export function generateStaticParams(): { slug: string }[] {
//   const categoryIds = categories.map((category) => category.id);
//   const recipeIds = recipes.map((recipe) => recipe.id);

//   return categoryIds.concat(recipeIds).map((id) => ({ slug: id }));
// }

export default function Page({ params }: { params: { slug: string } }) {
  const category = categories.find((category) => category.id === params.slug);
  const recipe = recipes.find((recipe) => recipe.id === params.slug);

  if (category) {
    return (
      <main>
        <h1>{category.name}</h1>
        <RecipeGrid recipes={recipes.filter((recipe) => recipe.categories.includes(category.id))} />
      </main>
    );
  }

  if (recipe) {
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

  notFound();
}

function getHTML(element) {
  for (let tagName of Object.keys(element)) {
    if (!element[tagName]) continue;
    if (tagName === 'h2') return <h2 dangerouslySetInnerHTML={{ __html: element[tagName] }}></h2>;
    if (tagName === 'h3') return <h3 dangerouslySetInnerHTML={{ __html: element[tagName] }}></h3>;
    if (tagName === 'h4') return <h4 dangerouslySetInnerHTML={{ __html: element[tagName] }}></h4>;
    if (tagName === 'p') return <p dangerouslySetInnerHTML={{ __html: element[tagName] }}></p>;
    if (tagName === 'ol')
      return (
        <ol>
          {element[tagName].map((item) => (
            <li dangerouslySetInnerHTML={{ __html: item }}></li>
          ))}
        </ol>
      );
    if (tagName === 'ul')
      return (
        <ul>
          {element[tagName].map((item) => (
            <li dangerouslySetInnerHTML={{ __html: item }}></li>
          ))}
        </ul>
      );
  }
}
