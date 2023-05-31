import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const imgs = [
  {
    id: 0,
    src: "/images/birkolkart.jpg",
  },
  {
    id: 1,
    src: "/images/birkolon.jpg",
  },
  {
    id:24,
    src:"images/birkol/depowide_16x9.png"
  },
  {
    id:2,
    src:"images/birkol/araba2_16x9.png"
  },
  {
    id:3,
    src:"images/birkol/araba1_16x9.png"
  },
  {
    id:4,
    src:"images/birkol/araba3_16x9.png"
  },
  {
    id:5,
    src:"images/birkol/buzhane_16x9.png"
  },
  {
    id:6,
    src:"images/birkol/buzhane2_16x9.png"
  },
  {
    id:7,
    src:"images/birkol/buzhane3_16x9.png"
  },
  {
    id:8,
    src:"images/birkol/canikkoliler_16x9.png"
  },
  {
    id:9,
    src:"images/birkol/canikkoliler2_16x9.png"
  },
  {
    id:10,
    src:"images/birkol/canikkoliler3_16x9.png"
  },
  {
    id:11,
    src:"images/birkol/yardimciteneke_16x9.png"
  },
  {
    id:12,
    src:"images/birkol/yardimciteneke2_16x9.png"
  },
  {
    id:13,
    src:"images/birkol/yardimciteneke3_16x9.png"
  },
  {
    id:14,
    src:"images/birkol/kolikayisi_16x9.png"
  },
  {
    id:15,
    src:"images/birkol/kolikayisi2_16x9.png"
  },
  {
    id:16,
    src:"images/birkol/kolikayisi3_16x9.png"
  },
  {
    id:17,
    src:"images/birkol/cargillvekayisi_16x9.png"
  },
  {
    id:18,
    src:"images/birkol/cargillvekayisi2_16x9.png"
  },
  {
    id:19,
    src:"images/birkol/cargillvekayisi3_16x9.png"
  },
  {
    id:20,
    src:"images/birkol/cargillstack_16x9.png"
  },
  {
    id:21,
    src:"images/birkol/cargillstack2_16x9.png"
  },
  {
    id:23,
    src:"images/birkol/saffetabd_16x9.png"
  },
  {
    id:24,
    src:"images/birkol/saffetabd2_16x9.png"
  },
];

export default function Home() {
  return (
    <div>
      <div className="flex justify-center items-center mt-6">
        <Carousel className="carousel-cont max-w-[360px] md:max-w-[936px]" infiniteLoop autoPlay>
          {imgs.map((image) => (
            <div>
              <img alt={image.src} src={image.src}></img>
              {image.alt != null && <p className="legend">{image.alt}</p>}
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
