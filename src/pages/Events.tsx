
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { getUpcomingEvents, getPastEvents } from "@/data/events";
import { useState } from "react";

const Events = () => {
  const [pastEventsSortOrder, setPastEventsSortOrder] = useState<"asc" | "desc">("desc");
  const upcomingEvents = getUpcomingEvents();
  const pastEvents = getPastEvents(pastEventsSortOrder);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-chessBlue text-white py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Discover our upcoming chess tournaments, workshops, and community
              gatherings.
            </p>
          </div>
        </section>

        {/* Future Events */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="section-title text-left">Future Events</h2>
              <p className="text-lg text-gray-600 max-w-3xl">
                Join us for these exciting upcoming chess events and activities.
              </p>
            </div>
            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {upcomingEvents.map((event, index) => (
                  <EventCard
                    key={index}
                    title={event.title}
                    date={event.date}
                    location={event.location}
                    description={event.description}
                    image={event.image}
                    year={event.dateObject.getFullYear()}
                    buttonText="View Details"
                    buttonLink={`/events/${event.id}`}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">No upcoming events at the moment.</p>
                <p className="text-gray-400 text-sm mt-1">Stay tuned — new events are on the way!</p>
              </div>
            )}
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-12">
              <div>
                <h2 className="section-title text-left">Past Events</h2>
                <p className="text-lg text-gray-600 max-w-3xl">
                  Take a look at our previous chess events and activities.
                </p>
              </div>
              <Button
                variant="outline"
                onClick={() => setPastEventsSortOrder(pastEventsSortOrder === "desc" ? "asc" : "desc")}
                className="flex items-center gap-2"
              >
                Sort by Date
                {pastEventsSortOrder === "desc" ? "↓" : "↑"}
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pastEvents.map((event, index) => (
                <EventCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  location={event.location}
                  description={event.description}
                  image={event.image}
                  year={event.dateObject.getFullYear()}
                  buttonText="View Details"
                  buttonLink={`/events/${event.id}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Host Section */}
        <section className="py-16 bg-chessGreen text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Host a Chess Event?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              We're always open to collaborations and hosting special chess
              events. Contact us with your ideas!
            </p>
            <div className="inline-block bg-white text-chessGreen hover:bg-gray-100 font-bold px-6 py-3 rounded transition-colors">
              <a href="/contact">Contact Us</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
