import Link from 'next/link';

export default function BlogHome() {
  return (
    <div>
      <h2>Página Inicial do Blog</h2>
      <Link href="/blog/1">Ir para o Post 1</Link>
    </div>
  );
}
