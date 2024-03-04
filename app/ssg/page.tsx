const MyComponent = async () => {
  return (
    <div>
      <h2>Static page (default)</h2>
      <p>Generated at: {new Date().toISOString()}</p>

      <br />
      <a
        href="https://nextjs.org/docs/app/building-your-application/rendering/server-components#static-rendering-default"
        className="btn btn-blue"
      >
        Learn More
      </a>
    </div>
  );
};

export const revalidate = 10;

export default MyComponent;
