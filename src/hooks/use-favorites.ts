import { useMemo } from 'react';
import { Offer } from '../types/offer';

export function useFavorites(offers: Offer[]) {
  // Memoize the list of favorite offers
  const favoriteOffers = useMemo(
    () => offers.filter((offer) => offer.isFavorite),
    [offers]
  );

  // Memoize the object of favorites grouped by city
  const favoritesByCity = useMemo(() => {
    const groupedByCity = favoriteOffers.reduce<Record<string, Offer[]>>((acc, offer) => {
      const city = offer.city.name;
      if (!acc[city]) {
        acc[city] = [];
      }
      acc[city].push(offer);
      return acc;
    }, {});

    return groupedByCity;
  }, [favoriteOffers]);

  return { favoriteOffers, favoritesByCity };
}
