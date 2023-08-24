import Logo from "./Logo.astro";
import Navigation from "./Navigation.astro";
import ToggleNav from "./ToggleNav";

export default function Header() {
  return (
    <header relative class="h-[100vh] bg-header">
      <div absolute w-full flex items-center justify-between p-5 text-white>
        <Logo />
        <div flex items-center justify-between gap-x-2>
          <a
            block
            px-3
            py-1
            font-medium
            rounded-full
            w-fit
            class="bg-[#30A2FF] hover:bg-[#30A2FF] focus:bg-[#30A2FF]"
            href="/"
          >
            Contact
          </a>
          <ToggleNav />
          {<Navigation />}
        </div>
      </div>
    </header>
  );
}
