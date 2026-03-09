import { useEffect } from "react";

function CustomeScript() {
  useEffect(() => {
    // const container = document.querySelector(".content-scroll");
    const isMobile = window.innerWidth <= 700;

    // choose scroll container
    const container = document.querySelector(
      isMobile ? ".container" : ".content-scroll"
    );
    if (!container) return;

    let interval;
    let direction = 1; // 1 = down, -1 = up

    const autoScroll = () => {
      container.scrollTop += direction;

      console.log(`Scroll Top: ${container.scrollTop}, Client Height: ${container.clientHeight}, Scroll Height: ${container.scrollHeight}`);

      if (
        container.scrollTop + container.clientHeight >= container.scrollHeight
      ) {
        direction = -1; // start scrolling up
      }

      if (container.scrollTop <= 0) {
        direction = 1; // start scrolling down
      }
    };

    const startScroll = () => {
      interval = setInterval(autoScroll, 40);
    };

    const stopScroll = () => {
      clearInterval(interval);
    };

    startScroll();

    container.addEventListener("mouseenter", stopScroll);
    container.addEventListener("mouseleave", startScroll);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", stopScroll);
      container.removeEventListener("mouseleave", startScroll);
    };
  }, []);

  return null;
}

export default CustomeScript;