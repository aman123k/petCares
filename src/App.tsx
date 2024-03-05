import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/register/Register";
import Login from "./pages/Login";
import Adopter from "./pages/register/Adopter";
import Rehouser from "./pages/register/Rehouser";
import ForRehouser from "./pages/ForRehouser/forRehouser";
import AdoptionGuidelines from "./pages/ForAdoption/AdoptionGuidelines";
import ForAdopter from "./pages/ForAdoption/forAdopter";
import TipsForAdop from "./pages/ForAdoption/TipsForAdop";
import TipsForrehouser from "./pages/ForRehouser/TipsForrehouser";
import GiveUpDog from "./pages/ForRehouser/GiveUpDog";
import ReadyToadop from "./pages/ForAdoption/ReadyToadop";
import Faq from "./pages/FAQ/Faq";
import PreparingDog from "./pages/Animal/PreparingDog";
import PetInformation from "./pages/Animal/PetInformation";
import GiveUpCat from "./pages/ForRehouser/GiveUpCat";
import GiveUpRabbit from "./pages/ForRehouser/GiveUpRabbit";
import GiveUpParrot from "./pages/ForRehouser/GiveUpParrot";
import Contact from "./pages/Contact";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GithubAuth from "./function/githubAuth";
import { ThemeContextProvider } from "./globleContext/context";
import Dashboard from "./pages/Profile/Dashboard";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Profile/Messages";
import Favourites from "./pages/Profile/Favourites";
import ForgetPass from "./pages/Lost password/ForgetPass";
import FindPet from "./pages/ListOfpets/FindPet";
import PreparingCat from "./pages/Animal/PreparingCat";
import PreparingRabbit from "./pages/Animal/PreparingRabbit";
import PetDetails from "./pages/ListOfpets/PetDetails";
import MainRehouse from "./pages/ListPetToRehouse/MainRehouse";
import SecoundStep from "./pages/ListPetToRehouse/SecoundStep";
import { ListingContextProvider } from "./globleContext/ListingContext";
import ThirdStep from "./pages/ListPetToRehouse/ThirdStep";
import PreparingParrot from "./pages/Animal/PreparingParrot";
import P from "./P";
import Confirm from "./pages/ListPetToRehouse/Confirm";

import About from "./pages/About";
import RehouserFAQ from "./pages/FAQ/RehouserFAQ";
import { ChatContextProvider } from "./globleContext/ChatContext";

function App() {
  const clintId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;
  return (
    <div className="min-[1750px]:ml-[50%] min-[1750px]:translate-x-[-50%] ">
      <GoogleOAuthProvider clientId={clintId}>
        <BrowserRouter>
          <ThemeContextProvider>
            <ListingContextProvider>
              <ChatContextProvider>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/register_adopt" element={<Adopter />} />
                  <Route
                    path="/register_rehouse_your_pet"
                    element={<Rehouser />}
                  />
                  <Route path="/for_rehousers" element={<ForRehouser />} />
                  <Route path="/for_adopter" element={<ForAdopter />} />
                  <Route path="/guidelines" element={<AdoptionGuidelines />} />
                  <Route path="/tips-for-adopters" element={<TipsForAdop />} />
                  <Route
                    path="/tips-for-rehouser"
                    element={<TipsForrehouser />}
                  />
                  <Route path="/giving-up-a-dog" element={<GiveUpDog />} />
                  <Route path="/giving-up-a-cat" element={<GiveUpCat />} />
                  <Route
                    path="/giving-up-a-rabbit"
                    element={<GiveUpRabbit />}
                  />
                  <Route
                    path="/giving-up-a-parrot"
                    element={<GiveUpParrot />}
                  />
                  <Route
                    path="/are-you-ready-to-adopt-a-pet"
                    element={<ReadyToadop />}
                  />
                  <Route path="/frequently-asked-questions" element={<Faq />} />
                  <Route
                    path="/preparing-for-your-dog"
                    element={<PreparingDog />}
                  />
                  <Route
                    path="/preparing-for-your-cat"
                    element={<PreparingCat />}
                  />
                  <Route
                    path="/preparing-for-your-rabbit"
                    element={<PreparingRabbit />}
                  />
                  <Route
                    path="/preparing-for-your-parrot"
                    element={<PreparingParrot />}
                  />
                  <Route path="/pet-welfare" element={<PetInformation />} />
                  <Route path="/contact-petcares" element={<Contact />} />
                  <Route path="/callback" element={<GithubAuth />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/messages" element={<Messages />} />
                  <Route path="/messages/:id" element={<Messages />} />
                  <Route path="/favourites" element={<Favourites />} />
                  <Route path="/forgot-password" element={<ForgetPass />} />
                  <Route path="/adopt-a-pet" element={<FindPet />} />
                  <Route path="/adopt-a-pet/:id" element={<PetDetails />} />
                  <Route path="/rehouse-a-pet" element={<MainRehouse />} />
                  <Route
                    path="/rehouse-a-pet/about-you"
                    element={<SecoundStep />}
                  />
                  <Route
                    path="/rehouse-a-pet/your-pet"
                    element={<ThirdStep />}
                  />
                  <Route path="/rehouse-a-pet/confirm" element={<Confirm />} />
                  <Route path="/p" element={<P />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/rehousers-faq" element={<RehouserFAQ />} />
                </Routes>
              </ChatContextProvider>
            </ListingContextProvider>
          </ThemeContextProvider>
        </BrowserRouter>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
