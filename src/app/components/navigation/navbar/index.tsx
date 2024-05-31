import React from "react";
import Link from "next/link";

const Navbar = () => {
    return (
        <>
          <div className="w-full h-20 bg-emerald-800 sticky top-0">
            <div className="container mx-auto px-4 h-full">
              <div className="flex justify-between items-center h-full">
               
                <ul className="hidden md:flex gap-x-6 text-white">
                  <li>
                    <Link href="/about">
                      <p>Aboutme</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/booking">
                      <p>Book me</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/gallery">
                      <p>Gallery</p>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <p>Contact me</p>
                    </Link>
                  </li>
                </ul>
               
              </div>
            </div>
          </div>
        </>
      );
};

export default Navbar;