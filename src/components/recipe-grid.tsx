'use client';
import { AnimatePresence } from 'motion/react';
import { type Dispatch, type FormEvent, type SetStateAction, useEffect, useState } from 'react';
import type { Recipe } from '../../content/recipes';
import Card from './card';

let selectedTags: Set<string>;
let setSelectedTags: Dispatch<SetStateAction<Set<string>>>;

export function handleTagSelect(event: FormEvent<HTMLFormElement>) {
  const target = event.target as HTMLInputElement;
  if (target.checked) {
    selectedTags.add(target.value);
  } else {
    selectedTags.delete(target.value);
  }
  setSelectedTags((selectedTags) => new Set(selectedTags));
}

function normalizeString(string: string) {
  return string
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');
}

function doStringsMatch(longerString: string, shorterString: string) {
  return normalizeString(shorterString)
    .split(/\b/)
    .every(
      (normalizedSubstring) =>
        normalizedSubstring.startsWith(' ') ||
        new RegExp('\\b' + normalizedSubstring).test(normalizeString(longerString))
    );
}

export default function RecipeGrid({ recipes }: { recipes: Recipe[] }) {
  const [searchString, setSearchString] = useState('');
  [selectedTags, setSelectedTags] = useState(new Set());
  const [displayedRecipes, setDisplayedRecipes] = useState(recipes);
  const [previousDisplayedRecipeIds, setPreviousDisplayedRecipeIds] = useState([] as string[]);
  const [doCardsFadeOut, setDoCardsFadeOut] = useState(false);
  const [doesLayoutChange, setDoesLayoutChange] = useState(false);

  useEffect(() => {
    const newDisplayedRecipes = selectedTags.size
      ? recipes.filter(
          (recipe) => recipe.tags.some((tag) => selectedTags.has(tag)) && doStringsMatch(recipe.title, searchString)
        )
      : recipes.filter((recipe) => doStringsMatch(recipe.title, searchString));

    const newLayoutPositions = new Map(
      newDisplayedRecipes.map((newDisplayedRecipe, newPosition) => [newDisplayedRecipe.id, newPosition])
    );

    setDoCardsFadeOut(
      previousDisplayedRecipeIds.some(
        (previousDisplayedRecipeId) => newLayoutPositions.get(previousDisplayedRecipeId) === undefined
      )
    );

    setDoesLayoutChange(
      previousDisplayedRecipeIds.some((previousDisplayedRecipeId, previousPosition) => {
        const newPosition = newLayoutPositions.get(previousDisplayedRecipeId);
        return newPosition !== undefined && newPosition !== previousPosition;
      })
    );

    setDisplayedRecipes(newDisplayedRecipes);
  }, [searchString, selectedTags]);

  useEffect(() => {
    setTimeout(
      () => setPreviousDisplayedRecipeIds(displayedRecipes.map((displayedRecipe) => displayedRecipe.id)),
      doCardsFadeOut ? 300 : 0
    );
  }, [displayedRecipes]);

  return (
    <>
      <input
        placeholder="Cerca..."
        title="Cerca"
        type="search"
        onChange={(event) => setSearchString(event.target.value)}
      />
      <div className="grid">
        <AnimatePresence>
          {displayedRecipes.map((recipe) => (
            <Card
              animateLayout={doesLayoutChange}
              key={recipe.id}
              recipe={recipe}
              waitForOtherCardsToFadeOut={doCardsFadeOut}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
}
