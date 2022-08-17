import React, { useRef } from "react";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import favicon from "../../images/favicon.ico";

const Template = ({ children, currentPage }) => {
  return (
    <>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="48x48"
          href="/icons/icon-48x48.png?v=53aa06cf17e4239d0dba6ffd09854e02"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/icons/icon-72x72.png?v=53aa06cf17e4239d0dba6ffd09854e02"
        />
        <link
          rel="apple-touch-icon"
          sizes="96x96"
          href="/icons/icon-96x96.png?v=53aa06cf17e4239d0dba6ffd09854e02"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/icons/icon-144x144.png?v=53aa06cf17e4239d0dba6ffd09854e02"
        />
        <link
          rel="apple-touch-icon"
          sizes="192x192"
          href="/icons/icon-192x192.png?v=53aa06cf17e4239d0dba6ffd09854e02"
        />
        <link
          rel="apple-touch-icon"
          sizes="256x256"
          href="/icons/icon-256x256.png?v=53aa06cf17e4239d0dba6ffd09854e02"
        />
        <link
          rel="apple-touch-icon"
          sizes="384x384"
          href="/icons/icon-384x384.png?v=53aa06cf17e4239d0dba6ffd09854e02"
        />
        <link
          rel="apple-touch-icon"
          sizes="512x512"
          href="/icons/icon-512x512.png?v=53aa06cf17e4239d0dba6ffd09854e02"
        />
      </head>
      <Navbar currentPage={currentPage} />
      {children}
      <ToastContainer theme="dark" />
      <Footer />
    </>
  );
};

export default Template;
