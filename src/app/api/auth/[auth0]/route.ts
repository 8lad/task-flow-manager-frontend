import { MainRoutes } from '@/utils/routes';
import { handleAuth, handleCallback, handleLogin, handleLogout } from '@auth0/nextjs-auth0';
import { NextApiRequest, NextApiResponse } from 'next';

const ERROR_SEARCH_PARAM = 'error';
const USER_DECLINE_ERROR = 'access_denied';

export const GET = handleAuth({
  login: handleLogin({ returnTo: MainRoutes.Home }),
  logout: handleLogout({
    returnTo: MainRoutes.Home,
  }),
  callback: (req: NextApiRequest, res: NextApiResponse) => {
    try {
      if (req.url) {
        const url = new URL(req.url);
        const error = url.searchParams.get(ERROR_SEARCH_PARAM);
        if (error === USER_DECLINE_ERROR) {
          return new Response(null, {
            status: 302,
            headers: { Location: MainRoutes.Home },
          });
        }
      }
      return handleCallback(req, res);
    } catch (error) {
      console.error(error);
      new Response(null, {
        status: 302,
        headers: { Location: MainRoutes.Home },
      });
    }
  },
});
