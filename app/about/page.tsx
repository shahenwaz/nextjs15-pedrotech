"use client";

export default function About() {
  console.log("Hey is this in the server or client?");
  return (
    <>
      <div className="mb-5"> About Page </div>
      <button onClick={() => alert("Hello...")}> Click Me </button>
    </>
  );
}
