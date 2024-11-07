import { Stack } from "@chakra-ui/react";
import CubeWithLineTexture from "./CubeWithLineTexture";
import Story from "./Story";

export default function App({ home }) {
  console.log("Home", home);

  return (
    <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-h-screen">
      {/* <CubeWithLineTexture /> */}

      <Story />
    </div>
  );
}
