import { Container } from '@/components/shared/Container/Container';
import { Footer } from '@/components/shared/Footer/Footer';
import { Header } from '@/components/shared/Header/Header';
import { Heading } from '@/components/shared/Heading/Heading';
import { MainAnimation } from '@/components/shared/MainAnimation/MainAnimation';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header className="mb-12" />
      <main className="grow">
        <Container>
          <Heading level="h1" className="text-center">
            Streamline <span className="text-mainAccent">Your Work</span>, One Task at a Time
          </Heading>
          <p className="mx-auto mb-8 max-w-[400px] text-center">
            Task Flow Manager helps you <span className="text-mainAccent">organize and track</span>{' '}
            your projects and tasks with ease, keeping your workflow smooth and efficient.
          </p>
        </Container>
        <MainAnimation />
      </main>
      <Footer />
    </div>
  );
}
