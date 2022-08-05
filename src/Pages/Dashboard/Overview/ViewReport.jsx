import React from "react";
import BoxViewReport from "../../../Components/BoxViewReport";

function ViewReport(props) {
  const boxData = [
    {
      title: "Total Time Studied(hours)",
      quantity: 300,
    },
    {
      title: "Time Studied in month(hours)",
      quantity: 400,
    },
    {
      title: "lessons completed",
      quantity: 100,
    },
  ];

  return (
    <div className="view-report row">
      {boxData.map((box) => (
        <BoxViewReport data={box} />
      ))}
    </div>
  );
}

export default ViewReport;
