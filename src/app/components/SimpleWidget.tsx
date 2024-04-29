import { IoCafeOutline } from "react-icons/io5";

export const SimpleWidget = () => {
  return (
    <div className="bg-white shadow-xl p-3 sm:min-w-[25%] min-w-full  rounded-2xl border-1 border-gray-50">
      <div className="flex flex-col">
        <div>
          <h2 className="font-bold text-center text-gray-600">Contador</h2>
        </div>
        <div className="my-3">
          <div className="flex flex-row items-center justify-center space-x-1 ">
            <div id="icon">
              {/* Icono irá aquí */}
              <IoCafeOutline size={50} className="text-blue-500" />
            </div>
            <div id="temp" className="text-center">
              <h4 className="text-4xl">Titulo</h4>
              <p className="text-xs text-gray-500">Subtitulo</p>
            </div>
          </div>
        </div>

        <div className="w-full mt-2 text-right border-t-2 border-gray-100 place-items-end">
          <a href="#" className="text-xs font-medium text-indigo-600">
            Más
          </a>
        </div>
      </div>
    </div>
  );
};
