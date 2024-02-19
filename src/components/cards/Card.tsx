import React, { ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";

interface ICardProps {
  title: string;
  icon: ReactNode;
  color?: string;
  onClick?: () => void;
  id: number;
}
export default function Card({ title, icon, color, onClick, id }: ICardProps) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "green",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <li style={{ color }}>
        {" "}
        <span>{id}</span> {title}
      </li>
      <button style={{ padding: "0.4rem, 1rem" }} onClick={onClick}>{icon}</button>
    </div>
  );
}
