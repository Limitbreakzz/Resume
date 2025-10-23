import React from "react";

export default function ProfileCard() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <h2 className="text-xl font-bold mb-2 text-blue-700">ข้อมูลเกี่ยวกับตัวเอง</h2>
      <p><strong>ชื่อ:</strong> ล้อมพวง สระทองมี</p>
      <p><strong>ระดับชั้น:</strong> ปวส ปี 1</p>
      <p><strong>วันเกิด:</strong> 18 เมษายน 2550</p>
      <p><strong>อีเมล:</strong> lomphongsrathongmee@gamil.com</p>
      <p><strong>โทร:</strong> 098-074-0536</p>
    </div>
  );
}