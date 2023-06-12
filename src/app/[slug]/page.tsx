import { notFound } from 'next/navigation';
import categories from '../../../content/categories';
import recipes from '../../../content/recipes';
import Recipe from '@/components/recipe';
import RecipeGrid from '@/components/recipe-grid';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const category = categories.find((category) => category.id === slug);
  const recipe = recipes.find((recipe) => recipe.id === slug);

  if (category) {
    return {
      title: category.name,
    };
  }

  if (recipe) {
    const recipeIntroSlice = recipe.intro[0].p!.slice(0, 159);
    const description = recipeIntroSlice.slice(0, recipeIntroSlice.lastIndexOf(' ')) + '…';

    return {
      title: recipe.title,
      description: description.includes('<') ? undefined : description,
    };
  }
}

export function generateStaticParams() {
  const categoryIds = categories.map((category) => category.id);
  const recipeIds = recipes.map((recipe) => recipe.id);

  return (categoryIds as string[]).concat(recipeIds).map((id) => ({ slug: id }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const category = categories.find((category) => category.id === slug);
  const recipe = recipes.find((recipe) => recipe.id === slug);

  if (category) {
    return (
      <main>
        <h1>{category.name}</h1>
        <RecipeGrid recipes={recipes.filter((recipe) => recipe.categories.includes(category.id))} />
      </main>
    );
  }

  if (recipe) return <Recipe recipe={recipe} />;

  notFound();
}
