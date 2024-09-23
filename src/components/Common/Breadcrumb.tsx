import Link from "next/link";

const Breadcrumb = ({
  pageName,
}: {
  pageName: string;
}) => {
  return (
    <>
      <section className="relative z-10 overflow-hidden  pb-[60px]">
        <ul className="flex items-center ">
          <li className="flex items-center">
            <Link
              href="/"
              className="pr-1 text-base font-medium text-body-color hover:text-primary"
            >
              Home
            </Link>
            <span className="mr-3 block h-2 w-2 rotate-45 border-r-2 border-t-2 border-body-color"></span>
          </li>
          <li className="text-base font-medium text-primary">
            {pageName}
          </li>
        </ul>
      </section >
    </>
  );
};

export default Breadcrumb;
