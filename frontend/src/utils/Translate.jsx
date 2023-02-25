import React, { useEffect } from 'react'

const Translate = () => {
    const googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: "en",
            autoDisplay: false
          },
          "google_translate_element"
        );
      };

      useEffect(() => {
        var addScript = document.createElement("script");
        addScript.setAttribute(
          "src",
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        );
        document.body.appendChild(addScript);
        window.googleTranslateElementInit = googleTranslateElementInit;
      }, []);
  return (
    <div className='mt-20'>
    <div id="google_translate_element"></div>
    <h4>Way2Agritech is a comprehensive agri-technology solutions covering agri inputs, implements and machineries for the farmers and other users. The objective of this service is to catalyst agricultural technology adoption by the farmers, knowledge transformation, and promotion of quality technology products and sales generation. Way2ABI also involve the local dealers, distributors and others for better reach to the rural area across Karnataka. Its role will be Channel Partner between farmers or technology users and the manufacturers. Some of the key initiatives taken up under Way2Agritech are physical outlet at selected places, www.way2agritech.com (E-Commerce) & Way2Agriteh (M-Commerce), one stop solutions for farmers, technical guidance, facilitation of new and customized technology development, technology exposure, business development strategies to manufacturers etc.</h4>
    </div>
  )
}

export default Translate