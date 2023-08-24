import { isMenuOpen } from "@/store";
import { useStore } from "@nanostores/preact";

const Navigation = () => {
  const _isMenuOpen = useStore(isMenuOpen);

  return (
    <>
      {_isMenuOpen && (
        <div className="absolute top-14 flex flex-col items-end">
          <a
            className="
            block 
            px-3
            py-1
            font-medium
            rounded-full
            w-fit 
            hover:bg-[#30A2FF] 
            focus:bg-[#30A2FF]
            transition-colors ease-in-out duration-300
            "
            href="/"
          >
            Home
          </a>
          <a
            className="block 
            px-3
            py-1
            font-medium
            rounded-full
            w-fit hover:bg-[#30A2FF] focus:bg-[#30A2FF]"
            href="/recruitment"
          >
            Recruitment
          </a>
          <a
            className="
            block
            px-3
            py-1
            font-medium
            rounded-full
            w-fit
            hover:bg-[#30A2FF] focus:bg-[#30A2FF]"
            href="/contact"
          >
            Contact Us
          </a>
        </div>
      )}
    </>
  );
};

export default Navigation;
