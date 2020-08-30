import React from "react";
import { Helmet } from 'react-helmet';

function ErrorPage() {
  const title = 'Page not found';

  return (
    <>
      <Helmet>
        <title>{title} | Giffito</title>
      </Helmet>
      <h1>{title}</h1>
      <p>Something went wrong... :/</p>
      <a href="/">Go back Home</a>
    </>
  );
}

export default ErrorPage;
