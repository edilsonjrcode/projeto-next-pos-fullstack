// pages/404.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Página Não Encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link href="/">
        <a style={{ color: 'blue', textDecoration: 'underline' }}>
          Voltar para a Página Inicial
        </a>
      </Link>
    </div>
  );
}
