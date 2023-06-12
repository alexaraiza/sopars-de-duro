import { cubicBezier, motion } from 'framer-motion';
import Link from 'next/link';

import styles from './card.module.scss';

const MotionLink = motion(Link);
const fadingAnimationDuration = 0.3;
const fadingAnimationOpacityTransition = { duration: fadingAnimationDuration, ease: cubicBezier(0, 0, 0, 1) };

export default function Card({
  animateLayout,
  recipe,
  waitForOtherCardsToFadeOut,
}: {
  animateLayout: boolean;
  recipe: any;
  waitForOtherCardsToFadeOut: boolean;
}) {
  const fadeOutAnimationDuration = waitForOtherCardsToFadeOut ? fadingAnimationDuration : 0;
  const layoutAnimationDuration = animateLayout ? 0.5 : 0;
  const fadeInDelay = fadeOutAnimationDuration + layoutAnimationDuration;

  return (
    <MotionLink
      href={'/' + recipe.id}
      className={styles.card}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          opacity: { delay: fadeInDelay, ...fadingAnimationOpacityTransition },
        },
      }}
      exit={{ opacity: 0 }}
      layout="position"
      transition={{
        layout: { duration: layoutAnimationDuration, ease: cubicBezier(0.6, 0, 0.4, 1) },
        opacity: fadingAnimationOpacityTransition,
      }}
    >
      <motion.img
        src={`/${recipe.id}.jpg`}
        alt={recipe.title}
        width={640}
        height={425}
        loading="lazy"
        style={{ overflow: 'visible' }}
        layoutId={recipe.id}
      />
      <h4>{recipe.title}</h4>
    </MotionLink>
  );
}
