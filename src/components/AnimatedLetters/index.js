import './index.scss';

const AnimatedLetters = ({ letterClass, str, idx }) => {
  return (
    <span>
      {str.split('').map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
};
export default AnimatedLetters;
