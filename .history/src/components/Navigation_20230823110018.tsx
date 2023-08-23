import { isMenuOpen } from "@/store";

const Navigation = () => {
  const _isMenuOpen = isMenuOpen.get();

  console.log(_isMenuOpen);

  return (
    <div className="absolute top-14 flex-col items-end">
      <a
        px-3
        py-1
        font-medium
        rounded-full
        w-fit
        className="block hover:bg-[#30A2FF] focus:bg-[#30A2FF]"
        href="/"
      >
        Home
      </a>
      <a
        px-3
        py-1
        font-medium
        rounded-full
        w-fit
        className="block hover:bg-[#30A2FF] focus:bg-[#30A2FF]"
        href="/recruitment/"
      >
        Recruitment
      </a>
      <a
        px-3
        py-1
        font-medium
        rounded-full
        w-fit
        className="block hover:bg-[#30A2FF] focus:bg-[#30A2FF]"
        href="/contact/"
      >
        Contact Us
      </a>
    </div>
  );
};

export default Navigation;
