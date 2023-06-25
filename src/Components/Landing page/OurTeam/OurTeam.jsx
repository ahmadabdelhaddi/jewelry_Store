import React, { useEffect, useState } from "react";
import "./OurTeam.css";

// this component represents a team member section that fetches data from the GitHub API based on
// the provided username and displays the team member's avatar, login, role, and icons for GitHub and LinkedIn.
function OurTeam(propos) {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${propos.name}`)
      .then((res) => res.json())
      .then((data) => setInfo(data));
  }, []);
  return (
    <section className="our-team">
      <div className="Containeer ">
        <div className="cardss">
          <img src={info.avatar_url} alt="pic" className="Image" />
          <h4>{info.login}</h4>
          <p>Developer</p>
          <div className="iconss">
            <i className="fa-brands fa-github fa-2xl" ></i>
            <i className="fa-brands fa-linkedin fa-2xl"></i>
          </div>
        </div>
      </div>
    </section>
  );
}
export default OurTeam;
