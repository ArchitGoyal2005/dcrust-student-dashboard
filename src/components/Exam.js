function Exam() {
  return (
    <main>
      <div className="exam timetable">
        <h2>Exam Available</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Subject</th>
              <th>Room no.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>21 May 2024</td>
              <td>09-12 AM</td>
              <td>DAA</td>
              <td>CVR-214</td>
            </tr>
            <tr>
              <td>24 May 2024</td>
              <td>09-12 AM</td>
              <td>WIT</td>
              <td>CVR-215</td>
            </tr>
            <tr>
              <td>27 May 2024</td>
              <td>09-12 AM</td>
              <td>Economics</td>
              <td>CVR-213</td>
            </tr>
            <tr>
              <td>30 May 2024</td>
              <td>09-12 AM</td>
              <td>OB</td>
              <td>CVR-211</td>
            </tr>
            <tr>
              <td>4 June 2024</td>
              <td>09-12 AM</td>
              <td>Dis. Maths</td>
              <td>JCB-214</td>
            </tr>
            <tr>
              <td>9 June 2024</td>
              <td>09-12 AM</td>
              <td>OS</td>
              <td>CVR-211</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Exam;
