import React from "react";
import "./AnnouncementCard.css";

const AnnouncementCard = ({ title, date, description, buttonText, attachments, onClick }) => {
  const handleButtonClick = (e) => {
    e.stopPropagation(); // Prevent the parent onClick from being triggered
    console.log("Button clicked!"); // Add your button functionality here
  };

  const formatDescription = (description) => {
    // Replace '\n' with <br /> for line breaks
    return description.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  return (
    <div className="announcement-card" onClick={onClick}>
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{formatDescription(description)}</p>
      {buttonText && (
        <button className="announcement-button" onClick={handleButtonClick}>
          <strong>{buttonText}</strong> {/* Bold text inside the button */}
        </button>
      )}
      {attachments && attachments.length > 0 && (
        <div className="attachments">
          {attachments.map((attachment, index) => (
            <div key={index} className="attachment-item">
              {attachment.type === "image" || attachment.type === "pdf" ? (
                <img
                  src={attachment.url}
                  alt={`Attachment ${index + 1}`}
                  className="attachment-image"
                />
              ) : (
                <a
                  href={attachment.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="attachment-link"
                >
                  View File
                </a>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnnouncementCard;