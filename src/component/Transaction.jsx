// import React, { useEffect, useState } from 'react';
// import './Transaction.css';
// import { useNavigate } from 'react-router-dom'; 
// import axios from 'axios';

// function Transaction() {
//   const [transactions, setTransactions] = useState([]);
  
//   const [selectedPatient, setSelectedPatient] = useState([]);
//   const [selectedDoctor, setSelectedDoctor] = useState([]);
//   const [selectedDisease, setSelectedDisease] = useState([]);
//   const [selectedBill, setSelectedBill] = useState([]);
//   const [selectedPrescription, setSelectedPrescription] = useState([]);
  
//   const [isSaved, setIsSaved] = useState(false);

//   const [patient, setPatient] = useState([]);
//   const [doctor, setDoctor] = useState([]);
//   const [disease, setDisease] = useState([]);
//   const [bill, setBill] = useState([]);
//   const [prescriptions, setPrescriptions] = useState([]);

//   const navigate = useNavigate(); 

//   async function fetchPatientsData() {
//     let res = await fetch("VITE_BACKEND_URL/api/patients");
//     let arr1 = await res.json();
//     setPatient(arr1);
//   }

//   async function fetchDoctorsData() {
//     let res = await fetch("VITE_BACKEND_URL/api/doctors");
//     let arr2 = await res.json();
//     setDoctor(arr2);
//   }

//   async function fetchDiseaseData() {
//     let res = await fetch("VITE_BACKEND_URL/api/diseases");
//     let arr3 = await res.json();
//     setDisease(arr3);
//   }

//   async function fetchPrescriptionData() {
//     let res = await fetch("VITE_BACKEND_URL/api/prescriptions");
//     let arr4 = await res.json();
//     setPrescriptions(arr4);
//   }

//   async function fetchBillData() {
//     let res = await fetch("VITE_BACKEND_URL/api/billings");
//     let arr5 = await res.json();
//     setBill(arr5);
//   }

//   useEffect(() => {
//     fetchPatientsData();
//     fetchDoctorsData();
//     fetchDiseaseData();
//     fetchPrescriptionData();
//     fetchBillData();
//   }, []);

//   const handlePatientSelect = (e) => {
//     const pid = e.target.value;
//     patient.forEach((el) => {
//       if (el.patientID == pid) {
//         prescriptionSelection(pid);
//         billSelection(el._id);
//         setSelectedPatient(el);
//       }
//     });
//     setIsSaved(false);
//   };

//   const handleDoctorSelect = (e) => {
//     const Did = e.target.value;
//     doctor.forEach((el) => {
//       if (el.doctorID == Did) {
//         setSelectedDoctor(el);
//       }
//     });
//     setIsSaved(false);
//   };

//   function prescriptionSelection(pid) {
//     prescriptions.forEach((el) => {
//       if (el.PatientID.patientID == pid) {
//         setSelectedPrescription(el);
//       }
//     });
//   }

//   function billSelection(id) {
//     bill.forEach((el) => {
//       if (el.PatientID == id) {
//         setSelectedBill(el);
//       }
//     });
//   }

//   const handleDiseaseSelect = (e) => {
//     const did = e.target.value;
//     disease.forEach((el) => {
//       if (el.DiseaseID == did) {
//         setSelectedDisease(el);
//       }
//     });
//     setIsSaved(false);
//   };

//   const handleClear = () => {
//     setSelectedPatient(null);
//     setSelectedDoctor(null);
//     setSelectedDisease(null);
//     setSelectedBill(null);
//     setSelectedPrescription(null);
//     setIsSaved(false);
//   };

//   function handleSave () {
//     // if (selectedPatient && selectedDoctor) {
//     //   setTransactions([...transactions, {...selectedPatient.patientID, doctorID: selectedDoctor.doctorID, diseaseID:selectedDisease.DiseaseID,
//     //     dosage: selectedPrescription.Dosage,
//     //     medicationDetails: selectedPrescription.MedicationDetails,
//     //     billAmount:selectedBill.BillAmount,
//     //     paymentStatus:selectedBill.PaymentStatus,
//     //     nextVisitData:selectedDisease.NextVisitDate}]);
//     //   setIsSaved(true);
//     //   console.log(transactions)
    
