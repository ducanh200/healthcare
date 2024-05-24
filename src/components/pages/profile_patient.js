import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";

function Profile_Patient() {
    const [userInfo, setUserInfo] = useState(null);

    useEffect(() => {
        // Lấy token từ localStorage
        const token = localStorage.getItem('accessToken');

        // Kiểm tra xem token có tồn tại hay không
        if (token) {
            // Gửi yêu cầu đến server để lấy thông tin người dùng
            api.get(url.PATIENT.PROFILE, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then(response => {
                    // Nếu nhận được dữ liệu từ server, cập nhật state userInfo
                    setUserInfo(response.data);
                })
                .catch(error => {
                    console.error('Error fetching user info:', error);
                });
        }
    }, []); // useEffect sẽ chỉ chạy một lần sau khi component được render

    return (
        <div className="content">
            <div className="container" style={{textAlign: "justify"}}>
                <div className="row">
                    <div className="col-md-5 col-lg-4 col-xl-3">
                        <div className="profile-sidebar">
                            <div className="widget-profile pro-widget-content">
                                <div className="profile-info-widget">
                                    <a className="booking-doc-img">
                                        <img src="https://tse1.mm.bing.net/th?id=OIP.xyVi_Y3F3YwEIKzQm_j_jQHaHa&pid=Api&P=0&h=180" alt="User Image" />
                                    </a>
                                    <div className="profile-det-info">
                                        <h3>{userInfo ? userInfo.name : 'Loading...'}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-7 col-lg-8 col-xl-9">
                        <div className="card">
                            <div className="card-body">
                               <table class="table">
                                    <tbody>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Name</th>
                                            <td style={{ width: "70%" }}>{userInfo ? userInfo.name : 'Loading...'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Email</th>
                                            <td style={{ width: "70%" }}>{userInfo ? userInfo.email : 'Loading...'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Gender</th>
                                            <td style={{ width: "70%" }}>{userInfo ? userInfo.gender : 'Loading...'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Date of birth</th>
                                            <td style={{ width: "70%" }}>{userInfo ? userInfo.birthday : 'Loading...'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Phone Number</th>
                                            <td style={{ width: "70%" }}>{userInfo ? userInfo.phonenumber : 'Loading...'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>Address</th>
                                            <td style={{ width: "70%" }}>{userInfo ? userInfo.address : 'Loading...'}</td>
                                        </tr>
                                        <tr>
                                            <th scope="row" style={{ width: "30%" }}>City</th>
                                            <td style={{ width: "70%" }}>{userInfo ? userInfo.city : 'Loading...'}</td>
                                        </tr>
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

export default Profile_Patient;
