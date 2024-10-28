// components/layout.tsx
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <header style={{ padding: '10px', backgroundColor: '#f8f8f8' }}>
        <h1>Meu Site</h1>
        <nav>
          <a href="/" style={{ marginRight: '10px' }}>Home</a>
          <a href="/about" style={{ marginRight: '10px' }}>Sobre</a>
          <a href="/blog">Blog</a>
        </nav>
      </header>

      <main style={{ padding: '20px' }}>
        {children}
      </main>

      <footer style={{ padding: '10px', backgroundColor: '#f8f8f8', textAlign: 'center' }}>
        <p>© 2023 Meu Site. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
