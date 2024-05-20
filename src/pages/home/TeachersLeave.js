import { profile2, profile3, profile4 } from "../../static";

function TeachersLeave() {
  return (
    <div className="leaves">
      <h2>Teachers on leave</h2>
      <div className="teacher">
        <div className="profile-photo">
          <img src={profile2} alt="profile-2" />
        </div>
        <div className="info">
          <h3>Chinmay Kothidar</h3>
          <small className="text-muted">Full Day</small>
        </div>
      </div>
      <div className="teacher">
        <div className="profile-photo">
          <img src={profile3} alt="profile-3" />
        </div>
        <div className="info">
          <h3>Mohit Tandon</h3>
          <small className="text-muted">Half Day</small>
        </div>
      </div>
      <div className="teacher">
        <div className="profile-photo">
          <img src={profile4} alt="profile-4" />
        </div>
        <div className="info">
          <h3>Kashish Kamboj</h3>
          <small className="text-muted">Full Day</small>
        </div>
      </div>
    </div>
  );
}

export default TeachersLeave;
