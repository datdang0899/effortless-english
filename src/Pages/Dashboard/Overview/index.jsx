import React from "react";
import OverviewForm from "./OverviewForm";
import TeamMembers from "./TeamMembers";
import ViewReport from "./ViewReport";

function Overview() {
  return (
    <div className="overview-section">
      <OverviewForm />
      <ViewReport />
      <div className="overview-info">
        <div className="col-6 col-sm-12 overview-info_table overflow-auto">
          <table className="table ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">listen</th>
                <th scope="col">anwser</th>
                <th scope="col">lesson</th>
                <th scope="col">new word</th>
                <th scope="col">new question</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Monday</th>
                <td>20 minutes</td>
                <td>40 questions</td>
                <td>12 lessons</td>
                <td>32 words</td>
                <td>48 questions</td>
              </tr>
              <tr>
                <th scope="row">Tuesday</th>
                <td>20 minutes</td>
                <td>40 questions</td>
                <td>12 lessons</td>
                <td>32 words</td>
                <td>48 questions</td>
              </tr>
              <tr>
                <th scope="row">Wednesday</th>
                <td>20 minutes</td>
                <td>40 questions</td>
                <td>12 lessons</td>
                <td>32 words</td>
                <td>48 questions</td>
              </tr>
              <tr>
                <th scope="row">Thursday</th>
                <td>20 minutes</td>
                <td>40 questions</td>
                <td>12 lessons</td>
                <td>32 words</td>
                <td>48 questions</td>
              </tr>
              <tr>
                <th scope="row">Friday</th>
                <td>20 minutes</td>
                <td>40 questions</td>
                <td>12 lessons</td>
                <td>32 words</td>
                <td>48 questions</td>
              </tr>
              <tr>
                <th scope="row">Saturday</th>
                <td>20 minutes</td>
                <td>40 questions</td>
                <td>12 lessons</td>
                <td>32 words</td>
                <td>48 questions</td>
              </tr>
              <tr>
                <th scope="row">Sunday</th>
                <td>20 minutes</td>
                <td>40 questions</td>
                <td>12 lessons</td>
                <td>32 words</td>
                <td>48 questions</td>
              </tr>
            </tbody>
          </table>
        </div>

        <TeamMembers />
      </div>
    </div>
  );
}

export default Overview;
