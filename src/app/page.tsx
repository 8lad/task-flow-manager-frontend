import { Footer } from '@/components/shared/Footer/Footer';
import { Header } from '@/components/shared/Header/Header';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="grow">Main</main>
      <Footer />
    </div>
  );
}
