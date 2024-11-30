import { Container } from '@/components/shared/Container/Container';
import { Footer } from '@/components/shared/Footer/Footer';
import { Header } from '@/components/shared/Header/Header';
import { Heading } from '@/components/shared/Heading/Heading';
import { MainAnimation } from '@/components/shared/MainAnimation/MainAnimation';

export default function Home() {
  const renderDecorativeCircles = () => (
    <>
      <div className="absolute -bottom-10 -left-40 z-[-1] h-96 w-96 rounded-full bg-main-accent opacity-15 blur-2xl"></div>
      <div className="-tor-10 absolute -right-40 z-[-1] h-96 w-96 rounded-full bg-main-accent opacity-15 blur-2xl"></div>
    </>
  );

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      {renderDecorativeCircles()}
      <Header className="mb-12" />
      <main className="grow">
        <Container>
          <Heading level="h1" className="text-center">
            Streamline <span className="text-main-accent">Your Work</span>, One Task at a Time
          </Heading>
          <p className="mx-auto mb-8 max-w-[400px] text-center">
            Task Flow Manager helps you <span className="text-main-accent">organize and track</span>{' '}
            your projects and tasks with ease, keeping your workflow smooth and efficient.
          </p>
        </Container>
        <MainAnimation />
      </main>
      <Footer />
    </div>
  );
}
