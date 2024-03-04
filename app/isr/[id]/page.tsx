const MyComponent = async ({ params }: { params: { id: number } }) => {
  return (
    <>
      <p>
        Generated at: {new Date().toISOString()}
        <br />
        id: {params.id}
        <br />
        <br />
        <br />
        <a
          href="https://nextjs.org/docs/app/api-reference/functions/generate-static-params"
          className="btn btn-blue"
        >
          Learn More
        </a>
      </p>
    </>
  );
};

export async function generateStaticParams() {
  return [1, 2].map((id) => {
    id;
  });
}

export const dynamicParams = true; // Useful  for deferred rendering

export const revalidate = 20;

export default MyComponent;
