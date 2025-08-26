import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div id="footerBlu">
        <div className="container">
          <div className="row">
            <div className="col-100">
              <div className="icons-list">
                <div>
                  <img src="./img/buy-comics-digital-comics.png" alt="Buy" />
                  <span>DIGITAL COMICS</span>
                  <img src="./img/buy-comics-merchandise.png" alt="Merchandise" />
                  <span>DC MERCHANDISE</span>
                  <img src="./img/buy-comics-subscriptions.png" alt="Subscription" />
                  <span>SUBSCRIPTION</span>
                  <img src="./img/buy-comics-shop-locator.png" alt="Shop" />
                  <span>COMIC SHOP LOCATOR</span>
                  <img src="./img/buy-dc-power-visa.svg" alt="Dc power" />
                  <span>DC POWER VISA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-15 list-footer">
              <ul>
                <h3>DC COMICS</h3>
                <li>Characters</li>
                <li>Comics</li>
                <li>Movies</li>
                <li>Tv</li>
                <li>Games</li>
                <li>Videos</li>
                <li>News</li>
              </ul>
            </div>
            <div className="col-15"></div>
            <div className="col-15"></div>
            <div className="col-15"></div>
            <div className="col-40 background-dc"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
