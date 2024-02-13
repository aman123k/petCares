import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { HiMiniHome } from "react-icons/hi2";
import { LuDog } from "react-icons/lu";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <Header />
      <section className="p-8 bg-[#F9F9F9] max-[650px]:px-5">
        <section className="font-Nunito rounded-3xl text-center py-24 max-[650px]:py-10 drop-shadow-xl  bg-white">
          <h1 className="font-bold text-2xl tracking-wide">
            Register a new account
          </h1>
          <ul>
            <li className="text-[#595959] px-52 pt-5 max-[650px]:px-8 max-[1300px]:px-[10%] max-[650px]:text-sm">
              To facilitate the adoption or rehousing of a pet through our
              platform, we recommend creating a free account. This will allow
              you to share information about either your pet, if you're the one
              looking to rehouse, or the type of home you can provide if you're
              seeking to adopt.
            </li>
            <li className="text-[#595959] pt-2 px-56 max-[650px]:px-8 max-[1300px]:px-[10%] max-[650px]:text-sm">
              By completing this account setup now, you can save valuable time
              when you're ready to proceed with the adoption or rehoming
              process.
            </li>
            <li className="text-[#595959] pt-2 px-56 max-[650px]:px-8 max-[1300px]:px-[10%] max-[650px]:text-sm">
              It's advisable to provide comprehensive details to help the other
              party make an informed decision. If you're a rehomer, you might
              also want to explore our helpful tips for rehoming.
            </li>
          </ul>
          <section
            className=" flex justify-center text-center items-center mt-8 max-[650px]:px-6
           gap-10 max-[850px]:flex-col max-[650px]:items-stretch px-16"
          >
            <Link to="/register_adopt">
              <div
                className="bg-[#E5EBE3]  px-20 py-14 rounded-3xl flex flex-col max-[1050px]:py-[8%]
               max-[400px]:px-[14%] gap-14 max-[850px]:w-[500px] max-[650px]:w-full
              max-[650px]:gap-10 hover:drop-shadow-xl hover:drop-[#E5EBE3]"
              >
                <h1 className=" max-[650px]:text-xl text-2xl max-[650px]:pt-4 font-bold">
                  Register to Adopt a pet
                </h1>
                <LuDog className="text-[#8BC27B] max-[650px]:text-9xl text-[12rem] ml-[50%] translate-x-[-50%]" />
              </div>
            </Link>
            <Link to="/register_rehouse_your_pet">
              <div
                className="bg-[#E5EBE3]  px-20 py-14 rounded-3xl flex flex-col max-[1050px]:py-[8%]
              max-[400px]:px-[10%] gap-14 max-[850px]:w-[500px] max-[650px]:w-full
              max-[650px]:gap-10 hover:drop-shadow-xl hover:drop-[#E5EBE3]"
              >
                <h1 className=" max-[650px]:text-xl text-2xl max-[650px]:pt-4  font-bold">
                  Register to Rehouse a pet
                </h1>
                <HiMiniHome className="text-[#8BC27B] max-[650px]:text-9xl text-[12rem] ml-[50%] translate-x-[-50%]" />
              </div>
            </Link>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Register;
