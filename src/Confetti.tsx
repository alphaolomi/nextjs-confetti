import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const conf = () => {
  const { width, height } = useWindowSize();

  return (
    <div>
      <Confetti
      
        width={width}
        height={height}
        opacity={0.7} /* default is 1 */
        numberOfPieces={200} /*  default is 200 */
        recycle={false} /* Keep spawning confetti after numberOfPieces pieces have been shown. default is true*/
        onConfettiComplete={() => {console.log("Wow!! Confetti is done")}}
      />
    </div>
  );
};

export default conf;
