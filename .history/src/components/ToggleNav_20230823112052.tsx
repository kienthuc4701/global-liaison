import { useStore } from "@nanostores/preact";
import { isMenuOpen } from "@/store";
import { useRef } from "preact/hooks";

export default function ToggleNav({ menuRef }) {
  const _isMenuOpen = useStore(isMenuOpen);

  const btnRef = useRef();

  const handleToggle = (e: any) => {
    if (!menuRef.current || !menuRef.current.contains(e.target))
      isMenuOpen.set(!_isMenuOpen);
  };

  return (
    <button
      ref={btnRef}
      p-2
      className="rounded-full bg-gray-light"
      onClick={handleToggle}
    >
      {_isMenuOpen ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          style={{ fill: "#fff", transform: "", msfilter: "" }}
        >
          <path d="m6.293 13.293 1.414 1.414L12 10.414l4.293 4.293 1.414-1.414L12 7.586z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          style={{ fill: "#fff", transform: "", msfilter: "" }}
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
        </svg>
      )}
    </button>
  );
}
