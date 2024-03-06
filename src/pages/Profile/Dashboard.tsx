import React, { useContext, useEffect } from "react";
import { User } from "../../interface/interface";
import { ThemeContext } from "../../globleContext/context";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { IoPerson } from "react-icons/io5";
import { BiMessageRoundedDots } from "react-icons/bi";

function Dashboard() {
  const {
    userDetails,
    loading = true,
  }: { userDetails?: User; loading?: boolean } = useContext(ThemeContext);
  const navigator = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (userDetails === undefined) navigator("/login");
      return;
    }
  }, [navigator, loading, userDetails]);
  return (
    <>
      <Header />
      <section className=" bg-[#F9F9F9] px-7 py-8 max-[650px]:px-0">
        <section className=" drop-shawod-2xl shadow-black rounded-3xl overflow-hidden font-Nunito">
          <h1
            className=" bg-[#FFFFFF] px-10 py-12  max-[650px]:px-6  max-[650px]:text-2xl
           text-[#595959] font-bold text-3xl"
          >
            Your Dashboard
          </h1>
          <section className=" bg-[#E5EBE3] px-10 py-12 max-[650px]:px-6">
            <p className=" font-semibold tracking-wide pr-16 max-[650px]:pr-0">
              Welcome to your dashboard! This is your central hub for managing
              messages and updating your profile. You'll receive email
              notifications for new messages, so remember to check your inbox
              regularly, including your junk folder.
            </p>

            <section className=" grid grid-cols-2 gap-8 max-[850px]:grid-cols-1 my-16 items-center">
              <div className="">
                <h1 className=" font-bold text-xl">Pet Adopter Dashboard</h1>
                <div className=" bg-white border-t border-l border-r border-[#D5D8D5]  rounded-lg overflow-hidden mt-10  ">
                  <div
                    className=" flex justify-between items-center max-[1050px]:flex-col 
                  max-[1050px]:gap-3.5 py-10 px-6 max-[650px]:justify-normal max-[1050px]:items-start max-[1050px]:py-6"
                  >
                    <div className=" flex gap-4 items-center">
                      <span className=" bg-[#CDDDB7] p-4 rounded-full">
                        <IoPerson className=" text-4xl text-white max-[650px]:text-2xl" />
                      </span>
                      <h2 className=" font-bold text-[#595959] text-lg">
                        {userDetails?.username}
                      </h2>
                    </div>
                    <Link to="/messages">
                      <div
                        className="border border-[#96C830] hover:border-2 text-[#96C830] flex items-center 
                    gap-2 px-3 py-2 rounded-lg max-[650px]:px-2 max-[650px]:py-1.5 max-[650px]:text-sm "
                      >
                        <BiMessageRoundedDots className=" text-xl" />
                        View messages
                      </div>
                    </Link>
                  </div>
                  <Link to="/profile">
                    <h1
                      className=" text-center bg-[#5FA501] text-lg hover:text-[#5FA501] hover:bg-transparent border
                    tracking-wide text-white py-3 max-[650px]:text-sm rounded-b-lg border-[#5FA501]"
                    >
                      Your Adopter's Profile
                    </h1>
                  </Link>
                </div>
              </div>
              <div className="">
                <h1 className=" font-bold text-xl">Pet Rehouser Dashboard</h1>
                <div className=" bg-transparent border-t border-l border-r border-[#D5D8D5]  rounded-lg overflow-hidden mt-10  ">
                  <div
                    className=" my-14 py-2 max-[1050px]:my-[3.11rem] px-6 text-[#919291]
                   italic max-[1050px]:py-6 max-[650px]:my-6"
                  >
                    You have not yet registered to rehome a pet
                  </div>
                  <Link to="/rehouse-a-pet">
                    <h1
                      className=" text-center bg-[#96C16E] text-lg hover:text-[#5FA501] hover:bg-[#F4F7F4] border
                    tracking-wide text-white py-3 max-[650px]:text-sm rounded-b-lg border-[#96C16E]"
                    >
                      Your Adopter's Profile
                    </h1>
                  </Link>
                </div>
              </div>
            </section>
          </section>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Dashboard;
