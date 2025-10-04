import { Navigate } from 'react-router-dom';
import { AppRoute } from '../../app/routes';

type PrivateRouteProps = {
  isAuthorized: boolean;
  children: JSX.Element;
};

export function PrivateRoute({ isAuthorized, children }: PrivateRouteProps): JSX.Element {
  return (
    isAuthorized ? children : <Navigate to={AppRoute.Login} />
  );
}
