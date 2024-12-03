import { Heading } from '@/components/shared/Heading/Heading';
import { MainRoutes } from '@/utils/routes';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

async function Page() {
  return (
    <div>
      <Heading level="h1">Dashboard page</Heading>
    </div>
  );
}

export default withPageAuthRequired(Page, { returnTo: MainRoutes.Dashboard });
