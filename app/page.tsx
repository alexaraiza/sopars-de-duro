import recipes from '../content/recipes.json';
import RecipeGrid from './components/recipe-grid';

export default function Home() {
  return (
    <main>
      <RecipeGrid recipes={recipes} />
    </main>
  );
}
