import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Page() {
    return(
    <>
      <p>Dashboard Page</p>
      <Link
            href="/"
            className="flex items-center gap-3 self-start rounded-lg bg-blue-500 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
     </>
     )
    
  }
  