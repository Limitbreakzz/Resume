import React from "react";

export default function AddressCard() {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
      <h2 className="text-xl font-bold mb-2 text-green-700">ข้อมูลที่อยู่</h2>
      <p><strong>ที่อยู่:</strong> 293 หมู่ 11</p>
      <p><strong>ตำบล:</strong> ห้วยขวาง</p>
      <p><strong>อำเภอ:</strong> กำแพงแสน</p>
      <p><strong>จังหวัด:</strong> นครปฐม</p>
      <p><strong>รหัสไปรษณีย์:</strong> 73140</p>
    </div>
  );
}
