import { headers } from "next/headers";

const DynamicRenderedComponent = async () => {
  const headersList = headers();
  const referer = headersList.get("referer");

  const time: string = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(new Date().toISOString());
    }, 3000);
  });
  return <span>Dynamic Now: {time}</span>;
};
export default DynamicRenderedComponent;
