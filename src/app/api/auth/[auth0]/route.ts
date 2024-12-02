import { MainRoutes } from '@/utils/routes';
import { handleAuth, handleLogin, handleLogout } from '@auth0/nextjs-auth0';

export const GET = handleAuth({
  login: handleLogin({
    returnTo: MainRoutes.Dashboard,
  }),
  logout: handleLogout({
    returnTo: MainRoutes.Home,
  }),
});
