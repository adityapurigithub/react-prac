// Great frontend Qs
import { useState } from "react";

export default function Accordion() {
  const [accordion, setAccordion] = useState({
    isOpen: false,
    id: null,
  });

  const handleAccordionClick = (id) => {
    if (id !== accordion.id) {
      setAccordion({
        id,
        isOpen: true,
      });
    } else {
      setAccordion({
        id,
        isOpen: !accordion.isOpen,
      });
    }
  };

  return (
    <div>
      <div className="accordion" onClick={() => handleAccordionClick(1)}>
        <div className="accordion-header">
          HTML <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div
          className={`accordion-body ${accordion.isOpen && accordion.id === 1 ? "show" : "hide"}`}
        >
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </div>
      </div>
      <div className="accordion" onClick={() => handleAccordionClick(2)}>
        <div>
          CSS <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div
          className={`accordion-body ${accordion.isOpen && accordion.id === 2 ? "show" : "hide"}`}
        >
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </div>
      </div>
      <div className="accordion" onClick={() => handleAccordionClick(3)}>
        <div>
          JavaScript <span aria-hidden={true} className="accordion-icon" />
        </div>
        <div
          className={`accordion-body ${accordion.isOpen && accordion.id === 3 ? "show" : "hide"}`}
        >
          JavaScript, often abbreviated as JS, is a programming language that is
          one of the core technologies of the World Wide Web, alongside HTML and
          CSS.
        </div>
      </div>
    </div>
  );
}
// Style

body {
  font-family: sans-serif;
  color: rebeccapurple;
}
.accordion {
  margin: 12px;
  transition: all 0.5s ease;
}
.accordion-header {
  cursor: pointer;
}

.accordion-icon {
  border: solid currentcolor;
  border-width: 0 2px 2px 0;
  display: inline-block;
  height: 8px;
  pointer-events: none;
  transform: translateY(-2px) rotate(45deg);
  width: 8px;
}
.accordion-body {
  overflow: hidden;
  opacity: 0;
  transition:
    max-height 0.1s ease,
    opacity 0.3s ease;
}

.show {
  max-height: 200px; /* adjust based on content */
  opacity: 1;
}

.hide {
  max-height: 0;
  opacity: 0;
}

.accordion-icon--rotated {
  transform: translateY(2px) rotate(-135deg);
}
