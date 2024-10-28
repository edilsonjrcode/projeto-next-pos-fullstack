// pages/blog/layout.tsx
import React from 'react';

interface BlogLayoutProps {
  children: React.ReactNode;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div>
      <header style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
        <h1>Blog - Meu Site</h1>
        <nav>
          <a href="/" style={{ marginRight: '10px', color: 'white' }}>Home</a>
          <a href="/blog" style={{ marginRight: '10px', color: 'white' }}>Blog</a>
        </nav>
      </header>

      <main style={{ padding: '20px', backgroundColor: '#f4f4f4' }}>
        {children}
      </main>

      <footer style={{ padding: '10px', backgroundColor: '#333', color: 'white', textAlign: 'center' }}>
        <p>© 2023 Blog - Meu Site. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
