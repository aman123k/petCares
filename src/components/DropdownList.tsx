import React from "react";
import { Link } from "react-router-dom";

function DropdownListAdopter() {
  return (
    <>
      <div className="absolute top-5 left-10 z-50">
        <nav className="  bg-white px-10 mt-9  py-9 rounded-xl drop-shadow-xl">
          <div className="w-6 bg-white h-6 absolute drop-shadow-xl top-[-24px] right-8 [clip-path:polygon(51%_40%,0_100%,100%_100%)]"></div>
          <ul className="flex flex-col gap-4 tracking-wide">
            <Link to="/are-you-ready-to-adopt-a-pet">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Are You Ready To Adopt A Pet?
              </li>
              <hr />
            </Link>
            <Link to="/for_adopter">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                How It Works - Adopters
              </li>
              <hr />
            </Link>
            <Link to="/guidelines">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Adoption Guidelines
              </li>
              <hr />
            </Link>
            <Link to="/tips-for-adopters">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Top Tips For Adopters
              </li>
              <hr />
            </Link>
            <Link to="/adopters-faqs">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Adopters FAQs
              </li>
              <hr />
            </Link>
            <Link to="/">
              <li className="text-[#595959] pb-4 hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Testimonials from Adopters
              </li>
              <hr />
            </Link>
            <Link to="/adopt-a-pet">
              <li className="text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Browse Pets
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
function DropdownListRehouse() {
  return (
    <>
      <div className="absolute top-5 right-40 z-50">
        <nav className="  bg-white px-10 mt-9  py-9 rounded-xl drop-shadow-xl">
          <div className="w-6 bg-white h-6 absolute drop-shadow-xl top-[-24px] right-8 [clip-path:polygon(51%_40%,0_100%,100%_100%)]"></div>
          <ul className="flex flex-col gap-4 tracking-wide">
            <Link to="/for_rehousers">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                How It Works - Rehomers
              </li>
              <hr />
            </Link>
            <Link to="/giving-up-a-dog">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Giving Up A Dog
              </li>
              <hr />
            </Link>
            <Link to="/giving-up-a-cat">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Giving Up A Cat
              </li>
              <hr />
            </Link>
            <Link to="/giving-up-a-rabbit">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Giving Up A Rabbit
              </li>
              <hr />
            </Link>
            <Link to="/giving-up-a-parrot">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Giving Up A Parrot
              </li>
              <hr />
            </Link>
            <Link to="/tips-for-rehouser">
              <li className="pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Tips For Rehousers
              </li>
              <hr />
            </Link>
            <Link to="/rehousers-faq">
              <li className="pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Rehousers FAQ's
              </li>
              <hr />
            </Link>
            <Link to="/">
              <li className="pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Testimonials from Rehousers
              </li>
              <hr />
            </Link>
            <Link to="/rehouse-a-pet">
              <li className="text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Rehouser My Pet
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}
function DropdownListOther() {
  return (
    <>
      <div className="absolute top-5 right-0 z-50">
        <nav className="  bg-white px-10 mt-9  py-9 rounded-xl drop-shadow-xl">
          <div className="w-6 bg-white h-6 absolute drop-shadow-xl top-[-24px] right-8 [clip-path:polygon(51%_40%,0_100%,100%_100%)]"></div>
          <ul className="flex flex-col gap-4 tracking-wide">
            <Link to="/frequently-asked-questions">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Frequently Asked Questions
              </li>
              <hr />
            </Link>
            <Link to="/pet-welfare">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Pet Care Information
              </li>
              <hr />
            </Link>
            <Link to="/contact-petcares">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Contact PetRehomer
              </li>
              <hr />
            </Link>
            <Link to="/">
              <li className=" pb-4 text-[#595959] hover:text-[#5FA501] hover:translate-x-3 duration-200 ease-in-out">
                Donate to Neuter
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export { DropdownListAdopter, DropdownListRehouse, DropdownListOther };
