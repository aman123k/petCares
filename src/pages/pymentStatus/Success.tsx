import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import check from "../../data/check.json";
import Lottie from "react-lottie";

function Success() {
  const [dimensions, setDimensions] = useState({ width: "70%", height: 120 });
  const [countdown, setCountdown] = useState(5);
  const url = process.env.REACT_APP_URL as string;
  const urlParams = new URLSearchParams(window.location.search);
  const session_id = urlParams.get("session_id")?.replace(/'$/, "");
  const navigator = useNavigate();

  const handlePaymentSuccess = useCallback(async () => {
    try {
      const res = await fetch(`${url}/payment-success`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ session_id }),
        credentials: "include",
      });
      await res.json();
    } catch (err) {
      console.log(err);
      toast.error("Sever error");
    }
  }, [session_id, url]);

  useEffect(() => {
    if (session_id) {
      handlePaymentSuccess();

      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      const redirectTimer = setTimeout(() => {
        navigator("/");
      }, 5000);

      return () => {
        clearTimeout(timer);
        clearTimeout(redirectTimer);
      };
    } else {
      navigator("/");
    }
  }, [session_id, handlePaymentSuccess, navigator]);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 650) {
        setDimensions({ width: "80%", height: 120 });
      } else {
        setDimensions({ width: "95%", height: 100 });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: check,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <>
      <section className="fixed w-[100%] h-[100dvh] flex items-center justify-center bg-black bg-opacity-40">
        <div className="bg-white p-6 rounded-xl drop-shadow-lg w-[450px]">
          <Lottie
            options={defaultOptions}
            height={dimensions.height}
            width={dimensions.width}
          />
          <h2 className="text-xl font-Nunito font-bold text-center ">
            Payment Successful
          </h2>
          <p className=" text-center text-[16px] text-[#595959] font-Nunito mt-2">
            Your payment has been processed successfully.
          </p>
          <p className=" text-center text-[16px] text-[#595959] font-Nunito">
            Redirecting in {countdown} seconds...
          </p>
        </div>
      </section>
    </>
  );
}

export default Success;
