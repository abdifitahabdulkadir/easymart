"use client";
import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthForm() {
  const [showRegister, setShowRegister] = useState(false);
  const toggle = () => setShowRegister(!showRegister);

  if (showRegister) return <RegisterForm handleClick={toggle} />;
  return <LoginForm handleClick={toggle} />;
}
