export interface Event {
  id: string;
  title: string;
  date: string;
  dateObject: Date; // For reliable sorting
  location: string;
  description: string;
  image: string;
  type: "upcoming" | "past";
  fullDescription: string;
  registrationLink?: string;
  gallery?: string[];
}

export const allEvents: Event[] = [
  // {
  //   id: "bpjs",
  //   title: "BPJS Online Tournament",
  //   date: "September 9-10, 2025 Pukul 19:00-Selesai",
  //   dateObject: new Date(2025, 8, 9), // September 9, 2025
  //   location: "Online Lichess",
  //   description: "BPJS Cross-University Online Tournament",
  //   image: "/events/bpjsonline.jpg",
  //   type: "past",
  //   fullDescription:
  //     "Di Bulan September 2025 ini, BPJS Kesehatan Chess Club hadir dengan Turnamen Silaturahmi & Kolaborasi Online bareng 12 kampus Top Indonesia yakni UI, UGM, UNAIR, UNDIP, USK, UM, BINUS, UNEJ, UNDIKSHA, UNESA, UPI, & POLBAN",
  //   registrationLink: "https://forms.office.com/r/G38YWnQzHV",
  // },
  {
    id: "clashofbatches",
    title: "Clash of Batches",
    date: "September 13, 2025",
    dateObject: new Date(2025, 8, 13), // Future placeholder date
    location: "Online Lichess",
    description:
      "Get ready for the Clash of Batches, an exciting arena-style tournament on Lichess! The batch scoring the most points declared the ultimate winner. Join the chess frenzy!",
    image: "/events/clashofbatches.jpg",
    type: "past",
    fullDescription:
      "Welcome to the Clash of Batches, an exciting arena-style chess tournament on Lichess, pitting our community’s batches against each other in a fast-paced showdown. Participants compete in rated games, earning points for wins, draws, and strategic moves like berserk, with the batch scoring the highest total declared the champion.",
  },
  {
    id: "grand-launching",
    title: "Grand Launching BCC",
    date: "March 13, 2025",
    dateObject: new Date(2025, 2, 13), // March 13, 2025
    location: "BINUS Auditorium",
    description: "Our grand launching as official BINUS club.",
    image: "/events/bcclaunch.jpeg",
    type: "past",
    fullDescription:
      "The grand launching of BINUS Chess Club was a momentous occasion that marked our official recognition as a student organization. The event took place in the main auditorium with over 200 attendees, including faculty members, students, and chess enthusiasts. The ceremony featured opening remarks from university officials, a chess exhibition match, and the unveiling of our club charter. This event established our commitment to promoting chess culture within the BINUS community.",
    gallery: [
      "/events/bcclaunch.jpeg",
      "/together.jpeg",
      "/together2.jpeg",
      "/simul.jpeg"
    ]
  },
  {
    id: "simulchess",
    title: "Simultaneous Exhibition",
    date: "March 13, 2025",
    dateObject: new Date(2025, 2, 13), // March 13, 2025
    location: "BINUS Anggrek, Food Court",
    description:
      "A BINUS University's 2400-rated lecturer played against 20 club members simultaneously.",
    image: "/events/SimulChess.jpg",
    type: "past",
    fullDescription:
      "BINUS' 2400-rated lecturer played against 20 club members simultaneously.",
  },
  {
    id: "pomprovpreparation",
    title: "POMPROV Preparation",
    date: "May 9, 2025",
    dateObject: new Date(2025, 4, 9),
    location: "BINUS Kemanggisan",
    description:
      "We honed our skills with intensive preparation and training sessions for Pomprov DKI Jakarta! Our efforts sharpened our abilities and strategized for the provincial chess championship.",
    image: "/events/pomprovprepare/pomprovprepare.jpg",
    type: "past",
    fullDescription:
    "Through a series of focused training sessions, we covered advanced tactics, opening theories, endgame techniques, and match practice, tailored to enhance individual and team performance. Led by experienced coaches and top-rated players, these sessions included simulated matches and personalized feedback to address specific weaknesses. Held in the lead-up to the event, this program fostered teamwork and determination, ensuring our club was well-prepared to represent BINUS with pride at Pomprov DKI Jakarta!",
    gallery: [
      "/events/pomprovprepare/1.jpg",
      "/events/pomprovprepare/2.jpg",
      "/events/pomprovprepare/zoom.jpg"

    ]
  },
  {
    id: "pknstan",
    title: "PKN STAN x BCC Sparring",
    date: "May 31, 2025",
    dateObject: new Date(2025, 4, 31), // May 31, 2025 (corrected from July 19)
    location: "BINUS Kemanggisan",
    description: "We honed our skills in an exciting sparring session with PKN STAN! This friendly match boosted our teamwork and readiness for future competitions.",
    image: "/events/pknstan/pknstan.jpg",
    type: "past",
    fullDescription: "The PKN STAN x BCC Sparring, held on May 31, 2025, at BINUS Kemanggisan, was a dynamic friendly match that brought together members of the BINUS Chess Club and PKN STAN for an enriching chess experience. This event featured a series of casual yet competitive games, allowing both teams to test their strategies, improve their gameplay, and build camaraderie. Guided by our coaches, we focused on tactical drills and real-time feedback during the session, which helped strengthen our team coordination and individual skills. This sparring session was a valuable opportunity to prepare for upcoming tournaments and foster a spirit of collaboration with PKN STAN, leaving us better equipped for future challenges!",
    gallery: [
      "/events/pknstan/1.jpg",
      "/events/pknstan/2.jpg",
      "/events/pknstan/3.jpg",
    ]
  },
  {
    id: "welpar",
    title: "Welcoming Party 2025",
    date: "October 12, 2025",
    dateObject: new Date(2025, 10, 12), // YYYY, MM, DD
    location: "BINUS Kemanggisan",
    description: "A warm welcome to our newest members! At Welcoming Party 2025, we bonded through fun activities, light chess sessions, and team-building games that set the tone for an exciting year ahead.",
    image: "/events/welpar/Welpar_2.JPG",
    type: "past",
    fullDescription: "The Welcoming Party 2025, held on October 12, 2025, at BINUS Kemanggisan, marked the beginning of a new chapter for the BINUS Chess Club. This event was designed to introduce new members to the club’s culture, activities, and community. Through ice-breaking games, casual chess matches, and team-building sessions, participants were able to connect with seniors, staff, and fellow newcomers in a relaxed and friendly atmosphere. The event fostered strong camaraderie early on, allowing members to feel at home while getting a glimpse of the exciting programs and competitions ahead. Welpar 2025 successfully set the foundation for a collaborative and supportive environment that the club will continue to build throughout the year.",
    gallery: [
      "/events/welpar/Welpar_1.JPG",
      "/events/welpar/Welpar_3.JPG",
    ]
  },
  {
    id: "expo",
    title: "Week of Welcoming Expo B29",
    date: "August 25-27, 2025",
    dateObject: new Date(2025, 8, 25), // YYYY, MM, DD
    location: "BINUS Kemanggisan & Alam Sutera",
    description: "We showcased the BINUS Chess Club at the WOW Expo B29. New students visited our booth to learn about our activities, try mini-challenges, and discover the excitement of joining BCC.",
    image: "/events/expo/expo_1.jpg",
    type: "past",
    fullDescription: "The Week of Welcoming (WOW) Expo B29, held on August 25-27, 2025, at both BINUS Kemanggisan and Alam Sutera, provided an opportunity for the BINUS Chess Club to introduce itself to incoming freshmen. Throughout the expo, students explored the BCC booth, learned about our training programs, events, tournaments, and community initiatives.",
    gallery: [
      "/events/expo/expo_2.jpg",
      "/events/expo/expo_3.jpg",
    ]
  },
];

export const getUpcomingEvents = (): Event[] => {
  return allEvents.filter(event => event.type === "upcoming");
};

export const getPastEvents = (sortOrder: "asc" | "desc" = "desc"): Event[] => {
  const pastEvents = allEvents.filter(event => event.type === "past");
  return pastEvents.sort((a, b) => {
    if (sortOrder === "asc") {
      return a.dateObject.getTime() - b.dateObject.getTime();
    } else {
      return b.dateObject.getTime() - a.dateObject.getTime();
    }
  });
};

export const getEventById = (id: string): Event | undefined => {
  return allEvents.find(event => event.id === id);
};