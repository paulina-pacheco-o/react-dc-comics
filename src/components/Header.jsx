import React from 'react'

const Header = () => {
  const menu = [
    {
      id: 1,
      label: "CHARACTERS",
      active: false,
      href: "#"
    },
    {
      id: 2,
      label: "COMICS",
      active: true,
      href: "#"
    },
    {
      id: 3,
      label: "MOVIES",
      active: false,
      href: "#"
    },
    {
      id: 4,
      label: "TV",
      active: false,
      href: "#"
    },
    {
      id: 5,
      label: "GAMES",
      active: false,
      href: "#"
    },
    {
      id: 6,
      label: "COLLECTIBLES",
      active: false,
      href: "#"
    },
    {
      id: 7,
      label: "VIDEOS",
      active: false,
      href: "#"
    },
    {
      id: 8,
      label: "FANS",
      active: false,
      href: "#"
    },
    {
      id: 9,
      label: "NEWS",
      active: false,
      href: "#"
    },
    {
      id: 10,
      label: "SHOP",
      active: false,
      href: "#"
    },
  ]
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-20">
            <div id="logoHeader">
              <img src="../img/dc-logo.png" alt="Logo-header" />
            </div>
          </div>
          <div className="col-80">
            <ul id='menu'>
              {menu.map((link) => {
                return (
                  <li><a href={link.href}>{link.label}</a></li>
                )
              })}
            </ul></div>
        </div>
      </div>
    </header>
  )
}

export default Header
