import { useNavigate } from 'react-router-dom'

import NewMeetupForm from "../components/meetups/NewMeetupForm";


function NewMeetupPage(){

    const history = useNavigate();
    function addMeetUpHandler(meetupData){
        fetch('https://react-meetup-b8dae-default-rtdb.firebaseio.com/meetups.json',
        {
            method:'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(()=>{
            history('/');
        });
    }
    return <section>
        <h1>Add new meet up</h1>
        <NewMeetupForm onAddMeetUp={addMeetUpHandler}/>
    </section>
}

export default NewMeetupPage;