import careerLinks from "../../../assets/careerLinks.jpg";
import './index.scss';

const Topbar = () => {
  return (
    <div className="topbar-main">
      <img className="career-link-logo" src={careerLinks} alt="careerLink logo"/>
    </div>
  )
}

export default Topbar;