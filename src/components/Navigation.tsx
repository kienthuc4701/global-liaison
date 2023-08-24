import { useStore } from "@nanostores/react";
import { isMenuOpen } from "@/store";

const Navigation = () => {
  const _isMenuOpen = useStore(isMenuOpen);
  return (
    <>
      {_isMenuOpen && (
        <div className="absolute top-15 flex flex-col items-end">
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
            href="/"
          >
            Recruitment
          </a>
        </div>
      )}
    </>
  );
};

export default Navigation;
