import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from "next/link";
import NavLinks from "../NavLink/NavLinks";
import SearchBox from "../Search/SearchBox";

function Header() {
    return (
        <header>
            <div className="grid grid-cols-3 p-10 items-center">
                <Bars3Icon className="h-8 w-8 cursor-pointer" />

                <Link href="/Users/Carranza/Desktop/WEB/live-news/pages"  className="mx-auto" prefetch={false}>
                    <h1 className="font-serif text-4xl flex text-center justify-content-center ">
                        Live{" "}
                        <span className="underline decoration-amber-500 ml-3">News</span>
                    </h1>
                </Link>

                <div className="flex items-center justify-end space-x-2">

                    {/*DarkModeButton*/}
                    <button className="hidden md:inline bg-slate-900 text-white px-4
                        lg:px-8 py-2 lg:py-4 rounded-full dark:bg-slate-800" >
                    Subscribe Now
                    </button>
                </div>
            </div>

            {/*navLinks*/}
            <NavLinks/>

            {/*SearchBox*/}
            <SearchBox/>
        </header>
    )
}

export default Header;
