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



const DetailsPage = (props) => {
    const router=useRouter();
    const {meetupId}=router.query;
    const details=dummyMeetups.find((meet)=>meet.id==meetupId);


   
    
  return (
    <div>
        <h1>Details Page</h1>
        <MeetupDetail image={props.meetupData.image} title={props.meetupData.title} address={props.meetupData.address} />
    </div>
  )
}

export async function getStaticPaths(){
    return {
        fallback:true,
        paths:[
           {
            params:{
                meetupId:'m1'
            }
           },
           {
            params:{
                meetupId:'m2'
            }
           },
           {
            params:{
                meetupId:'m3'
            }
           }

        ]
    }
}
export async function getStaticProps(context){
    const meetupId=context.params.meetupId;
    console.log(meetupId);
    return {
        props:{
            meetupData:{

                image:"https://img.freepik.com/free-vector/making-order-coffee-shop_74855-5885.jpg",
                title:"teh first meetup",
                address:"street 101,german silver"

            }

        }
    };
}
export default DetailsPage