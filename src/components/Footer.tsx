import { Link, useLocation } from "react-router-dom";
import { SiTiktok, SiInstagram } from "@icons-pack/react-simple-icons";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();

  // Pages that already have their own CTA section
  const pagesWithCTA = ["/", "/about", "/contact", "/events", "/team"];
  const showCTA = !pagesWithCTA.includes(location.pathname);

  return (
    <footer className="bg-chessBlue text-white">
      {/* CTA Banner */}
      {showCTA && (
        <div className="bg-chessGreen py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Join BINUS Chess Club?
            </h2>
            <p className="text-lg max-w-xl mx-auto mb-6 text-white/90">
              Whether you're a beginner or an experienced player, we welcome all BINUS students.
            </p>
            <Button
              asChild
              className="bg-white text-chessGreen hover:bg-gray-100 font-bold px-6 py-3"
            >
              <Link to="/contact">Join Us Today</Link>
            </Button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="/logo.png"
                alt="BINUS Chess Club Logo"
                className="w-20 h-20 object-cover"
              />
              <div className="font-bold text-xl">BINUS Chess Club</div>
            </Link>
            <p className="text-gray-300 mb-4">
              Promoting chess excellence and community at Bina Nusantara
              University
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.tiktok.com/@binuschessclub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-chessGreen transition-colors"
              >
                <SiTiktok size={20} />
              </a>
              <a
                href="https://instagram.com/binuschessclub"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-chessGreen transition-colors"
              >
                <SiInstagram size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/team"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/learn"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Learn
                </Link>
              </li>
              <li>
                <Link
                  to="/articles"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <address className="not-italic text-gray-300">
              <p>Bina Nusantara University</p>
              <p>Kemanggisan, Jakarta Barat</p>
              <p className="mt-2">Email: binuschess.club@binus.ac.id</p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} BINUS Chess Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
