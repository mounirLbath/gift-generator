import Footer from "./Components/Footer";
import GiftInterface from "./Components/GiftInterface";

export default function Home() {
  return (
    <div>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <GiftInterface />
      </div>
      <Footer isGift={true} />
    </div>
  );
}
