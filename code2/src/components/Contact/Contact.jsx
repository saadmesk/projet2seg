import React, { useState } from 'react';
import './Contact.css';
import { MdCall } from 'react-icons/md';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { HiChatBubbleBottomCenter } from 'react-icons/hi2';

const Contact = () => {
  // State variables to manage message visibility
  const [showCallMessage, setShowCallMessage] = useState(false);
  const [showChatMessage, setShowChatMessage] = useState(false);
  const [showVideoMessage, setShowVideoMessage] = useState(false);
  const [showWhatsappMessage, setShowWhatsappMessage] = useState(false);

  // Functions to show messages
  const showCallNowMessage = () => {
    setShowCallMessage(true);
    // Hide the message after a few seconds (e.g., 5 seconds)
    setTimeout(() => setShowCallMessage(false), 5000);
  };

  const showChatNowMessage = () => {
    setShowChatMessage(true);
    setTimeout(() => setShowChatMessage(false), 5000);
  };

  const showVideoNowMessage = () => {
    setShowVideoMessage(true);
    setTimeout(() => setShowVideoMessage(false), 5000);
  };

  const showMessageNowMessage = () => {
    setShowWhatsappMessage(true);
    setTimeout(() => setShowWhatsappMessage(false), 5000);
  };

  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/*left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">Our Contacts</span>
          <span className="primaryText">Easy to Contact Us</span>
          <span className="secondaryText">
            We are ready to help by providing the best serveys and we believe a good place is where to be make your like better.
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">613 777 9999</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={showCallNowMessage}>
                  Call Now
                </div>
              </div>

              {/* second mode */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">+1 613 777 9999</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={showChatNowMessage}>
                  Chat Now
                </div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsFillChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">+1 343 852 7536</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={showVideoNowMessage}>
                  Video Now
                </div>
              </div>

              {/* fourth mode */}
              <div className="flexColStart mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenter size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Whatsapp</span>
                    <span className="secondaryText">+1 613 777 9999</span>
                  </div>
                </div>
                <div className="flexCenter button" onClick={showMessageNowMessage}>
                  Message Now
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="" />
          </div>
        </div>
      </div>

      {/* Messages */}
      {showCallMessage && (
        <div className="message">
          You will be receiving a call in few minutes.
        </div>
      )}

      {showChatMessage && (
        <div className="message">
          You will be receiving an iMessage in few minutes.
        </div>
      )}

      {showVideoMessage && (
        <div className="message">
          You will be receiving a Skype Video Call in few minutes.
        </div>
      )}

      {showWhatsappMessage && (
        <div className="message">
          You will be receiving a WhatsApp message in few minutes.
        </div>
      )}
    </section>
  );
};

export default Contact;
