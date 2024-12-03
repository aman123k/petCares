import React, { useContext, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { IoSend } from "react-icons/io5";
import { useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { ChatContext } from "../../../globleContext/ChatContext";
import { ChatConnection, User } from "../../../interface/interface";
import { ThemeContext } from "../../../globleContext/context";
import { RxCross2 } from "react-icons/rx";
import { Socket } from "socket.io-client";

const ChatFooter = () => {
  const [inputText, setInputtext] = useState<string>("");
  const [showEmoji, setShowEmoji] = useState<boolean>(false);
  const { userDetails }: { userDetails?: User } = useContext(ThemeContext);
  const { id } = useParams();
  const url = process.env.REACT_APP_URL as string;

  const handleSelect = (emoji: any) => {
    setInputtext(inputText + emoji.native);
  };
  const { socket, connections } = useContext(ChatContext) as {
    socket: React.MutableRefObject<Socket | null>;
    connections: Array<ChatConnection>;
  };
  const currentConnection = connections?.filter((connection) => {
    return connection?._id === id;
  });

  const reciver = currentConnection[0].userEmail.filter(
    (reciver) => reciver !== userDetails?.email
  );

  const handleSubmit = async () => {
    if (!inputText.trim()) return toast.error("Write a message");
    socket.current?.emit("message", {
      inputText,
      id,
      time: new Date(),
      sender: userDetails?.email,
      reciver: reciver,
    });
    const response = await fetch(`${url}/sendMessage`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: inputText, id }),
      credentials: "include",
    });
    const json = await response.json();
    if (json.success) {
      setInputtext("");
    } else {
      toast.error(json.response);
      setInputtext("");
    }
  };

  // Chat Render Form
  const renderChatForm = (currnetChat: any, index: number) => {
    const isFirstUser = currnetChat.firstUser.email !== userDetails?.email;
    const userEmail = isFirstUser
      ? currnetChat.firstUser.email
      : currnetChat.secondUser.email;

    return (
      <form
        action=""
        className="flex items-center w-full gap-3"
        onSubmit={(e) => {
          e.preventDefault();
          if (
            !currnetChat?.isBlock.includes(userEmail) &&
            !currnetChat?.isBlock.includes(userDetails?.email ?? "")
          ) {
            handleSubmit();
          } else {
            toast.error("You can't send message");
          }
        }}
        key={index}
      >
        {showEmoji ? (
          <RxCross2
            className="flex-shrink-0 cursor-pointer font-bold text-3xl text-[#1D7628]"
            onClick={() => setShowEmoji(false)}
          />
        ) : (
          <HiOutlineEmojiHappy
            className="flex-shrink-0 cursor-pointer font-bold text-3xl text-[#1D7628]"
            onClick={() => setShowEmoji(true)}
          />
        )}
        <input
          type="text"
          value={inputText}
          className="py-2.5 px-3.5 outline-none drop-shadow-md 
         w-full rounded-lg text-lg "
          placeholder="Type a message "
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputtext(e.currentTarget.value)
          }
        />
        <button>
          <IoSend className=" text-2xl flex-shrink-0 text-[#1D7628]" />
        </button>
      </form>
    );
  };

  return (
    <>
      <section className=" w-full bg-[#F9F9F9] rounded-lg p-4 font-Nunito ">
        {currentConnection.map(renderChatForm)}
        <div
          className={`absolute bottom-[4.5rem] ${
            showEmoji ? "block" : "hidden"
          }`}
        >
          <Picker
            data={data}
            onEmojiSelect={handleSelect}
            emojiSize={22}
            emojiButtonSize={28}
            previewEmoji={3}
            theme="light"
            previewPosition="none"
            maxFrequentRows="1"
          />
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default ChatFooter;
