//domian.com/meetupId
import MeetupDetail from "../../components/meetups/MeetupDetail";
import React from "react";
import { useRouter } from "next/router";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
const DetailsPage = (props) => {
  const router = useRouter();
  const { meetupId } = router.query;
  

  return (
    <div>
      <h1>Details Page</h1>
      <MeetupDetail
        image={props.meetupData.image}
        title={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </div>
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://cherukupallisukanya808:xZBNLdHusqmkKov4@cluster0.au8ga.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  console.log(meetups);
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  const client = await MongoClient.connect(
    "mongodb+srv://cherukupallisukanya808:xZBNLdHusqmkKov4@cluster0.au8ga.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0"
  );

  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup=await meetupsCollection.findOne({_id:new ObjectId(meetupId)});

  client.close();
  return {
    props: {
      meetupData:{
        title:selectedMeetup.title,
        image:selectedMeetup.image,
        address:selectedMeetup.address,
        description:selectedMeetup.description,
        id:selectedMeetup._id.toString()
      }
    },
  };
}
export default DetailsPage;
