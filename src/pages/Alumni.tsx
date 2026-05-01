'use client'
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, ChevronDown, ChevronUp } from "lucide-react";

interface AlumniMember {
  name: string;
  position: string;
  chessComUsername?: string;
  year: number;
}

const Alumni = () => {
  const [expandedYears, setExpandedYears] = useState<Set<number>>(new Set([2026]));

  const alumniData: AlumniMember[] = [
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

  // Group alumni by year
  const alumniByYear = alumniData.reduce(
    (acc, member) => {
      if (!acc[member.year]) {
        acc[member.year] = [];
      }
      acc[member.year].push(member);
      return acc;
    },
    {} as Record<number, AlumniMember[]>
  );

  // Sort years in descending order
  const sortedYears = Object.keys(alumniByYear)
    .map(Number)
    .sort((a, b) => b - a);

  const toggleYear = (year: number) => {
    const newExpanded = new Set(expandedYears);
    if (newExpanded.has(year)) {
      newExpanded.delete(year);
    } else {
      newExpanded.add(year);
    }
    setExpandedYears(newExpanded);
  };

  const handleChessComClick = (username: string) => {
    window.open(`https://www.chess.com/member/${username}`, "_blank");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Alumni Header Section */}
        <section className="bg-chessBlue text-white py-20">
          <div className="container mx-auto px-4 text-center flex flex-col items-center">
            <Users className="w-16 h-16 mb-4" />
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
              Alumni Hall
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto mt-4">
              Honoring our past leaders & activists who have contributed to the
              BINUS Chess Club's growth and success.
            </p>
          </div>
        </section>

        {/* Alumni List Section */}
        <section className="py-16 bg-gradient-to-br from-blue-50 to-slate-50">
          <div className="container mx-auto px-4 max-w-4xl">
            {sortedYears.map((year) => (
              <div key={year} className="mb-8">
                {/* Year Header */}
                <button
                  onClick={() => toggleYear(year)}
                  className="w-full flex items-center justify-between bg-chessBlue text-white p-4 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                >
                  <h2 className="text-xl font-medium">Year {year}</h2>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">
                      {alumniByYear[year].length} Alumni
                      {alumniByYear[year].length !== 1 ? "s" : ""}
                    </span>
                    {expandedYears.has(year) ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Alumni List for Year */}
                {expandedYears.has(year) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-b-lg shadow-md overflow-hidden"
                  >
                    <div className="divide-y">
                      {alumniByYear[year].map((member, index) => (
                        <motion.div
                          key={`${member.name}-${index}`}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="px-4 py-2 hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex flex-col items-start md:flex-row md:items-center md:justify-between gap-1">
                            <div>
                              <h3 className="text-sm font-semibold text-chessBlue">
                                {member.name}
                              </h3>
                              <p className="text-xs text-gray-600">
                                {member.position}
                              </p>
                            </div>
                            {member.chessComUsername && (
                              <button
                                onClick={() =>
                                  handleChessComClick(member.chessComUsername!)
                                }
                                className="text-chessGreen hover:text-green-700 font-medium text-sm transition-colors hover:underline"
                              >
                                @{member.chessComUsername}
                              </button>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Back to Team CTA Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-chessBlue mb-6">
              Curious about our current team?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Visit our team page to see our active members and current leadership.
            </p>
            <a
              href="/team"
              className="inline-block bg-chessBlue text-white hover:bg-blue-700 font-bold px-8 py-3 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              View Current Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Alumni;
