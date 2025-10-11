import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../app/routes';

function NotFoundPage(): JSX.Element {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 Page Not Found</h1>

      <img
        src="/img/404.gif"
        alt="Animated graphic indicating a page is not found"
        width="600"
      />

      <p className="not-found-text">
        <NavLink to={AppRoute.Main} className="not-found-link">
          Go back to the main page
        </NavLink>
      </p>
    </div>
  );
}

export default NotFoundPage;
