import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";

function View_invoice() {
    const { id } = useParams();
    const [listinvoice, setListinvoice] = useState([]);
    const [listdepartment, setDepartment] = useState({});
    const [listdoctor, setDoctor] = useState({});
    const [listtest, setTest] = useState({});
    const [listdevice, setDevice] = useState({});

    useEffect(() => {
        const loadListinvoice = async () => {
            try {
                const rs = await api.get(`${url.RESULTS.GETBYID}/${id}`);
                setListinvoice(rs.data);
            } catch (error) {
                console.error("Error loading infomation invoice:", error);
            }
        };
        loadListinvoice();
    }, [id]);

    const doctor = listinvoice?.doctor || {};

    const departmentId = listinvoice?.booking?.departmentId

    useEffect(() => {
        const loadDepartment = async () => {
            try {
                const rs = await api.get(url.DEPARTMENT.GETBYID + departmentId);
                setDepartment(rs.data);
            } catch (error) {
                console.error("Error loading infomation department:", error);
            }
        };
        loadDepartment();
    }, [departmentId]);

    const doctorId = listinvoice?.doctorId

    useEffect(() => {
        const loadDoctor = async () => {
            try {
                const rs = await api.get(url.DOCTOR.GETBYID + doctorId);
                setDoctor(rs.data);
            } catch (error) {
                console.error("Error loading infomation doctor:", error);
            }
        };
        loadDoctor();
    }, [doctorId]);

    useEffect(() => {
        const loadTest = async () => {
            try {
                const rs = await api.get(url.TEST.LIST);
                const filteredTests = rs.data.filter(test => test.resultId == id);
                setTest(filteredTests);
            } catch (error) {
                console.error("Error loading list test:", error);
            }
        };
        loadTest();
    }, [id]);

    return (
        <div class="content">
            <div class="container" style={{ textAlign: "justify" }}>
                <div class="row">
                    <div class="col-md-5 col-lg-4 col-xl-3 ">
                        <div class="profile-sidebar">
                            <div class="widget-profile pro-widget-content" style={{ height: "250px" }}>
                                <div className="profile-info-widget">
                                    <a href="#" className="booking-doc-img">
                                        <img src={listdoctor?.thumbnail} alt="Doctor Image" />
                                    </a>
                                    <div className="profile-det-info">
                                        <h3>{listdoctor?.name}</h3>
                                        <h7>{listdepartment?.name}</h7>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-8 col-xl-9">
                        <div class="card">
                            <div class="card-body" style={{ height: "250px" }}>
                                <h4 class="card-title">Infomation Results</h4>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Request Test</th>
                                            <td style={{ width: "70%" }}>{listinvoice?.requestTest}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Expense</th>
                                            <td style={{ width: "70%" }}>{listinvoice?.expense}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Diagnose End</th>
                                            <td style={{ width: "70%" }}>{listinvoice?.diagnoseEnd}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="col-12">
                        <div className="card card-table">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Id</th>
                                                <th>Thumbnail</th>
                                                <th>Device Name</th>
                                                <th>Expense</th>
                                                <th>Time</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listtest.length > 0 ? (
                                                listtest.map((test, index) => (
                                                    <tr key={test.id}>
                                                        <td style={{ width: "10%" }}>{index + 1}</td>
                                                        <td style={{ width: "15%" }}><img style={{ width: "100px", height: "100px" }} src={test.thumbnail} /></td>
                                                        <td style={{ width: "20%" }}>{test.device.name}</td>
                                                        <td style={{ width: "10%" }}>{test.expense}</td>
                                                        <td style={{ width: "15%" }}>{test.testAt}</td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan="6" style={{ textAlign: 'center' }}>No tests found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="submit-section submit-btn-bottom">
                            <a href="/invoice" class="btn btn-primary prime-btn">Back</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default View_invoice;