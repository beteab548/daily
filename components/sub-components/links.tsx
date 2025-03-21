import Image from "next/image";

export default function IconButton({ type }: { type: string }) {
  return (
    <a
      href={`${
        type === "appstore"
          ? "https://www.apple.com/app-store"
          : "https://play.google.com/store"
      }`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={`/${
          type === "appstore" ? "appstore-icon.svg" : "playstore-icon.svg"
        }`} // Download an SVG and place it in your public folder
        alt="Get it on Google Play"
        width={50}
        height={50}
      />
    </a>
  );
}
