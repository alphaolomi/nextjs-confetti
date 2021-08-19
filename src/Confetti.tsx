import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const conf = () => {
    const {width, height} = useWindowSize()
  
    return (
        <div>
             <Confetti
          width={width}
          height={height}
          // numberOfPieces={200} /*  default is 200 */
          opacity={0.7} /* default is 1 */
          // recycle={false} /* Keep spawning confetti after numberOfPieces pieces have been shown. default is true*/
          // onConfettiComplete
        />
        <>
      <div>width: {width}</div>
      <div>height: {height}</div>
    </>

        </div>
    )
}

export default conf
