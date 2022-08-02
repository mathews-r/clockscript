import React, { Component } from "react";
import '../styles/footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <p>
          Desenvolvido por:{" "}
          <a
            href="https://www.linkedin.com/in/mathewsrodrigues/"
            target="_blank" rel="noreferrer"
          >
            Mathews Rodrigues
          </a>
        </p>
      </footer>
    );
  }
}
