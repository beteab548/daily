import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "../themeSwitcher";

function NavHeader() {
  return (
    <>
      <div className="grid gap-4 grid-cols-7 px-2 py-4 sticky top-0 bg-white/30 backdrop-blur-md z-10">
        <div className="col-span-2 ">
          <div className="relative top-0">
            <Image
              src="/cropped daily logo.jpg"
              width={80}
              height={80}
              alt="logo"
              unoptimized
            />
          </div>
        </div>
        <div className="flex justify-center pt-2 pr-30 col-span-4 space-x-10 ">
          <div>
            <Link className="  hover:text-amber-400" href={"/home"}>
              Home
            </Link>
          </div>
          <div>
            <Link className="  hover:text-amber-400" href={"/products"}>
              Products
            </Link>
          </div>
          <div>
            <Link className="  hover:text-amber-400" href={"/home"}>
              About-us
            </Link>
          </div>
          <div>
            <Link className="  hover:text-amber-400" href={"/home"}>
              Contact
            </Link>
          </div>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
    </>
  );
}
export default NavHeader;
