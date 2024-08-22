import './Hero.css';
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import 'animate.css';

const Hero = ({ heroData, setHeroCount, heroCount, setPlayStatus, playStatus }) => {
   
    return (
<div className=''>
<div className='mr-10 mt-44 ml-10 lg:mr-28 lg:mt-64 lg:ml-20'>
    <div className='hrtext1 animate__animated animate__bounce'>
        {/* <p>{heroData[heroCount]?.text1}</p>
        <p>{heroData[heroCount]?.text2}</p> */}
        <p>{heroData?.text1}</p>
        <p>{heroData?.text2}</p>
    </div>
    <div className='exf'>
        <p className='text-md text-[#292929] font-medium'>Explore the feature</p>
        <p className='text-orange-600'><IoIosArrowForward /></p>
    </div>
    <div className='her-dot-play'>
        <ul className='hero-dots-ul'>
            <li onClick={() => setHeroCount(0)} className={heroCount === 0 ? 'hero-dot orange' : 'hero-dot'}></li>
            <li onClick={() => setHeroCount(1)} className={heroCount === 1 ? 'hero-dot orange' : 'hero-dot'}></li>
            <li onClick={() => setHeroCount(2)} className={heroCount === 2 ? 'hero-dot orange' : 'hero-dot'}></li>
        </ul>
        <div className="hro-play" onClick={() => setPlayStatus(!playStatus)}>
            <p className=''>{playStatus ? <CiPause1 /> : <CiPlay1 />}</p>
            <p>See the video</p>
        </div>
    </div>
</div>
</div>

    );
};

export default Hero;
