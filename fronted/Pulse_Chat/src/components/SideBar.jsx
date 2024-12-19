export default function () {
  return (
    <div className="flex h-screen">
      <div className="w-20 flex flex-cols justify-center bg-blue-600 rounded-2xl  m-4">
        <div className="m-2"><Avatar /></div>
        <div><img src="../images/bell.svg"/></div>
      </div>
    </div>
  );
}

const Avatar = () => {
  return (
    <div className="rounded-full bg-red-200 w-12 h-12 m-2">
      <div className="h-full flex items-center justify-center">H</div>
    </div>
  );
};
