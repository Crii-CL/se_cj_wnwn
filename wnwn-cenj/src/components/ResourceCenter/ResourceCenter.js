import React, { useState, useEffect } from "react";
import "./ResourceCenter.css";

const ResourceCenter = () => {
  const resources = [
    {
      title: "What is an E-Waste Center?",
      content:
        "An E-Waste Center is a facility dedicated to handling electronic waste, like old computers and phones, in an environmentally conscious way. It sorts, dismantles, and processes discarded electronics, aiming to minimize their negative impact on the environment. E-Waste Centers collaborate with recycling firms and authorities to ensure safe disposal and resource recovery from these devices.",
    },
    {
      title: "What Exactly is Recycling?",
      content:
        "Recycling involves converting used materials into new products to reduce resource consumption. In electronics, this means extracting valuable components like metals from old devices. Recycling also addresses the proper disposal of hazardous materials, lessening environmental harm and lowering the need for raw resources.",
    },
    {
      title: "How to Dispose of Electronics",
      content:
        "To dispose of electronics properly, check if the device can be repaired, refurbished, or donated. Non-functional items should be taken to E-Waste Centers or certified recycling facilities. Erase personal data, follow packaging guidelines, and explore take-back programs from manufacturers or retailers if no nearby center is available. Responsible electronics disposal helps cut waste and supports resource recovery.",
    },
    {
      title: "How to Dispose of Home Hazardous Waste",
      content:
        "To recycle household hazardous waste responsibly, begin by identifying the types of hazardous materials you have, such as paints, chemicals, or batteries. Check with your local waste management authority for specific guidelines on disposal and recycling options. Many communities offer special collection events or facilities for safe and proper disposal of these materials to prevent environmental harm and promote resource recovery.",
    },
  ];

  const [selectedResource, setSelectedResource] = useState(null);

  const openModal = (resource) => {
    setSelectedResource(resource);
  };

  const closeModal = () => {
    setSelectedResource(null);
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    const handleOverlayClick = (e) => {
      if (e.target.classList.contains("modal_opened")) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.addEventListener("click", handleOverlayClick);

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("click", handleOverlayClick);
    };
  }, []);

  return (
    <section className="resource">
      <h1 className="resource__title">Resource Center</h1>
      <div className="resource__cards">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="resource__card"
            onClick={() => openModal(resource)}
          >
            <h2 className="resource__card-title">{resource.title}</h2>
          </div>
        ))}
      </div>
      {selectedResource && (
        <div className={`modal ${selectedResource ? "modal_opened" : ""}  `}>
          <div className="modal__content">
            <h2 className="modal__title">{selectedResource.title}</h2>
            <p className="modal__description">{selectedResource.content}</p>
            <button className="modal__close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ResourceCenter;
