import { isMenuOpen } from "@/store";
import { useStore } from "@nanostores/react";

const ToggleNav = () => {
  const _isMenuOpen = useStore(isMenuOpen);

  const handleToggle = () => {
    isMenuOpen.set(!_isMenuOpen)
  };

  return (
    <button
      className="relative rounded-full bg-slate-500 p-2"
      onClick={handleToggle}
    >
      {_isMenuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          style={{ fill: "#fff"}}
        >
          <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          style={{ fill: "#fff"}}
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
        </svg>
      )}
    </button>
  );
};
export default ToggleNav;
