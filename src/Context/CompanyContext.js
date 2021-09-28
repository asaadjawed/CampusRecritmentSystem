import React, { useState, createContext } from "react";

import {
  getAuth,
  set,
  getDatabase,
  child,
  get,
  ref,
  remove,
} from "../firebase";
import Swal from "sweetalert2";

const CompanyContext = createContext();

const CompanyProvider = ({ children }) => {
  ////View Profile Data of Candidate
  const [companiesData, setCompanies] = useState([]);

  const dbcompany = ref(getDatabase());

  const ViewProfileData = async () => {
    const arr = [];
    try {
      const snapshot = await get(child(dbcompany, "StudentData/"));
      if (snapshot.exists()) {
        console.log(snapshot.val(), "snapshot");
        const data = snapshot.val();
        for (let key in data) {
          arr.push({
            EPNO: data[key].EPNO,
            FirstName: data[key].FirstName,
            LastName: data[key].LastName,
            Email: data[key].Email,
            Address: data[key].Address,
            Education: data[key].Education,
            UniversityName: data[key].UniversityName,
            CGPA: data[key].CGPA,
            Skills: data[key].Skills,
            UniqueKey: data[key].UniqueKey,
          });
        }
        setCompanies(arr);
      }
    } catch (error) {
      throw error;
    }
  };

  ///Delete a key
  const DeleteKey = (key) => {
    console.log(key, "use");
    // debugger
    remove(child(dbcompany, `StudentData/${key}`))
    .then(()=>{
        Swal.fire({
            icon: "info",
            text:"Deleted"
        })
    })


  };

  const handlekey = (JobType, Skills) => {
    return JobType + "-" + Skills;
  };

  ///View Applied Candidate of Student
  const [AppliedCandidatestate, setAppliedCandidatestate] = useState([]);

  const dbAppliedCandidate = ref(getDatabase());

  const AppliedCandidate = async () => {
    let AppliedCandidateArray = [];
    try {
      const snapshot = await get(child(dbAppliedCandidate, "AppliedStudents/"));
      if (snapshot.exists()) {
        console.log(snapshot.val(), "AppliedStudentsValue");
        const AppliedCandidateData = snapshot.val();
        for (let key in AppliedCandidateData) {
          AppliedCandidateArray.push({
            Name: AppliedCandidateData[key].Name,
            Email: AppliedCandidateData[key].Email,
            CGPA: AppliedCandidateData[key].CGPA,
            Skills: AppliedCandidateData[key].Skills,
            Availability: AppliedCandidateData[key].Availability,
            AppliedKey: AppliedCandidateData[key].AppliedKey,
          });
          setAppliedCandidatestate(AppliedCandidateArray);
        }
      }
    } catch (error) {
      throw error;
    }
  };

  ///////////////////////////////////
  const dbJob = getDatabase();

  const JobsSetData = (StudentApplication) => {
    console.log(StudentApplication);

    const JobUniqueKey = handlekey(
      StudentApplication.JobType,
      StudentApplication.Skills
    );

    if (
      set(ref(dbJob, "Jobs/" + JobUniqueKey), {
        ...StudentApplication,
        JobUniqueKey: JobUniqueKey,
      })
    );

    {
      Swal.fire({
        icon: "success",
        title: "Job sent to Candidate",
        text: "Plz Wait for Candidate Response",
      });
    }
  };

  return (
    <CompanyContext.Provider
      value={{
        ViewProfileData: ViewProfileData,
        JobsSetData: JobsSetData,
        companiesData: companiesData,
        DeleteKey: DeleteKey,
        AppliedCandidatestate: AppliedCandidatestate,
        AppliedCandidate: AppliedCandidate,
      }}
    >
      {children}
    </CompanyContext.Provider>
  );
};

export { CompanyProvider, CompanyContext };
