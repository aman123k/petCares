import React, { useContext, useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import UserProfile from "./UserProfile";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { ChatConnection, User } from "../../../interface/interface";
import { ChatContext } from "../../../globleContext/ChatContext";
import { ThemeContext } from "../../../globleContext/context";
import { Socket } from "socket.io-client";
type onlineUser = {
  user_Id: string;
  id: string;
};

function ChatHeader() {
  const [messagePro, setmessagePro] = useState<boolean>(false);
  const navegator = useNavigate();
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  const { id } = useParams();

  const { connections } = useContext(ChatContext) as {
    connections: Array<ChatConnection>;
  };
  const { socket } = useContext(ChatContext) as {
    socket: React.MutableRefObject<Socket | null>;
  };
  const [online, setOnline] = useState<string[]>([]);
  useEffect(() => {
    socket.current?.on("onlineUser", (onlineUsers: onlineUser[]) => {
      const userIds = onlineUsers.map((user) => user.user_Id);
      setOnline(userIds);
    });
  }, [socket]);
  const chatUser = connections?.filter((connection) => {
    return connection?._id === id;
  });

  return (
    <>
      {connections?.length !== 0 &&
        chatUser?.map((chats, index) => {
          if (chats.firstUser.email !== userDetails?.email) {
            return (
              <section
                key={index}
                className=" px-4 py-3.5 w-full items-center flex font-Nunito justify-between"
              >
                <div className=" flex items-center gap-3 cursor-pointer">
                  <IoMdArrowRoundBack
                    className=" cursor-pointer max-[650px]:block hidden text-xl"
                    onClick={() => navegator("/messages")}
                  />
                  <>
                    {chats?.firstUser?.picture &&
                    !chats.isBlock.includes(chats.secondUser.email) ? (
                      <img
                        src={chats.firstUser.picture}
                        alt=""
                        className=" w-12 h-12 rounded-full"
                        onClick={() => setmessagePro(true)}
                      />
                    ) : (
                      <div
                        className=" text-white h-12 w-12 bg-[#B9C2CA] text-center  rounded-full
                           font-bold  flex justify-center items-center tex-center drop-shadow-lg"
                        onClick={() => setmessagePro(true)}
                      >
                        {chats?.firstUser?.username?.split(" ")[0]?.charAt(0)}
                        {chats?.firstUser?.username?.split(" ")[1]?.charAt(0)}
                      </div>
                    )}
                  </>

                  <div onClick={() => setmessagePro(true)}>
                    <h1 className=" font-bold tracking-wide">
                      {chats.firstUser.username}
                    </h1>
                    <p className=" text-[#787272] text-sm tracking-wide">
                      {online.includes(chats?.firstUser?.email) &&
                      !chats.isBlock.includes(chats.secondUser.email)
                        ? "online"
                        : ""}
                    </p>
                  </div>
                </div>
                <div>
                  <BsThreeDotsVertical />
                </div>
              </section>
            );
          } else {
            return (
              <section
                key={index}
                className=" px-4 font-Nunito py-3.5 w-full items-center flex justify-between"
              >
                <div className=" flex items-center gap-3 cursor-pointer">
                  <IoMdArrowRoundBack
                    className=" cursor-pointer max-[650px]:block hidden text-xl"
                    onClick={() => navegator("/messages")}
                  />
                  <>
                    {chats?.secondUser?.picture &&
                    !chats.isBlock.includes(chats.firstUser.email) ? (
                      <img
                        src={chats.secondUser.picture}
                        alt=""
                        className=" w-12 h-12 rounded-full"
                        onClick={() => setmessagePro(true)}
                      />
                    ) : (
                      <div
                        className=" text-white h-12 w-12 bg-[#B9C2CA] text-center  rounded-full
                           font-bold  flex justify-center items-center tex-center drop-shadow-lg"
                        onClick={() => setmessagePro(true)}
                      >
                        {chats?.secondUser?.username?.split(" ")[0]?.charAt(0)}
                        {chats?.secondUser?.username?.split(" ")[1]?.charAt(0)}
                      </div>
                    )}
                  </>
                  <div onClick={() => setmessagePro(true)}>
                    <h1 className=" font-bold tracking-wide">
                      {chats.secondUser.username}
                    </h1>
                    <p className=" text-[#787272] text-sm tracking-wide">
                      {online.includes(chats?.secondUser?.email) &&
                      !chats.isBlock.includes(chats.firstUser.email)
                        ? "online"
                        : ""}
                    </p>
                  </div>
                </div>
                <div>
                  <BsThreeDotsVertical />
                </div>
              </section>
            );
          }
        })}

      <section
        className={` w-[50%] z-50 h-full bg-white drop-shadow-md absolute top-0 max-[650px]:w-full
       right-0 duration-700 overflow-y-scroll max-[950px]:w-[70%]
       ${messagePro ? "translate-x-0" : "translate-x-[100%]"}`}
      >
        <UserProfile setOpenMenu={setmessagePro} />
      </section>
    </>
  );
}

export default ChatHeader;
