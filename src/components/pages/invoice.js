import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";

function Invoice() {
  const navigate = useNavigate();
  const [listinvoice, setListInvoice] = useState([]);
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    const fetchInvoicesAndPatients = async () => {
      try {
        // Fetch the results
        const resultsResponse = await api.get(url.RESULTS.BOOKINGSUCCESS);
        const results = resultsResponse.data;

        // Fetch the patients
        const patientsResponse = await api.get(url.PATIENT.REGISTER);
        const patients = patientsResponse.data;

        // Filter results to check if result.booking.patientId matches patient.id
        const filteredResults = results.filter(result => {
          const booking = result.booking;
          return booking && patients.some(patient => patient.id === booking.patientId);
        });

        setListInvoice(filteredResults);
        setPatients(patients);
      } catch (error) {
        console.error("Error fetching invoices and patients:", error);
      }
    };

    fetchInvoicesAndPatients();
  }, []);

  const handleClick = (invoiceId) => {
    navigate(`/view_invoice/${invoiceId}`)
    window.location.reload()
  };
  return (
    <div className="content">
      <div className="container" style={{ textAlign: "justify" }}>
        <div className="row">
          <div className="card card-table">
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-hover table-center mb-0">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Request Test</th>
                      <th>Expense</th>
                      <th>Diagnose End</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listinvoice.length > 0 ? (
                      listinvoice.map((invoice, index) => (
                        <tr key={invoice.id}>
                          <td style={{ width: '10%' }}>{index + 1}</td>
                          <td style={{ width: '20%' }}>{invoice.requestTest}</td>
                          <td style={{ width: '10%' }}>{invoice.expense}</td>
                          <td style={{ width: '50%' }}>{invoice.diagnoseEnd}</td>
                          <td style={{ width: '10%' }}>
                            <div className="table-action">
                              <button className="btn btn-primary" onClick={() => handleClick(invoice.id)}>
                                <i className="far fa-eye"></i> View
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="5" style={{ textAlign: 'center' }}>No invoices found</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoice;
