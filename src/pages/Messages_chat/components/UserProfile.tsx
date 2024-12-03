import React, { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { ChatConnection, User } from "../../../interface/interface";
import { ChatContext } from "../../../globleContext/ChatContext";
import { ThemeContext } from "../../../globleContext/context";
import { useParams } from "react-router-dom";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdOutlineDelete } from "react-icons/md";
import { MdBlock } from "react-icons/md";
import useDeleteChat from "../../../customHooks/deleteChat";
import useBlock from "../../../customHooks/blockUser";
import { Toaster } from "react-hot-toast";

const UserProfile = ({
  setOpenMenu,
}: {
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { connections } = useContext(ChatContext) as {
    connections: Array<ChatConnection>;
  };
  const url = process.env.REACT_APP_URL as string;
  const { id } = useParams();
  const chatUser = connections?.filter((connection) => {
    return connection?._id === id;
  });
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  const { deleteChat } = useDeleteChat({ id, url: `${url}/deleteChat` });
  const { blockUser } = useBlock({ id, url: `${url}/blockUser` });

  return (
    <section className=" h-full overflow-y-scroll font-Nunito">
      <header className=" flex font-Nunito px-5 items-center gap-4 py-[1.43rem] bg-white">
        <RxCross2
          onClick={() => setOpenMenu(false)}
          className=" text-3xl cursor-pointer"
        />
        <h1 className=" text-xl font-bold"> User Info</h1>
      </header>
      {connections &&
        chatUser?.map((chats, index) => {
          if (chats.firstUser.email !== userDetails?.email) {
            return (
              <section key={index} className=" bg-red-50 w-full h-96">
                <>
                  {chats?.firstUser?.picture &&
                  !chats.isBlock.includes(chats.secondUser.email) ? (
                    <img
                      src={chats.firstUser.picture}
                      alt=""
                      className=" w-full h-full"
                    />
                  ) : (
                    <div
                      className=" text-white h-full w-full bg-[#B9C2CA] text-center text-9xl
                           font-bold  flex justify-center items-center tex-center drop-shadow-lg"
                    >
                      {chats?.firstUser?.username?.split(" ")[0]?.charAt(0)}
                      {chats?.firstUser?.username?.split(" ")[1]?.charAt(0)}
                    </div>
                  )}
                </>
                <section className=" px-3 py-4 flex-col flex gap-px">
                  <div
                    className=" flex gap-5 items-center cursor-pointer hover:bg-[#F4F4F5]
                  rounded-lg px-4 py-3"
                  >
                    <div className=" text-[#787272] font-bold text-3xl">@</div>
                    <div className="flex  flex-col ">
                      <span className=" font-semibold text-lg tracking-wide">
                        {chats.firstUser.username}
                      </span>
                      <span className=" text-[#787272] font-semibold">
                        Name
                      </span>
                    </div>
                  </div>
                  <div
                    className=" flex gap-5 items-center cursor-pointer hover:bg-[#F4F4F5]
                  rounded-lg px-4 py-3"
                  >
                    <HiOutlineMailOpen className=" text-3xl text-[#787272]" />
                    <div className="flex  flex-col ">
                      <span className=" font-semibold text-lg tracking-wide">
                        {chats.firstUser.email}
                      </span>
                      <span className=" text-[#787272] font-semibold">
                        email
                      </span>
                    </div>
                  </div>
                  <div
                    className={` flex gap-5 items-center cursor-pointer hover:bg-[#F4F4F5]
                    rounded-lg px-4 py-3 ${
                      chats.isBlock.includes(chats.firstUser.email)
                        ? "text-[#96C830]"
                        : "text-red-600 "
                    }`}
                    onClick={() =>
                      blockUser({
                        email: chats.firstUser.email,
                        name: chats.firstUser.username,
                      })
                    }
                  >
                    <MdBlock className=" text-3xl" />

                    <span className=" font-bold text-lg">
                      {chats.isBlock.includes(chats.firstUser.email)
                        ? "Unblock"
                        : "Block"}{" "}
                      {chats.firstUser.username}
                    </span>
                  </div>
                  <div
                    className=" flex gap-5 items-center cursor-pointer hover:bg-[#F4F4F5]
                  rounded-lg px-4 py-3"
                    onClick={() => deleteChat()}
                  >
                    <MdOutlineDelete className=" text-3xl text-red-600" />

                    <span className=" text-red-600 font-bold text-lg">
                      Delete Chat
                    </span>
                  </div>
                </section>
              </section>
            );
          } else {
            return (
              <section key={index} className="w-full h-96">
                <>
                  {chats?.secondUser?.picture &&
                  !chats.isBlock.includes(chats.firstUser.email) ? (
                    <img
                      src={chats.secondUser.picture}
                      alt=""
                      className=" w-full h-full "
                    />
                  ) : (
                    <div
                      className=" text-white h-full w-full bg-[#B9C2CA] text-center  text-9xl
                           font-bold  flex justify-center items-center tex-center drop-shadow-lg"
                    >
                      {chats?.secondUser?.username?.split(" ")[0]?.charAt(0)}
                      {chats?.secondUser?.username?.split(" ")[1]?.charAt(0)}
                    </div>
                  )}
                </>
                <section className=" px-3 py-4 flex-col flex gap-px">
                  <div
                    className=" flex gap-5 items-center cursor-pointer hover:bg-[#F4F4F5]
                  rounded-lg px-4 py-3"
                  >
                    <div className=" text-[#787272] font-bold text-3xl">@</div>
                    <div className="flex  flex-col ">
                      <span className=" font-semibold text-lg tracking-wide">
                        {chats.secondUser.username}
                      </span>
                      <span className=" text-[#787272] font-semibold">
                        Name
                      </span>
                    </div>
                  </div>
                  <div
                    className=" flex gap-5 items-center cursor-pointer hover:bg-[#F4F4F5]
                  rounded-lg px-4 py-3"
                  >
                    <HiOutlineMailOpen className=" text-3xl text-[#787272]" />
                    <div className="flex  flex-col ">
                      <span className=" font-semibold text-lg tracking-wide">
                        {chats.secondUser.email}
                      </span>
                      <span className=" text-[#787272] font-semibold">
                        email
                      </span>
                    </div>
                  </div>
                  <div
                    className={` flex gap-5 items-center cursor-pointer hover:bg-[#F4F4F5]
                    rounded-lg px-4 py-3 ${
                      chats.isBlock.includes(chats.secondUser.email)
                        ? "text-[#96C830]"
                        : "text-red-600 "
                    }`}
                    onClick={() =>
                      blockUser({
                        email: chats.secondUser.email,
                        name: chats.secondUser.username,
                      })
                    }
                  >
                    <MdBlock className=" text-3xl" />

                    <span className="  font-bold text-lg">
                      {chats.isBlock.includes(chats.secondUser.email)
                        ? "Unblock"
                        : "Block"}{" "}
                      {chats.secondUser.username}
                    </span>
                  </div>
                  <div
                    className=" flex gap-5 items-center cursor-pointer hover:bg-[#F4F4F5]
                  rounded-lg px-4 py-3"
                    onClick={() => deleteChat()}
                  >
                    <MdOutlineDelete className=" text-3xl text-red-600" />

                    <span className=" text-red-600 font-bold text-lg">
                      Delete Chat
                    </span>
                  </div>
                </section>
              </section>
            );
          }
        })}
      <Toaster />
    </section>
  );
};

export default UserProfile;
