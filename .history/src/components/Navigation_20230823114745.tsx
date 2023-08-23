import { isMenuOpen, menuRef } from "@/store";
import { useStore } from "@nanostores/preact";
import { useEffect, useRef } from "preact/hooks";

const Navigation = () => {
  const _isMenuOpen = useStore(isMenuOpen);
  const _menuRef = useRef();

  _isMenuOpen && menuRef.set(_menuRef.current);

  return (
    <>
      {_isMenuOpen && (
        <div
          ref={_menuRef}
          className="absolute top-14 flex flex-col items-end"
          id="menu-top"
        >
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
            transition-colors ease-in-out delay-100 duration-300
            "
            href="/"
          >
            About Us
          </a>
          <a
            className="block 
            px-3
            py-1
            font-medium
            rounded-full
            w-fit hover:bg-[#30A2FF] focus:bg-[#30A2FF]
            transition-colors ease-in-out delay-100 duration-300
            "
            href="/recruitment"
          >
            Recruitment
          </a>
        </div>
      )}
    </>
  );
};

export default Navigation;
