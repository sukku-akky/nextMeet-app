import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import { useRouter } from 'next/router';
const NewMeetupPage = () => {
    const router=useRouter();
    async function addMeetupHandler(enteredDetails){
        const response=await fetch("/api/new-meetup",{
            method:'POST',
            body:JSON.stringify(enteredDetails),
            headers:{
                'Content-Type':'application/json'
            }
        })

        if (!response.ok) {
            console.error('Error:', response.status, response.statusText);
            const text = await response.text();
            console.error('Response body:', text);
            return;
          }
        
          const data = await response.json();
          console.log(data);
          router.push('/');
    }
  return (
    <div>
        <NewMeetupForm onAddMeetup={addMeetupHandler}/>
    </div>
  )
}

export default NewMeetupPage