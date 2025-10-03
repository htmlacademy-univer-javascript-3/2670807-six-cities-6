import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app-router';

type AppProps = {
  offersCount: number;
}

function App({ offersCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <AppRouter offersCount={offersCount} />
    </BrowserRouter>
  );
}

export default App;
