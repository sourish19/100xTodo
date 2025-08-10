import { Button } from "./components/ui/button";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(75, 85, 99, 0.08) 20px, rgba(75, 85, 99, 0.08) 21px),
        repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(107, 114, 128, 0.06) 30px, rgba(107, 114, 128, 0.06) 31px),
        repeating-linear-gradient(60deg, transparent, transparent 40px, rgba(55, 65, 81, 0.05) 40px, rgba(55, 65, 81, 0.05) 41px),
        repeating-linear-gradient(150deg, transparent, transparent 35px, rgba(31, 41, 55, 0.04) 35px, rgba(31, 41, 55, 0.04) 36px)
      `,
        }}
      />
      <div className="relative z-10 mx-auto max-w-150 h-20 ">
        <div className="flex items-center justify-between bg-emerald-50 w-full py-3 px-4 absolute top-6 rounded-2xl">
          <Navbar />
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default App;
