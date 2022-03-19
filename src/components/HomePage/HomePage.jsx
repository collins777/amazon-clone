import React from "react";
import Product from "../Product/Product";
import "./HomePage.css";

function HomePage() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        />
        <div className="home__row">
          <Product
            id="1"
            title="LG 32UN880-B 32 UltraFine Display Ergo UHD 4K IPS Display with HDR 10
          Compatibility and USB Type-C Connectivity, Black"
            price={697.05}
            image="https://www.bhphotovideo.com/cdn-cgi/image/format=auto,fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/lg_27bn88u_b_27_4k_uhd_ips_1604505920_1602091.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="2020 Apple MacBook Air Laptop: Apple M1 Chip, 13” Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Space Gray"
            price={994.0}
            image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1633027804000"
            rating={5}
          />
          <Product
            id="3"
            title="Keychron K6 Bluetooth 5.1 Wireless Mechanical Keyboard with Gateron G Pro Brown Switch/LED Backlit/Rechargeable Battery, 68 Keys Compact Keyboard Compatible with Mac Windows"
            price={64.99}
            image="https://cdn.shopify.com/s/files/1/0059/0630/1017/products/Keychron-K6-hot-swappable-compact-65-percent-wireless-mechanical-keyboard-for-Mac-Windows-iOS-Gateron-switch-red-with-type-C-RGB-white-backlight_7f5684b8-e1be-4a8c-a0b7-3d0d8c22535b_1800x1800.jpg?v=1621238767"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4"
            title="Autonomous Edition Smart Hybrid Dual Motor Electric Standing Desk Frame Classic Top, 28 - 48 Height Range, 39 - 70 Length Range, Grey-White"
            price={499.0}
            image="https://www.swaggermagazine.com/home/wp-content/uploads/2020/09/smartdesk2-2-1-e1600970973632.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Samsung Galaxy S22 Smartphone, Factory Unlocked Android Cell Phone, 128GB, 8K Camera & Video, Brightest Display, Long Battery Life, Fast 4nm Processor, US Version, Green"
            price={799.0}
            image="https://image-us.samsung.com/us/smartphones/galaxy-s22/images/gallery/R0-Green/FLRC-214-R0-Green-01-PDP-GALLERY-1600x1200.jpg?$product-details-jpg$"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Logitech MX Master 3 Advanced Wireless Mouse, Ultrafast Scrolling, Ergonomic, 4000 DPI, Customization, USB-C, Bluetooth, USB, Apple Mac, Microsoft PC Windows, Linux, iPad - Graphite"
            price={99.99}
            image="https://resource.logitech.com/w_944,h_944,c_limit,q_auto,f_auto,dpr_1.0/d_transparent.gif/content/dam/logitech/en/products/mice/mx-master-3-mac/gallery/mx-master-3-for-mac-gallery-3-4-front.png?v=1"
            rating={4}
          />
          <Product
            id="7"
            title="Apple iPhone 13 Pro Max (1TB, Sierra Blue) [Locked] + Carrier Subscription"
            price={1599.0}
            image="data:image/jpeg;base64,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"
            rating={5}
          />
          <Product
            id="8"
            title="Playstation 5 Bundle Kit 4k Gaming/Games Bundle"
            price={999.0}
            image="https://m.media-amazon.com/images/I/61UdSwYEXLL._AC_SL1500_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
