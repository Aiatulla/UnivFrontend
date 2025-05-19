"use client";

import { useState } from "react";
import { CustomDropdown } from "@/components/elements/custom-dropdown";
import { CustomButton } from "@/components/elements/CustomButton";
import { CustomInput } from "@/components/elements/CustomInput";
import Paragraph from "@/components/elements/Paragraph";
import { CustomModal } from "@/components/modals/custom-modal";
import { CreateClassModal } from "@/components/widgets/admin-page/create-modals/add-class";
import { Button, Divider } from "@heroui/react";

const AdminPage = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const menuItems = [
    "Dashboard",
    "Classes",
    "Students",
    "Teachers",
    "Semesters",
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-3/12 lg:w-2/12 fixed h-full bg-[#2c3e50] z-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center pt-10 pb-8">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white text-lg font-bold mb-4 border-2 border-white/30">
            JS
          </div>
          <Paragraph type="md" className="text-white font-medium">
            Dr. John Smith
          </Paragraph>
          <Paragraph className="text-blue-100/70 text-sm mt-1">
            Computer Science Department
          </Paragraph>
        </div>

        {/* Navigation */}
        <div className="px-3 py-6 border-t">
          <nav className="flex flex-col">
            {menuItems.map((item, index) => (
              <>
                <Button
                  key={item}
                  onClick={() => setActiveItem(item)}
                  className={`relative px-6 py-3 text-left transition-all duration-200 rounded-[8px] ${
                    activeItem === item
                      ? "bg-[#3498db] text-white font-medium"
                      : "bg-[#2c3e50] text-blue-100/70 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                </Button>
                {index < menuItems.length - 1 && <div className="mx-6"></div>}
              </>
            ))}
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="absolute bottom-6 left-0 right-0 px-4">
          <Button className="w-full bg-[#3498db] text-white py-3 rounded-[8px] flex justify-center items-center">
            <span className="mr-2">Logout</span>
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:ml-[25%] lg:ml-[16.666667%] p-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <Paragraph className="font-bold text-gray-800" type="lg">
                Teacher Dashboard
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
