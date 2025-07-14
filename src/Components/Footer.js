import React from "react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white py-6 text-center text-sm w-full">
      <div className="max-w-6xl mx-auto px-4">
        &copy; {new Date().getFullYear()} Lalit Joshi. All rights reserved.
      </div>
    </footer>
  );
} 