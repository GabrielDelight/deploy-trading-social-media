import { Fragment } from "react";
import HomePage from "./Pages/HomePage";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import ChatPage from "./Pages/ChatPage";
import LiveStreamsPage from "./Pages/LiveStreamsPage";
import TrendingGroups from "./Pages/TrendingGroups";
import LiveVideoPage from "./Pages/LiveVideoPage";
import MeetingsPage from "./Pages/MeetingsPage";
import SToryPage from "./Pages/SToryPage";
import CreateGroup from "./Pages/CreateGroup";
import VoiceCallPage from "./Pages/VoiceCallPage";
import CraeteMettingSetupPage from "./Pages/CreateMettingSetupPage";
import JoinMeetingPage from "./Pages/JoinMeetingPage";
import Signup from "./Pages/Forms/Signup/Signup";
import Otp from "./Pages/Forms/OTP/Otp";
import TradingType from "./Pages/Forms/TradingType/TradingType";
import PhoneNumber from "./Pages/Forms/PhoneNumber/PhoneNumber";
import TradingPeriod from "./Pages/Forms/TradingPeriod/TradingPeriod";
import FxBook from "./Pages/Forms/FxBook/FxBook";
import Verification from "./Pages/Forms/Verification/Verification";
import Loading from "./Pages/Forms/Loading/Loading";
import Success from "./Pages/Forms/Success/Success";
import "./index.css";
function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Signup />} />
        {/* Form */}
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/otp" element={<Otp />} />
        <Route path="/phone-number" element={<PhoneNumber />} />
        <Route path="/trading-type" element={<TradingType />} />
        <Route path="/trading-period" element={<TradingPeriod />} />
        <Route path="/fx-book" element={<FxBook />} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/success" element={<Success />} />
        
        <Route path="/home" element={<HomePage />} />
        {/* Auth page */}
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/tredning-groups" element={<TrendingGroups />} />
        <Route path="/live-streams" element={<LiveStreamsPage />} />
        <Route path="/live-video" element={<LiveVideoPage />} />
        <Route path="/story" element={<SToryPage />} />
        <Route path="/great-group" element={<CreateGroup />} />
        <Route path="/voice-call" element={<VoiceCallPage />} />
        <Route path="/meetings" element={<MeetingsPage />} />
        <Route path="/meetings-setup" element={<CraeteMettingSetupPage />} />
        <Route path="/meetings-join" element={<JoinMeetingPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
