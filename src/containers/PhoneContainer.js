import React, { useState } from "react";
import Phone from "../components/Phone";

export default function PhoneContainer() {
  const [ isPopupOpen, setIsPopupOpen ] = useState(false);

  function togglePopup () {
    setIsPopupOpen(!isPopupOpen);
  }

  return (
    <Phone>
      <Phone.Bar togglePopup={togglePopup} isPopupOpen={isPopupOpen}/>
      <Phone.Popup isOpen={isPopupOpen}/>
    </Phone>
  );
}
