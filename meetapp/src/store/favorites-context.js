import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite:(meetUpId) => {},
  itemIsFavorite:(meetUpId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorite, setuserFavorites] = useState([]);

  const context = {
    favorites: userFavorite,
    totalFavorites: userFavorite.length,
    addFavorite:addFavoriteHandler,
    removeFavorite:removeFavoriteHandler,
    itemIsFavorite:itemIsFavoriteHandler,
  };

  function addFavoriteHandler(favoriteMeetup) {
    setuserFavorites((prevUserFavorite) => {
      return prevUserFavorite.concat(favoriteMeetup);
    });
  }

  function removeFavoriteHandler(meetUpId) {
    setuserFavorites((prevUserFavorite) => {
      return prevUserFavorite.filter((meetup) => meetup.id !== meetUpId);
    });
  }

  function itemIsFavoriteHandler(meetUpId) {
    return userFavorite.some((meetup) => meetup.id === meetUpId);
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}


export default FavoritesContext; 
