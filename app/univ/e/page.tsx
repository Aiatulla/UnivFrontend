"use client";

import { GpaCards } from "@/components/cards/gpa-cards";
import { InfoCards } from "@/components/cards/info-cards";

const EPage = () => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <GpaCards topLabel="Overall GPA" bottomLabel="GPA" gpa={3.5} />
    </div>
  );
};

export default EPage;
