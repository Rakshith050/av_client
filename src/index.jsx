import React, { Component } from "react";
import ReactDOM from "react-dom";

import "./main.scss";

// Common Layout
import Demo from "./demo/Demo";

import Admin from "./pages/Admin";
import Adminemail from "./pages/Adminemail";
import Adminchat from "./pages/Adminchat";
import Adminproductlist from "./pages/Adminproductlist";
import Adminproductgrid from "./pages/Adminproductgrid";
import Adminproductadd from "./pages/Adminproductadd";
import Admincustomer from "./pages/Admincustomer";
import Admincustomerview from "./pages/Admincustomerview";
import Adminorder from "./pages/Adminorder";
import Adminorderview from "./pages/Adminorderview";

import Adminvenderlist from "./pages/Adminvenderlist";
import Adminvenderview from "./pages/Adminvenderview";
import Adminreview from "./pages/Adminreview";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Coming from "./pages/Coming";
import Notfound from "./pages/Notfound";
import Blog from "./pages/Blog";
import BlogSidebar from "./pages/BlogSidebar";
import BlogSingle from "./pages/BlogSingle";
import Contact from "./pages/Contact";
import Contacttwo from "./pages/Contacttwo";
import About from "./pages/About";
import Service from "./pages/Service";
import Price from "./pages/Price";
import Shopone from "./pages/Shopone";
import Shoptwo from "./pages/Shoptwo";
import Shopthree from "./pages/Shopthree";
import Productone from "./pages/Productone";
import Producttwo from "./pages/Producttwo";
import Productthree from "./pages/Productthree";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

import Coursesgridone from "./pages/Coursesgridone";
import Coursesgridtwo from "./pages/Coursesgridtwo";
import Coursesgridthree from "./pages/Coursesgridthree";
import Popupchat from "./pages/Popupchat";

import Userprofile from "./pages/Userprofile";
import Authorprofile from "./pages/Authorprofile";
import Coursedetails from "./pages/Coursedetails";
import Coursedetailstwo from "./pages/Coursedetailstwo";

import Default from "./pages/Default";
import Defaultcategory from "./pages/Defaultcategory";
import Defaultfollower from "./pages/Defaultfollower";
import Defaultsettings from "./pages/Defaultsettings";
import Defaultsearch from "./pages/Defaultsearch";
import Defaultchannel from "./pages/Defaultchannel";
import Defaultlive from "./pages/Defaultlive";
import Defaultcourseone from "./pages/Defaultcourseone";
import Defaultcoursetwo from "./pages/Defaultcoursetwo";
import Defaultuserprofile from "./pages/Defaultuserprofile";
import Defaultauthorprofile from "./pages/Defaultauthorprofile";
import Defaultanalytics from "./pages/Defaultanalytics";

import Accountinfo from "./pages/Accountinfo";
import Contactinfo from "./pages/Contactinfo";
import Social from "./pages/Social";
import Password from "./pages/Password";
import Payment from "./pages/Payment";
import Chat from "./pages/Chat";
import Email from "./pages/Email";
import Emailopen from "./pages/Emailopen";

import Hometwo from "./pages/Hometwo";
import Homethree from "./pages/Homethree";
import Homefive from "./pages/Homefive";
import Homesix from "./pages/Homesix";
import Homefour from "./pages/Homefour";

import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Home from "./pages/student/Home";
import Subjects from "./pages/student/Subjects";
import Qna from "./pages/student/Qna";
import Forums from "./pages/student/Forums";
import ViewForum from "./pages/student/ViewForum";
import ViewQna from "./pages/student/ViewQna";
import AnswerForum from "./pages/student/AnswerForum";
import Settings from "./pages/student/Settings";
import StudentRoute from "./pages/util/StudentRoute";
import SubjectStream from "./pages/student/SubjectStream";
import CreateLab from "./pages/admin/CreateLab";
import Schools from "./pages/admin/Schools";
import AllSubjects from "./pages/admin/AllSubjects";
import Assessments from "./pages/admin/Assessments";
import Tests from "./pages/admin/Tests";
import MiniProjects from "./pages/admin/MiniProjects";
import CreateProject from "./pages/admin/CreateProject";
import CreateProjectTask from "./pages/admin/CreateProjectTask";
import CreateAssessments from "./pages/admin/CreateAssessments";
import CreateQuestion from "./pages/admin/CreateQuestion";
import AllQuestions from "./pages/admin/AllQuestions";
import CreateTest from "./pages/admin/CreateTest";
import AddQuestionsToTest from "./pages/admin/AddQuestionsToTest";
import SingleTestDetails from "./pages/admin/SingleTestDetails";
import TestResult from "./pages/admin/TestResult";
import CreateSubject from "./pages/admin/CreateSubject";
import CreateChapters from "./pages/admin/CreateChapters";
import CreateVideos from "./pages/admin/CreateVideos";
import AdminHome from "./pages/admin/AdminHome";
import TakeAssessments from "./pages/student/TakeAssessments";
import Elab from "./pages/student/Elab";
import TeacherHome from "./pages/teacher/TeacherHome";
import Chats from "./pages/teacher/Chats";
import Qnas from "./pages/teacher/Qnas";
import SchoolHome from "./pages/school/SchoolHome";
import ParentHome from "./pages/parent/ParentHome";
import AnswerQna from "./pages/teacher/AnswerQna";
import ViewAssessmentScore from "./pages/student/ViewAssessmentScore";
import TakeTest from "./pages/student/TakeTest";
import ViewProject from "./pages/student/ViewProject";
import StartProject from "./pages/student/StartProject";
import ViewTestScore from "./pages/student/ViewTestScore";
import VideoFeatures from "./pages/student/VideoFeatures";
import Markers from "./pages/student/Markers";
import MarkerSingle from "./pages/student/MarkerSingle";
import VideoWithWaterMark from "./pages/student/VideoWithWaterMark";
import ViewAssessments from "./pages/admin/ViewAssessments";
import ParentSubjects from "./pages/parent/ParentSubjects";
import ParentAssessments from "./pages/parent/ParentAssessments";
import ParentTests from "./pages/parent/ParentTests";

