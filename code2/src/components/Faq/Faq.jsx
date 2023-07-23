import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from 'react-accessible-accordion';
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from 'react-icons/md';
import './Faq.css';
import data from '../../utils/faqs';

const Faq = () => {
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./faq.jpg" alt="" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">FAQ</span>
          <span className="primaryText">Frequently Asked</span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              const [className, setClassName] = useState(null);

              const handleAccordionToggle = (expanded) => {
                expanded ? setClassName("expanded") : setClassName("collapsed");
              };

              return (
                <AccordionItem
                  className={`accordionItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton">
                      <AccordionItemState>
                        {({ expanded }) => handleAccordionToggle(expanded)}
                      </AccordionItemState>

                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>

                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
