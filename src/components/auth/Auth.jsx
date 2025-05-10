import { useState } from "react";
import Singin from "./Singin";
import SingUp from "./SingUp";

function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);
  return (
    <div className="container mx-auto flex items-center justify-center  h-screen px-3">
      {isSignIn ? (
        <Singin setIsSignIn={setIsSignIn} />
      ) : (
        <SingUp setIsSignIn={setIsSignIn} />
      )}
    </div>
  );
}

export default Auth;