//    if(selectedPatient.patientID == undefined && selectedDoctor.doctorID == undefined ) {
//     alert('Please select a patient and a doctor.');
//   }
//   else{
//     // console.log(transactions)
//     setTransactions([
//         ...transactions, 
//         {
//           patientID: selectedPatient.patientID, 
//           doctorID: selectedDoctor.doctorID,
//           diseaseID: selectedDisease.DiseaseID,
//           dosage: selectedPrescription.Dosage,
//           medicationDetails: selectedPrescription.MedicationDetails,
//           billAmount: selectedBill.BillAmount,
//           paymentStatus: selectedBill.PaymentStatus,
//           nextVisitDate: selectedDisease.NextVisitDate 
//         }
//       ]);
//       console.log(transactions + "after")
//       setIsSaved(true);
//     }
//   };

//   useEffect(() => {
//     if (isSaved) {
//       // Perform an action like saving to a database
//       // console.log(transactions);
//       // Reset isSaved if needed
//       sendData();
//       setIsSaved(false);
//     }
//   }, [isSaved, transactions]);
  

// async function sendData()
// {
//   try{
//     await axios.post("VITE_BACKEND_URL/api/transactions", {transactions});
//   }
//   catch{
//     console.log("unable to post transaction")
//   }
// }

//   const handleBack = () => {
//     navigate('/dashboard');
//   };

//   const currentDate = new Date().toLocaleDateString();
//   return (
//     <div className="transaction-container">
//       <button className="back-button" onClick={handleBack}>Back</button>
//       <h2 className="transaction-header">Clinic Transaction Page</h2>
//       <div className="current-date">{currentDate}</div>
      
//       <div className="transaction-box">
//         <div className="selection">
//           <label htmlFor="patient-select">Select Patient ID: </label>
//           <select id="patient-select" onChange={handlePatientSelect}>
//             <option value="">Select a Patient</option>
//             {patient.map((patient) => (
//               <option key={patient.patientID} value={patient.patientID}>
//                 {patient.patientID}
//               </option>
//             ))}
//           </select>
//         </div>
        
//         <div className="selection">
//           <label htmlFor="doctor-select">Select Doctor ID: </label>
//           <select id="doctor-select" onChange={handleDoctorSelect}>
//             <option value="">Select a Doctor</option>
//             {doctor.map((doctor) => (
//               <option key={doctor.doctorID} value={doctor.doctorID}>
//                 {doctor.doctorID}
//               </option>
//             ))}
//           </select>
//         </div>

//         {selectedDoctor && (
//           <div>
//             <h3>Doctor Details:</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Doctor ID</th>
//                   <th>Doctor Name</th>
//                   <th>Specialization</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{selectedDoctor.doctorID}</td>
//                   <td>{selectedDoctor.doctorName}</td>
//                   <td>{selectedDoctor.specialization}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}

//         {selectedPatient && (
//           <div>
//             <h3>Patient Details:</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Patient ID</th>
//                   <th>Patient Name</th>
//                   <th>Gender</th>
//                   <th>Contact No</th>
//                   <th>
//                     <br />
//                     <div className="selection">
//                       <select id="Disease-select" onChange={handleDiseaseSelect}>
//                         <option value="">Select Disease</option>
//                         {disease.map((disease) => (
//                           <option key={disease.DiseaseID} value={disease.DiseaseID}>
//                             {disease.DiseaseID}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </th>
//                   <th>Disease Name</th>
//                   <th>Date Diagnosed</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{selectedPatient.patientID}</td>
//                   <td>{selectedPatient.patientName}</td>
//                   <td>{selectedPatient.gender}</td>
//                   <td>{selectedPatient.contactInfo}</td>
//                   <td>{selectedDisease.DiseaseID}</td>
//                   <td>{selectedDisease.DiseaseName}</td>
//                   <td>{selectedDisease.DateDiagnosed}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}

//         {selectedPatient && (
//           <div>
//             <h3>Medication & Billing Details:</h3>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Dosage</th>
//                   <th>Medication Details</th>
//                   <th>Bill Amount</th>
//                   <th>Payment Status</th>
//                   <th>Next Visit Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>{selectedPrescription.Dosage}</td>
//                   <td>{selectedPrescription.MedicationDetails}</td>
//                   <td>{selectedBill.BillAmount}</td>
//                   <td>{selectedBill.PaymentStatus}</td>
//                   <td>{selectedDisease.NextVisitDate}</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         )}

//         <button className="save" onClick={handleSave}>Save</button>
//         <button className="clear" onClick={handleClear}>Clear</button>
        
//         {isSaved && <div className="success-message">Details Saved successfully</div>}
//       </div>
//     </div>
//   );
// }

// export default Transaction;

import React, { useEffect, useState } from 'react';
import './Transaction.css';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

