import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import ChatScreen from "../Messages_chat/ChatScreen";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../../globleContext/context";
import { ChatConnection, User } from "../../interface/interface";
import { ChatContext } from "../../globleContext/ChatContext";
import Footer from "../../components/Footer";
import ProfileHeader from "../../components/ProfileHeader";

function Messages() {
  const {
    userDetails,
    loading = true,
  }: { userDetails?: User; loading?: boolean } = useContext(ThemeContext);
  const navigator = useNavigate();

  const { connections, allConnections } = useContext(ChatContext) as {
    connections: Array<ChatConnection>;
    allConnections: () => void;
  };
  useEffect(() => {
    if (!loading) {
      if (userDetails === undefined) navigator("/login");
      return;
    }
  }, [navigator, loading, userDetails]);
  useEffect(() => {
    allConnections();
  }, [allConnections]);

  return (
    <>
      <Header />
      {connections && connections?.length === 0 ? (
        <>
          <ProfileHeader />
          <section className=" px-10 pb-10 font-Nunito">
            <h1>Messages Not Found...</h1>
            <div className=" h-[450px]"></div>
          </section>
          <Footer />
        </>
      ) : (
        <ChatScreen />
      )}
    </>
  );
}

export default Messages;
