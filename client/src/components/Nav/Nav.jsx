import React from 'react';
import './nav.scss';

export default () => {
  return (
    <React.Fragment>
      <nav id="nav" class="nav">
        <div class="nav__content">
          <ul class="nav__list">
            <li class="nav__li">
              <a class="nav__link" href="#" onclick="closeNav()">
                SHOP
              </a>
            </li>
            <li class="nav__li">
              <a class="nav__link" href="#location" onclick="closeNav()">
                PRODUCTS
              </a>
            </li>
            <li class="nav__li">
              <a
                class="nav__link"
                href="https://www.ubereats.com/en-US/nyc-suburbs/food-delivery/big-daddys-home-plate-bbq/k7DJMp5ZTqKYfazmTn-j2w/"
                target="_blank"
                onclick="closeNav()"
              >
                Orders
              </a>
            </li>
            <li class="nav__li ">
              <a class="nav__link" href="#main-menu" onclick="closeNav()">
                Menu
              </a>
              <li class="nav__li">
                <a class="nav__link" href="./holiday.html" onclick="closeNav()">
                  Holiday
                </a>
              </li>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
