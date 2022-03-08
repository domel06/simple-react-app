import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetupPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
  
    useEffect(() => {
      setIsLoading(true);
      fetch(
        'https://react-meetup-b8dae-default-rtdb.firebaseio.com/meetups.json'
      )
        .then(response => response.json())
        .then((data) => {
          const meetups = [];
  
          for (const key in data) {
            const meetup = {
              id: key,
              ...data[key]
            };
  
            meetups.push(meetup);
          }
  
          setIsLoading(false);
          console.log(meetups)
          setLoadedMeetups(meetups);
        });
    }, []);
  
    if (isLoading) {
      return (
        <section>
          <p>Loading...</p>
        </section>
      );
    }
  
    return (
      <section>
        <h1>All Meetups</h1>
        <MeetupList meetups={loadedMeetups} />
      </section>
    );
  }

export default AllMeetupPage;


// fetch('https://api.github.com/users/hacktivist123/repos')
//   .then(response => response.json())
//   .then(data => console.log(data));
