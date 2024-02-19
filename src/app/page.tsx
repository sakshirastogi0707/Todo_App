"use client";
import Card from "@/components/cards/Card";
import React, { useEffect, useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

export default function Todo() {
  const [todos, setTodos] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [completedTodos, setCompletedTodos] = useState<string[]>([]);

  const handleTodoSubmit = (e: any) => {
    e.preventDefault();
    setTodos((prev) => [...prev, inputValue]);

    setInputValue("");
  };

  const iconClickHandler = (index: number, isCompleted: boolean) => {
    if (isCompleted) {
      let updatedCompTodos = [...completedTodos];
      let todoToMoveBack = updatedCompTodos.splice(index, 1)[0];
      setCompletedTodos(updatedCompTodos);
      setTodos((prev) => [...prev, todoToMoveBack]);
    } else {
      let updatedTodos = [...todos];
      let completedTodo = updatedTodos.splice(index, 1)[0];
      setTodos(updatedTodos);
      setCompletedTodos((prev) => [...prev, completedTodo]);
    }
  };

  return (
    <div
      className="App"
      style={{
        paddingInline: "20%",
        display: "flex",
        flexDirection: "column",
        gap: "3rem",
        marginTop: "3rem",
      }}
    >
      <form
        onSubmit={handleTodoSubmit}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Please Enter the task!..."
          style={{ color: "black" }}
        />
        <button
          type="submit"
          style={{ border: "1px solid white", padding: "0.5rem 1rem" }}
        >
          Add Task
        </button>
      </form>
      <hr />
      <div
        className="section-comtainer"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          marginTop: "2rem",
          gap: "1rem",
        }}
      >
        <div
          className="section-one"
          style={{
            border: "1px solid white",
            width: "50%",
            height: "auto",
            minHeight: "20px",
            padding: "1rem",
          }}
        >
          <ol className="text-left space-y-3">
            {todos.length > 0
              ? todos.map((item: string, index: number) => (
                  <Card
                    key={index}
                    id={index + 1}
                    title={item}
                    onClick={() => iconClickHandler(index, false)}
                    icon={<FaArrowRight />}
                  />
                ))
              : "There is no Task to do!"}
          </ol>
        </div>
        <div
          className="section-two "
          style={{
            border: "1px solid white",
            width: "50%",
            height: "auto",
            padding: "1rem",
          }}
        >
          <ol className="text-left space-y-3">
            {completedTodos.length > 0
              ? completedTodos.map((item: string, index: number) => (
                  <Card
                    key={index}
                    id={index + 1}
                    title={item}
                    onClick={() => iconClickHandler(index, true)}
                    icon={<FaArrowLeft />}
                  />
                ))
              : "0 Task completed!"}
          </ol>
        </div>
      </div>
    </div>
  );
}
