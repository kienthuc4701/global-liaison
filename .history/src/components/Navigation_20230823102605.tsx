import { isMenuOpen } from "@/store";
import { useStore } from "@nanostores/preact";

const _isMenuOpen = isMenuOpen.get();

export default function Navigation() {
  return (
    <div top-14 flex-col items-end>
      <a
        block
        px-3
        py-1
        font-medium
        rounded-full
        w-fit
        class="hover:bg-[#30A2FF] focus:bg-[#30A2FF]"
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
        class="hover:bg-[#30A2FF] focus:bg-[#30A2FF]"
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
        class="hover:bg-[#30A2FF] focus:bg-[#30A2FF]"
        href="/contact/"
      >
        Contact Us
      </a>
    </div>
  );
}
