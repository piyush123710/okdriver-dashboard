import { useEffect, useState } from "react";

import socket from "../services/socket";

import Navbar from "../components/Navbar";
import StatsCards from "../components/StatsCards";
import EventTable from "../components/EventTable";
import RiskChart from "../components/RiskChart";
import VideoFeed from "../components/VideoFeed";

import "../styles/dashboard.css";

function Dashboard() {

  const [events, setEvents] = useState([]);

  useEffect(() => {

    socket.on("newEvent", (data) => {

      setEvents((prev) => [data, ...prev]);

    });

  }, []);

  return (

    <div>

      <Navbar />

      <div className="dashboard">

        <StatsCards events={events} />

        <div className="analytics">
          <RiskChart events={events} />
          <VideoFeed />
        </div>

        <EventTable events={events} />

      </div>

    </div>

  );
}

export default Dashboard;
