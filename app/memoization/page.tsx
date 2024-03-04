const getUUID = async () => {
  const res = await fetch(
    "https://www.randomnumberapi.com/api/v1.0/uuid?count=1",
    {
      cache: "no-store", // Disable Next.js Data caching
    },
  );
  const uuids: string[] = await res.json();
  return uuids[0];
};

const MyComponent = async () => {
  const uuid = await getUUID();

  return <p>UUID: {uuid}</p>;
};

export default async function Page() {
  return (
    <div>
      {Array.from({ length: 5 }).map((_, i) => (
        <MyComponent key={i} />
      ))}

      <br />
      <a
        href="https://nextjs.org/docs/app/building-your-application/caching#request-memoization"
        className="btn btn-blue"
      >
        Learn More
      </a>
    </div>
  );
}
