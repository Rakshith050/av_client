import React from "react";
import {
  Breadcrumb,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import Appheader from "../../components/schoolComponents/Appheader";
import Appfooter from "../../components/schoolComponents/Appfooter";
import Topbar from "../../components/subAdminComponents/Topbar";

function AddStudent() {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const addStudent = (e) => {
    e.preventDefault();

    // Access the form data
    const formData = new FormData(e.target);

    // Perform your logic for sending the student data
    fetch(baseUrl + "/sub_admin/", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle success
        console.log("Student added successfully", data);
      })
      .catch((error) => {
        console.error("Error adding student:", error);
      });
  };

  return (
    <div>
      <div className="main-wrapper">
        <div className="main-content menu-active">
          <Appheader />
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left">
              <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                <div className="card-body p-4 w-100 border-0 d-flex rounded-lg justify-content-between">
                  <h2 className="fw-400 font-lg d-block">
                    Add <b> Student</b>
                  </h2>
                  <Breadcrumb style={{ padding: "0.25rem 1rem" }}>
                    <Breadcrumb.Item href="#">
                      <i className="fa fa-home"></i>&nbsp;Home&nbsp;
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="#">
                      Course&nbsp;<i className="fa fa-angle-right"></i>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active className="fw-500 text-black">
                      &nbsp;Add Student
                    </Breadcrumb.Item>
                  </Breadcrumb>
                </div>
                <div></div>
                <div className="card-body p-lg-5 p-4 w-100 border-0">
                  <form
                    onSubmit={addStudent}
                    action="/sub_admin/add_student"
                    method="post"
                    encType="multipart/form-data"
                  >
                    <div className="row mb-6">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            Student Name
                          </label>
                          <br />
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            required
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            School Name
                          </label>
                          <br />
                          <select name="school" id="" className="form-control">
                            <option value="">-Select-</option>
                            {/* Forloop */}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            className
                          </label>
                          <br />
                          <select
                            name="className"
                            id=""
                            className="form-control"
                          >
                            <option value="">-Select-</option>
                            {/* Forloop */}
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label className="mont-font fw-600 font-xsss">
                            Section
                          </label>
                          <br />
                          <select name="section" id="" className="form-control">
                            <option value="">-Select-</option>
                            <option value="1">A</option>
                            <option value="2">B</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        &nbsp;&nbsp;&nbsp;
                        <button
                          type="submit"
                          className="btn bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block border-0"
                          style={{
                            marginTop: "2rem !important",
                            float: "right",
                          }}
                        >
                          save
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudent;
