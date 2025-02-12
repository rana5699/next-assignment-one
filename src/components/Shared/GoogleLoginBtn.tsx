"use client";
import { Button } from "antd";
import { signIn } from "next-auth/react";

const GoogleLoginBtn =  () => {
  
  const handleLogin = async () => {
    await signIn("google",{ callbackUrl: "/dashboard" });
  };

  return (
    <Button onClick={handleLogin} type="primary">
      Sign In With Google
    </Button>
  );
};

export default GoogleLoginBtn;
