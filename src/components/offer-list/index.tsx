import OfferCard from '../offer-card';
import { Offer } from '../../types/offer';

type OfferListProps = {
  offers: Offer[];
  onCardMouseEnter: (offerId: number) => void;
  onCardMouseLeave: () => void;
};

function OfferList({ offers, onCardMouseEnter, onCardMouseLeave }: OfferListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onMouseEnter={onCardMouseEnter}
          onMouseLeave={onCardMouseLeave}
        />
      ))}
    </div>
  );
}

export default OfferList;
