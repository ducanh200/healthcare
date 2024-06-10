import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Profile_Patient() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        if (token) {
          const response = await api.get(url.PATIENT.PROFILE, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setProfile(response.data);
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    };
    loadProfile();
  }, []);

  const [editName, setEditName] = useState("");
  const [editGender, setEditGender] = useState("");
  const [editBirthday, setEditBirthday] = useState("");
  const [editPhonenumber, setEditPhoneNumber] = useState("");
  const [editAddress, setEditAddress] = useState("");
  const [editCity, setEditCity] = useState("");

  const editPatient = async (editName, editGender, editBirthday, editPhonenumber, editAddress, editCity) => {
    try {
      const requestData = {
        name: editName,
        gender: editGender,
        birthday: editBirthday,
        phonenumber: editPhonenumber,
        address: editAddress,
        city: editCity
      };

      const response = await api.put(url.PATIENT.EDIT + `${profile.id}`, requestData);

      return response.data;
    } catch (error) {
      console.error("Error updating patient:", error);
      throw error;
    }
  };

  const handleEditPatient = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    try {
      let updatedProfile = await editPatient(editName, editGender, editBirthday, editPhonenumber, editAddress, editCity);
      setProfile(updatedProfile); // Update profile state with the new data
      setIsEditing(false); // Exit editing mode
      toast.success('Profile updated successfully!');
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error('An error occurred while updating the profile.');
    }
  };

  useEffect(() => {
    setEditName(profile.name || '');
    setEditGender(profile.gender || '');
    setEditBirthday(profile.birthday || '');
    setEditPhoneNumber(profile.phonenumber || '');
    setEditAddress(profile.address || '');
    setEditCity(profile.city || '');
  }, [profile]);
  const formatDate = (dateString) => {
    if (!dateString) return 'loading...';
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN'); 
  };
  return (
    <div className="content">
      <div className="container" style={{ textAlign: "justify" }}>
        <div className="row">
          <div className="col-md-5 col-lg-4 col-xl-3">
            <div className="profile-sidebar">
              <div className="widget-profile pro-widget-content">
                <div className="profile-info-widget">
                  <a className="booking-doc-img">
                    <img src="https://tse1.mm.bing.net/th?id=OIP.xyVi_Y3F3YwEIKzQm_j_jQHaHa&pid=Api&P=0&h=180" alt="User Image" />
                  </a>
                  <div className="profile-det-info">
                    <h3>{profile.name || 'Loading...'}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-7 col-lg-8 col-xl-9">
            <div className="card">
              <div className="card-body">
                {!isEditing ? (
                  <div>
                    <table className="table">
                      <tbody>
                        <tr>
                          <th scope="row" style={{ width: "30%" }}>Name</th>
                          <td style={{ width: "70%" }}>{profile.name || 'Loading...'}</td>
                        </tr>
                        <tr>
                          <th scope="row" style={{ width: "30%" }}>Email</th>
                          <td style={{ width: "70%" }}>{profile.email || 'Loading...'}</td>
                        </tr>
                        <tr>
                          <th scope="row" style={{ width: "30%" }}>Gender</th>
                          <td style={{ width: "70%" }}>{profile.gender || 'Loading...'}</td>
                        </tr>
                        <tr>
                          <th scope="row" style={{ width: "30%" }}>Date of Birth</th>
                          <td style={{ width: "70%" }}>{formatDate(profile.birthday) || 'Loading...'}</td>
                        </tr>
                        <tr>
                          <th scope="row" style={{ width: "30%" }}>Phone Number</th>
                          <td style={{ width: "70%" }}>{profile.phonenumber || 'Loading...'}</td>
                        </tr>
                        <tr>
                          <th scope="row" style={{ width: "30%" }}>Address</th>
                          <td style={{ width: "70%" }}>{profile.address || 'Loading...'}</td>
                        </tr>
                        <tr>
                          <th scope="row" style={{ width: "30%" }}>City</th>
                          <td style={{ width: "70%" }}>{profile.city || 'Loading...'}</td>
                        </tr>
                      </tbody>
                    </table>
                    <button className="btn btn-primary" onClick={() => setIsEditing(true)}>Edit Information</button>
                  </div>
                ) : (
                  <form onSubmit={handleEditPatient}>
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="mb-3">
                          <label className="mb-2">Name</label>
                          <input type="text" className="form-control" value={editName} onChange={(event) => setEditName(event.target.value)} />
                        </div>
                      </div>

                      <div className="col-sm-6">
                        <div className="mb-3">
                          <label className="mb-2">Phone Number</label>
                          <input type="number" className="form-control" value={editPhonenumber} onChange={(event) => setEditPhoneNumber(event.target.value)} />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb-3">
                          <label className="mb-2">Gender</label>
                          <input type="text" className="form-control" value={editGender} onChange={(event) => setEditGender(event.target.value)} />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb-3">
                          <label className="mb-2">Date of Birth</label>
                          <input type="date" className="form-control" value={editBirthday} onChange={(event) => setEditBirthday(event.target.value)} />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb-3">
                          <label className="mb-2">Address</label>
                          <input type="text" className="form-control" value={editAddress} onChange={(event) => setEditAddress(event.target.value)} />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="mb-3">
                          <label className="mb-2">City</label>
                          <input type="text" className="form-control" value={editCity} onChange={(event) => setEditCity(event.target.value)} />
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Save Changes</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile_Patient;
