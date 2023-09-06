import { useStore } from "@nanostores/react";
import { isMenuOpen } from "@/store";

const Navigation = () => {
  const _isMenuOpen = useStore(isMenuOpen);
  return (
    <>
      {_isMenuOpen && (
        <div className="absolute top-12 flex flex-col items-end animated animated-fade-in-up text-shadow">
          <a
            className="
              block
              mb-2
              px-3
              py-1
              font-medium
              rounded-full
              w-fit hover:bg-primary focus:bg-primary"
            href="/"
          >
            Home
          </a>
          <a
            className="
              block
              px-3
              py-1
              mb-2
              font-medium
              rounded-full
              w-fit hover:bg-primary focus:bg-primary"
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
