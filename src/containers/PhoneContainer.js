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

  function hidePopupOnOutsideClick (e) {
    e.preventDefault();
    if (e.target === e.currentTarget) {
      setIsPopupOpen(false);
    }
  }

  return (
    <Phone hidePopup={hidePopupOnOutsideClick}>
      <Phone.Bar
        theme={isPopupOpen ? "dark" : "light"}
        homeButtonProps={{ togglePopup: togglePopup, isPopupOpen: isPopupOpen }}
        backButtonProps={{ onClick: hidePopup }}
      />
      <Phone.Popup isOpen={isPopupOpen} />
    </Phone>
  );
}
