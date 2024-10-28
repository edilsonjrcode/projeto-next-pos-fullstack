import { useState } from 'react';

export default function BlogTemplate({ children }: { children: React.ReactNode }) {
  const [counter, setCounter] = useState(0);

  return (
    <div style={{ padding: '20px', border: '2px solid green' }}>
      <header style={{ backgroundColor: 'lightgreen' }}>
        <h1>Blog Template</h1>
        <button onClick={() => setCounter(counter + 1)}>Contador: {counter}</button>
      </header>
      <main>{children}</main>
    </div>
  );
}
