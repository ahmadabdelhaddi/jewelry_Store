import "./OurTeam.css";
import OurTeam from "./OurTeam";
//OurTeamCountainer component serves as a wrapper for displaying a collection of team members.
export default function OurTeamCountainer() {
  return (
    <div  >
      <h1 className="OruTeam" style={{ textAlign: "center" }}>
        Our Team
      </h1>
      <div className="HoldOurTeam" style={{ display: "grid" }}>
        <OurTeam name="HebaAlrrhman" />
        <OurTeam name="ahmadabdelhaddi" />
        <OurTeam name="duhamjilani" />
        <OurTeam name="Laith-Alzbaidy" />
        <OurTeam name="Mohammadkay" />
        <OurTeam name="OmarHilwah" />
      </div>
    </div>
  );
}
