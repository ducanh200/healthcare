import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";

function View_invoice() {
    const { id } = useParams();
    const [listinvoice, setListinvoice] = useState([]);
    const [listshift, setShift] = useState({});
    const [listdepartment, setDepartment] = useState({});
    const [listdoctor, setDoctor] = useState({});
    const [listpatient, setPatient] = useState({});

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
    
    const shiftID = listinvoice?.booking?.shiftId

    useEffect(() => {
        const loadShift = async () => {
            try {
                const rs = await api.get(url.SHIFT.GETBYID+shiftID);
                setShift(rs.data);
            } catch (error) {
                console.error("Error loading infomation shift:", error);
            }
        };
        loadShift();
    }, [shiftID]);

    const departmentId = listinvoice?.booking?.departmentId

    useEffect(() => {
        const loadDepartment = async () => {
            try {
                const rs = await api.get(url.DEPARTMENT.GETBYID+departmentId);
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
                const rs = await api.get(url.DOCTOR.GETBYID+doctorId);
                setDoctor(rs.data);
            } catch (error) {
                console.error("Error loading infomation doctor:", error);
            }
        };
        loadDoctor();
    }, [doctorId]);

    const patientId = listinvoice?.booking?.patientId

    useEffect(() => {
        const loadPatient = async () => {
            try {
                const rs = await api.get(url.PATIENT.GETBYID+patientId);
                setPatient(rs.data);
            } catch (error) {
                console.error("Error loading infomation patient:", error);
            }
        };
        loadPatient();
    }, [patientId]);

    return (
        <div class="content">
            <div class="container" style={{ textAlign: "justify" }}>
                <div class="row">
                    <div class="col-md-5 col-lg-4 col-xl-3 ">
                        <div class="profile-sidebar">
                            <div class="widget-profile pro-widget-content">
                                <div className="profile-info-widget">
                                    <a href="#" className="booking-doc-img">
                                        <img src={listdoctor?.thumbnail} alt="Doctor Image" />
                                    </a>
                                    <div className="profile-det-info">
                                        <h3>{listdoctor?.name}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7 col-lg-8 col-xl-9">
                        <div class="card">
                            <div class="card-body">
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
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Infomation Doctor</h4>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Name</th>
                                            <td style={{ width: "70%" }}>{listdoctor?.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Email</th>
                                            <td style={{ width: "70%" }}>{listdoctor?.email}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Phone</th>
                                            <td style={{ width: "70%" }}>{listdoctor?.phonenumber}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Department</th>
                                            <td style={{ width: "70%" }}>{listdepartment?.name}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Infomation Patient</h4>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Name</th>
                                            <td style={{ width: "70%" }}>{listpatient?.name}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Gender</th>
                                            <td style={{ width: "70%" }}>{listpatient?.gender}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Birthday</th>
                                            <td style={{ width: "70%" }}>{listpatient?.birthday}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Email</th>
                                            <td style={{ width: "70%" }}>{listpatient?.email}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Phone</th>
                                            <td style={{ width: "70%" }}>{listpatient?.phonenumber}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Address</th>
                                            <td style={{ width: "70%" }}>{listpatient?.address}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>City</th>
                                            <td style={{ width: "70%" }}>{listpatient?.city}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Infomation Booking</h4>
                                <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Date</th>
                                            <td style={{ width: "70%" }}>{listinvoice?.booking?.date}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Time</th>
                                            <td style={{ width: "70%" }}>{listshift?.time}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Session</th>   
                                            <td style={{ width: "70%" }}>{listshift?.session}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Department</th>
                                            <td style={{ width: "70%" }}>{listdepartment?.name}</td>
                                        </tr>
                                    </tbody>
                                </table>
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