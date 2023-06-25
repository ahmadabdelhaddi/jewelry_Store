import React from "react";
import "./Footer.css";

import "../../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";
function Footer() {
  return (
    <div className="FOOTER">
      <footer className="text-center text-white">
        <div
          className="text-center text-light bg-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 COPYRIGHT JEWLEREY STORE
        </div>
      </footer>
    </div>
  );
}

export default Footer;
