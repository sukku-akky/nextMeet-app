//domian.com/meetupId
import MeetupDetail from '../../components/meetups/MeetupDetail'
import React from 'react'
import { useRouter } from 'next/router'
const dummyMeetups = [
    {
      id: "m1",
      title: "the first meetup",
      image:
        "https://img.freepik.com/free-vector/making-order-coffee-shop_74855-5885.jpg",
      address: "street 5,108,german street",
    },
    {
      id: "m2",
      title: "the second meetup",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD1RWFp41v5VoHZKfgEDZofzC8ktkmkALjQw&s",
      address: "sunny jump",
    },
  ];



const DetailsPage = () => {
    const router=useRouter();
    const {meetupId}=router.query;
    const details=dummyMeetups.find((meet)=>meet.id==meetupId);


   
    
  return (
    <div>
        <h1>Details Page</h1>
        <MeetupDetail image={details.image} title={details.title} address={details.address} />
    </div>
  )
}

export default DetailsPage