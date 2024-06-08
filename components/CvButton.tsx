import Link from "next/link";

const CvButton = () => {
    return (
        <>
            <Link href={'#contact'} className="md:px-7 sm:px-5 px-4 md:py-2 py-1.5 lg:text-xl sm:text-lg sm:text-md text-xs bg-blue-600 dark:bg-slate-600 text-slate-100 font-semibold rounded-full hover:bg-blue-700 dark:hover:bg-slate-950">
              Contact Me
            </Link>
        </>
    );
};

export default CvButton;
