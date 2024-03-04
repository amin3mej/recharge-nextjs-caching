import { Suspense } from "react";
import DynamicRenderedComponent from "./dynamic-rendered-component";

const MyComponent = async () => {
    return <>
    <p>Generated at: {new Date().toISOString()}</p>
    <Suspense fallback={<span>loading</span>}>
    <DynamicRenderedComponent />
    </Suspense>
    </>;
}

export const revalidate = 3600;

export default MyComponent;