// pages/posts/[id].tsx
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Post Dinâmico</h1>
      <p>ID do Post: {id}</p>
    </div>
  );
}
