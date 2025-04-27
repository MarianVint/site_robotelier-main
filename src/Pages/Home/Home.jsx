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
    title: "Titlul Anunțului 1",
    description: "Detalii complete despre anunțul 1.",
    date: "2025-04-26",
  },
  {
    id: 2,
    title: "Sărbători fericite!",
    description: "Vă dorim sărbători fericite alături de cei dragi! Detalii complete aici.",
    date: "2025-04-26",
  },
];

const Home = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  const openModal = (announcement) => {
    setSelectedAnnouncement(announcement);
  };

  const closeModal = () => {
    setSelectedAnnouncement(null);
  };

  return (
    <div>
      <Hero />
      <div className="container">
        <Title subTitle="Anunțuri" title="Ultimele noutăți" />
        <div className="announcements-container">
          {announcements.map((announcement) => (
            <AnnouncementCard
              key={announcement.id}
              title={announcement.title}
              description={announcement.description}
              date={announcement.date}
              onClick={() => openModal(announcement)}
            />
          ))}
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
            <h2>{selectedAnnouncement.title}</h2>
            <p>{selectedAnnouncement.date}</p>
            <p>{selectedAnnouncement.description}</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;