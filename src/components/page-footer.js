import React from "react";

const PageFooter = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <h3>Kontakt oss</h3>
        <p>📧 <a href="mailto:kontakt@fjelldigital.no">kontakt@fjelldigital.no</a></p>
        <p>⏰ Man - Fre | 09:00 - 16:00</p>
      </div>

      <div className="footer-section">
        <h3>Nyttige lenker</h3>
        <p><a href="#">Personvern</a></p>
        <p><a href="#">Standardvilkår</a></p>
        <p>© Fjell Digital AS 2025</p>
      </div>

      <div className="footer-section">
        <h3>Om oss</h3>
        <p>Fjell Digital AS</p>
        <p>Org nr: 992 645 032</p>
        <p>Karenslyst Allé 2, 0278 Oslo</p>
      </div>
    </footer>
  );
};

export default PageFooter;
