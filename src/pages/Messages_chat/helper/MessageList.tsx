import React, { SetStateAction, useContext, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { ChatContext } from "../../../globleContext/ChatContext";
import { ChatConnection, User } from "../../../interface/interface";
import { ThemeContext } from "../../../globleContext/context";
import getTime from "../../../function/getTime";
import { Socket } from "socket.io-client";
export interface messageType {
  id: string;
  inputText: string;
  time: string;
  sender: string;
}

function MessageList() {
  const { connections, socket, notification, setNotification } = useContext(
    ChatContext
  ) as {
    connections: ChatConnection[];
    socket: React.MutableRefObject<Socket | null>;
    notification: messageType;
    setNotification: React.Dispatch<SetStateAction<messageType | undefined>>;
  };
  const [messages, setMessages] = useState<messageType>();
  console.log("noti", notification);
  const [value, setvalue] = useState<string>("");
  const { id } = useParams();

  const [list, setList] = useState<Array<ChatConnection>>(connections);
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);

  useEffect(() => {
    setList(connections);
  }, [connections]);

  useEffect(() => {
    const filterUser = connections?.filter((item) => {
      if (item.firstUser.email !== userDetails?.email) {
        return item?.firstUser?.username?.includes(value);
      } else if (item.secondUser.email !== userDetails?.email) {
        return item?.secondUser?.username?.includes(value);
      } else {
        return "";
      }
    });
    setList(filterUser);
  }, [connections, userDetails?.email, value]);
  useEffect(() => {
    if (id) socket.current?.emit("joinRoom", id);
  }, [id, socket, userDetails]);
  useEffect(() => {
    socket.current?.on("message", (user) => {
      if (user.id === id) {
        setMessages(user);
      } else {
        setNotification(user);
        console.log("ki");
      }
    });
  }, [socket, messages, id, setNotification]);

  return (
    <>
      <header className=" font-Nunito bg-[#F4F4F5]">
        <div className=" flex items-center gap-2 py-[1.14rem] px-2">
          <IoSearch className=" text-2xl flex-shrink-0 cursor-pointer text-[#1D7628]" />
          <input
            type="text"
            className="w-full outline-none rounded-lg px-3 py-2"
            placeholder=" Search "
            value={value}
            onChange={(e) => setvalue(e.currentTarget.value)}
          />
        </div>
      </header>
      <section
        className="max-[650px]:h-[calc(100vh-100px)] h-[calc(100vh-160px-77px)] 
    overflow-y-scroll"
      >
        <section className=" flex-col font-Nunito flex gap-2 h-full py-3 ">
          {list?.map((connection, index) => {
            if (connection?.firstUser?.email !== userDetails?.email) {
              return (
                <Link
                  to={`/messages/${connection?._id}`}
                  key={index}
                  onClick={() => {
                    socket.current?.emit("joinRoom", connection?._id);
                  }}
                >
                  <div
                    className={` flex items-center justify-between gap-4 cursor-pointer
                      px-4 rounded-lg py-4 hover:bg-[#F4F4F5]
                      ${connection?._id === id ? "bg-[#F4F4F5]" : ""}
                       `}
                  >
                    <div className=" flex items-center gap-3 w-[80%]">
                      <>
                        {connection?.firstUser?.picture ? (
                          <img
                            src={connection?.firstUser.picture}
                            alt=""
                            className=" w-14 h-14 object-cover rounded-full"
                          />
                        ) : (
                          <div
                            className=" text-white h-14 w-14 bg-[#B9C2CA] text-center  rounded-full
                           font-bold  flex justify-center items-center tex-center drop-shadow-lg"
                          >
                            {connection?.firstUser?.username
                              ?.split(" ")[0]
                              ?.charAt(0)}
                            {connection?.firstUser?.username
                              ?.split(" ")[1]
                              ?.charAt(0)}
                          </div>
                        )}
                      </>
                      <div className=" w-[70%] ">
                        <h1 className=" font-bold tracking-wide text-lg max-[950px]:text-sm">
                          {connection?.firstUser?.username}
                        </h1>
                        <p className=" truncate ">
                          {messages?.id === connection?._id
                            ? messages?.inputText
                            : connection?.lastMessage}
                        </p>
                      </div>
                    </div>
                    <div className=" text-sm">
                      {messages?.id === connection?._id
                        ? getTime(messages?.time)
                        : getTime(connection.time)}
                    </div>
                  </div>
                </Link>
              );
            } else if (connection?.secondUser?.email !== userDetails?.email) {
              return (
                <Link
                  to={`/messages/${connection?._id}`}
                  key={index}
                  onClick={() => {
                    socket.current?.emit("joinRoom", connection?._id);
                  }}
                >
                  <div
                    className={` flex items-center justify-between gap-4 cursor-pointer
                     px-3 rounded-lg py-4 hover:bg-[#F4F4F5]
                     ${connection?._id === id ? "bg-[#F4F4F5]" : ""}
                      `}
                  >
                    <div className=" flex items-center gap-3 w-[80%]">
                      <>
                        {connection?.secondUser?.picture ? (
                          <img
                            src={connection?.secondUser.picture}
                            alt=""
                            className=" w-14 h-14 object-cover rounded-full"
                          />
                        ) : (
                          <div
                            className=" text-white h-14 w-14 bg-[#B9C2CA] text-center  rounded-full
                           font-bold  flex justify-center items-center tex-center drop-shadow-lg"
                          >
                            {connection?.secondUser?.username
                              ?.split(" ")[0]
                              ?.charAt(0)}
                            {connection?.secondUser?.username
                              ?.split(" ")[1]
                              ?.charAt(0)}
                          </div>
                        )}
                      </>
                      <div className=" w-[70%] ">
                        <h1 className=" font-bold tracking-wide text-lg ">
                          {connection?.secondUser?.username}
                        </h1>
                        <p className=" truncate ">
                          {messages?.id === connection?._id
                            ? messages?.inputText
                            : connection?.lastMessage}
                        </p>
                      </div>
                    </div>
                    <div className=" text-sm">
                      {messages?.id === connection?._id
                        ? getTime(messages?.time)
                        : getTime(connection.time)}
                    </div>
                  </div>
                </Link>
              );
            } else {
              return "";
            }
          })}
        </section>
      </section>
    </>
  );
}
export default MessageList;
