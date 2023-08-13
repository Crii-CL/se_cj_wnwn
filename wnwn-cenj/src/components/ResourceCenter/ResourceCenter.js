import React from "react";
import "./ResourceCenter.css";

const ResourceCenter = () => {
  const resources = [
    {
      title: "What is an E-waste Center?",
      image:
        "https://www.datacenterknowledge.com/sites/datacenterknowledge.com/files/styles/article_featured_retina/public/GettyImages-494832555.jpg?itok=_Z0yC49P",
      description:
        "An E-waste Center is a facility dedicated to handling electronic waste, like old computers and phones, in an environmentally conscious way. It sorts, dismantles, and processes discarded electronics, aiming to minimize their negative impact on the environment. E-waste Centers collaborate with recycling firms and authorities to ensure safe disposal and resource recovery from these devices.",
    },
    {
      title: "What is Recycling?",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNjT7uEhWmSJri7A7SRYh3abpKW39m9q-fdg&usqp=CAU",
      description:
        "Recycling involves converting used materials into new products to reduce resource consumption. In electronics, this means extracting valuable components like metals from old devices. Recycling also addresses the proper disposal of hazardous materials, lessening environmental harm and lowering the need for raw resources.",
    },
    {
      title: "How to Dispose of Electronics?",
      image:
        "https://ca-times.brightspotcdn.com/dims4/default/94daf86/2147483647/strip/true/crop/2048x1369+0+0/resize/1200x802!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Fe4%2Ff3%2F87cdafe8b55555b10131aaf6cdf9%2Fla-xpm-photo-2014-apr-22-la-hm-ewaste-20140419",
      description:
        "To dispose of electronics properly, check if the device can be repaired, refurbished, or donated. Non-functional items should be taken to E-waste Centers or certified recycling facilities. Erase personal data, follow packaging guidelines, and explore take-back programs from manufacturers or retailers if no nearby center is available. Responsible electronics disposal helps cut waste and supports resource recovery.",
    },
  ];

  return (
    <section className="resource">
      <h1 className="resource__title">Resource Center</h1>
      <div className="resource__cards">
        {resources.map((resource, index) => (
          <div key={index} className="resource__card">
            <h2 className="resource__card-title">{resource.title}</h2>
            <div className="resource__content">
              <img
                className="resource__image"
                alt="image of resource"
                src={resource.image}
              ></img>
              <p>{resource.description}</p>
              <a href="#" className="resource__link">
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResourceCenter;
