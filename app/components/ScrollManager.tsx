import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const ScrollManager = (props: {
  section: number;
  setSection: (section: number) => void;
}) => {
  const { section, setSection } = props;

  const data = useScroll();
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);
  const scrollThreshold = 0.01; // Minimum scroll distance to trigger section change

  data.fill.classList.add("top-0");
  data.fill.classList.add("absolute");

  useEffect(() => {
    gsap.to(data.el, {
      duration: 1,
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true;
      },
      onComplete: () => {
        isAnimating.current = false;
      },
    });
  }, [section]);

  useFrame(() => {
    if (isAnimating.current) {
      lastScroll.current = data.offset;
      return;
    }

    const curSection = Math.floor(data.offset * data.pages);
    const scrollDelta = Math.abs(data.offset - lastScroll.current);

    // Only trigger section change if scroll distance is significant enough
    if (scrollDelta > scrollThreshold) {
      if (data.offset > lastScroll.current) {
        // Scrolling down - go to next section
        console.log("Scrolling down", curSection);
        if (curSection < data.pages - 1) {
          setSection(curSection + 1);
        }
      } else if (data.offset < lastScroll.current) {
        // Scrolling up - go to previous section
        console.log("Scrolling up", curSection);
        if (curSection > 0) {
          setSection(curSection - 1);
        }
      }
    }

    // if (
    //   data.offset < lastScroll.current &&
    //   data.offset < 1 / (data.pages - 1)
    // ) {
    //   console.log("Scrolling up");
    //   setSection(0);
    // }

    lastScroll.current = data.offset;
  });

  return null;
};

export default ScrollManager;
