import React, { useEffect, useRef } from "react";
import { words } from "./data";
import { gsap } from "gsap";

import styles from "./Loader.module.scss";

const Loader = () => {
  const wrapperRef = useRef(null);
  const progressRef = useRef(null);
  const loaderProgressNumberRef = useRef(null);
  const wordsGroupRef = useRef(null);

  useEffect(() => {
    gsap.to(wordsGroupRef.current, {
      yPercent: -80,
      duration: 5,
      ease: "expo.inOut",
    }); // access object by using .current

    gsap.to(progressRef.current, {
      scale: 1,
      duration: 5,
      ease: "expo.inOut",
    });
  }, []); // empty dependency array, run once on load

  return (
    <div className={styles.loader__wrapper} ref={wrapperRef}>
      {/* targets using ref */}
      <div className={styles.loader__progressWrapper}>
        <div className={styles.loader__progress} ref={progressRef}></div>
        <span
          className={styles.loader__progressNumber}
          ref={loaderProgressNumberRef}
        >
          0
        </span>
      </div>
      <div className={styles.loader}>
        <div className={styles.loader__words}>
          <div className={styles.loader__overlay}></div>
          <div className={styles.loader__wordsGroup} ref={wordsGroupRef}>
            {words.map((word, index) => {
              return (
                <span key={index} className={styles.loader__word}>
                  {word}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
