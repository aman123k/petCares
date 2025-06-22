import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/register/Register";
import Login from "./pages/Login";
import Adopter from "./pages/register/Adopter";
import Rehouse from "./pages/register/Rehouse";
import ForRehouses from "./pages/ForRehouses/ForRehouses";
import AdoptionGuidelines from "./pages/ForAdoption/AdoptionGuidelines";
import ForAdopter from "./pages/ForAdoption/forAdopter";
import TipsForAdop from "./pages/ForAdoption/TipsForAdop";
import TipsForrehouser from "./pages/ForRehouses/TipsForrehouser";
import GiveUpDog from "./pages/ForRehouses/GiveUpDog";
import ReadyToadop from "./pages/ForAdoption/ReadyToadop";
import Faq from "./pages/FAQ/Faq";
import PreparingDog from "./pages/Animal/PreparingDog";
import PetInformation from "./pages/Animal/PetInformation";
import GiveUpCat from "./pages/ForRehouses/GiveUpCat";
import GiveUpRabbit from "./pages/ForRehouses/GiveUpRabbit";
import GiveUpParrot from "./pages/ForRehouses/GiveUpParrot";
import Contact from "./pages/Contact";
import { GoogleOAuthProvider } from "@react-oauth/google";
import GithubAuth from "./function/githubAuth";
import { ThemeContextProvider } from "./globalContext/context";
import Dashboard from "./pages/Profile/Dashboard";
import Profile from "./pages/Profile/Profile";
import Messages from "./pages/Profile/Messages";
import Favorites from "./pages/Profile/Favorites";
import ForgetPass from "./pages/Lost password/ForgetPass";
import FindPet from "./pages/ListOfpets/FindPet";
import PreparingCat from "./pages/Animal/PreparingCat";
import PreparingRabbit from "./pages/Animal/PreparingRabbit";
import PetDetails from "./pages/ListOfpets/PetDetails";
import MainRehouse from "./pages/ListPetToRehouse/MainRehouse";
import SecondStep from "./pages/ListPetToRehouse/SecondStep";
import { ListingContextProvider } from "./globalContext/ListingContext";
import ThirdStep from "./pages/ListPetToRehouse/ThirdStep";
import PreparingParrot from "./pages/Animal/PreparingParrot";
import Confirm from "./pages/ListPetToRehouse/Confirm";
import About from "./pages/About";
import RehousesFAQ from "./pages/FAQ/RehousesFAQ";
import { ChatContextProvider } from "./globalContext/ChatContext";
import AdopterFAQ from "./pages/FAQ/AdopterFAQ";
import DonateNeuter from "./pages/DonateNeuter";
import TestimonialsRehouses from "./pages/ForRehouses/TestimonialsRehouses";
import Testimonialsfromadopters from "./pages/ForAdoption/Testimonialsfromadopters";
import PageNotFound from "./pages/PageNotFound";
import Success from "./pages/paymentStatus/Success";

function App() {
  const clintId = process.env.REACT_APP_GOOGLE_CLIENT_ID as string;
  return (
    <div className="">
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
                    element={<Rehouse />}
                  />
                  <Route path="/for_rehouses" element={<ForRehouses />} />
                  <Route path="/for_adopter" element={<ForAdopter />} />
                  <Route path="/guidelines" element={<AdoptionGuidelines />} />
                  <Route path="/tips-for-adopters" element={<TipsForAdop />} />
                  <Route
                    path="/tips-for-rehouse"
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
                  <Route path="/favorites" element={<Favorites />} />
                  <Route path="/forgot-password" element={<ForgetPass />} />
                  <Route path="/adopt-a-pet" element={<FindPet />} />
                  <Route path="/adopt-a-pet/:id" element={<PetDetails />} />
                  <Route path="/rehouse-a-pet" element={<MainRehouse />} />
                  <Route
                    path="/rehouse-a-pet/about-you"
                    element={<SecondStep />}
                  />
                  <Route
                    path="/rehouse-a-pet/your-pet"
                    element={<ThirdStep />}
                  />
                  <Route path="/rehouse-a-pet/confirm" element={<Confirm />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/donate-to-neuter" element={<DonateNeuter />} />
                  <Route path="/rehouses-faq" element={<RehousesFAQ />} />
                  <Route path="/adopters-faqs" element={<AdopterFAQ />} />
                  <Route
                    path="/testimonials-from-rehouse"
                    element={<TestimonialsRehouses />}
                  />
                  <Route
                    path="/testimonials-from-adopters"
                    element={<Testimonialsfromadopters />}
                  />
                  <Route path="/success" element={<Success />} />
                  <Route path="*" element={<PageNotFound />} />
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
