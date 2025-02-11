import React from 'react';
import Logo from './assets/logo.webp';
import {Menus} from './utils';
import DesktopMenus from './components/DesktopMenus';
import MobileMenu from './components/MobileMenu';

function App() {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#18181a]">
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
            <img src={Logo} alt="logo" className="size-8" />
            <h3 className="text-lg font-semibold">Framer</h3>
          </div>

          {/* Menus */}
          <ul className="lg:flex-center gap-x-1 hidden">
            {Menus.map((menu) => (
              <DesktopMenus menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <button className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center">
              Sign In
            </button>
            <div className="lg:hidden">
              <MobileMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default App;
