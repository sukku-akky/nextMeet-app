import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";

const HomePage = (props) => {
  return (
    <>
      <MeetupList meetups={props.meetups} />
    </>
  );
};
// export async function getServerSideProps(context){
//     const req=context.req;
//     const res=context.res;

//     //fetch data from server
//     return {
//         props:{
//             meetups:dummyMeetups,
//         },
//     };
// };
export async function getStaticProps() {
  //fetch data from server
  const client=await MongoClient.connect('mongodb+srv://cherukupallisukanya808:xZBNLdHusqmkKov4@cluster0.au8ga.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0');
  const db=client.db();
  const meetupsCollection=db.collection("meetups");
  const meetups=await meetupsCollection.find().toArray();
  client.close();


  return {
    props: {
      meetups: meetups.map((meet)=>({
        image:meet.image,
        title:meet.title,
        address:meet.address,
        description:meet.description,
        id:meet._id.toString()
      }))
    },
    revalidate:1,
  };
}

export default HomePage;
