import {useState, useEffect} from "react";

export default function useMatchMedia() {
  const [isActive, setIsActive] = useState(false);
  const [breakpoint, setBreakpoint] = useState(false);

  useEffect(() => {
    const identifyMatchMedia = () => {
      let _breakpoint = window.matchMedia("(min-width: 992px)");

      const checkElement = (e) => {
        if (e.matches === true) {
          setIsActive(true);
          setBreakpoint(false);
        } else {
          setIsActive(false);
          setBreakpoint(true);
        }
      };

      _breakpoint.addListener(checkElement);
      checkElement(_breakpoint);
    };
    identifyMatchMedia();
    return () => {
      _breakpoint.removeListener(checkElement);
    };
  }, [setIsActive, setBreakpoint]);

  return [isActive, breakpoint];
}
