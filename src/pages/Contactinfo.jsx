import React, { Component, Fragment } from 'react';
import Appfooter from '../components/Appfooter';
import Navheader from '../components/Navheader';
import Appheader from '../components/Appheader';
import Profile from '../components/Profile';
import Darkmode from '../components/Darkmode';
import Subscribe from '../components/Subscribe';
import { Link } from 'react-router-dom';

  function Contactinfo() {
    return (
      <Fragment>
        <div className="main-wrapper">
          <Navheader />

          <div className="main-content">
            <Appheader />

            <div className="middle-sidebar-bottom bg-lightblue theme-dark-bg">
              <div className="middle-sidebar-left">
                <div className="middle-wrap">
                  <div className="card w-100 border-0 bg-white shadow-xs p-0 mb-4">
                    <div className="card-body p-4 w-100 bg-current border-0 d-flex rounded-lg">
                      <Link
                        to="/default-settings"
                        className="d-inline-block mt-2"
                      >
                        <i className="ti-arrow-left font-sm text-white"></i>
                      </Link>
                      <h4 className="font-xs text-white fw-600 ml-4 mb-0 mt-2">
                        Contact Information
                      </h4>
                    </div>
                    <div className="card-body p-lg-5 p-4 w-100 border-0 mb-0">
                      <form action="#">
                        <div className="row">
                          <div className="col-lg-6 mb-3">
                            <div className="form-group">
                              <label className="mont-font fw-600 font-xsss">
                                Country
                              </label>
                              <input
                                type="text"
                                name="comment-name"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6 mb-3">
                            <div className="form-group">
                              <label className="mont-font fw-600 font-xsss">
                                City
                              </label>
                              <input
                                type="text"
                                name="comment-name"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-lg-6 mb-3">
                            <div className="form-group">
                              <label className="mont-font fw-600 font-xsss">
                                Address
                              </label>
                              <input
                                type="text"
                                name="comment-name"
                                className="form-control"
                              />
                            </div>
                          </div>

                          <div className="col-lg-6 mb-3">
                            <div className="form-group">
                              <label className="mont-font fw-600 font-xsss">
                                Pincode
                              </label>
                              <input
                                type="text"
                                name="comment-name"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-12 mb-0 mt-2 pl-0">
                          <Link
                            to="#"
                            className="bg-current text-center text-white font-xsss fw-600 p-3 w175 rounded-lg d-inline-block"
                          >
                            Save
                          </Link>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="middle-sidebar-right scroll-bar">
                <div className="middle-sidebar-right-content">
                  <Profile />
                  <Darkmode />
                  <Subscribe />
                </div>
              </div>
            </div>
          </div>

          <Appfooter />
        </div>
      </Fragment>
    );
  }


export default Contactinfo;
