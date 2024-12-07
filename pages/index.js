import MeetupList from "../components/meetups/MeetupList";
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

  return {
    props: {
      meetups: dummyMeetups,
    },
    revalidate:1,
  };
}

export default HomePage;
