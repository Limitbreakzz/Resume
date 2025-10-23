import React from "react";

export default function SubjectsCard() {
  const subjects = [
    { name: "FRONT END ในชีวิตประจำวัน", rank: 1 },
    { name: "ภาษาไทยในยุคพ่อขุนรามคำแหง", rank: 2 },
    { name: "ภาษาอังกฤษเชิงฝรั่งเศษ", rank: 3 },
  ];

  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <h2 className="text-xl font-bold mb-2 text-purple-700">วิชาที่ชอบเรียน</h2>
      <ul>
        {subjects.map((subj) => (
          <li key={subj.rank}>
            {subj.rank}. {subj.name}
          </li>
        ))}
      </ul>
    </div>
  );
}