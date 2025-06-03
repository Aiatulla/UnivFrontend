"use client";

import { GpaCards } from "@/components/cards/gpa-cards";
import { InfoCards } from "@/components/cards/info-cards";
import { useEffect, useState } from "react";

const EPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/univ/students`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((err) => console.error("Error fetching users:", err));
  }, []);
  console.log(users);
  return <div className="flex justify-center items-center h-screen "></div>;
};

export default EPage;
