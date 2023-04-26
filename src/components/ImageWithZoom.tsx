import { useState } from "react";
import ZoomImage from "./ZoomImage";

interface ImageWithZoomProps {
  src: string;
  alt: string;
}

export default function ({ src, alt }: ImageWithZoomProps) {
  const [showZoom, setShowZoom] = useState(false);

  const toggleZoom = () => {
    setShowZoom(!showZoom);
  };

  const styles = `
    .image-container {
      position: relative;
      cursor: pointer;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="image-container" onClick={toggleZoom}>
        <img src={src} alt={alt} />
        {showZoom && <ZoomImage src={src} alt={alt} onClose={toggleZoom} />}
      </div>
    </>
  );
}
