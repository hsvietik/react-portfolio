import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
// import LogoS from '../../assets/images/logo-s.png';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  useEffect(() => {
    setTimeout(() => setLetterClass('text-animate-hover'), 4000);
  }, []);
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters letterClass={letterClass} str="Hi," idx={10} />
          <AnimatedLetters letterClass={letterClass} str="I'm" idx={12} />

          <p className="surname">
            {/* <img src={LogoS} alt="logo" /> */}
            <span className="font-effect-shadow-multiple">S</span>
            <AnimatedLetters
              letterClass={letterClass}
              str="vietik Hanna"
              idx={15}
            />
          </p>
          <AnimatedLetters
            letterClass={letterClass}
            str="Web Developer"
            idx={22}
          />
        </h1>
        <h2>Frontend Developer / JavaScript</h2>
        <Link to="/contact" className="flat-button">
          Contact me
        </Link>
      </div>
    </div>
  );
};
export default Home;
