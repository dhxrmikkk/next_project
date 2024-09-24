import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="pt-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-white border border-t-gray-300 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={64} height={64} />
          </Link>
          <p>
            3252 Winding Way, Central Plaza, Willowbrook, CA 90210, United
            States
          </p>
          <Link href="mailto:nikedummy@gmail.com" className="font-semibold">
            nikedummy@gmail.com
          </Link>
          <Link href="tel:+919898989898" className="font-semibold">
            +91 9898989898
          </Link>
          <div className="flex gap-6">
            <Link href="#">
              <Image src="/facebook.png" alt="" width={16} height={16} />
            </Link>
            <Link href="#">
              <Image src="/instagram.png" alt="" width={16} height={16} />
            </Link>
            <Link href="#">
              <Image src="/x.png" alt="" width={16} height={16} />
            </Link>
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">COMPANY</h1>
            <div className="flex flex-col gap-6">
              <Link href="">About Us</Link>
              <Link href="">Careers</Link>
              <Link href="">Affiliates</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact Us</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">SHOP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">New Arrivals</Link>
              <Link href="">Accessories</Link>
              <Link href="">Men</Link>
              <Link href="">Women</Link>
              <Link href="">All Products</Link>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="font-medium text-lg">HELP</h1>
            <div className="flex flex-col gap-6">
              <Link href="">Customer Service</Link>
              <Link href="">My Account</Link>
              <Link href="">Find a Store</Link>
              <Link href="">Legal & Privacy</Link>
              <Link href="">Gift Card</Link>
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <h1 className="font-medium text-lg">SUBSCRIBE</h1>
          <p>
            Be the first to get the latest news about trends, promotions, and
            much more!
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="p-2 w-3/4 bg-gray-100 rounded-l-md"
              required
            />
            <button
              type="submit"
              className="w-1/4 bg-black text-white rounded-r-md"
            >
              JOIN
            </button>
          </form>
          <span className="font-semibold">Secure Payments</span>
          <div className="flex justify-between">
            <Image src="/discover.png" alt="" width={40} height={20} />
            <Image src="/skrill.png" alt="" width={40} height={20} />
            <Image src="/paypal.png" alt="" width={40} height={20} />
            <Image src="/mastercard.png" alt="" width={40} height={20} />
            <Image src="/visa.png" alt="" width={40} height={20} />
          </div>
        </div>
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="">© 2024 Nike Shop Dummy Copyright</div>
      </div>
    </div>
  );
};

export default Footer;
