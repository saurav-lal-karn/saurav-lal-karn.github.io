import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.08;

let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;
const Cursor = () => {
  const cursorOutline = useRef<HTMLDivElement>(null);
  const [hoverButton, setHoverButton] = useState(false);

  const animate = () => {
    const distX = mouseX - outlineX;
    const distY = mouseY - outlineY;

    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    if (cursorOutline.current) {
      cursorOutline.current.style.left = `${outlineX}px`;
      cursorOutline.current.style.top = `${outlineY}px`;
    }
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const mouseEventsListener = (document as Document).addEventListener(
      "mousemove",
      function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
      }
    );
    const animateEvent = requestAnimationFrame(animate);
    return () => {
      document.removeEventListener("mousemove", function (event) {
        mouseX = event.pageX;
        mouseY = event.pageY;
      });
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  useEffect(() => {
    const mouseEventListener = (document as Document).addEventListener(
      "mouseover",
      function (e) {
        if (
          (e.target as HTMLElement).tagName.toLowerCase() === "button" ||
          // check parent is button
          (e.target as HTMLElement).parentElement?.tagName.toLowerCase() ===
            "button" ||
          // check is input or textarea
          (e.target as HTMLElement).tagName.toLowerCase() === "input" ||
          (e.target as HTMLElement).tagName.toLowerCase() === "textarea"
        ) {
          setHoverButton(true);
        } else {
          setHoverButton(false);
        }
      }
    );
    return () => {
      document.removeEventListener("mouseover", function (e) {
        if (
          (e.target as HTMLElement).tagName.toLowerCase() === "button" ||
          // check parent is button
          (e.target as HTMLElement).parentElement?.tagName.toLowerCase() ===
            "button" ||
          // check is input or textarea
          (e.target as HTMLElement).tagName.toLowerCase() === "input" ||
          (e.target as HTMLElement).tagName.toLowerCase() === "textarea"
        ) {
          setHoverButton(true);
        } else {
          setHoverButton(false);
        }
      });
    };
  }, []);

  return (
    <>
      <div
        className={`z-50 fixed -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-transform
        ${
          hoverButton
            ? "bg-transparent border-2 border-blue-600 w-5 h-5"
            : "bg-gradient-to-r from-blue-500 to-purple-500 w-3 h-3"
        }`}
        ref={cursorOutline}
      ></div>
    </>
  );
};

export default Cursor;
