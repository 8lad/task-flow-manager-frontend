import { Container } from '@/components/shared/Container/Container';
import { Footer } from '@/components/shared/Footer/Footer';
import { Header } from '@/components/shared/Header/Header';
import { Heading } from '@/components/shared/Heading/Heading';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header className="mb-12" />
      <main className="grow">
        <Container>
          <Heading level="h1" className="text-center">
            Streamline <span className="text-fuchsia-600">Your Work</span>, One Task at a Time
          </Heading>
          <p className="mx-auto max-w-[400px] text-center">
            Task Flow Manager helps you organize and track your projects and tasks with ease,
            keeping your workflow smooth and efficient.
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
