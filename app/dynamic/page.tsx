import { headers } from "next/headers";

const MyComponent = async () => {
  const acceptLanguage = headers().get("Accept-Language");
  const userAgent = headers().get("User-Agent");
  return (
    <div>
      <h1 className="text-5xl mb-4">Dynamic rendering example</h1>

      <p>Accept-Language Header: {acceptLanguage}</p>
      <p>User-Agent Header: {userAgent}</p>
      <p>Generated at: {new Date().toISOString()}</p>

      <br />
      <a
        href="https://nextjs.org/docs/app/building-your-application/rendering/server-components#dynamic-rendering"
        className="btn btn-blue"
      >
        Learn More
      </a>
    </div>
  );
};

export default MyComponent;
