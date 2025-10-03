import { NavLink } from 'react-router-dom';
import { AppRoute } from '../../app/routes';

function NotFoundPage(): JSX.Element {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
    backgroundColor: '#ffffff'
  };

  const linkStyle: React.CSSProperties = {
    color: '#4481c3',
    textDecoration: 'underline'
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '2px' }}>404 Page Not Found</h1>

      <img
        src="/img/404.gif"
        alt="Animated graphic indicating a page is not found"
        width="600"
      />
      <p style={{ marginTop: '2px' }}>
        <NavLink to={AppRoute.Main} style={linkStyle}>Go back to the main page</NavLink>
      </p>
    </div>
  );
}

export default NotFoundPage;
