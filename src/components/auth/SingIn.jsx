import icon from "../../assets/icon.svg";
function Singin({ setIsSignIn }) {
  return (
    <div className="w-[100%] sm:w-[460px] h-fit  border-gray-600 bg-white shadow-md p-5 py-10 rounded-4xl transition-all">
      <div className="text-center flex justify-center py-2">
        <img src={icon} alt="Sign In" className="w-[80px] h-auto mb-4" />
      </div>

      <h1 className="text-center text-lg font-bold"> ورود</h1>
      <form className="mt-6">
        <input
          type="text"
          placeholder="نام کاربری:"
          className="bg-gray-200 p-3 text-sm rounded-xl w-full mb-4"
        />
        <input
          type="password"
          placeholder=" رمز عبور:"
          className="bg-gray-200 p-3 text-sm rounded-xl w-full mb-4"
        />

        <button
          type="submit"
          className="w-full bg-blue-400 text-white p-2 rounded-xl mt-2 cursor-pointer transition-all hover:bg-blue-500"
        >
          ورود
        </button>
      </form>
      <div className="text-center mt-6">
        <p className="text-sm text-gray-600">
          حساب کاربری ندارید؟
          <button
            onClick={() => {
              setIsSignIn((e) => !e);
            }}
            className="text-blue-500 mx-1 cursor-pointer"
          >
            ایجاد حساب
          </button>
        </p>
      </div>
    </div>
  );
}

export default Singin;
