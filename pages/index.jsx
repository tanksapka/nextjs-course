import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta name="description" content="Browse a huge list of highly active React meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const response = await fetch("http://localhost:3001/meetups");
  const data = await response.json();

  return {
    props: {
      meetups: data,
    },
    revalidate: 10,
  };
}

export default HomePage;
