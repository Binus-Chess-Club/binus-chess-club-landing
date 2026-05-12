export interface Person {
  name: string;
  position: string;
  rating?: number;
  image?: string;
  bio?: string;
  chessComUsername?: string;
}

export interface AlumniMember {
  name: string;
  position: string;
  chessComUsername?: string;
  year: number;
}

// ============================================================================
// CURRENT TEAM MEMBERS (2026)
// ============================================================================

// Club President
export const clubPresident: Person[] = [
  {
    name: "Sia Malvino Al Keane",
    position: "Founder & President",
    rating: 1429,
    image: "person/2025/malvino.png",
    bio: "Current President of BINUS Chess Club, leading with passion and strategic vision.",
    chessComUsername: "malmal_l"
  },
];

// General Board (DPI Umum)
export const generalBoard: Person[] = [
  {
    name: "Nathanael Vitzgerald",
    position: "Secretary",
    rating: 1250,
    image: "person/2025/nathanael.png",
    bio: "Nathanael manages all club documentation, meeting minutes, and communications with members.",
    chessComUsername: "NathXAra",
  },
  {
    name: "Muhammad Reza Alghifari",
    position: "Treasurer",
    rating: 1130,
    image: "person/2025/reza.png",
    bio: "Reza organizes treasuries and finances of the club.",
    chessComUsername: "Expanics",
  }
];

// Regional Representatives (PIC Region)
export const regionalReps: Person[] = [
  {
    name: "Stanley Christian Gunawan",
    position: "Regional Head - Kemanggisan",
    rating: 1630,
    image: "person/2025/stanley.png",
    bio: "Stanley leads the Kemanggisan region and coordinates regional activities.",
    chessComUsername: "Stych2312",
  },
  {
    name: "Melsandi Gunawan",
    position: "Regional Secretary - Kemanggisan",
    rating: 1380,
    image: "person/2025/melsandi.png",
    bio: "Melsandi assists in managing the Kemanggisan region and supports the regional head in organizing events.",
    chessComUsername: "MELSANDI",
  },
  {
    name: "Frederick Sawedi",
    position: "Regional Head - Alam Sutera",
    rating: 520,
    image: "person/2025/frederick.png",
    bio: "Frederick leads the Alsut region and manages regional coordination.",
    chessComUsername: "FrederickSawedi",
  },
  {
    name: "Aureylius Crystaldo Darmadji",
    position: "Regional Secretary - Alam Sutera",
    rating: 900,
    image: "person/2025/aureylius.png",
    bio: "Aureylius supports the Alsut region by assisting in event organization and member coordination.",
    chessComUsername: "aniyeo"
  },
];

// Division Heads (Kepala Divisi Umum)
export const divisionHeads: Person[] = [
  {
    name: "Anthony Vriyatama",
    position: "Head of Marketing",
    rating: 1220,
    image: "person/2025/anthony.png",
    bio: "Anthony manages promotional activities, social media, and outreach campaigns for the club.",
    chessComUsername: "tonyvvv",
  },
  {
    name: "Josevan NoeleDave",
    position: "Head of Event",
    rating: 1600,
    image: "person/2025/noele.png",
    bio: "Noele organizes and coordinates all club events, including tournaments, workshops, and social gatherings.",
    chessComUsername: "NoeleDavee",
  },
  {
    name: "Fahri Fadhil Muhammad",
    position: "Head of IT",
    rating: 1400,
    image: "person/2025/fadhil.png",
    bio: "Fahri manages the club's digital presence, website, and technical infrastructure for online tournaments.",
    chessComUsername: "Codename_Vangeance",
  },
];

// Combine all organizers
export const organizers: Person[] = [
  ...clubPresident,
  ...generalBoard,
  ...regionalReps,
  ...divisionHeads,
];

