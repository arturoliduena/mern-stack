import React from 'react';
import { useLocation } from "react-router-dom";
const NotFoundPage = () => {
  let location = useLocation();

  return (
    <div>
      <h1> Page Not Found</h1>
      <h3>
        404 Error!
      </h3>
      <h2>
        No match for <code>{location.pathname}</code>
      </h2>
    </div>
  );
};

export default NotFoundPage;