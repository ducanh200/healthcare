import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";

function Invoice() {
  const navigate = useNavigate();
  const [listinvoice, setListInvoice] = useState([]);
  const [patients, setPatients] = useState([]);
  const [shifts, setShifts] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [accessToken] = useState(localStorage.getItem("accessToken"));

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the results
        const resultsResponse = await api.get(url.RESULTS.BOOKINGSUCCESS);
        const results = resultsResponse.data;

        // Fetch the patients
        const patientsResponse = await api.get(url.PATIENT.PROFILE, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });
        const patients = patientsResponse.data;

        // Fetch the shifts
        const shiftsResponse = await api.get(url.SHIFT.LIST);
        const shifts = shiftsResponse.data;

        // Fetch the departments
        const departmentsResponse = await api.get(url.DEPARTMENT.LIST);
        const departments = departmentsResponse.data;

        // Fetch the bookings
        const bookingsResponse = await api.get(url.BOOKING.LIST);
        const bookings = bookingsResponse.data;

        // Filter bookings by patient ID
        const filteredBookings = bookings.filter(booking =>
          booking.patient.id === patients.id
        );

        // Filter results to check if result.booking.patientId matches any patient.id
        const filteredResults = results.filter(result =>
          result.booking.patientId === patients.id
        );

        // Map shifts by id for quick lookup
        const shiftsMap = shifts.reduce((map, shift) => {
          map[shift.id] = shift.time;
          return map;
        }, {});

        // Map departments by id for quick lookup
        const departmentsMap = departments.reduce((map, department) => {
          map[department.id] = department.name;
          return map;
        }, {});

        // Include shift time and department name in filtered results
        const enrichedResults = filteredResults.map(result => ({
          ...result,
          shiftTime: shiftsMap[result.booking.shiftId] || 'Unknown',
          departmentName: departmentsMap[result.booking.departmentId] || 'Unknown'
        }));

        setListInvoice(enrichedResults);
        setPatients(patients);
        setShifts(shifts);
        setDepartments(departments);
        setBookings(filteredBookings);
      } catch (error) {
        console.error("Error fetching invoices, patients, shifts, and departments:", error);
      }
    };

    fetchData();
  }, [accessToken]);

  const handleBookingClick = (id) => {
    navigate(`/booking-success/${id}`);
  };

  const handleClick = (id) => {
    navigate(`/view_invoice/${id}`);
  };

  // Combine and sort invoices and bookings
  const combinedList = [
    ...listinvoice.map(item => ({ ...item, type: 'invoice' })),
    ...bookings.filter(booking => booking.status !== 4).map(item => ({ ...item, type: 'booking' }))
  ].sort((a, b) => b.id - a.id);

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
                      <th>Booking Date</th>
                      <th>Expense</th>
                      <th>Diagnose End</th>
                      <th>Shift Time</th>
                      <th>Department</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {combinedList.length > 0 ? (
                      combinedList.map((item, index) => (
                        <tr key={item.id}>
                          <td style={{ width: '10%' }}>{index + 1}</td>
                          <td style={{ width: '20%' }}>{item.date || item.booking.date}</td>
                          <td style={{ width: '10%' }}>${item.expense || '-'}</td>
                          <td style={{ width: '30%' }}><p  style={{width:'500px',textOverflow:'ellipsis',overflow:"hidden",whiteSpace:"nowrap"}}>{item.diagnoseEnd || '-'}</p></td>
                          <td style={{ width: '20%' }}>{item.shiftTime || shifts.find(shift => shift.id === item.shiftId)?.time || 'Unknown'}</td>
                          <td style={{ width: '20%' }}>{item.departmentName || departments.find(department => department.id === item.departmentId)?.name || 'Unknown'}</td>
                          <td style={{ width: '10%' }}>
                            <div className="table-action">
                              <button
                                className="btn btn-primary"
                                onClick={() => item.type === 'invoice' ? handleClick(item.id) : handleBookingClick(item.id)}
                              >
                                <i className="far fa-eye"></i> {item.type === 'invoice' ? 'View Result' : 'View Booking'}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" style={{ textAlign: 'center' }}>No records found</td>
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
