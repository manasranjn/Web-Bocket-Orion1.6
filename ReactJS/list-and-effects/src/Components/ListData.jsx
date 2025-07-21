import React from "react";

const ListData = () => {
  const employees = [
    {
      id: 1,
      name: "Rahul",
      age: 25,
      depatment: "IT",
    },
    {
      id: 2,
      name: "Biswajit",
      age: 20,
      depatment: "Dev",
    },
    {
      id: 3,
      name: "Kaushik",
      age: 52,
      depatment: "HR",
    },
    {
      id: 4,
      name: "Sibasish",
      age: 22,
      depatment: "Sales",
    },
    {
      id: 5,
      name: "Suman",
      age: 24,
      depatment: "HR",
    },
  ];
  return (
    <div>
      <h1>List Data</h1>
      <div className="grid grid-cols-4 gap-4">
        {employees.map((item) => (
          <div className="p-4 rounded-lg bg-gray-200">
            <p>Name: {item.name}</p>
            <p>Age: {item.age}</p>
            <p>Depatment: {item.depatment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListData;
