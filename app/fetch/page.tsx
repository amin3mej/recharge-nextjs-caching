const Numbers = async () => {
  const response = await fetch(
    "http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=5",
    {
      //  cache: "no-cache",
    },
  );
  const numbers: number[] = await response.json();
  return (
    <div>
      <p>
        Next.js extends the native fetch API to allow each request on the server
        to set its own persistent caching semantics. This means that by default,
        if you send a GET request on the server side, the response will be
        cached for a while, and the next request will hit that cache.
      </p>
      {numbers.map((number) => (
        <ul key={number}>
          <li>{number}</li>
        </ul>
      ))}
      <br />
      <a
        href="https://nextjs.org/docs/app/building-your-application/caching#data-cache"
        className="btn btn-blue"
      >
        Learn More
      </a>
    </div>
  );
};

export default Numbers;
