import React, { useState } from "react";
import Phone from "../components/Phone";

export default function PhoneContainer() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  function togglePopup() {
    setIsPopupOpen(!isPopupOpen);
  }

  function hidePopup() {
    setIsPopupOpen(false);
  }

  return (
    <Phone>
      <Phone.Bar
        theme={isPopupOpen ? "dark" : "light"}
        homeButtonProps={{ togglePopup: togglePopup, isPopupOpen: isPopupOpen }}
        backButtonProps={{ onClick: hidePopup }}
      />
      <Phone.Popup isOpen={isPopupOpen} />
    </Phone>
  );
}
