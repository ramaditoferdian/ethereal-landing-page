"use client";

import { useEffect, useState } from "react";

const useDevice = (
  breakpoints = { "mobile-small": 320, mobile: 767, tablet: 768, desktop: 1024 }
) => {
  const [device, setDevice] = useState("desktop");

  useEffect(() => {
    const checkDevice = () => {
      const width = window.innerWidth;
      if (width <= breakpoints.mobile) {
        setDevice("mobile-small");
      } else if (width >= breakpoints.mobile && width < breakpoints.tablet) {
        setDevice("mobile");
      } else if (width >= breakpoints.tablet && width < breakpoints.desktop) {
        setDevice("tablet");
      } else {
        setDevice("desktop");
      }
    };

    // Initial check and event listener setup
    checkDevice();
    window.addEventListener("resize", checkDevice);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", checkDevice);
  }, [breakpoints]);

  return device;
};

export default useDevice;
