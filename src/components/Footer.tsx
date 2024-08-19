import React from "react";
import { Link } from "react-router-dom";

import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";

function Footer() {
  return (
    <>
      <section
        className="bg-[#595959] max-[650px]:flex max-[1000px]:grid-cols-2 text-white grid grid-cols-5 justify-between px-8 py-6
       max-[650px]:flex-col max-[650px]:gap-8 gap-8 max-[650px]:text-sm font-Nunito  "
      >
        <section className="col-span-2 max-[1000px]:col-span-1 max-[650px]:grid-cols-1 max-[650px]:w-full">
          <h1 className="font-bold text-2xl tracking-wide">About PetCares</h1>
          <p className="pt-5 tracking-wide leading-8">
            We are revolutionizing the responsible rehousing and adoption of
            pets in Delhi, Punjab, and Haryana through PetCares, a creation of
            Charity Buddy, a registered animal welfare charity (No. 0000000). We
            believe that it's time to elevate the standards of pet rehousing and
            adoption to benefit pets, and people, and ensure safety for all
            involved. Collaboratively, we strive to establish a more
            compassionate and improved adoption process, making it better for
            pets, great for people, and ultimately safer for everyone involved.
          </p>
        </section>
        <section>
          <h1 className="font-bold text-2xl tracking-wide">Quick Links</h1>
          <ul className="mt-4 flex flex-col gap-2.5">
            <Link
              to="/frequently-asked-questions"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Frequently Asked Questions</li>
            </Link>
            <Link
              to="/are-you-ready-to-adopt-a-pet"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Check If You're Ready To Adopt A Pet</li>
            </Link>
            <Link
              to="/register"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Register for a free PetCares Account</li>
            </Link>
            <Link
              to="/login"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Login to your PetCares Account</li>
            </Link>
            <Link
              to="/tips-for-adopters"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Tips For Adopters</li>
            </Link>
            <Link
              to="/tips-for-rehouser"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Tips For Rehousers</li>
            </Link>
            <Link
              to="/contact-petcares"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Contact PetCares</li>
            </Link>

            <Link
              to="/about"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>About Us</li>
            </Link>
            <Link
              to="/testimonials-from-adopters"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Testimonials from Adopter</li>
            </Link>
          </ul>
        </section>
        <section>
          <h1 className="font-bold text-2xl tracking-wide">Quick Links</h1>
          <ul className="mt-4 flex flex-col gap-2.5">
            <Link
              to="/for_rehousers"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>How It Works - Rehomers</li>
            </Link>
            <Link
              to="/for_adopter"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>How It Works - Adopters</li>
            </Link>
            <Link
              to="/guidelines"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Adoption Guidelines</li>
            </Link>
            <Link
              to="/giving-up-a-dog"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Giving up a dog</li>
            </Link>
            <Link
              to="/giving-up-a-cat"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Giving up a cat</li>
            </Link>
            <Link
              to="/giving-up-a-rabbit"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Giving up a rabbit</li>
            </Link>
            <Link
              to="/giving-up-a-parrot"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Giving up a parrot</li>
            </Link>
            <Link
              to="/pet-welfare"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Pet Care Information</li>
            </Link>
            <Link
              to="/testimonials-from-rehouser"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Testimonials from Rehousers</li>
            </Link>
            <Link
              to="/donate-to-neuter"
              className=" hover:translate-x-3 ease-in-out duration-200"
              onClick={() => window.scrollTo(0, 0)}
            >
              <li>Donate to Neuter</li>
            </Link>
          </ul>
        </section>
        <section>
          <h1 className="font-bold text-2xl tracking-wide">Follow Us</h1>
          <div className=" flex gap-10 max-[650px]:gap-6 justify-start mt-4 max-[650px]:justify-start">
            <Link to="https://twitter.com/Sudeesh76639641">
              <FaTwitter className="text-2xl" />
            </Link>
            <Link to="https://www.facebook.com/profile.php?id=100031828202887">
              <IoLogoFacebook className="text-2xl" />
            </Link>
            <Link to="https://www.instagram.com/aman_kashyap2.0">
              <FaInstagram className="text-2xl" />
            </Link>
          </div>
        </section>
      </section>
    </>
  );
}

export default Footer;
