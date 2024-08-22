import { useEffect, useState } from "react";
import Background from "./components/Background/Background";
import Hero from "./components/Hero/Hero";


const App = () => {
  
  let heroData = [
    {text1: "Find Your", text2: "Perfect Home"},
    {text1: "Discover", text2: "Modern Living"},
    {text1: "Unlock Your", text2: "Dream Home"},
];

const [heroCount, setHeroCount] = useState(2);
const [playStatus, setPlayStatus] = useState(false);

useEffect(() => {
  const interval = setInterval(() => {
    setHeroCount((prevCount) => (prevCount === 2 ? 0 : prevCount + 1));
  }, 4000);
  return () => clearInterval(interval)
}, [])

  return (
    <div>
     <div>
     <Background playStatus={playStatus} heroCount={heroCount} />
     </div>
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
      />

    </div>
  );
};

export default App;
