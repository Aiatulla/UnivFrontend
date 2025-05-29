"use client";

import { useState } from "react";
import { ChipButton } from "@/components/elements/ChipButton";
import { CustomButton } from "@/components/elements/CustomButton";
import { CustomInput } from "@/components/elements/CustomInput";
import { fetchLoginConnections } from "@/backend/connections/login-connections";

const AuthPage = () => {
  const [userCode, setUserCodeState] = useState("");
  const [password, setPasswordState] = useState("");
  const [role, setRole] = useState<"Student" | "Teacher" | "Admin">("Student");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log("user data:", role, userCode, password);

    try {
      const data = await fetchLoginConnections({ role, userCode, password });
      console.log("Login successful:", data);
    } catch (err: any) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  const idLabels = {
    Student: "Student ID",
    Teacher: "Teacher ID",
    Admin: "Admin ID",
  };

  return (
    <div className="flex justify-center items-center p-5 min-h-[100vh] h-screen">
      <div className="w-full max-w-[420px]">
        <div className="flex flex-col gap-5 bg-white p-10 text-center border rounded-[16px] border-[rgba(0,0,0,0.05)] shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
          <div className="mb-[10px]">
            <div></div>
            <div className="text-[1.5rem] font-[600] tracking-[0.5px] text-[#0d6efd]">
              AITDesk
            </div>
          </div>

          <div className="flex justify-center gap-[10px] mb-[15px]">
            {(["Student", "Teacher", "Admin"] as const).map((r) => (
              <ChipButton
                key={r}
                type="button"
                children={r}
                active={role === r}
                ButtonVariant="default" // make sure to use default variant here
                size="md"
                className="cursor-pointer"
                onClick={() => setRole(r)}
              />
            ))}
          </div>

          <form
            action=""
            className="flex flex-col gap-5"
            onSubmit={handleLogin}
          >
            <CustomInput
              type="text"
              value={userCode}
              onChange={(e) => setUserCodeState(e.target.value)}
              label={idLabels[role]}
              placeholder={`Enter your ${
                idLabels[role].charAt(0).toLowerCase() + idLabels[role].slice(1)
              }`}
            />
            <CustomInput
              type="password"
              value={password}
              placeholder="Enter your password"
              label="Password"
              onChange={(e) => setPasswordState(e.target.value)}
            />
            <CustomButton
              children="Login"
              type="submit"
              buttonClassName="text-[24px] text-white h-[50px]"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
