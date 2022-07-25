import EventList from "../../components/events/event-list";
import { getAllEvents } from "../../dummy-data";
import EventsSearch from "../../components/events/event-search";
import { Fragment } from "react";
import { useRouter } from "next/router";

const AllEventPage = () => {
  const events = getAllEvents();
  const router = useRouter();

  function findEventHandler(year, month) {
const fullpath = `/events/${year}/${month}`

    router.push(fullpath)
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={events} />
    </Fragment>
  );
};

export default AllEventPage;
