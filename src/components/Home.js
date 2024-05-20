import Announcements from "../pages/home/Announcements";
import Attendance from "../pages/home/Attendance";
import Profile from "../pages/home/Profile";
import TeachersLeave from "../pages/home/TeachersLeave";
import TimeTable from "./TimeTable";

function Home() {
  return (
    <div className="container">
      <Profile />
      <main>
        <Attendance />
        <TimeTable active={false} />
      </main>

      <div className="right">
        <Announcements />
        <TeachersLeave />
      </div>
    </div>
  );
}

export default Home;
