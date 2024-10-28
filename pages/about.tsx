// pages/about.tsx
import { useRouter } from "next/router";
import Layout from "../components/layout";

// Exportando metadados
export const metadata = {
  title: {
    default: "Sobre Nós",
    template: "%s | Meu Site",
    absolute: "Sobre Nós - Meu Site Oficial",
  },
  description: "Saiba mais sobre a nossa empresa e o que fazemos.",
};

export default function About() {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/home");
  };

  return (
    <Layout>
      <h2>Sobre Nós</h2>
      <p>Informações sobre o site e a empresa.</p>
      <button onClick={handleNavigate}>Ir para a página inicial</button>
    </Layout>
  );
}
