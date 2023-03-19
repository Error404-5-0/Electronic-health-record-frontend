import React from "react";
import Medreccard from "./Medreccard";

const MedRecord = ({ medicalRecords }) => {
  return (
    <>
      {medicalRecords.map(({ title, date, symptoms }, index) => (
        <Medreccard
          key={`patient_medical_record_${index}`}
          title={title}
          date={new Date(date).toDateString()}
          conclusion={symptoms}
          onClick={() => {}}
        />
      ))}
    </>
  );
};

export default MedRecord;
