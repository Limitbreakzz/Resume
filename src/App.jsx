import React from "react";
import ProfileCard from './components/ProfileCard'
import AddressCard from './components/AddressCard'
import FavoriteSubjects from './components/SubjectsCard'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Resume
      </h1>
      <div className="grid md:grid-cols-3 gap-6">
        <ProfileCard />
        <AddressCard />
        <FavoriteSubjects />
      </div>
    </div>
  );
}
