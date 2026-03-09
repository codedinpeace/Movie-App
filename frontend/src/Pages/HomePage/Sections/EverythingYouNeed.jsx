import React from "react";
import {Search, Play, Heart, TrendingUp, Info, Compass} from 'lucide-react'

const EverythingYouNeed = () => {
  const features = [
    {
      icon:Search,
      title: "Search Movies",
      description:
        "Quickly find any movie using powerful real-time search. Enter a title, actor, or keyword to instantly discover matching movies with detailed information and trailers.",
    },
    {
      icon:Play,
      title: "Watch Trailers",
      description:
        "Preview movies instantly with integrated trailers. Watch official trailers directly on the platform to decide whether a movie is worth watching.",
    },
    { 
      icon:Compass,
      title: "Save Favorites",
      description:
        "Create your personal movie collection by saving favorites. Easily keep track of movies you love or plan to watch later.",
    },
    {
      icon:Heart,
      title: "Explore Genres",
      description:
        "Browse movies across different genres like action, comedy, drama, thriller, and sci-fi. Discover films that match your mood and interests.",
    },
    {
      icon:TrendingUp,
      title: "Trending Movies",
      description:
        "Stay updated with the latest trending movies everyone is talking about. Explore popular titles and new releases gaining attention.",
    },
    {
      icon:Info,
      title: "Detailed Information",
      description:
        "Get complete details about every movie including ratings, release dates, summaries, and more to help you decide what to watch next.",
    },
  ];

  return (
    <div className="mt-35 px-15 ">
      <div className="Heading flex flex-col">
        <h1 className="text-3xl font-semibold text-white max-md:text-2xl max-lg:text-center">
          Everything You Need to Discover Movies
        </h1>
        <p className="text-lg text-gray-400 max-w-300 mt-3 font-light max-lg:text-[16px] max-md:text-center">
          Discover movies from every genre in one place. Our platform helps you
          explore trending titles, popular picks, and hidden gems so you can
          quickly find something great to watch.
        </p>
      </div>
      <div className="flex flex-wrap gap-5 justify-between mt-10 max-lg:justify-center">
  {features.map((feature, index) => {

      const Icon = feature.icon

    return (
      <div key={index} className="card max-w-[500px] max-h-100 flex flex-col gap-3 p-10  border-2 border-[#212121] rounded-xl group relative overflow-hidden hover:border-red-600/40 hover:shadow-[0_0_30px_rgba(220,38,38,0.08)] transition-all duration-300">
      <div className="flex gap-5 items-center">
        <div className="bg-[#141414] border border-[#212121] p-3 rounded-xl">
          <Icon color="red"/>
        </div>
        <p className="text-2xl font-semibold text-white">{feature.title}</p>
      </div>
      <div>
        <p className="text-gray-400 text-xl max-md:text-[16px] mt-2">{feature.description}</p>
      </div>
    
      {/* Bottom hover glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[60px] rounded-b-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(220,38,38,0.08) 0%, transparent 70%)' }}
      />
    </div>
      )
    })}
    </div>
    </div>
  );
  };

export default EverythingYouNeed;
