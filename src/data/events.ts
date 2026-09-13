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
  // ===== UPCOMING / FUTURE EVENTS =====
  // {
  //   id: "interuniversity-blitz-2026",
  //   title: "Inter-University Blitz Championship 2026",
  //   date: "November 15, 2026",
  //   dateObject: new Date(2026, 10, 15),
  //   location: "BINUS Kemanggisan",
  //   description:
  //     "A fast-paced blitz tournament bringing together top university chess clubs across Jakarta. Compete, connect, and claim the title!",
  //   image: "/events/clashofbatches.jpg",
  //   type: "upcoming",
  //   fullDescription:
  //     "The Inter-University Blitz Championship 2026 is set to be one of the most exciting chess events of the year. Hosted by BINUS Chess Club, this tournament will feature blitz-format games with rapid time controls, challenging players to think fast and play bold. University chess clubs from across Jakarta are invited to send their best players for a day of intense competition, sportsmanship, and community building.",
  // },

  // ===== PAST EVENTS (chronological, newest first) =====

  {
    id: "sertijab-2026",
    title: "Serah Terima Jabatan Pengurus BCC 2026",
    date: "February 7, 2026",
    dateObject: new Date(2026, 1, 7),
    location: "BINUS Kemanggisan",
    description:
      "The official handover ceremony (Serah Terima Jabatan) for the new BCC leadership, marking a new chapter for the club.",
    image: "/events/sertijab-2026/main.jpg",
    type: "past",
    fullDescription:
      "Serah Terima Jabatan 2026 was the formal handover ceremony where the outgoing BCC leadership team passed the torch to the newly elected officers. The event featured speeches from both outgoing and incoming leaders, reflections on the past year's achievements, and a vision presentation for the year ahead. It was an emotional and inspiring event that reinforced the club's commitment to continuity, growth, and excellence in chess.",
    gallery: [
      "/events/sertijab-2026/a1.png",
      "/events/sertijab-2026/a2.png",
      "/events/sertijab-2026/a3.png",
      "/events/sertijab-2026/a3.png",
    ],
  },
  {
    id: "stikcup-2026",
    title: "STIK Cup 2026",
    date: "August 22-23, 2026",
    dateObject: new Date(2026, 7, 22),
    location: "Kampus STIK - Jakarta",
    description:
      "BCC participated in the Ketua STIK Cup 2026, achieving 3rd place with Team A and showcasing strong representation in the inter-university chess competition.",
    image: "/events/stikcup2026/main.png",
    type: "past",
    fullDescription:
      `We're proud to announce the achievements of our BINUS Chess Club teams at Ketua STIK Cup 2026:\n\n🥉 Team A — 3rd Place\n🏅 Team C — 6th Place\n🏅 Team B — 10th Place\n\nEvery move, every game, and every challenge brought us one step further.\n\nThank you to everyone who represented BINUS Chess Club and gave their all throughout the tournament. This is more than just a result — it's another chapter in our journey.\n\nA big appreciation for everyone who gave their best and represented our team:\n\nTim A:\n1. D6673 - Bakti Amirul Jabar - Dosen SoCS dan Pembina Binus Chess Club\n2. Ray Mclung Gunawan - 2902708533 - Computer Science - BINUS @Bandung\n3. Syuja Ardhanu - 2702375222 - Sistem Informasi - BINUS @Alam Sutera\n4. Zahra Fauzia Abrianni - 2802685983 - Sistem Informasi - BINUS Online\n\nTim B:\n1. Hibatullah Dony Ananda - 2702320601 - Business Creation - BINUS @Alam Sutera\n2. Galvent Chiuwen - 2702256763 - Global Business Marketing - BINUS @Kemanggisan\n3. Vincent Oei - 2602072584 - Computer Science - BINUS @Kemanggisan\n4. Christopher Vincentius Kurniawan - 2902715910 - Hubungan Internasional - BINUS @Kemanggisan\n\nTim C:\n1. Stanley Christian Gunawan - 2802391946 - Arsitektur - BINUS @Kemanggisan\n2. Randy Christian Kusnadi - 2802405336 - Sistem Informasi - BINUS @Alam Sutera\n3. Steven Taniardi - 2702280453 - Computer Science - BINUS @Kemanggisan\n4. Francesco Rau - 3002780684 - Computer Science - BINUS @Alam Sutera\n\nKeep playing. Keep improving. Keep making your move.`,
    gallery: [
      "/events/stikcup2026/1.png",
      "/events/stikcup2026/2.png",
      "/events/stikcup2026/3.png",
      "/events/stikcup2026/4.png",
    ],
  },

  // --- 2025 ---
  // {
  //   id: "pkm-2025",
  //   title: "PKM BCC 2025",
  //   date: "December 20, 2025",
  //   dateObject: new Date(2025, 11, 20),
  //   location: "BINUS Kemanggisan",
  //   description:
  //     "BCC members presented innovative chess-related projects as part of the university's Program Kreativitas Mahasiswa.",
  //   image: "/events/pkm-2025/cover.jpg",
  //   type: "past",
  //   fullDescription:
  //     "Program Kreativitas Mahasiswa (PKM) BCC 2025 showcased the creative and academic side of the BINUS Chess Club. Members developed and presented innovative projects that combined chess with technology, education, and community outreach. From chess-based learning tools to analytical engines, the event highlighted the intersection of chess and student innovation, earning recognition from faculty and peers alike.",
  // },
  // {
  //   id: "rector-cup-2025",
  //   title: "Rector Cup 2025",
  //   date: "December 6, 2025",
  //   dateObject: new Date(2025, 11, 6),
  //   location: "BINUS Kemanggisan",
  //   description:
  //     "BCC competed in the prestigious Rector Cup 2025, a university-wide inter-club sports competition.",
  //   image: "/events/rector-cup-2025/cover.jpg",
  //   type: "past",
  //   fullDescription:
  //     "The Rector Cup 2025 was one of the most anticipated events of the academic year, bringing together various student clubs in a multi-sport competition. BCC represented the chess category with pride, fielding our strongest players against competitors from across BINUS campuses. The event was a testament to the university's commitment to student athletics and healthy competition, with BCC members demonstrating exceptional strategic thinking and sportsmanship.",
  // },
  // {
  //   id: "pknstan2",
  //   title: "Sparring PKN STAN 2",
  //   date: "November 29, 2025",
  //   dateObject: new Date(2025, 10, 29),
  //   location: "BINUS Kemanggisan",
  //   description:
  //     "The second sparring session with PKN STAN, building on the camaraderie and competitive spirit from the first encounter.",
  //   image: "/events/pknstan2/cover.jpg",
  //   type: "past",
  //   fullDescription:
  //     "Following the success of the first sparring session, Sparring PKN STAN 2 brought both teams together again for another round of friendly yet competitive chess matches. This second edition featured improved match formats, more participants, and a deeper level of strategic play. Both clubs continued to strengthen their partnership, exchanging insights and fostering a growing inter-university chess community.",
  // },
  // {
  //   id: "ultah-bcc",
  //   title: "Ulang Tahun BCC",
  //   date: "November 23, 2025",
  //   dateObject: new Date(2025, 10, 23),
  //   location: "BINUS Kemanggisan",
  //   description:
  //     "Celebrating BINUS Chess Club's 1st anniversary with special activities, games, and a gathering of all members.",
  //   image: "/events/ultah-bcc/cover.jpg",
  //   type: "past",
  //   fullDescription:
  //     "Ulang Tahun BCC marked the club's 1st anniversary — a milestone celebration that brought together founding members, current players, and alumni. The event featured a fun blitz tournament, a chess trivia quiz, cake-cutting ceremony, and heartfelt speeches reflecting on the club's journey. It was a joyful reminder of how far BCC has come and the strong community that has been built around a shared love for chess.",
  // },
  // {
  //   id: "ksf-2025",
  //   title: "Kemanggisan Sport Festival 2025",
  //   date: "November 8, 2025",
  //   dateObject: new Date(2025, 10, 8),
  //   location: "BINUS Kemanggisan",
  //   description:
  //     "BCC returned to the Kemanggisan Sport Festival, competing and promoting chess culture among the broader student body.",
  //   image: "/events/ksf-2025/cover.jpg",
  //   type: "past",
  //   fullDescription:
  //     "The Kemanggisan Sport Festival 2025 was an annual campus-wide sporting event where BCC represented chess with enthusiasm. Building on the success of our debut in 2024, this year's participation featured a larger team, more engaging activities at our booth, and competitive matches that drew attention from across the campus. The event helped solidify chess as a recognized sport within the BINUS Kemanggisan community.",
  // },
  {
    id: "welpar",
    title: "Welcoming Party 2025",
    date: "October 12, 2025",
    dateObject: new Date(2025, 9, 12),
    location: "BINUS Kemanggisan",
    description:
      "A warm welcome to our newest members! We bonded through fun activities, light chess sessions, and team-building games.",
    image: "/events/welpar/Welpar_2.JPG",
    type: "past",
    fullDescription:
      "The Welcoming Party 2025, held on October 12, 2025, at BINUS Kemanggisan, marked the beginning of a new chapter for the BINUS Chess Club. This event was designed to introduce new members to the club's culture, activities, and community. Through ice-breaking games, casual chess matches, and team-building sessions, participants were able to connect with seniors, staff, and fellow newcomers in a relaxed and friendly atmosphere. The event fostered strong camaraderie early on, allowing members to feel at home while getting a glimpse of the exciting programs and competitions ahead. Welpar 2025 successfully set the foundation for a collaborative and supportive environment that the club will continue to build throughout the year.",
    gallery: [
      "/events/welpar/Welpar_1.JPG",
      "/events/welpar/Welpar_3.JPG",
    ],
  },
  {
    id: "clashofbatches",
    title: "Clash of Batches",
    date: "September 13, 2025",
    dateObject: new Date(2025, 8, 13),
    location: "Online Lichess",
    description:
      "An exciting arena-style tournament on Lichess! The batch scoring the most points was declared the ultimate winner.",
    image: "/events/clashofbatches/clashofbatches.jpg",
    type: "past",
    fullDescription:
      "Welcome to the Clash of Batches, an exciting arena-style chess tournament on Lichess, pitting our community's batches against each other in a fast-paced showdown. Participants compete in rated games, earning points for wins, draws, and strategic moves like berserk, with the batch scoring the highest total declared the champion.",
  },
  {
    id: "expo",
    title: "Week of Welcoming 2025",
    date: "August 25-27, 2025",
    dateObject: new Date(2025, 7, 25),
    location: "BINUS Kemanggisan & Alam Sutera",
    description:
      "We showcased BCC at the WOW Expo B29. New students visited our booth to learn about our activities and the excitement of joining BCC.",
    image: "/events/expo/expo_1.jpg",
    type: "past",
    fullDescription:
      "The Week of Welcoming (WOW) Expo B29, held on August 25-27, 2025, at both BINUS Kemanggisan and Alam Sutera, provided an opportunity for the BINUS Chess Club to introduce itself to incoming freshmen. Throughout the expo, students explored the BCC booth, learned about our training programs, events, tournaments, and community initiatives.",
    gallery: [
      "/events/expo/expo_2.jpg",
      "/events/expo/expo_3.jpg",
    ],
  },
  {
    id: "expo2026",
    title: "EXPO Binus Chess Club 2026",
    date: "July 31 - August 15, 2026",
    dateObject: new Date(2026, 6, 31),
    location: "BINUS Kemanggisan & Alam Sutera",
    description:
      "We showcased BCC at the EXPO B30. New students visited our booth to learn about our activities and the excitement of joining BCC.",
    image: "/events/expo2026/main.png",
    type: "past",
    fullDescription:
      "The EXPO Binus Chess Club 2026, held on July 31 - August 15, 2026, at both BINUS Kemanggisan and Alam Sutera, provided an opportunity for the BINUS Chess Club to introduce itself to new and returning students. Throughout the expo, students explored the BCC booth, learned about our training programs, events, tournaments, and community initiatives.",
    gallery: [
      "/events/expo2026/1.png",
      "/events/expo2026/2.png",
      "/events/expo2026/3.png",
      "/events/expo2026/4.png",
    ],
  },
  // {
  //   id: "kemanggisan-competition",
  //   title: "Kemanggisan Competition",
  //   date: "July 12, 2025",
  //   dateObject: new Date(2025, 6, 12),
  //   location: "BINUS Kemanggisan",
  //   description:
  //     "An internal chess competition challenging BCC members of all skill levels in a day of strategic battles.",
  //   image: "/events/kemanggisan-competition/cover.jpg",
  //   type: "past",
  //   fullDescription:
  //     "The Kemanggisan Competition was an internal chess tournament organized to give BCC members a platform to test their skills in a structured, competitive setting. Open to players of all levels, the event featured Swiss-system pairings, timed matches, and prizes for top finishers. It served as both a fun community event and a way to identify promising players for future inter-university competitions.",
  // },
  {
    id: "pomprov-2026",
    title: "POMPROV Banten 2026",
    date: "August 31 - September 5, 2026",
    dateObject: new Date(2026, 8, 31),
    location: "Jakarta",
    description:
      "BCC members represented BINUS at the Pekan Olahraga Mahasiswa Provinsi Banten in the chess category.",
    image: "/events/pomprov-2026/main.png",
    type: "past",
    gallery: [
      "/events/pomprov-2026/1.png",
      "/events/pomprov-2026/2.png",
      "/events/pomprov-2026/3.png",
      "/events/pomprov-2026/4.png",
    ],
    fullDescription:
      "POMPROV Banten 2026 (Pekan Olahraga Mahasiswa Provinsi Banten) was a major provincial-level student sports competition where BCC members proudly represented BINUS University in the chess category. After weeks of intensive preparation, our players competed against top university chess teams from across Banten. The experience was invaluable in building competitive resilience, gaining exposure to high-level play, and putting BINUS Chess Club on the map in the Banten collegiate chess scene.",
  },
  {
    id: "pknstan",
    title: "Sparring PKN STAN 1",
    date: "May 31, 2025",
    dateObject: new Date(2025, 4, 31),
    location: "BINUS Kemanggisan",
    description:
      "We honed our skills in an exciting sparring session with PKN STAN! This friendly match boosted our teamwork and readiness.",
    image: "/events/pknstan/pknstan.jpg",
    type: "past",
    fullDescription:
      "The PKN STAN x BCC Sparring, held on May 31, 2025, at BINUS Kemanggisan, was a dynamic friendly match that brought together members of the BINUS Chess Club and PKN STAN for an enriching chess experience. This event featured a series of casual yet competitive games, allowing both teams to test their strategies, improve their gameplay, and build camaraderie. Guided by our coaches, we focused on tactical drills and real-time feedback during the session, which helped strengthen our team coordination and individual skills. This sparring session was a valuable opportunity to prepare for upcoming tournaments and foster a spirit of collaboration with PKN STAN, leaving us better equipped for future challenges!",
    gallery: [
      "/events/pknstan/1.jpg",
      "/events/pknstan/2.jpg",
      "/events/pknstan/3.jpg",
    ],
  },
  {
    id: "pomprovpreparation",
    title: "POMPROV Preparation",
    date: "May 9, 2025",
    dateObject: new Date(2025, 4, 9),
    location: "BINUS Kemanggisan",
    description:
      "Intensive preparation and training sessions for Pomprov DKI Jakarta, sharpening our abilities for the provincial championship.",
    image: "/events/pomprovprepare/pomprovprepare.jpg",
    type: "past",
    fullDescription:
      "Through a series of focused training sessions, we covered advanced tactics, opening theories, endgame techniques, and match practice, tailored to enhance individual and team performance. Led by experienced coaches and top-rated players, these sessions included simulated matches and personalized feedback to address specific weaknesses. Held in the lead-up to the event, this program fostered teamwork and determination, ensuring our club was well-prepared to represent BINUS with pride at Pomprov DKI Jakarta!",
    gallery: [
      "/events/pomprovprepare/1.jpg",
      "/events/pomprovprepare/2.jpg",
      "/events/pomprovprepare/zoom.jpg",
    ],
  },
  {
    id: "ldkcp",
    title: "Latihan Dasar Kepemimpinan Calon Pengurus 2026 BCC",
    date: "July 22, 2026",
    dateObject: new Date(2026, 6, 22),
    location: "BINUS Kemanggisan",
    description:
      "Latihan Dasar Kepemimpinan Calon Pengurus — leadership training for prospective BCC officers to prepare for organizational roles.",
    image: "/events/ldkcp2026/main.png",
    type: "past",
    fullDescription:
      "LDKCP (Latihan Dasar Kepemimpinan Calon Pengurus) was a specialized leadership training program designed for BCC members aspiring to take on officer and committee roles within the club. The program covered essential topics including organizational management, event planning, team coordination, public speaking, and decision-making. Through workshops, group exercises, and mentorship from current leaders, participants gained the skills and confidence needed to lead BCC into its next chapter.",
    gallery: [
      "/events/ldkcp2026/1.png",
      "/events/ldkcp2026/2.png",
      "/events/ldkcp2026/3.png",
      "/events/ldkcp2026/4.png",
    ]
  },
  {
    id: "ldka",
    title: "Latihan Dasar Kepemimpinan Aktivis 2026 BCC",
    date: "June 7, 2026",
    dateObject: new Date(2026, 5, 7),
    location: "BINUS Kemanggisan",
    description:
      "Latihan Dasar Kepemimpinan Aktivis — foundational leadership training for all BCC members to build teamwork and organizational skills.",
    image: "/events/ldka2026/main.png",
    type: "past",
    fullDescription:
      "LDKA (Latihan Dasar Kepemimpinan Aktivis) was a foundational leadership training held for all BCC members. The program aimed to instill essential soft skills such as teamwork, communication, problem-solving, and time management. Through a mix of indoor workshops and team-building activities, members strengthened their bonds and developed a deeper understanding of what it means to be part of an organization. LDKA laid the groundwork for a more cohesive and motivated club community.",
    gallery: [
      "/events/ldka2026/1.png",
      "/events/ldka2026/2.png",
      "/events/ldka2026/3.png",
      "/events/ldka2026/4.png",
    ]
  },
  {
    id: "grand-launching",
    title: "Grand Launching BCC",
    date: "March 13, 2025",
    dateObject: new Date(2025, 2, 13),
    location: "BINUS Auditorium",
    description:
      "Our grand launching as an official BINUS club, attended by over 200 students, faculty, and chess enthusiasts.",
    image: "/events/launching-bcc/bcclaunch.jpeg",
    type: "past",
    fullDescription:
      "The grand launching of BINUS Chess Club was a momentous occasion that marked our official recognition as a student organization. The event took place in the main auditorium with over 200 attendees, including faculty members, students, and chess enthusiasts. The ceremony featured opening remarks from university officials, a chess exhibition match, and the unveiling of our club charter. This event established our commitment to promoting chess culture within the BINUS community.",
    gallery: [
      "/events/launching-bcc/bcclaunch.jpeg",
      "/events/launching-bcc/together.jpeg",
      "/events/launching-bcc/together2.jpeg",
      "/events/launching-bcc/simul.jpeg",
    ],
  },
  {
    id: "simulchess",
    title: "Simultaneous Exhibition",
    date: "March 13, 2025",
    dateObject: new Date(2025, 2, 13),
    location: "BINUS Anggrek, Food Court",
    description:
      "A BINUS University's 2400-rated lecturer played against 20 club members simultaneously.",
    image: "/events/simulchess/SimulChess.jpg",
    type: "past",
    fullDescription:
      "BINUS' 2400-rated lecturer played against 20 club members simultaneously.",
  },

  // --- 2024 ---
  // {
  //   id: "ksf-2024",
  //   title: "Kemanggisan Sport Festival 2024",
  //   date: "October 19, 2024",
  //   dateObject: new Date(2024, 9, 19),
  //   location: "BINUS Kemanggisan",
  //   description:
  //     "BCC's debut in the Kemanggisan Sport Festival, showcasing chess skills in a campus-wide inter-club sports competition.",
  //   image: "/events/ksf-2024/cover.jpg",
  //   type: "past",
  //   fullDescription:
  //     "The Kemanggisan Sport Festival 2024 marked BCC's first-ever participation in this annual campus sporting event. Despite being a newly formed club, our members competed with determination and showcased impressive chess talent. The event provided valuable exposure for BCC, introducing the broader BINUS Kemanggisan community to competitive chess and attracting new members who were inspired by the club's passion and energy.",
  // },
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