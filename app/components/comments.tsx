import { useLocation } from "@remix-run/react";
import { Helmet } from "react-helmet";

function CusDiscussion({ id, title }: { id: string; title: string }) {
  const location = useLocation();

  return (
    <>
      <div
        id="cusdis_thread"
        data-host="https://cusdis.com"
        data-app-id="8d74cde2-7749-4457-8548-79700a7c64d9"
        data-page-id={id}
        data-page-url={location.pathname}
        data-page-title={title}
      ></div>
      <Helmet>
        <script async defer src="https://cusdis.com/js/cusdis.es.js"></script>
      </Helmet>
    </>
  );
}

export { CusDiscussion };
