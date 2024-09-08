import Image from "next/image";
import hk from "../../public/hk.png";

export function Hero() {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 uppercase cursor-default tracking-[-.1em]">
        <div className="col-span-1 lg:col-span-2 h-full bg-gray-100 min-h-[500px] lg:min-h-[300px] rounded-[2em] p-8">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#131313]">
            Hey I&apos;m Hasnain <br className="lg:hidden md:hidden sm:block"/> Khan 🚀
          </h1>
          <h1 className="text-4xl lg:text-6xl font-normal mt-3 text-[#202020]">
            I&apos;m a web developer & designer
            based in Pakistan 🇵🇰
          </h1>

          <a
            href="mailto:freelevance@gmail.com"
            className="relative inline-block text-lg group mt-5"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-[#131313] transition-colors duration-300 ease-out border-2 border-[#131313] rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#131313] group-hover:-rotate-180 ease"></span>
              <span className="GAP relative tracking-[-.05em]">
                get in touch !
              </span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#131313] rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </a>
        </div>

        <Image
          src={hk}
          alt="Hasnain Khan"
          className="img col-span-1 h-[500px] object-cover rounded-[2em] bg-gray-100"
          priority
        />
      </div>
    );
}