import { useState } from "react";

function AssignmentOne() {
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState<null | boolean>(null);

    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.trim().toLowerCase() === "hachiko") {
      setResult(true);
    } else {
      setResult(false);
    }
  };

  return (
    <div className="p-8 font-kode">
        <title>My first webpage</title>
      <header className="mb-6">
        <h1 className="text-4xl font-bold">Norkin Dmitriy</h1>
        <h2 className="text-2xl">Software Engineering, 2nd course</h2>
        <h3 className="text-xl font-semibold mt-2">About Me</h3>
        <p>I'm a backend developer. My main stack is TypeScript/NestJS.</p>
      </header>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">My Hobbies</h3>
        <ol className="list-decimal list-inside">
          <li>Coding</li>
          <li>Gym</li>
          <li>Reading</li>
        </ol>

        <h3 className="text-xl font-semibold mt-4">Favorite Websites</h3>
        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Stack Overflow
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">My Photo</h3>
        <img
          src="images/myphoto.jpg"
          alt="My Photo"
          className="rounded-lg shadow-md mt-2 h-100 w-100"
        />
      </section>

      <button className="bg-blue-700 text-main-light px-4 py-2 rounded hover:bg-blue-900">
        Click Me
      </button>

      <section className="mt-8">
        <h3 className="text-xl font-semibold">Weekly Class Schedule</h3>
        <table className="border-collapse border border-gray-400 mt-3">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Subject</th>
              <th className="border border-gray-400 px-4 py-2">Day</th>
              <th className="border border-gray-400 px-4 py-2">complaint</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-400 px-4 py-2">FrontEnd</td>
              <td className="border border-gray-400 px-4 py-2">Monday</td>
              <td className="border border-gray-400 px-4 py-2">No complaints. Teacher is top!</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Math-like trash</td>
              <td className="border border-gray-400 px-4 py-2">Wednesday</td>
              <td className="border border-gray-400 px-4 py-2">I can't count help pls</td>
            </tr>
            <tr>
              <td className="border border-gray-400 px-4 py-2">Physical Education</td>
              <td className="border border-gray-400 px-4 py-2">Friday</td>
              <td className="border border-gray-400 px-4 py-2">idk lol</td>
            </tr>
          </tbody>
        </table>
      </section>


      <section className="mt-6">
        <h3 className="text-xl font-semibold">Guess the legendary film(1 word)</h3>
        <p className="text-3xl">🐕👨😭</p>
      </section>


      <section className="mt-8">
        <h3 className="text-xl font-semibold">Answer form</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col max-w-sm border p-4 rounded-lg shadow"
        >
          <input
            type="text"
            placeholder="Your guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className="border p-2 mb-2"
          />

          <button
            type="submit"
            className="bg-accent-dark text-main-light px-4 py-2 rounded hover:bg-accent-light"
          >
            Submit
          </button>
        </form>
        {result !== null && (
          <p
            className={`mt-4 text-lg font-semibold ${
              result ? "text-green-600" : "text-red-600"
            }`}
          >
            {result ? "✅ Correct! It's Hachiko." : "❌ Try again!"}
          </p>
        )}
      </section>
    </div>
  );
}

export default AssignmentOne;