// Club Activists
export const activists: Person[] = [
  {
    name: "Christopher Vincentius K",
    position: "Club Activist",
    rating: 2258,
    image: "?",
    bio: "",
    chessComUsername: "LVCW",
  },
  {
    name: "Jonathan Saputra",
    position: "Club Activist",
    rating: 1239,
    image: "?",
    bio: "",
    chessComUsername: "Josap96",
  },
  {
    name: "Katarina Trista Suhada",
    position: "Club Activist",
    rating: 377,
    image: "?",
    bio: "",
    chessComUsername: "Trixx38",
  },
  {
    name: "Dustin Kurniawan",
    position: "Club Activist",
    rating: 660,
    image: "?",
    bio: "",
    chessComUsername: "ZugTwistX",
  },
  {
    name: "Brandon Johan",
    position: "Club Activist",
    rating: 1347,
    image: "?",
    bio: "",
    chessComUsername: "BranJohan",
  },
  {
    name: "Aaron Zuriel",
    position: "Club Activist",
    rating: 1872,
    image: "?",
    bio: "",
    chessComUsername: "starrsnatch",
  },
  {
    name: "Juan Kahan Vinste",
    position: "Club Activist",
    rating: 1625,
    image: "?",
    bio: "",
    chessComUsername: "T1c_T4c_T0e",
  },
  {
    name: "Vincent Jose Cornellius",
    position: "Club Activist",
    rating: 1596,
    image: "?",
    bio: "",
    chessComUsername: "VJC-24",
  },
  {
    name: "Aisha Elysia Matondang",
    position: "Club Activist",
    rating: 0,
    image: "?",
    bio: "",
    chessComUsername: "AM-222",
  },
  {
    name: "Christian Nicholas ",
    position: "Club Activist",
    rating: 1,
    image: "?",
    bio: "",
    chessComUsername: "",
  },
  {
    name: "Radytia Garizah Chairullah",
    position: "Club Activist",
    rating: 1,
    image: "?",
    bio: "",
    chessComUsername: "",
  },
  {
    name: "Jason Christopher Chandra",
    position: "Club Activist",
    rating: 1,
    image: "?",
    bio: "",
    chessComUsername: "",
  },
];

// Club Members
export const members: Person[] = [
  {
    name: "Joel Suwanto",
    position: "Club Member",
    rating: 2670,
    image: "",
    bio: "Dedicated club member contributing to various chess activities and tournaments.",
    chessComUsername: "TheUnderDog001",
  },
  {
    name: "Ray Mclung Gunawan",
    position: "Club Member",
    rating: 2560,
    image: "",
    bio: "Active chess player and club member participating in various events and competitions.",
    chessComUsername: "Patrickskakk",
  },
  {
    name: "Christopher Vincentius Kurniawan",
    position: "Club Member",
    rating: 2260,
    image: "",
    bio: "Enthusiastic chess player and club member supporting community activities.",
    chessComUsername: "LVCW",
  },
  {
    name: "Clement Lewi Limuel",
    position: "Club Member",
    rating: 2140,
    image: "",
    bio: "Enthusiastic chess player contributing to club community.",
    chessComUsername: "WataHata",
  },
  {
    name: "Vincent Oei",
    position: "Club Member",
    rating: 1970,
    image: "",
    bio: "Dedicated club member supporting chess activities and growth.",
    chessComUsername: "Yungfu",
  },
  {
    name: "Harry Santosa",
    position: "Club Member",
    rating: 1760,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    bio: "Active member participating in club events and tournaments.",
    chessComUsername: "Hello1nicetomeetyou",
  },
];

// Honorable Mention
export const honorableMention: Person[] = [
  {
    name: "Bakti Amirul Jabar",
    position: "Club Activist",
    rating: 2160,
    image: "",
    bio: "Highly skilled activist contributing to club development and member engagement.",
  }
];

// ============================================================================
// ALUMNI (By Year)
// ============================================================================

