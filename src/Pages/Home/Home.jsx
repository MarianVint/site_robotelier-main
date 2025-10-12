import React, { useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Trainings from "../../Components/Trainings/Trainings";
import Title from "../../Components/Title/Title";
import About from "../../Components/About/About";
import Gallery from "../../Components/Gallery/Gallery";
import Testimonials from "../../Components/Testimonials/Testimonials";
import Contact from "../../Components/Contact/Contact";
import Footer from "../../Components/Footer/Footer";
import AnnouncementCard from "../../Components/AnnouncementCard/AnnouncementCard";

const announcements = [
  {
    id: 1,
    title: "Start înscrieri!",
    description: `Cercul studențesc unde teoria este pusă în practică, revine!\n
    Evenimentul de deschidere va avea loc în data de 14 Octombrie ora 18 în sala P02 Str. Baritiu 24-26.\n
    Acest eveniment este dedicat tuturor studenților pasionați de robotică, electronică și programare.\n
    Veți avea ocazia să participați la demonstrații live, să interacționați cu membrii echipei Robotelier\n
    și să aflați mai multe despre activitățile și proiectele noastre.\n
    Nu ratați această oportunitate de a face parte dintr-o comunitate inovatoare și entuziastă!`,
    date: "2025-10-7",
    buttonText: "Înscrie-te acum",
    link: "https://docs.google.com/forms/d/1rt0zlIo2QqJ-FUJ3GmZspikNhMGJxEZwLRpyQ992Q3o",
  },
];

const Home = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 4;

  const openModal = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const closeModal = () => {
    setSelectedAnnouncement(null);
  };

  // Format description to handle \n
  const formatDescription = (description) => {
    return description.split("\n").map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
  };

  // Truncate description to one sentence for the announcement card
  const truncateDescription = (description) => {
    const firstSentence = description.split("\n")[0];
    return firstSentence.length > 100 ? `${firstSentence.substring(0, 100)}...` : firstSentence;
  };

  // Calculate pagination
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);

  const totalPages = Math.ceil(announcements.length / announcementsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Hero />
      <div className="container">
        <Title subTitle="Anunțuri" title="Ultimele noutăți" />
        <div className="announcements-container">
          {currentAnnouncements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              title={announcement.title}
              description={truncateDescription(announcement.description)} // Limit text to one sentence
              date={announcement.date}
              buttonText={announcement.buttonText}
              attachments={announcement.attachments}
              onClick={() => openModal(announcement)}
            />
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="pagination">
          <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span>Page {currentPage} of {totalPages}</span>
          <button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </button>
        </div>
        <Title subTitle="Training-uri ROBOTELIER!" title="Materiale disponibile:" />
        <Trainings />
        <About />
        <Title subTitle="Activități Robotelier" title="Electrocamp" />
        <Gallery />
        <Title subTitle="Testimoniale" title="Ce spun studenții" />
        <Testimonials />
        <Title subTitle="Contact" title="Ia legătura cu noi!" />
        <Contact />
        <Footer />
      </div>

      {/* Modal */}
      {selectedAnnouncement && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={closeModal}>X</button>
            <h2>{selectedAnnouncement.title}</h2>
            <p>{selectedAnnouncement.date}</p>
            <p>{formatDescription(selectedAnnouncement.description)}</p>
            {selectedAnnouncement.buttonText && selectedAnnouncement.link && (
              <a
                href={selectedAnnouncement.link}
                className="announcement-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedAnnouncement.buttonText}
              </a>
            )}
            {selectedAnnouncement.attachments && selectedAnnouncement.attachments.length > 0 && (
              <div className="attachments">
                {selectedAnnouncement.attachments.map((attachment, index) => (
                  <div key={index} className="attachment-item">
                    {attachment.type === "image" ? (
                      <img src={attachment.url} alt={`Attachment ${index + 1}`} className="attachment-image" />
                    ) : (
                      <a href={attachment.url} target="_blank" rel="noopener noreferrer" className="attachment-link">
                        View PDF
                      </a>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;