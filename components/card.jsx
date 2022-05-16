export default function Card({ text }) {
  return (
    <div className="w-[260px] h-[80px] bg-white  rounded-md shadow-2xl p-1">
      <div className="flex h-full items-center space-x-3">
        <div className=" bg-orange-100 p-2 rounded-full ml-3">
          <img src="trophy.png" width={40} />
        </div>
        <div>
          <div className="font-bold">{text}</div>
          <div className="text-sm text-slate-400">2 year++</div>
        </div>
      </div>
    </div>
  );
}
