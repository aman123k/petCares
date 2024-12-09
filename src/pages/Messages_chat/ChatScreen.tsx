import React, { useContext } from "react";
import ChatContainer from "./ChatContainer";
import MessageList from "./components/MessageList";
import { useParams } from "react-router-dom";
import { ChatContext } from "../../globleContext/ChatContext";
import { ChatConnection } from "../../interface/interface";

function ChatScreen() {
  const { id } = useParams();
  const { connections } = useContext(ChatContext) as {
    connections: Array<ChatConnection>;
  };
  const chatUser = connections?.filter((connection) => {
    return connection?._id === id;
  });
  return (
    <>
      <section className="h-[calc(100vh-160px)] max-[650px]:h-[calc(100dvh-104px)] flex ">
        <section
          className={` w-[32%] max-[950px]:w-[40%]  max-[650px]:absolute 
                   max-[650px]:w-full border-r duration-500 ease-in
             ${
               id
                 ? "max-[650px]:translate-x-[-100%]"
                 : "max-[650px]:translate-x-[0%]"
             }`}
        >
          <MessageList />
        </section>
        {connections && chatUser?.length !== 0 ? (
          <section
            className={` w-[68%] max-[950px]:w-[60%] max-[650px]:w-full max-[650px]:absolute  
            
         ${
           id ? "max-[650px]:translate-x-0" : "max-[650px]:translate-x-[-100%]"
         }`}
          >
            <ChatContainer />
          </section>
        ) : (
          <div
            className=" font-Nunito font-bold text-2xl text-center
          max-[650px]:hidden items-center flex justify-center w-[68%] max-[950px]:w-[60%]"
          >
            Chat not selected yet!
          </div>
        )}
      </section>
    </>
  );
}

export default ChatScreen;
