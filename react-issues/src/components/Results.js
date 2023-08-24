import React, { useState, useEffect } from 'react';
import { searchBugs } from '../api/ApiGithub';

const BugList = (props) => {
  const [bugs, setBugs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const bugsData = await searchBugs(props.keyword);
        setBugs(bugsData);
        console.log(bugsData);
      } catch (error) {
        console.error('Error fetching bugs:', error);
      }
    }
    fetchData();
  }, [props.keyword]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">React Bug List</h1>
      <ul className="bg-white rounded-lg shadow-md p-4">
        {bugs.map(bug => (
          <li key={bug.id} className="mb-2">
            <a
              href={bug.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {bug.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BugList;