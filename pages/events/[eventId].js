import { useRouter } from "next/router";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import { getEventById } from "../../dummy-data";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";
import Button from "../../components/ui/button";
const EventDetailPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);

  //if event id is not found
  if (!event) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>event not found</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show alll events</Button>
        </div>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
