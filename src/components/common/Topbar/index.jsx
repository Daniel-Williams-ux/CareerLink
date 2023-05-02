import careerLinks from "../../../assets/careerLinks.jpg";
import { AiOutlineHome, AiOutlineSearch, AiOutlineUserSwitch, AiOutlineMessage, AiOutlineBell } from "react-icons/ai";
import user from "../../../assets/user.png";
//   AiOutlineHome,
//   // AiOutlineUserSwitch,
//   // AiOutlineSearch,
//   // AiOutlineMessage,
//   // AiOutlineBell,
// } from "react-icons/ai";

import './index.scss';

const Topbar = () => {
  return (
    <div className="topbar-main">
      <img className="career-link-logo" src={careerLinks} alt="careerLink logo"/>
      <div  className="react-icon">
        <AiOutlineSearch size={25} />
        <AiOutlineHome size={25}  />
        <AiOutlineUserSwitch size={25} />
        <AiOutlineMessage size={25} />
        <AiOutlineBell size={25} />
        <img src={user} className="user-logo"/>
      </div>
    </div>
  )
}

export default Topbar;