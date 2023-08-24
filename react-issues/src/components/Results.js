import React, { useState, useEffect } from "react";
import { searchBugs } from "../api/ApiGithub";

const BugList = (props) => {
  const [bugs, setBugs] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const bugsData = await searchBugs(props.keyword, pageNumber);
        setBugs((prevBugs) => [...prevBugs, ...bugsData]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching bugs:", error);
        setLoading(false);
      }
    }

    fetchData();
  }, [props.keyword, pageNumber]);

  useEffect(() => {
    function handleScroll() {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.scrollHeight - 100
      ) {
        if (!loading) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        React Bug List
      </h1>
      <ul className="bg-white rounded-lg shadow-md p-4">
        {bugs.map((bug,index) => (
          <li key={`${bug.id}-${index}`} className="mb-4">
            <a
              href={bug.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline text-lg font-semibold"
            >
              {bug.title}
            </a>
            {bug.labels.length > 0 && bug.labels[0].description && (
              <p className="text-gray-600">{bug.labels[0].description}</p>
            )}
            <p className="text-sm text-gray-500">
              Created by {bug.author} on {bug.created_at}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BugList;