import Students from "./pages/school/Students";
import AddStudent from "./pages/school/AddStudent";
import ViewStudent from "./pages/school/ViewStudent";
import Teachers from "./pages/school/Teachers";
import AddTeacher from "./pages/school/AddTeacher";

class Root extends Component {
  render() {
    return (
      <HashRouter basename={"/"}>
        <Routes>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/demo`}
            element={<Demo />}
          />

          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin`}
            element={<Admin />}
          /> */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-email`}
            element={<Adminemail />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-chat`}
            element={<Adminchat />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-productlist`}
            element={<Adminproductlist />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-productgrid`}
            element={<Adminproductgrid />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-productadd`}
            element={<Adminproductadd />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-customer`}
            element={<Admincustomer />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-customerview`}
            element={<Admincustomerview />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-order`}
            element={<Adminorder />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-orderview`}
            element={<Adminorderview />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-venderlist`}
            element={<Adminvenderlist />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-venderview`}
            element={<Adminvenderview />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin-review`}
            element={<Adminreview />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            element={<Login />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/register`}
            element={<Register />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/forgot`}
            element={<Forgot />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/coming-soon`}
            element={<Coming />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/notfound`}
            element={<Notfound />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog`}
            element={<Blog />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-sidebar`}
            element={<BlogSidebar />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-single`}
            element={<BlogSingle />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact`}
            element={<Contact />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-2`}
            element={<Contacttwo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about`}
            element={<About />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/service`}
            element={<Service />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/price`}
            element={<Price />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-1`}
            element={<Shopone />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-2`}
            element={<Shoptwo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/shop-3`}
            element={<Shopthree />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/single-product`}
            element={<Productone />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/single-product-2`}
            element={<Producttwo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/single-product-3`}
            element={<Productthree />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/cart`}
            element={<Cart />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/checkout`}
            element={<Checkout />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default`}
            element={<Default />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-categories`}
            element={<Defaultcategory />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-follower`}
            element={<Defaultfollower />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-settings`}
            element={<Defaultsettings />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-search`}
            element={<Defaultsearch />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-live-stream`}
            element={<Defaultlive />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-channel`}
            element={<Defaultchannel />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-course-one`}
            element={<Defaultcourseone />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-course-two`}
            element={<Defaultcoursetwo />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-user-profile`}
            element={<Defaultuserprofile />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-analytics`}
            element={<Defaultanalytics />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/default-author-profile`}
            element={<Defaultauthorprofile />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/popup-chat`}
            element={<Popupchat />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/account-information`}
            element={<Accountinfo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-information`}
            element={<Contactinfo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/social`}
            element={<Social />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/payment`}
            element={<Payment />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/password`}
            element={<Password />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/email-box`}
            element={<Email />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/defaultemailopen`}
            element={<Emailopen />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/message`}
            element={<Chat />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/courses-grid-1`}
            element={<Coursesgridone />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/courses-grid-2`}
            element={<Coursesgridtwo />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/courses-grid-3`}
            element={<Coursesgridthree />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/user-profile`}
            element={<Userprofile />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/author-profile`}
            element={<Authorprofile />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/course-details`}
            element={<Coursedetails />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/course-details-2`}
            element={<Coursedetailstwo />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home-3`}
            element={<Homethree />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home-5`}
            element={<Homefive />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home-6`}
            element={<Homesix />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home-4`}
            element={<Homefour />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home-2`}
            element={<Hometwo />}
          />

          {/* user */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            element={<Login />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/home`}
            element={<StudentRoute element={<Home />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/subjects`}
            element={<StudentRoute element={<Subjects />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/school_qna`}
            element={<StudentRoute element={<Qna />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/school_forums`}
            element={<StudentRoute element={<Forums />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/school_qna/view_qna/:qnaId`}
            element={<StudentRoute element={<ViewQna />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/school_forums/view_forum/:forumId`}
            element={<StudentRoute element={<ViewForum />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/school_forums/answer_forum/:forumId`}
            element={<StudentRoute element={<AnswerForum />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/settings`}
            element={<StudentRoute element={<Settings />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/subject_stream/:subjectId`}
            element={<StudentRoute element={<SubjectStream />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/subject_stream/take_assessments/:video_id`}
            element={<StudentRoute element={<TakeAssessments />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/subject_stream/view_assessment_score/:video_id`}
            element={<StudentRoute element={<ViewAssessmentScore />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/subject_stream/take_test/:subject_id/:test_id`}
            element={<StudentRoute element={<TakeTest />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/subject_stream/view_test_score/:subject_id/:test_id`}
            element={<StudentRoute element={<ViewTestScore />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/subject_stream/view_project/:project_id`}
            element={<StudentRoute element={<ViewProject />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/subject_stream/start_project/:project_id/:task_id/:lab_code`}
            element={<StudentRoute element={<StartProject />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/subject_stream/elab/:video_id`}
            element={<StudentRoute element={<Elab />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/video_features`}
            element={<StudentRoute element={<VideoFeatures />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/video_features/markers`}
            element={<StudentRoute element={<Markers />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/video_features/marker_single`}
            element={<StudentRoute element={<MarkerSingle />} />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/video_features/video_with_watermark`}
            element={<StudentRoute element={<VideoWithWaterMark />} />}
          />

          {/* amdin */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin`}
            element={<AdminHome />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/create_lab`}
            element={<CreateLab />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/schools`}
            element={<Schools />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/all_subjects`}
            element={<AllSubjects />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/all_subjects/create_subject`}
            element={<CreateSubject />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/all_subjects/create_chapters`}
            element={<CreateChapters />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/all_subjects/create_videos`}
            element={<CreateVideos />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/assessments`}
            element={<Assessments />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/assessments/create_assessments`}
            element={<CreateAssessments />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/assessments/view_assessments/:subject_id`}
            element={<ViewAssessments />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tests`}
            element={<Tests />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tests/create_question`}
            element={<CreateQuestion />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tests/all_questions`}
            element={<AllQuestions />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tests/create_test`}
            element={<CreateTest />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tests/add_question_to_test`}
            element={<AddQuestionsToTest />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tests/test_details/:testId`}
            element={<SingleTestDetails />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/tests/test_results/:testId`}
            element={<TestResult />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/mini_projects`}
            element={<MiniProjects />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/mini_projects/create_project`}
            element={<CreateProject />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/mini_projects/create_project_task`}
            element={<CreateProjectTask />}
          />

          {/* teacher */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/teacher`}
            element={<TeacherHome />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/qnas`}
            element={<Qnas />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/qnas/answer_qna/:qna_id`}
            element={<AnswerQna />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/chats`}
            element={<Chats />}
          />

          {/* parent */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/parent`}
            element={<ParentHome />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/parent_subjects/:user_id`}
            element={<ParentSubjects />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/parent_assessments/:user_id`}
            element={<ParentAssessments />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/parent_tests/:user_id`}
            element={<ParentTests />}
          />

          {/* school */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/school`}
            element={<SchoolHome />}
          />

          {/* Rakshith */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/school/students`}
            element={<Students />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/school/add_student_view`}
            element={<AddStudent />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/school/view_student`}
            element={<ViewStudent />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/school/teachers`}
            element={<Teachers />}
          />

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/school/add_teacher`}
            element={<AddTeacher />}
          />
        </Routes>
      </HashRouter>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById("root"));
serviceWorker.register();
// comment added
// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import * as serviceWorker from './serviceWorker';
// import Demo from './demo/Demo';
// import Admin from './pages/Admin';
// import Default from './pages/Default';
// import Defaultchannel from './pages/Defaultchannel';
// import Defaultfollower from './pages/Defaultfollower';

// import Home from './pages/users/Home';

// const router = createBrowserRouter([
//   {
//     path: `${process.env.PUBLIC_URL}/`,
//     element: <Home />,
//   },
//   {
//     path: `${process.env.PUBLIC_URL}/student`,
//     element: <Home />,
//   },
//   {
//     path: `${process.env.PUBLIC_URL}/default`,
//     element: <Default />,
//   },
//   {
//     path: `${process.env.PUBLIC_URL}/default-follower`,
//     element: <Defaultfollower />,
//   },
//   {
//     path: `${process.env.PUBLIC_URL}/default-channel`,
//     element: <Defaultchannel />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//       <RouterProvider router={router} />
//   </React.StrictMode>,
// )
// serviceWorker.register();
