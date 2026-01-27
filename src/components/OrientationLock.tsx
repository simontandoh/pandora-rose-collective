import { useEffect, useState } from "react";
import "../styles/orientation-lock.css";

const OrientationLock = () => {
  const [isLocked, setIsLocked] = useState(false);

  useEffect(() => {
    const updateLockState = () => {
      const isPortrait = window.matchMedia("(orientation: portrait)").matches;
      const isPhoneWidth = window.innerWidth <= 768;
      const shouldLock = isPortrait && isPhoneWidth;

      setIsLocked(shouldLock);
      document.body.classList.toggle("orientation-lock-body", shouldLock);
    };

    updateLockState();
    window.addEventListener("resize", updateLockState);
    window.addEventListener("orientationchange", updateLockState);

    return () => {
      window.removeEventListener("resize", updateLockState);
      window.removeEventListener("orientationchange", updateLockState);
      document.body.classList.remove("orientation-lock-body");
    };
  }, []);

  return (
    <div
      className={`orientation-lock${isLocked ? " is-visible" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isLocked}
    >
      <div className="orientation-lock__content">
        <div className="orientation-lock__icon" aria-hidden="true">
          ↻
        </div>
        <h1 className="orientation-lock__title">Rotate device</h1>
        <p className="orientation-lock__body">
          This experience is designed for landscape viewing.
        </p>
      </div>
    </div>
  );
};

export default OrientationLock;
