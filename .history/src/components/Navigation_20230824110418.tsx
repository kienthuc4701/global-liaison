import { useStore } from "@nanostores/preact";
import { isMenuOpen } from "@/store";

const Navigation = () => {
  const _isMenuOpen = useStore(isMenuOpen);
  return (
    <>
      {_isMenuOpen && (
        <div className="absolute top-14  flex flex-col items-end">
          <a
            class="
              block
              px-3
              py-1
              font-medium
              rounded-full
              w-fit hover:bg-bg-primary focus:bg-bg-primary"
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
            href="/recruitment/"
          >
            Recruitment
          </a>
        </div>
      )}
    </>
  );
};

export default Navigation;
