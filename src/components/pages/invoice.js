import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";

function Invoice() {
  const navigate = useNavigate();
  const [listinvoice, setListinvoice] = useState([]);
  const [bookingId, setBookingId] = useState(null);
  const [booking, setBooking] = useState(null);


  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // Xác định thông tin người dùng
    const token = localStorage.getItem('accessToken');
    if (token) {
      api.get(url.PATIENT.PROFILE, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        const userInfo = response.data; // Lấy thông tin người dùng từ response
        if (userInfo && userInfo.id) { // Đảm bảo userInfo chứa thông tin id của người dùng
          const patientId = userInfo.id; // Lấy patientId của người dùng từ userInfo
  
          // Lấy danh sách kết quả
          api.get(url.RESULTS.BOOKINGSUCCESS)
            .then(response => {
              const results = response.data;
  
              // Lọc danh sách kết quả theo patientId
              const filteredResults = results.filter(result => result.booking.patientId === patientId);
  
              // Lưu danh sách kết quả đã lọc vào state
              setListinvoice(filteredResults);
            })
            .catch(error => {
              console.error("Error fetching list of results:", error);
            });
        } else {
          console.error("User info is missing or incomplete.");
        }
      })
      .catch(error => {
        console.error("Error fetching user info:", error);
      });
    } else {
      console.error("Access token is missing.");
    }
  }, []);

  useEffect(() => {
    const loadListinvoice = async () => {
      try {
        const rs = await api.get(url.RESULTS.BOOKINGSUCCESS);
        const filteredList = rs.data.filter(result => result.bookingId == bookingId);
      setListinvoice(filteredList);
      } catch (error) {
        console.error("Error loading list invoice:", error);
      }
    };
    loadListinvoice();
  }, [bookingId]);

  useEffect(() => {
    const loadBookingid= async () => {
      try {
        const rs = await api.get(url.RESULTS.GETBOOKINGID);
        setBookingId(rs.data);
      } catch (error) {
        console.error("Error loading list invoice:", error);
      }
    };
    loadBookingid();
  }, []);

  useEffect(() => {
    const loadBooking= async () => {
      try {
        const rs = await api.get(url.BOOKING.GETBYID);
        setBooking(rs.data);
      } catch (error) {
        console.error("Error loading list invoice:", error);
      }
    };
    loadBooking();
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
                      {/* <th>Action</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {listinvoice.map((invoice, index) => (
                      <tr key={invoice.id}>
                        <td style={{ width: '10%' }}>{index + 1}</td>
                        <td style={{ width: '20%' }}>{invoice.requestTest}</td>
                        <td style={{ width: '10%' }}>{invoice.expense}</td>
                        <td style={{ width: '50%' }}>{invoice.diagnoseEnd}</td>
                        {/* <td style={{ width: '10%' }}>
                          <div className="table-action">
                            <button className="btn btn-primary" onClick={() => handleClick(invoice.id)}>
                              <i className="far fa-eye"></i> View
                            </button>
                          </div>
                        </td> */}
                      </tr>
                    ))}
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
