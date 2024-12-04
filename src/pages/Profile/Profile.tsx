import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { ThemeContext } from "../../globleContext/context";
import { MyFunctionType, User } from "../../interface/interface";
import { useNavigate } from "react-router-dom";
import { uploadImage } from "../../components/uploadImage";
import ProfileHeader from "../../components/ProfileHeader";
import { FaExchangeAlt } from "react-icons/fa";
import useUpdate from "../../customHooks/updateUserProfile";
import toast, { Toaster } from "react-hot-toast";

function Profile() {
  const [image, setImage] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const navigator = useNavigate();
  const url = process.env.REACT_APP_URL as string;
  const { updateUser } = useUpdate({
    url: `${url}/updateUserProfile`,
    data: { image, userName },
  });

  const {
    userDetails,
    loading = true,
    getUser,
  }: {
    userDetails?: User;
    loading?: boolean;
    getUser: MyFunctionType;
  } = useContext(ThemeContext);

  useEffect(() => {
    if (!loading) {
      if (userDetails === undefined) navigator("/login");
    }
  }, [loading, navigator, userDetails]);

  useEffect(() => {
    setUserName(userDetails?.username || "");
    setImage(userDetails?.picture || "");
  }, [userDetails]);

  const handleClick = (
    event: React.MouseEvent<SVGElement, MouseEvent>
  ): void => {
    const nextSibling = (event.target as HTMLElement).nextElementSibling;
    if (nextSibling) {
      (nextSibling as HTMLElement).click();
    }
  };

  const handelUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (image === userDetails?.picture && userName === userDetails?.username) {
      return toast.error("Change somthing to update");
    } else if (!userName) {
      return toast.error("Name can't be empty or same");
    } else {
      updateUser();
      getUser();
    }
  };

  return (
    <>
      <Header />
      <ProfileHeader />
      <section className=" bg-[#f0efef] px-10 py-16 font-Nunito max-[650px]:px-7">
        <div>
          <h1 className=" font-bold text-3xl text-[#595959]">
            Update my Adopter’s profile
          </h1>
          <p className=" text-[#484848] mt-2 tracking-wide">
            When your application is approved by PetCares, the current owner
            will receive a link to your profile. Therefore, it's crucial to
            provide ample information to help them envision the home you're
            offering for the pet.
          </p>
        </div>
        <section
          className=" my-6 bg-[#fdfcfc] drop-shadow-md px-10 py-6 border border-[#d4d4d4]
        max-[650px]:px-7 rounded-xl "
        >
          <section className=" border-b mb-6">
            <h2 className=" text-xl text-[#595959] font-bold">
              Personal details
            </h2>
            <form className=" my-6 flex items-center gap-12 max-[650px]:flex-col select-none">
              <div className=" h-72 w-72 shrink-0 max-[650px]:h-56 max-[650px]:w-56 relative">
                <>
                  {image ? (
                    <img
                      src={image}
                      alt=""
                      className=" w-full h-full drop-shadow-md object-fill"
                    />
                  ) : (
                    <div
                      className=" text-white h-full w-full bg-[#B9C2CA] text-center 
              font-bold flex justify-center text-4xl items-center tex-center drop-shadow-lg"
                    >
                      {userDetails?.username?.split(" ")[0]?.charAt(0)}
                      {userDetails?.username?.split(" ")[1]?.charAt(0)}
                    </div>
                  )}
                </>
                <FaExchangeAlt
                  className=" text-4xl bg-[#5FA501] text-white p-2
              cursor-pointer absolute top-0 right-0"
                  onClick={handleClick}
                />
                <input
                  type="file"
                  className="hidden"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    uploadImage(e, setImage)
                  }
                />
              </div>
              <div className=" flex flex-col w-full gap-2.5">
                <div className=" font-bold text-lg">Email</div>
                <div className=" border-2 w-full bg-[#b8bcc1] rounded-lg px-3 py-2.5">
                  {userDetails?.email}
                </div>
                <div className=" font-bold text-lg">Name</div>
                <input
                  type="text"
                  value={userName}
                  className=" outline-none border-2 w-full rounded-lg px-3 py-2.5"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>): void =>
                    setUserName(e.currentTarget.value)
                  }
                />
                <button
                  type="submit"
                  className=" w-max border-[#5FA501] border-2 text-white bg-[#5FA501]
                hover:bg-transparent px-4 py-3 rounded-lg hover:text-[#5FA501] max-[850px]:w-full
                max-[650px]:text-sm tracking-wide mt-4"
                  onClick={handelUpdate}
                >
                  Update my adopter's profile
                </button>
              </div>
            </form>
          </section>
          <form>
            <section className=" border-b mt-4 pb-4">
              <h2 className=" text-xl text-[#595959] font-bold">
                Additional information
              </h2>
              <p className=" text-[#484848] mt-2 tracking-wide">
                Providing this information is crucial when inquiring about a
                pet. By completing it now, you enable the pet's current owner to
                understand the type of home you're offering. This assists them
                in determining whether to consider your application further or
                not.
              </p>
              <h3 className=" font-bold text-[#595959] text-lg">
                Address details <span className=" text-red-500">*</span>
              </h3>
              <div className=" my-6 flex gap-12 max-[650px]:flex-col select-none">
                <div className=" w-[50%] max-[650px]:w-full flex flex-col gap-2.5">
                  <h6 className=" text-[#595959] font-bold">
                    Address line 1 <span className=" text-red-500">*</span>
                  </h6>
                  <input
                    type="text"
                    placeholder="Line 1"
                    className=" outline-none border-2 w-full rounded-lg px-3 py-2.5"
                  />
                  <h6 className=" text-[#595959] font-bold">
                    Town <span className=" text-red-500">*</span>
                  </h6>
                  <input
                    type="text"
                    placeholder="Town/City"
                    className=" outline-none border-2 w-full rounded-lg px-3 py-2.5"
                  />
                  <h6 className=" text-[#595959] font-bold">
                    Telephone Number<span className=" text-red-500">*</span>
                  </h6>
                  <input
                    type="text"
                    placeholder="Telephone Number"
                    className=" outline-none border-2 w-full rounded-lg px-3 py-2.5"
                  />
                </div>
                <div className=" w-[50%] max-[650px]:w-full flex flex-col gap-2.5">
                  <h6 className=" text-[#595959] font-bold">
                    Address line 2 <span className=" text-red-500">*</span>
                  </h6>
                  <input
                    type="text"
                    placeholder="Line 2"
                    className=" outline-none border-2 w-full rounded-lg px-3 py-2.5"
                  />
                  <h6 className=" text-[#595959] font-bold">
                    Postcode <span className=" text-red-500">*</span>
                  </h6>
                  <input
                    type="text"
                    placeholder="Postcode"
                    className=" outline-none border-2 w-full rounded-lg px-3 py-2.5"
                  />

                  <input
                    type="text"
                    placeholder="Mobile"
                    className=" outline-none mt-8 border-2 w-full rounded-lg px-3 py-2.5"
                  />
                </div>
              </div>
              <h6 className=" text-[#595959] font-bold">
                Are you over 18? <span className=" text-red-500">*</span>
              </h6>
              <div className=" flex items-center gap-2 mt-3 select-none">
                <input type="checkbox" id="checkbox" />
                <label
                  htmlFor="checkbox"
                  className=" cursor-pointer text-[#595959] "
                >
                  I am over 18 years old
                </label>
              </div>
            </section>
          </form>
        </section>
      </section>
      <Footer />
      <Toaster />
    </>
  );
}

export default Profile;
