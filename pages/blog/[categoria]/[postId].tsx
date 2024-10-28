// pages/blog/[categoria]/[postId].tsx
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const { categoria, postId } = router.query;

  return (
    <div>
      <h1>Post no Blog</h1>
      <p>Categoria: {categoria}</p>
      <p>ID do Post: {postId}</p>
    </div>
  );
}
