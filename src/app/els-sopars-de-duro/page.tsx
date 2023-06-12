import Image from 'next/image';
import styles from './els-sopars-de-duro.module.scss';

export const metadata = {
  title: 'Els sopars de duro',
  description:
    'Els sopars de duro, en el seu sentit literal (és a dir, sopars que costaven un duro) es van inventar a Can Culleretes, una casa de menjars que va obrir portes…',
};

export default function ElsSoparsDeDuro() {
  return (
    <main>
      <article>
        <h1>Els sopars de duro</h1>
        <p>
          Els sopars de duro, en el seu sentit literal (és a dir, sopars que costaven un duro) es van inventar a{' '}
          <a href="http://hemeroteca.lavanguardia.com/preview/1988/07/17/pagina-29/33041821/pdf.html">Can Culleretes</a>
          , una casa de menjars que va obrir portes l’any 1786 a Barcelona i que es va fer famosa per oferir uns sopars
          de qualitat, cuinats amb bons productes i a un preu difícil de creure: un duro (=5 pessetes, menys de 3
          cèntims d’euro). No cal dir que aquests sopars ja fa temps que es van deixar de servir.
        </p>
        <p>
          Precisament perquè resultaven gairebé inversemblants, els sopars de Can Culleretes van originar l’expressió
          figurada <i>sopars de duro</i>, que <a href="https://rodamots.cat/sopar-de-duro/">Rodamots</a> defineix com a{' '}
          <em>fets de poca volada presentats com a magnífics</em>; com a <em>fanfarronades</em>.
        </p>
        <p>
          Aquest blog no vol entabanar ningú amb <i>sopars de duro</i> (figurats), sinó recuperar el sentit literal i
          l’esperit primigeni de Can Culleretes, tot proposant uns menús exquisits a un preu molt baix. Això sí, el cost
          s’ha actualitzat fins a 3 euros (més de 100 duros!) per cap. Coses de la inflació…
        </p>
        <div className={styles.imageContainer}>
          <Image
            src="/can-culleretes.jpg"
            alt="Can Culleretes"
            width={560}
            height={338}
            loading="eager"
            className={styles.image}
          />
          <figcaption style={{ maxWidth: 560 }}>
            Segons el Llibre Guinness dels rècords, Can Culleretes és el restaurant més antic de Catalunya.
          </figcaption>
        </div>
      </article>
    </main>
  );
}
