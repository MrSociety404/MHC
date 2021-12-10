import "./Tracks.scss";
import Hikings from"../components/Tracks/Hikings";

// SVG
import {ReactComponent as Background} from '../assets/svg/background.svg'
import {ReactComponent as DoubleChevron} from '../assets/svg/double_chevron.svg'
import { useRef } from "react";

const Tracks = () => {

  const titleEl = useRef()


  window.addEventListener('scroll', () => {
    if(window.scrollY > 220 && titleEl.current) {
      titleEl.current.classList.add('hidden')
    } else if(window.scrollY < 220 && titleEl.current) {
      titleEl.current.classList.remove('hidden')
    }
  })

  return (
    <main className="tracks" >
      <div className="tracks__head">
        <Background className="tracks__backgroundIllu" />
        <h1 className="tracks__title" ref={titleEl} >HIKING TRACK</h1>
      </div>
      <DoubleChevron className="tracks__doubleChevron" />
      <Hikings />

    </main>
  )
}

export default Tracks