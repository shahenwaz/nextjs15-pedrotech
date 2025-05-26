export default async function Contact() {
  console.log("Hey is this in the server or client?");

  // Requesting for dummy data from json file
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);

  return (
    <>
      <div> Contact page </div>
      <button>Click Me</button>
    </>
  );
}
