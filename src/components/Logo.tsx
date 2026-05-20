import logoSrc from "@/assets/logo.png";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#" className="flex items-center select-none" aria-label="The Off White">
      <img
        src={logoSrc}
        alt="The Off White"
        className={`h-12 md:h-14 w-auto object-contain transition-[filter] duration-500 ${
          light ? "brightness-0 invert" : ""
        }`}
      />
    </a>
  );
}
