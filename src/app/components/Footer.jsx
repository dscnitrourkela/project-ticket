/* eslint-disable max-len */

'use client'
import './Footer.css'

import Image from 'next/image'
import React from 'react'

export const Footer = () => {
  return (
    <div className="footer">
      <Image
        src="https://res.cloudinary.com/dra96qhox/image/upload/v1704284949/Line_46_l0jm2p.png"
        alt=""
        width="100%"
      />
      <div className="sb__footer section__padding">
        <div className="sb__footer-links">
          {/* <hr></hr> */}
          <div className="sb__footer-below-links">
            <a href="/cookies">
              <div>
                <p>Privacy & Cookies</p>
              </div>
            </a>
            <a href="/terms">
              <div>
                <p>Terms & Conditions</p>
              </div>
            </a>
            <div>
              <p>Architected with by HackNITR Team</p>
            </div>
          </div>
          <div className="sb__footer-links-div">
            {/* <h4>Coming soon on</h4> */}
            <div className="socialmedia">
              <p>
                <Image
                  src="https://res.cloudinary.com/dra96qhox/image/upload/v1704284949/Vector_cp028c.png"
                  alt=""
                />
              </p>
              {/* <p><Image src="https://res.cloudinary.com/dra96qhox/image/upload/v1704293636/TwitterX_y0nx7i.png" alt=""/></p> */}
              <p>
                <Image
                  src="https://res.cloudinary.com/dra96qhox/image/upload/v1704284949/Vector_1_odf6vh.png"
                  alt=""
                />
              </p>
              <p>
                <Image
                  src="https://res.cloudinary.com/dra96qhox/image/upload/v1704284949/Vector_2_scrlxt.png"
                  alt=""
                />
              </p>
              <p>
                <Image
                  src="https://res.cloudinary.com/dra96qhox/image/upload/v1704284949/Vector_3_mwqut0.png"
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
