import { useEffect, useState } from "react";
import axios from "axios";
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState([]);
  const handlerChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm.trim().length > 0) {
        try {
          const { data } = await axios.get(
            `https://api.github.com/search/repositories?q=${encodeURIComponent(
              searchTerm
            )}`
          );
          setResult(data.items);
        } catch (error) {
          console.error("Error", error);
        }
      } else {
        setResult([]);
      }
    };
    const debounce = setTimeout(fetchData, 500);
    return () => clearInterval(debounce);
  }, [searchTerm]);
  return (
    <div className="bg-zinc-800 min-h-screen w-full">
      <h1 className="w-full p-10 h-2 underline text-white font-mono text-3xl">
        GitHub Repositories Search
      </h1>
      <div className=" p-10 mt-10 w-full">
        <input
          type="text"
          placeholder="Enter the Repo Name"
          className="bg-transparent border border-slate-200 text-white p-2 rounded-md"
          onChange={handlerChange}
        />
      </div>
      <div className="p-10 list-none">
        {result.map((repo) => (
          <div
            key={repo.id}
            className="py-2 border-b w-fit border-gray-200 last:border-none"
          >
            <a
              href={repo.html_url}
              target="_blank"
              className="text-slate-300 hover:text-blue-600"
            >
              {repo.full_name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
