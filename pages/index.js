import MeetupList from "../components/meetups/MeetupList";

const HomePage = () => {
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
  return (
    <>
      
        <MeetupList meetups={dummyMeetups} />
      
    </>
  );
};

export default HomePage;
