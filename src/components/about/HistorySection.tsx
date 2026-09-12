import { AspectRatio } from "@/components/ui/aspect-ratio";

const HistorySection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="section-title">Our History</h2>
        <p className="text-lg text-gray-700 mb-4">
          BINUS Chess Club was established in 2024 by a small group of
          passionate chess players who wanted to create a community for
          students to learn, practice, and compete in chess.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Over the years, we've grown from a handful of members to one
          of the most active student organizations at Bina Nusantara
          University, hosting regular tournaments, workshops, and social
          events.
        </p>
        <p className="text-lg text-gray-700">
          Our club has represented BINUS in various inter-university and
          public chess competitions.
        </p>
      </div>
      <div>
        <div className="rounded-lg overflow-hidden shadow-lg">
          <AspectRatio ratio={16 / 9}>
            <img
              src="/events/launching-bcc/simul.jpeg"
              alt="BINUS Chess Club members playing chess"
              className="w-full h-full object-cover"
            />
          </AspectRatio>
        </div>
      </div>
    </div>
  );
};

export default HistorySection;
