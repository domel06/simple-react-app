import {Link} from 'react-router-dom';
import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import classes from './MainNavigation.module.css';
function MainNavigation(){
    const favoriteCtx = useContext(FavoritesContext);
    return(
   <header className={classes.header}>
       <div className={classes.logo}>My meet up</div>
       <nav>
           <ul>
               <li>
                <Link to='/'>AllMeetup</Link>
               </li>
               <li>
                <Link to='/meet-up'>NewMeetup</Link>
               </li>
               <li>
                <Link to='/favorites'>Favorites meetup
                <span className={classes.badge}>{favoriteCtx.totalFavorites}</span>
                </Link>
               </li>
           </ul>
       </nav>
   </header>

    );
}

export default MainNavigation