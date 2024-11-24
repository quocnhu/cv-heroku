import "../About/About.scss";
import bigAvatar from "../../assets/avatar.jpg";
const About = () => {
  return (
    <div className="about-section">
      <h2 className="about-title">About</h2>

      <div className="short-thinking">
        <p>
          "Life is about growth. It's about change. It's about continuously
          evolving."
        </p>
      </div>

      <div className="about-content">
        <div className="avatar-container">
          <img src={bigAvatar} alt="My Avatar" className="avatar-img" />
        </div>

        <div className="info-container">
          <h3 className="name">Nguyễn Quốc Nhu</h3>
          <div className="info-item">
            <strong>Birthday:</strong> <span>March 16, 1995</span>
          </div>
          <div className="info-item">
            <strong>Website:</strong> <span>www.quocnhucv.com</span>
          </div>
          <div className="info-item">
            <strong>Phone:</strong> <span>+84 86 2120 924</span>
          </div>
          <div className="info-item">
            <strong>City:</strong> <span>Hồ Chí Minh, Việt Nam</span>
          </div>
          <div className="info-item">
            <strong>Degree:</strong> <span>College and Vocation</span>
          </div>
          <div className="info-item">
            <strong>Email:</strong> <span>nquocnhu95it@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
