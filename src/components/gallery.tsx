import Image from "next/image";

type Props = {
  images: string[];
};

// TO USE IT: 
// <Gallery
//   images={[
//     "/images/url-shortener-1.png",
//     "/images/url-shortener-2.png",
//     "/images/url-shortener-3.png",
//   ]}
// />
export default function Gallery({
  images,
}: Props) {
  return (
    <div
      className="
        grid
        md:grid-cols-2
        gap-6
        mt-16
      "
    >
      {images.map((image) => (
        <div
          key={image}
          className="
            rounded-3xl
            overflow-hidden
            border
            border-zinc-800
          "
        >
          <Image
            src={image}
            alt=""
            width={1200}
            height={800}
            className="w-full"
          />
        </div>
      ))}
    </div>
  );
}