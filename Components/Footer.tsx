import Image from "next/image";
import React from "react";
import { footerLinks } from "@/constants";
import Link from "next/link";

const Footer = () => {
  const currentYear: number = new Date().getFullYear();
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100 p-5">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-18">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/carLogo.png"
            alt="logo"
            width={118}
            height={18}
            className="object-conatin"
          />
          <p className="text-base text-gray-700">
            Carz 2023 <br />
            All rigts reserved &copy;
          </p>
        </div>

        <div className="footer__links">
          {footerLinks.map((Links) => (
            <div key={Links.title} className="footer__link">
              <h3 className="font-bold">{Links.title}</h3>
              {Links.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-16 py-10">
        <p>@{currentYear} Carz. All rights Reserved</p>
        <div className="footer__copyrights-link">
          <Link href="/" className="text-gray-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-gray-500">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
