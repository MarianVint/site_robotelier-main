import React from "react";
import "./AnnouncementCard.css";

const AnnouncementCard = ({ title, date, description, onClick }) => {
  return (
    <div className="announcement-card" onClick={onClick} id="announcement-card">
      <h2 className="announcement-title">{title}</h2>
      <p className="announcement-date">{date}</p>
      <p className="announcement-description">{description}</p>
    </div>
  );
};

export default AnnouncementCard;