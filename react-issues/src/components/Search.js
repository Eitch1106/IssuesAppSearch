import { useState, useEffect } from "react";
import BugList from "./Results";

function SearchBugs() {
    const [inputValue, setInputValue] = useState('');
    const [keyword, setKeyword] = useState('');
    
    useEffect(() => {
      setKeyword('');
      setInputValue('');
    }, []);
  
    const handleSearch = () => {
      setKeyword(inputValue);
    };

    const handleKeyDown  = (event) => {
      if (event.key === "Enter") {
        handleSearch();
      }
    };

  return (
    <article data-theme="dark">
      <div className="container flex flex-col items-center justify-center min-h-screen bg-primary">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-8">
          Search Issues about React
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full p-4 md:p-8 rounded-lg shadow-lg bg-white">
          <div className="flex items-center">
            <input
              className="flex-grow border rounded-l-md px-4 py-2 focus:outline-none"
              placeholder="Enter a keyword"
              onChange={(event) => setInputValue(event.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="bg-blue-500 text-white rounded-r-md px-6 py-3 focus:outline-none hover:bg-blue-600 transition duration-300"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <article>
            <div>
                <h4>
                    <BugList keyword={keyword} />
                </h4>
            </div>
        </article>
      </div>
    </article>
  );
}
export default SearchBugs;