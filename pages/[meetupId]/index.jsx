import Head from "next/head";
import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
      </Head>
      <MeetupDetail title={props.title} image={props.image} address={props.address} description={props.description} />
    </Fragment>
  );
}

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3001/meetups");
  const data = await response.json();
  const meetupIds = data.map((item) => ({ params: { meetupId: item.id } }));

  return {
    paths: meetupIds,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  // console.log(meetupId);

  const response = await fetch(`http://localhost:3001/meetups/${meetupId}`);
  const data = await response.json();

  return {
    props: data,
    revalidate: 10,
  };
}

export default MeetupDetails;
