import PrimaryButton from "./buttons/PrimaryButton";
import Logo3d from "../assets/images/logo_3d.png";

export default function InfoCard({
  index,
  item,
  isSelected,
  selectedIndex,
  itemsCount,
}) {
  console.log(isSelected, index);

  return (
    <div
      key={item.id}
      className={`absolute flex items-center justify-center text-white text-center rounded-2xl shadow-lg
        ${
          isSelected && index === selectedIndex
            ? "shadow-secondary border-secondary border-4 shadow-2xl z-20 w-[350px] h-[300px]"
            : "z-0 opacity-30 scale-90 h-[300px] w-[300px]"
        }
        bg-white bg-opacity-20 backdrop-blur-lg`}
      style={{
        transform: `rotate(${(index / itemsCount) * 360}deg) translateX(270px)`,
      }}
    >
      {isSelected && index === selectedIndex ? (
        <div className="flex-col w-full h-full">
          <div className="title bg-gray-500 rounded-t-xl">
            <h3 className="text-xl font-semibold flex items-center justify-center pt-3">
              {item.title}
            </h3>
            <p className="text-xs font-extralight border-b-1 border-gray-50 pb-4">
              {item.subtitle}
            </p>
          </div>

          <div className="content px-10">
            <label
              htmlFor="price"
              className="mt-4 block text-xs font-medium text-start leading-6 text-white"
            >
              From
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                id="price"
                name="price"
                type="text"
                placeholder="0.00"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
              />
              <div className="absolute inset-y-0 right-0 flex items-center">
                <label htmlFor="currency" className="sr-only">
                  Currency
                </label>
                <select
                  id="currency"
                  name="currency"
                  className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-primary focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm"
                >
                  <option>USD</option>
                  <option>CAD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>

          <p className="text-xs border-t-1 border-gray-50 py-6">
            Lorem ipsum dolor sit amet.
          </p>

          <div className="mx-5">
            <PrimaryButton text="Buy Now" />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full">
          <img src={Logo3d} className="w-40 h-40" alt="Item logo" />
        </div>
      )}
    </div>
  );
}
