import "./Tracks.scss";

// SVG
import {ReactComponent as Background} from '../assets/svg/background.svg'
import {ReactComponent as DoubleChevron} from '../assets/svg/double_chevron.svg'

const Tracks = () => {
  return (
    <main className="tracks">
      <Background className="tracks__backgroundIllu" />
      <DoubleChevron className="tracks__doubleChevron" />
    </main>
  )
}

export default Tracks