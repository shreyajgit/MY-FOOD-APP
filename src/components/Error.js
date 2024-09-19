import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong</h2>
      <h3>{err.status} : {err.statusText}</h3>
      <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" className="error" alt="Error" />
    </div>
  );
};

export default Error;
