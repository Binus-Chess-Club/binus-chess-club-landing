import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HistorySection from "@/components/about/HistorySection";
import MissionVisionSection from "@/components/about/MissionVisionSection";
import AchievementsSection from "@/components/about/AchievementsSection";
import ConstitutionSection from "@/components/about/ConstitutionSection";
import LocationsSection from "@/components/about/LocationsSection";

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-chessBlue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About BINUS Chess Club
              </h1>
              <p className="text-lg md:text-xl">
                Building a community of chess enthusiasts and fostering
                strategic thinking since 2024.
              </p>
            </div>
          </div>
        </section>

        {/* Tabbed Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="history" className="w-full">
              <TabsList className="w-full flex flex-wrap justify-center gap-2 h-auto bg-transparent mb-8">
                <TabsTrigger 
                  value="history" 
                  className="px-6 py-3 data-[state=active]:bg-chessBlue data-[state=active]:text-white rounded-lg"
                >
                  History
                </TabsTrigger>
                <TabsTrigger 
                  value="mission" 
                  className="px-6 py-3 data-[state=active]:bg-chessBlue data-[state=active]:text-white rounded-lg"
                >
                  Mission & Values
                </TabsTrigger>
                <TabsTrigger 
                  value="constitution" 
                  className="px-6 py-3 data-[state=active]:bg-chessBlue data-[state=active]:text-white rounded-lg"
                >
                  Constitution
                </TabsTrigger>
                <TabsTrigger 
                  value="achievements" 
                  className="px-6 py-3 data-[state=active]:bg-chessBlue data-[state=active]:text-white rounded-lg"
                >
                  Achievements
                </TabsTrigger>
                <TabsTrigger 
                  value="locations" 
                  className="px-6 py-3 data-[state=active]:bg-chessBlue data-[state=active]:text-white rounded-lg"
                >
                  Locations
                </TabsTrigger>
              </TabsList>

              <TabsContent value="history" className="mt-0">
                <HistorySection />
              </TabsContent>

              <TabsContent value="mission" className="mt-0">
                <MissionVisionSection />
              </TabsContent>

              <TabsContent value="constitution" className="mt-0">
                <ConstitutionSection />
              </TabsContent>

              <TabsContent value="achievements" className="mt-0">
                <AchievementsSection />
              </TabsContent>

              <TabsContent value="locations" className="mt-0">
                <LocationsSection />
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-chessBlue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Community
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Whether you're a complete beginner or an experienced player, we
              welcome all BINUS students who have an interest in chess. Join us
              to learn, practice, and compete in a friendly environment.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="/contact" className="btn-primary">
                Join Us Today
              </a>
              <a href="/events" className="btn-secondary">
                Upcoming Events
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
