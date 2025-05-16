"use client"

import { useState } from "react";
import { ChipButton } from "@/components/elements/ChipButton";
import { CustomButton } from "@/components/elements/CustomButton";
import { CustomInput } from "@/components/elements/CustomInput";

const AuthPage = () => {
  const [role, setRole] = useState<"Student" | "Teacher" | "Admin">("Student");

  const idLabels = {
    Student: "Student ID",
    Teacher: "Faculty ID",
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
                text={r}
                active={role === r}
                variant="default"    // make sure to use default variant here
                size="md"
                className="cursor-pointer"
                onClick={() => setRole(r)}
              />
            ))}
          </div>

          <form action="" className="flex flex-col gap-5">
                      <CustomInput
                          type="text"
                          label={idLabels[role]}
                          placeholder={`Enter your ${idLabels[role].charAt(0).toLowerCase() + idLabels[role].slice(1)}`}
            />
            <CustomInput
              type="password"
              placeholder="Enter your password"
              label="Password"
            />
            <CustomButton text="Login" type="submit" buttonClassName="text-[24px] text-white"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
