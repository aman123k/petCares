import { GiCheckMark } from "react-icons/gi";
import RegisterForm from "./RegisterForm";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { Toaster } from "react-hot-toast";

function Rehouser() {
  return (
    <>
      <Header />
      <section className=" bg-adopterRegister py-56 max-[650px]:py-36 max-[650px]:px-8 object-cover text-white font-Nunito px-24">
        <h1 className="font-semibold tracking-wider text-lg max-[650px]:text-sm">
          <Link to="/">Home </Link>/ Register For A PetCares Account
        </h1>
        <h3 className=" font-bold text-4xl tracking-wide max-[650px]:text-3xl mt-4">
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
            Benefits of a PetCares PetRehouser Account?
          </h1>
          <p className=" mt-2 max-[650px]:mt-1">
            Creating a PetCares (Rehousers) account is easy and free, it gives
            you access to great features such as:
          </p>
          <ul
            className="text-[#595959] flex flex-col gap-3.5 my-6 max-[650px]:my-3 max-[850px]:px-4
           max-[650px]:px-0"
          >
            <li className=" flex items-center gap-2">
              <GiCheckMark className="text-[#8bc27b] flex-shrink-0" />
              <p>
                Being alerted when new{" "}
                <span className="text-black font-semibold">
                  inquiries are made about your pet
                </span>
              </p>
            </li>
            <li className=" flex items-center gap-2">
              <GiCheckMark className="text-[#8bc27b] flex-shrink-0" />
              <p>
                Keep{" "}
                <span className="text-black font-semibold">
                  track of your messages
                </span>
              </p>
            </li>
            <li className=" flex items-center gap-2">
              <GiCheckMark className="text-[#8bc27b] flex-shrink-0" />
              <p>
                <span className="text-black font-semibold">
                  Save your profile{" "}
                </span>
                details making the adoption process quicker
              </p>
            </li>
            <li className=" flex items-center gap-2">
              <GiCheckMark className="text-[#8bc27b] flex-shrink-0" />
              <p>
                <span className="text-black font-semibold">
                  Option to sign up to receive PetRehouser
                </span>{" "}
                newsletters and updates
              </p>
            </li>
          </ul>
          <p className="mt-2">
            Don't forget to review our Don't forget to review our{" "}
            <Link to="/tips-for-rehouser" className="text-[#9BCC3A]">
              {" "}
              tips for rehousers page{" "}
            </Link>{" "}
            where you will find details of what should be included in your pet's
            profile to give them the best chance of being successfully rehomed.
          </p>
        </div>
      </section>
      <Footer />
      <Toaster />
    </>
  );
}
export default Rehouser;