export const alumniData: AlumniMember[] = [
  // 2025 Alumni
  {
    name: "Galvent Chiuwen",
    position: "Former Founder & President",
    chessComUsername: "Orangemuffin67",
    year: 2025,
  },
  {
    name: "Geoffrey Antonio Arifin",
    position: "Former Secretary",
    chessComUsername: "AutumnMann19",
    year: 2025,
  },
  {
    name: "Alessandro Moreno Lawadinata",
    position: "Former Treasurer",
    chessComUsername: "AlessandroMoreno96",
    year: 2025,
  },
  {
    name: "Steven Ang",
    position: "Former Regional Head - Kemanggisan",
    chessComUsername: "PhantomXRG",
    year: 2025,
  },
  {
    name: "Owen Siau",
    position: "Former Regional Head - Alam Sutera",
    chessComUsername: "Ony0n",
    year: 2025,
  },
  {
    name: "Keven Wilbert Felik",
    position: "Former Head of Marketing",
    chessComUsername: "",
    year: 2025,
  },
  {
    name: "Aristo Ardy Wijaya",
    position: "Former Head of Event",
    chessComUsername: "aristo123456",
    year: 2025,
  },
  {
    name: "Muhammad Zidan Fatonie",
    position: "Former Head of IT",
    chessComUsername: "mzf11125",
    year: 2025,
  },
  {
    name: "Dominikus Sebastian Ramli",
    position: "Former Deputy of IT",
    chessComUsername: "Bas77z",
    year: 2025,
  },
  {
    name: "Syuja Ardhanu",
    position: "Former Club Activist",
    chessComUsername: "ds0401",
    year: 2025,
  },
  {
    name: "Stanley Christian Gunawan",
    position: "Former Club Activist",
    chessComUsername: "Stych2312",
    year: 2025,
  },
  {
    name: "Josevan NoeleDave",
    position: "Former Club Activist",
    chessComUsername: "NoeleDavee",
    year: 2025,
  },
  {
    name: "Sia Malvino Al Keane",
    position: "Former Club Activist",
    chessComUsername: "malmal_l",
    year: 2025,
  },
  {
    name: "Hibatullah Dony Ananda",
    position: "Former Club Activist",
    chessComUsername: "yellowcat2224",
    year: 2025,
  },
  {
    name: "Fahri Fadhil",
    position: "Former Club Activist",
    chessComUsername: "Codename_Vangeance",
    year: 2025,
  },
  {
    name: "Melsandi Gunawan",
    position: "Former Club Activist",
    chessComUsername: "MELSANDI",
    year: 2025,
  },
  {
    name: "Nathanael Vitzgerald",
    position: "Former Club Activist",
    chessComUsername: "NathXAra",
    year: 2025,
  },
  {
    name: "Anthony Vriyatama",
    position: "Former Club Activist",
    chessComUsername: "tonyvvv",
    year: 2025,
  },
  {
    name: "Muhammad Reza Alghifari",
    position: "Former Club Activist",
    chessComUsername: "Expanics",
    year: 2025,
  },
  {
    name: "Frederick Sawedi",
    position: "Former Club Activist",
    chessComUsername: "FrederickSawedi",
    year: 2025,
  },
  {
    name: "Osel Citta Chen",
    position: "Former Club Activist",
    chessComUsername: "Spitblaze",
    year: 2025,
  },
  {
    name: "Jeremiah Chang",
    position: "Former Club Activist",
    chessComUsername: "Jeremiah-Chang",
    year: 2025,
  },
  {
    name: "Jordan",
    position: "Former Club Activist",
    chessComUsername: "",
    year: 2025,
  },
  {
    name: "Michaela Zaneta Hwang",
    position: "Former Club Activist",
    chessComUsername: "",
    year: 2025,
  },
  {
    name: "Aureylius Crystaldo Darmadji",
    position: "Former Club Activist",
    chessComUsername: "aniyeo",
    year: 2025,
  },
  {
    name: "Evan Edward",
    position: "Former Club Activist",
    chessComUsername: "NsxRagna",
    year: 2025,
  },
  {
    name: "Erwin Rommel Immanuel",
    position: "Former Club Activist",
    chessComUsername: "",
    year: 2025,
  },
  {
    name: "Fadli Oktaviano Raynhadi",
    position: "Former Club Activist",
    chessComUsername: "oktrayn",
    year: 2025,
  },
];
