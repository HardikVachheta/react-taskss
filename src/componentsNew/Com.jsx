import React, { useState } from 'react';

function Com() {
  const [activeSection, setActiveSection] = useState(null);

  // Function to toggle the collapse state for a section
  const toggleCollapse = (sectionId) => {
    if (activeSection === sectionId) {
      setActiveSection(null); // Collapse the section if it's already active
    } else {
      setActiveSection(sectionId); // Expand the section if it's not active
    }
  };

  // Data for accordion sections
  const sections = [
    {
      id: 'accordionOne',
      title: 'Accordion Item 1',
      content:
        'Lemon drops chocolate cake gummies carrot cake chupa chups muffin topping. Sesame snaps icing marzipan gummi bears macaroon dragée danish caramels powder. Bear claw dragée pastry topping soufflé. Wafer gummi bears marshmallow pastry pie.',
    },
    {
      id: 'accordionTwo',
      title: 'Accordion Item 2',
      content:
        'Dessert ice cream donut oat cake jelly-o pie sugar plum cheesecake. Bear claw dragée oat cake dragée ice cream halvah tootsie roll. Danish cake oat cake pie macaroon tart donut gummies. Jelly beans candy canes carrot cake. Fruitcake chocolate chupa chups.',
    },
    {
      id: 'accordionThree',
      title: 'Accordion Item 3',
      content:
        'Oat cake toffee chocolate bar jujubes. Marshmallow brownie lemon drops cheesecake. Bonbon gingerbread marshmallow sweet jelly beans muffin. Sweet roll bear claw candy canes oat cake dragée caramels. Ice cream wafer danish cookie caramels muffin.',
    },
  ];

  return (
    <div className="col-md mb-4 mb-md-2">
      <small className="text-light fw-medium">Basic Accordion</small>
      <div className="accordion mt-3" id="accordionExample">
        {sections.map((section) => (
          <div
            key={section.id}
            className={`card accordion-item ${
              activeSection === section.id ? 'active' : ''
            }`}
          >
            <h2 className="accordion-header">
              <button
                type="button"
                className={`accordion-button ${
                  activeSection === section.id ? '' : 'collapsed'
                }`}
                onClick={() => toggleCollapse(section.id)}
              >
                {section.title}
              </button>
            </h2>
            <div
              id={section.id}
              className={`accordion-collapse collapse ${
                activeSection === section.id ? 'show' : ''
              }`}
            >
              <div className="accordion-body">{section.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Com;
