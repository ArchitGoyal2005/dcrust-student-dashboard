import { useUser } from "@clerk/clerk-react";
import { useTheme } from "../../Contexts/ThemeContext";
import { profile1 } from "../../static";

function Profile() {
  const { sideMenuActive } = useTheme();

  const { user } = useUser();

  const { name, address, contact, branch, rollNumber, dateOfBirth } =
    user.unsafeMetadata;

  return (
    <aside className={sideMenuActive ? "active" : ""}>
      <div className="profile">
        <div className="top">
          <div className="profile-photo">
            <img
              src={name === "Mokshit" ? profile1 : user.imageUrl}
              alt="profile-1"
            />
          </div>
          <div className="info">
            <p>
              Hey, <b>{name}</b>
            </p>
            <small className="text-muted">{rollNumber}</small>
          </div>
        </div>
        <div className="about">
          <h5>Course</h5>
          <p>
            BTech.{" "}
            {<span style={{ textTransform: "uppercase" }}>{branch}</span>}
          </p>
          <h5>DOB</h5>
          <p>{dateOfBirth}</p>
          <h5>Contact</h5>
          <p>{contact}</p>
          <h5>Email</h5>
          <p>{user.primaryEmailAddress.emailAddress}</p>
          <h5>Address</h5>
          <p>{address}</p>
        </div>
      </div>
    </aside>
  );
}

export default Profile;
