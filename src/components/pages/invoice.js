import React, { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";

function Invoice() {
  const [listinvoice, setListinvoice] = useState([]);

    useEffect(() => {
        const loadListinvoice = async () => {
            try {
                const rs = await api.get(url.INVOICE.LIST);
                setListinvoice(rs.data);
            } catch (error) {
                console.error("Error loading list invoice:", error);
            }
        };
        loadListinvoice();
    }, []);
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
                  {listinvoice.map((invoice) => (
                    <tr key={invoice.id}>
                      <td style={{ width: '10%' }}>{invoice.id}</td>
                      <td style={{ width: '20%' }}>{invoice.requestTest}</td>
                      <td style={{ width: '10%' }}>{invoice.expense}</td>
                      <td style={{ width: '50%' }}>{invoice.diagnoseEnd}</td>
                      <td style={{ width: '10%' }}>
                        <div className="table-action">
                          <a href="/" className="btn btn-primary"><i className="far fa-eye"></i> View</a>
                        </div>
                      </td>
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
