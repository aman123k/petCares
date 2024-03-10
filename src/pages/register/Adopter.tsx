import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

import { GiCheckMark } from "react-icons/gi";
import RegisterForm from "./RegisterForm";
import { Toaster } from "react-hot-toast";

function Adopter() {
  return (
    <>
      <Header />
      <section className=" bg-adopterRegister max-[650px]:py-36 max-[650px]:px-8 py-56 object-cover text-white font-Nunito px-24">
        <h1 className="font-semibold tracking-wider text-lg max-[650px]:text-sm">
          <Link to="/">Home </Link>/ Register For A PetCares Account
        </h1>
        <h3 className=" font-bold text-4xl tracking-wide mt-4 max-[650px]:text-3xl ">
          Register For A PetCares Account
        </h3>
      </section>
      <section className="flex gap-10 max-[650px]:gap-5 bg-[#F9F9F9] font-Nunito py-10 max-[850px]:flex-col-reverse">
        <div className=" w-[50%] max-[850px]:w-full px-10">
          <h1 className=" text-center font-bold tracking-wide text-2xl my-3">
            Register
          </h1>
          <p className="text-[#595959] text-center mb-8 ">
            Already have an account ?{" "}
            <Link to="/login" className=" text-[#7ddc22]">
              Login !
            </Link>
          </p>
          <RegisterForm />
        </div>
        <div className=" flex mt-4 w-[50%] flex-col gap-2 px-4 max-[650px]:px-6 max-[850px]:w-full max-[850px]:px-10">
          <h1 className="text-black text-2xl font-bold ">
            Benefits of a PetCares Adopters Account?
          </h1>
          <p className=" mt-2 max-[650px]:mt-1">
            Creating a PetCares account is easy and free, it gives you access to
            features such as:
          </p>
          <ul
            className="text-[#595959] flex flex-col gap-3.5 my-6 max-[650px]:my-3 max-[850px]:px-4
           max-[650px]:px-0"
          >
            <li className=" flex items-center gap-2">
              <GiCheckMark className="text-[#8bc27b] flex-shrink-0" />
              <p>
                You'll only need to complete one adoption form within your
                profile which can be used for multiple applications
              </p>
            </li>
            <li className=" flex items-center gap-2">
              <GiCheckMark className="text-[#8bc27b] flex-shrink-0" />
              <p>
                <span className="text-black font-semibold">
                  Getting alerts{" "}
                </span>
                when new pets become available
              </p>
            </li>
            <li className=" flex items-center gap-2">
              <GiCheckMark className="text-[#8bc27b] flex-shrink-0" />
              <p>
                Save your frequent and{" "}
                <span className="text-black font-semibold">
                  favorite pet searches
                </span>
              </p>
            </li>
            <li className=" flex items-center gap-2">
              <GiCheckMark className="text-[#8bc27b] flex-shrink-0" />
              <p>
                {" "}
                Make{" "}
                <span className="text-black font-semibold">
                  adoption applications
                </span>{" "}
                and{" "}
                <span className="text-black font-semibold">
                  message pet rehousers
                </span>
              </p>
            </li>
            <li className=" flex items-center gap-2">
              <GiCheckMark className="text-[#8bc27b] flex-shrink-0" />
              <p>
                Option to sign up to{" "}
                <span className="text-black font-semibold">
                  receive PetRehouser newsletters
                </span>{" "}
                and updates
              </p>
            </li>
          </ul>
          <p className="mt-2">
            Don't forget to review our
            <Link to="/guidelines" className="text-[#9BCC3A]">
              {" "}
              adoption guidelines{" "}
            </Link>{" "}
            and our pet{" "}
            <Link to="/pet-welfare" className="text-[#9BCC3A]">
              welfare guides{" "}
            </Link>{" "}
            to help you fully prepare for getting a new pet, and please make
            sure to keep your adopter's profile up to date.
          </p>
        </div>
      </section>
      <Footer />
      <Toaster />
    </>
  );
}

export default Adopter;
