import Link from 'next/link';

export const metadata = {
  title: 'Pàgina no trobada',
};

export default function NotFound() {
  return (
    <main>
      <article>
        <h1>Pàgina no trobada</h1>
        <p>Aquesta pàgina no s’ha trobat.</p>
        <Link href="/">Torna a l’inici</Link>
      </article>
    </main>
  );
}
