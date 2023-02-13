import React from 'react'

const Footer = () => {
  return (
    <footer className="app__footer">
          <div className="app__footer--socials">
            <a href="https://github.com/CrisPer1988/entregable4" target="_blank">
              <i className="bx bxl-github footer__icon"></i>
            </a>
            <a href="https://www.linkedin.com/" target="_blank">
              <i className="bx bxl-linkedin-square footer__icon"></i>
            </a>
          </div>
          <div className="app__footer--creators">
            <p>
              Created by:<span> Cristian Norberto</span> &{" "}
              <span>Alejandro Aguilar</span>
            </p>
          </div>
        </footer>
  )
}

export default Footer