import React from "react";
import Medreccard from "./Medreccard";

const MedRecord = ({ medicalRecords }) => {
  return (
    <>
      {medicalRecords.map((record, index) => (
        <Medreccard key={`patient_medical_record_${index}`} {...record} />
      ))}
    </>
  );
};

export default MedRecord;
