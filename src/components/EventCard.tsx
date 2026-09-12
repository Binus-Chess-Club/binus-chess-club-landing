import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const yearColors: Record<number, string> = {
  2024: "bg-amber-500",
  2025: "bg-emerald-500",
  2026: "bg-sky-500",
  2027: "bg-violet-500",
  2028: "bg-rose-500",
  2029: "bg-orange-500",
};

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  year?: number;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const EventCard = ({
  title,
  date,
  location,
  description,
  image,
  year,
  buttonText = "Learn More",
  buttonLink = "#",
  className,
}: EventCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className={cn("bg-white rounded-lg shadow-md overflow-hidden flex flex-col", className)}>
      <div className="h-64 overflow-hidden relative">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-muted">
            <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
          </div>
        )}
        <img
          src={image}
          alt={title}
          className={cn(
            "w-full h-full object-cover transition-all hover:scale-105",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          onLoad={() => setImageLoaded(true)}
        />
        {year && (
          <span
            className={cn(
              "absolute top-3 right-3 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md",
              yearColors[year] || "bg-gray-500"
            )}
          >
            {year}
          </span>
        )}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-bold text-xl text-chessBlue mb-2">{title}</h3>
        <div className="text-sm text-gray-500 mb-4">
          <p>{date}</p>
          <p>{location}</p>
        </div>
        <p className="text-gray-600 mb-6 flex-1">{description}</p>
        <Button asChild className="self-start bg-chessBlue hover:bg-chessBlue-light">
          <a href={buttonLink}>{buttonText}</a>
        </Button>
      </div>
    </div>
  );
};

export default EventCard;
