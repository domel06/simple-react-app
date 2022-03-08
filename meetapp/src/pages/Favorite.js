import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";
import {useContext} from 'react'


function FavoritePage(){
    const favoriteCtx = useContext(FavoritesContext);

    let content;

    if(favoriteCtx.totalFavorites === 0){
        content = <p>you have no favorite</p>
    }else{
        content = <MeetupList meetups={favoriteCtx.favorites} />
    }
    return <section>
        <h1>My Favorite</h1>
        {content}
    </section>
}

export default FavoritePage;