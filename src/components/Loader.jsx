import { InfinitySpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div id="loader" className="my-app bg-red-500 min-h-screen flex items-center justify-center">
      <InfinitySpin
        visible={true}
        width="200"
        color="#FFBF55"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
}
