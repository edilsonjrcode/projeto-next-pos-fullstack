// pages/home.tsx
'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from '../components/layout';

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <h2>Bem-vindo à Página Inicial!</h2>
      <p>Esta é a página inicial do site.</p>

      {/* Link para a página About com classe condicional */}
      <nav>
        <Link 
          href="/about" 
          className={router.pathname === '/about' ? 'active-link' : 'link'}
        >
          Sobre Nós
        </Link>
      </nav>

      {/* Estilos JSX para personalizar o link ativo */}
      <style jsx>{`
        .link {
          color: black;
          text-decoration: none;
        }
        .active-link {
          font-weight: bold;
          color: blue;
          text-decoration: underline;
        }
      `}</style>
    </Layout>
  );
}
