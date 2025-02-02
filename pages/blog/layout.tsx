import { useState } from 'react';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ padding: '20px', border: '2px solid blue' }}>
      <header style={{ backgroundColor: 'lightblue' }}>
        <h1>Blog Layout</h1>
        <button onClick={() => setCounter(counter + 1)}>Contador: {counter}</button>
      </header>
      <main>{children}</main>
    </div>
  );
}
