import React from 'react'
import intro from "../assets/image.avif";
import { Helmet } from 'react-helmet';

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="Get in touch with us" />
      </Helmet>
      <div className="intro vh-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <h2>Contact US</h2>
        <p>
          We are here to help you! <br /> Fake store
        </p>
      </div>
    </>
  )
}
