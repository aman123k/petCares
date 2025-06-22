import React, { SetStateAction, useContext, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { ChatContext } from "../../../globalContext/ChatContext";
import { ChatConnection, User } from "../../../interface/interface";
import { ThemeContext } from "../../../globalContext/context";
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
  const [value, setValue] = useState<string>("");
  const { id } = useParams();

  const [list, setList] = useState<Array<ChatConnection>>(connections);
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);

  useEffect(() => {
    setList(connections);
  }, [connections]);

  // Find user as per the input value
  useEffect(() => {
    const filterUser = connections?.filter((item) => {
      const isFirstUser = item.firstUser.email !== userDetails?.email;
      const isSecondUser = item.secondUser.email !== userDetails?.email;

      return (
        (isFirstUser &&
          item.firstUser.username
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase())) ||
        (isSecondUser &&
          item.secondUser.username
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase()))
      );
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

  // List of message Forms
  const renderConnection = (
    connection: ChatConnection,
    isFirstUser: boolean
  ) => {
    const user = isFirstUser ? connection.firstUser : connection.secondUser;
    const otherUser = isFirstUser
      ? connection.secondUser
      : connection.firstUser;

    return (
      <Link
        to={`/messages/${connection?._id}`}
        key={connection?._id}
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
            {user?.picture && !connection.isBlock.includes(otherUser.email) ? (
              <img
                src={user?.picture}
                alt=""
                className=" w-14 h-14 object-cover rounded-full"
              />
            ) : (
              <div
                className=" text-white h-14 w-14 bg-[#B9C2CA] text-center  rounded-full
                 font-bold  flex justify-center items-center tex-center drop-shadow-lg"
              >
                {user?.username?.split(" ")[0]?.charAt(0)}
                {user?.username?.split(" ")[1]?.charAt(0)}
              </div>
            )}
            <div className=" w-[70%] ">
              <h1 className=" font-bold tracking-wide text-lg max-[950px]:text-sm">
                {user?.username}
              </h1>
              <p className=" truncate ">
                {messages?.id === connection?._id
                  ? messages?.inputText
                  : connection?.lastMessage}
              </p>
            </div>
          </div>
          <div className="shrink-0 text-sm">
            {messages?.id === connection?._id
              ? getTime(messages?.time)
              : getTime(connection.time)}
          </div>
        </div>
      </Link>
    );
  };

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
            onChange={(e) => setValue(e.currentTarget.value)}
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
              return renderConnection(connection, true);
            } else if (connection?.secondUser?.email !== userDetails?.email) {
              return renderConnection(connection, false);
            } else {
              return null;
            }
          })}
        </section>
      </section>
    </>
  );
}
export default MessageList;
