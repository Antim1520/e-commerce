import  "./Hero.css"
import hand_icon from '../Assests/hand bg re.png'
import hero_img from '../Assests/girl1 rbg.png'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEEW ARRIVALS ONLY</h2>
        <div>
            <div className="hero-hand-icon">
              <p>new</p>
              <img src={hand_icon} width={50} height={50} alt=""/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Colletion</div>
          &#10145;
        </div>
      </div>
      <div className="hero-right">
        <img src={hero_img} alt=""/>
      </div>
    </div>
  )
}

export default Hero
