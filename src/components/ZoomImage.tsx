interface ZoomImageProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ({ src, alt, onClose }: ZoomImageProps) {
  const styles = `
    .zoom-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease-in-out;
      z-index: 1000;
    }

    .zoom-overlay.open {
      opacity: 1;
      visibility: visible;
    }

    .zoom-overlay img {
      max-width: 90%;
      max-height: 90%;
      object-fit: contain;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="zoom-overlay open" onClick={onClose}>
        <img src={src} alt={alt} />
      </div>
    </>
  );
}
