import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './app-router';
import { Offer } from '../types/offer';

type AppProps = {
  offers: Offer[];
}

function App({ offers }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <AppRouter offers={offers} />
    </BrowserRouter>
  );
}

export default App;
