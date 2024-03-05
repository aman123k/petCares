import React, { useContext, useEffect, useRef, useState } from "react";
import ChatHeader from "./helper/ChatHeader";
import ChatFooter from "./helper/ChatFooter";
import { useParams } from "react-router-dom";
import { ChatContext } from "../../globleContext/ChatContext";
import getTime from "../../function/getTime";
import { ChatConnection, User } from "../../interface/interface";
import { ThemeContext } from "../../globleContext/context";
import { IoArrowDown } from "react-icons/io5";
import useGetMessages from "../../customHooks/GetMessages";
import day from "../../function/getDay";

function ChatContainer() {
  const { socket, notification, setNotification } = useContext(ChatContext);
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  const { id } = useParams();
  const { allMessages, messages, setMessages, intialmessage } = useGetMessages({
    id,
  });

  const { connections } = useContext(ChatContext) as {
    connections: Array<ChatConnection>;
  };
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState<string>("");
  const chatUser = connections?.filter((connection) => {
    return connection?._id === id;
  })[0];

  useEffect(() => {
    socket.current?.on("message", (user) => {
      if (user.id === id) {
        setMessages([...messages, user]);
      } else {
        setNotification(user);
      }
    });
  }, [socket, messages, setMessages, setNotification, id]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: "smooth",
      });
      setShowScroll(
        scrollRef.current.scrollHeight - scrollRef.current.scrollTop ===
          scrollRef.current.clientHeight
      );
    }
  }, [allMessages, messages]);

  useEffect(() => {
    if (
      new Date(messages[messages.length - 1]?.time).toLocaleDateString(
        "en-US",
        {
          day: "2-digit",
          month: "short",
          year: "numeric",
        }
      ) !== allMessages[allMessages?.length - 1]?.day
    ) {
      setTime(messages[messages.length - 1]?.time);
    }
  }, [allMessages, messages]);

  return (
    <section className=" relative overflow-hidden">
      <ChatHeader />
      <section
        className="h-[calc(100vh-160px-72px-84px)] relative overflow-y-scroll
      bg-[#EEEEEE] max-[650px]:h-[calc(100vh-104px-72px-84px)] pb-2"
        ref={scrollRef}
      >
        <section className=" py-4 px-5 font-Nunito flex flex-col gap-4">
          <span
            className={` bg-white py-2 px-3.5 tracking-wide ml-[50%] w-max  
            translate-x-[-50%] rounded-lg drop-shadow-md ${
              allMessages.length === 0 || time ? "block" : "hidden"
            }`}
          >
            {allMessages.length === 0 ? "Today" : day(time)}
          </span>
          <span
            className={` bg-white py-2 px-3.5 tracking-wide ml-[50%] text-sm
            translate-x-[-50%] rounded-lg drop-shadow-md w-[350px] text-center max-[650px]:w-[300px]
              ${allMessages.length === 0 ? "block" : "hidden"}
            }`}
          >
            {intialmessage}
          </span>
          {allMessages &&
            allMessages?.map((message, index) => {
              return (
                <section key={index} className="flex flex-col gap-4">
                  <span
                    className="  bg-white py-2 px-3.5 tracking-wide
                     ml-[50%] w-max  translate-x-[-50%] rounded-lg drop-shadow-md"
                  >
                    {time?.includes(message.day) ? day(time) : day(message.day)}
                  </span>
                  <span
                    className={` bg-white py-2 px-3.5 tracking-wide ml-[50%] text-sm
                  translate-x-[-50%] rounded-lg drop-shadow-md w-[350px] text-center max-[650px]:w-[300px]

  }`}
                  >
                    {intialmessage}
                  </span>
                  {message.messages?.map((userChat, index) => {
                    if (userChat.chatId === id) {
                      return (
                        <div
                          key={index}
                          className={`bg-white max-w-[49%] w-max max-[650px]:max-w-[70%] drop-shadow-md py-2 px-3 rounded-lg ${
                            userDetails?.email === userChat?.sender
                              ? "ml-auto"
                              : ""
                          }`}
                        >
                          <p className=" text-lg tracking-wide pr-8">
                            {userChat?.message}
                          </p>
                          <span className=" flex justify-end text-[13px] tracking-wide ml-16">
                            {getTime(userChat?.time)}
                          </span>
                        </div>
                      );
                    } else {
                      return "";
                    }
                  })}
                </section>
              );
            })}
          {messages &&
            messages?.map((message, index) => {
              if (message.id === id) {
                return (
                  <div
                    key={index}
                    className={`bg-white max-w-[49%] w-max max-[650px]:max-w-[70%] drop-shadow-md py-2 px-3 rounded-lg ${
                      userDetails?.email === message?.sender ? "ml-auto" : ""
                    }`}
                  >
                    <p className=" text-lg tracking-wide pr-8">
                      {message?.inputText}
                    </p>
                    <span className=" flex justify-end text-[13px] tracking-wide ml-16">
                      {getTime(message?.time)}
                    </span>
                  </div>
                );
              } else {
                return "";
              }
            })}
        </section>
        <button
          className={`bg-white p-2 drop-shadow-md rounded-lg fixed bottom-24 right-5 ${
            scrollRef.current && showScroll ? "hidden" : "block"
          }`}
          onClick={() => {
            if (scrollRef.current) {
              scrollRef.current.scrollTo({
                top: scrollRef.current.scrollHeight,
                behavior: "smooth",
              });
            }
          }}
        >
          <IoArrowDown className="text-xl" />
        </button>
        {chatUser?.isBlock.includes(chatUser?.firstUser.email) ? (
          <div
            className="p-1.5 ml-[50%] w-max  
            translate-x-[-50% text-center rounded-lg text-[12px] bg-white"
          >
            {chatUser.firstUser.email !== userDetails?.email
              ? `You block ${chatUser.firstUser.username}`
              : `${chatUser.secondUser.username} block You`}
          </div>
        ) : null}
        {chatUser?.isBlock.includes(chatUser?.secondUser.email) ? (
          <div
            className="p-1.5 ml-[50%] w-max  mt-2
            translate-x-[-50% text-center rounded-lg text-[12px] bg-white"
          >
            {chatUser.secondUser.email !== userDetails?.email
              ? `You block ${chatUser.firstUser.username}`
              : `${chatUser.secondUser.username} block You`}
          </div>
        ) : (
          ""
        )}
      </section>
      <ChatFooter />
    </section>
  );
}

export default ChatContainer;