function Transaction() {
  const [transactions, setTransactions] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState([]);
  const [selectedDisease, setSelectedDisease] = useState([]);
  const [selectedBill, setSelectedBill] = useState([]);
  const [selectedPrescription, setSelectedPrescription] = useState([]);
  
  const [isSaved, setIsSaved] = useState(false);

  const [patient, setPatient] = useState([]);
  const [doctor, setDoctor] = useState([]);
  const [disease, setDisease] = useState([]);
  const [bill, setBill] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);

  let VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate(); 

  async function fetchPatientsData() {
    let res = await fetch(`${VITE_BACKEND_URL}/api/patients`);
    let arr1 = await res.json();
    setPatient(arr1);
  }

  async function fetchDoctorsData() {
    let res = await fetch(`${VITE_BACKEND_URL}/api/doctors`);
    let arr2 = await res.json();
    setDoctor(arr2);
  }

  async function fetchDiseaseData() {
    let res = await fetch(`${VITE_BACKEND_URL}/api/diseases`);
    let arr3 = await res.json();
    setDisease(arr3);
  }

  async function fetchPrescriptionData() {
    let res = await fetch(`${VITE_BACKEND_URL}/api/prescriptions`);
    let arr4 = await res.json();
    setPrescriptions(arr4);
  }

  async function fetchBillData() {
    let res = await fetch(`${VITE_BACKEND_URL}/api/billings`);
    let arr5 = await res.json();
    setBill(arr5);
  }

  useEffect(() => {
    fetchPatientsData();
    fetchDoctorsData();
    fetchDiseaseData();
    fetchPrescriptionData();
    fetchBillData();
  }, []);

  const handlePatientSelect = (e) => {
    const pid = e.target.value;
    patient.forEach((el) => {
      if (el.patientID == pid) {
        prescriptionSelection(pid);
        billSelection(el._id);
        setSelectedPatient(el);
      }
    });
    setIsSaved(false);
  };

  const handleDoctorSelect = (e) => {
    const Did = e.target.value;
    doctor.forEach((el) => {
      if (el.doctorID == Did) {
        setSelectedDoctor(el);
      }
    });
    setIsSaved(false);
  };

  function prescriptionSelection(pid) {
    prescriptions.forEach((el) => {
      if (el.PatientID.patientID == pid) {
        setSelectedPrescription(el);
        // console.log(selectedPrescription)
      }
    });
  }

  function billSelection(id) {
    bill.forEach((el) => {
      if (el.PatientID == id) {
        setSelectedBill(el);
      }
    });
  }

  const handleDiseaseSelect = (e) => {
    const did = e.target.value;
    disease.forEach((el) => {
      if (el.DiseaseID == did) {
        setSelectedDisease(el);
      }
    });
    setIsSaved(false);
  };

  const handleClear = () => {
    setSelectedPatient(null);
    setSelectedDoctor(null);
    setSelectedDisease(null);
    setSelectedBill(null);
    setSelectedPrescription(null);
    setIsSaved(false);
  };

  // function handleSave () {
    
  //  if((selectedPatient.patientID == undefined && selectedDoctor.doctorID == undefined && selectedDisease.DiseaseID == undefined) ) {
  //   alert('Please select a patient and doctor and disease');
  //   navigate('/transaction')
  // }
  // else{
  //   // console.log(transactions)
  //   setTransactions([
  //       ...transactions, 
  //       {
  //          p_id: selectedPatient._id,
  //          d_id: selectedDoctor._id,
  //          di_id: selectedDisease._id,
  //          dosage: selectedPrescription.Dosage,
  //          medicationDetails: selectedPrescription.MedicationDetails,
  //          billAmount: selectedBill.BillAmount,
  //          paymentStatus: selectedBill.PaymentStatus,
  //          nextVisitDate: selectedDisease.NextVisitDate,
  //       }
  //     ]);
  function handleSave () {
    // if (selectedPatient && selectedDoctor) {
    //   setTransactions([...transactions, {...selectedPatient.patientID, doctorID: selectedDoctor.doctorID, diseaseID:selectedDisease.DiseaseID,
    //     dosage: selectedPrescription.Dosage,
    //     medicationDetails: selectedPrescription.MedicationDetails,
    //     billAmount:selectedBill.BillAmount,
    //     paymentStatus:selectedBill.PaymentStatus,
    //     nextVisitData:selectedDisease.NextVisitDate}]);
    //   setIsSaved(true);
    //   console.log(transactions)
    
   if((selectedPatient.patientID == undefined && selectedDoctor.doctorID == undefined) ) {
    alert('Please select a patient and a doctor.');
  }
  else{
    // console.log(transactions)
    setTransactions([
        ...transactions, 
        {
          patientID: selectedPatient.patientID, 
          doctorID: selectedDoctor.doctorID,
          diseaseID: selectedDisease.DiseaseID,
          dosage: selectedPrescription.Dosage,
          medicationDetails: selectedPrescription.MedicationDetails,
          billAmount: selectedBill.BillAmount,
          paymentStatus: selectedBill.PaymentStatus,
          nextVisitDate: selectedDisease.NextVisitDate
        }
      ]);
      setIsSaved(true);
    }
  };
  
  useEffect(() => {
    if (isSaved) {
      console.log("frontend")
      console.log(transactions);
      sendData();
      setIsSaved(false);
    }
  });
  
  useEffect(() => {
    if (isSaved) {
      // Perform an action like saving to a database
      console.log(transactions);
      // Reset isSaved if needed
      sendData();
      setIsSaved(false);
    }
  }, [isSaved, transactions]);
  

