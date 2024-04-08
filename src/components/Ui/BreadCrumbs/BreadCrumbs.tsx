
import Link from "next/link";
import { IBreadCrumbsProps } from "./lib/types/BreadCrumbsTypes";
// import { HiOutlineHome } from "react-icons/hi";
import { HiChevronRight } from "react-icons/hi";



const BreadCrumbs = ({links}:IBreadCrumbsProps) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        <li>
          <div>
            <Link href="/" className="text-secondary hover:text-secondary">
              {/* <HiOutlineHome className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Главная</span> */}
              <span>Главная</span>
            </Link>
          </div>
        </li>
        {links?.map((link, index) => (
          <li key={index}>
            <div className="flex items-center">
              <span className="text-secondary text-lg">
                <HiChevronRight />
              </span>
              <Link
                href={link.href}
                className={`ml-4 text-sm font-medium ${
                  link.current ? 'font-bold text-primary hover:text-primary' : 'text-secondary-400 hover:text-secondary'
                }`}
                aria-current={link.current ? 'page' : undefined}
              >
                {link.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default BreadCrumbs