import React from "react";
import "./EducationDetailsCard.css";
function EducationDetailsCard({
  data: { Year, Institution, Qualification, Marks },
}) {
  return (
    <tr className="Edu-details-row">
      <td>
        <h2>{Year}</h2>
      </td>
      <td>
        <h2>{Institution}</h2>
      </td>
      <td>
        <h2>{Qualification}</h2>
      </td>
      <td>
        <h2>{Marks}</h2>
      </td>
    </tr>
  );
}

export default EducationDetailsCard;
