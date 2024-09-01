const Navbar = () => {
  return (
    <div className="flex border-b-2 w-full h-14 sticky top-0 justify-center items-center bg-white z-50 bg-opacity-30 backdrop-blur-md">
      <div className="flex justify-between w-3/4">
        <div>
          <p className="  font-bold">Mario Pringle</p>
        </div>

        {/* <div className="flex gap-4">
          <p className=" ">About me</p>
          <p className=" ">Skills</p>
          <p className=" ">Projects</p>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