async function sendData()
{
  try{
    await axios.post(`${VITE_BACKEND_URL}/api/transactions`, transactions[0]);
  }
  catch(e){
    console.log(e)
  }
}
  

async function sendData()
{
  try{
    await axios.post(`${VITE_BACKEND_URL}/api/transactions`, {transactions});
  }
  catch(e){
    console.log(e)
  }
}

  const handleBack = () => {
    navigate('/dashboard');
  };

  const currentDate = new Date().toLocaleDateString();
  return (
    <div className="transaction-container">
      <button className="back-button" onClick={handleBack}>Back</button>
      <h2 className="transaction-header">Clinic Transaction Page</h2>
      <div className="current-date">{currentDate}</div>
      
      <div className="transaction-box">
        <div className="selection">
          <label htmlFor="patient-select">Select Patient ID: </label>
          <select id="patient-select" onChange={handlePatientSelect}>
            <option value="">Select a Patient</option>
            {patient.map((patient) => (
              <option key={patient.patientID} value={patient.patientID}>
                {patient.patientID}
              </option>
            ))}
          </select>
        </div>
        
        <div className="selection">
          <label htmlFor="doctor-select">Select Doctor ID: </label>
          <select id="doctor-select" onChange={handleDoctorSelect}>
            <option value="">Select a Doctor</option>
            {doctor.map((doctor) => (
              <option key={doctor.doctorID} value={doctor.doctorID}>
                {doctor.doctorID}
              </option>
            ))}
          </select>
        </div>

        {selectedDoctor && (
          <div>
            <h3>Doctor Details:</h3>
            <table>
              <thead>
                <tr>
                  <th>Doctor ID</th>
                  <th>Doctor Name</th>
                  <th>Specialization</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedDoctor.doctorID}</td>
                  <td>{selectedDoctor.doctorName}</td>
                  <td>{selectedDoctor.specialization}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {selectedPatient && (
          <div>
            <h3>Patient Details:</h3>
            <table>
              <thead>
                <tr>
                  <th>Patient ID</th>
                  <th>Patient Name</th>
                  <th>Gender</th>
                  <th>Contact No</th>
                  <th>
                    <br />
                    <div className="selection">
                      <select id="Disease-select" onChange={handleDiseaseSelect}>
                        <option value="">Select Disease</option>
                        {disease.map((disease) => (
                          <option key={disease.DiseaseID} value={disease.DiseaseID}>
                            {disease.DiseaseID}
                          </option>
                        ))}
                      </select>
                    </div>
                  </th>
                  <th>Disease Name</th>
                  <th>Date Diagnosed</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedPatient.patientID}</td>
                  <td>{selectedPatient.patientName}</td>
                  <td>{selectedPatient.gender}</td>
                  <td>{selectedPatient.contactInfo}</td>
                  <td>{selectedDisease.DiseaseID}</td>
                  <td>{selectedDisease.DiseaseName}</td>
                  <td>{selectedDisease.DateDiagnosed}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {selectedPatient && (
          <div>
            <h3>Medication & Billing Details:</h3>
            <table>
              <thead>
                <tr>
                  <th>Dosage</th>
                  <th>Medication Details</th>
                  <th>Bill Amount</th>
                  <th>Payment Status</th>
                  <th>Next Visit Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{selectedPrescription.Dosage}</td>
                  <td>{selectedPrescription.MedicationDetails}</td>
                  <td>{selectedBill.BillAmount}</td>
                  <td>{selectedBill.PaymentStatus}</td>
                  <td>{selectedDisease.NextVisitDate}</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <button className="save" onClick={handleSave}>Save</button>
        <button className="clear" onClick={handleClear}>Clear</button>
        
        {isSaved && <div className="success-message">Details Saved successfully</div>}
      </div>
    </div>
  );
}


export default Transaction;