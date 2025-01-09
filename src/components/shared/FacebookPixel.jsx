"use client"; // Ensure this is a client-side component

import { useEffect } from "react";

const FB_PIXEL_ID = "2259293477774417"; // Replace with your Pixel ID if needed

// Initialize Facebook Pixel
const initFacebookPixel = () => {
  if (typeof window === "undefined") return; // Ensure this runs only on the client side
  if (window.fbq) return; // Avoid multiple initializations

  (function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod
        ? n.callMethod.apply(n, arguments)
        : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = true;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = true;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );

  // Initialize the Pixel with your ID
  fbq("init", FB_PIXEL_ID);
  fbq("track", "PageView");
};

// FacebookPixel Component
export default function FacebookPixel() {
  useEffect(() => {
    initFacebookPixel();
  }, []); // Empty dependency array ensures it runs only once

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        alt="Facebook Pixel"
      />
    </noscript>
  );
}
