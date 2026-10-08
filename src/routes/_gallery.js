import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery({ images, alt }) {
  const [index, setIndex] = useState(-1);

  return (
    <>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            className="text-left rounded-md overflow-hidden border border-zemin bg-white hover:border-kraft"
          >
            <img
              className="w-full aspect-[4/3] object-cover"
              alt={image.title ?? alt}
              src={image.src}
              loading="lazy"
            />
          </button>
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images}
      />
    </>
  );
}
