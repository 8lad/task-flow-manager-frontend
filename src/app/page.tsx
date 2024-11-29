import { Container } from '@/components/shared/Container/Container';
import { Footer } from '@/components/shared/Footer/Footer';
import { Header } from '@/components/shared/Header/Header';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">
        <Container>Main</Container>
      </main>
      <Footer />
    </div>
  );
}
