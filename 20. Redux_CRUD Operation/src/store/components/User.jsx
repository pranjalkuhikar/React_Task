import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  changeInput,
  removeData,
  submitData,
  updateData,
} from "../reducers/userSlice";

const User = () => {
  const { count, formValue, data } = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();

  const handlerIncrement = () => {
    dispatch(increment());
  };

  const handlerDecrement = () => {
    dispatch(decrement());
  };

  const HandlerChange = (e) => {
    const { name, value } = e.target;
    dispatch(changeInput({ name, value }));
  };

  const HandlerSubmit = (e) => {
    e.preventDefault();
    dispatch(submitData());
  };

  const HandlerRemove = (idx) => {
    dispatch(removeData(idx));
  };

  const HandlerUpdate = (idx) => {
    dispatch(
      updateData({
        idx,
        updatedValue: {
          firstName: "Updated First Name",
          lastName: "Updated Last Name",
        },
      })
    );
  };

  return (
    <div className="flex items-center flex-col gap-4 pt-10 h-full w-full">
      <div>{count}</div>
      <div className="flex gap-2">
        <div
          onClick={handlerIncrement}
          className="px-4 py-1 rounded-lg bg-blue-600 w-fit cursor-pointer active:scale-95"
        >
          Increment
        </div>
        <div
          onClick={handlerDecrement}
          className="px-4 py-1 rounded-lg bg-blue-600 w-fit cursor-pointer active:scale-95"
        >
          Decrement
        </div>
      </div>
      <div className="text-3xl underline">CRUD Operation</div>
      <form onSubmit={HandlerSubmit} className="flex items-center gap-3">
        <input
          className="bg-transparent rounded-md border p-2"
          type="text"
          name="firstName"
          placeholder="Enter the First Name"
          value={formValue.firstName}
          onChange={HandlerChange}
          required
        />
        <input
          className="bg-transparent rounded-md border p-2"
          type="text"
          name="lastName"
          placeholder="Enter the Last Name"
          value={formValue.lastName}
          onChange={HandlerChange}
          required
        />
        <button className="px-4 py-1 rounded-lg font-semibold bg-blue-600 w-fit cursor-pointer active:scale-95">
          Submit
        </button>
      </form>
      <div className="flex flex-col">
        {data.length > 0 && (
          <div className="flex flex-col border border-zinc-300 rounded-md w-80 h-fit p-3">
            {data.map((item, idx) => (
              <div className="flex items-center justify-between" key={idx}>
                <span>
                  {item.firstName} {item.lastName}
                </span>
                <span
                  onClick={() => HandlerUpdate(idx)}
                  className="bg-green-600 rounded-md px-3 py-1 font-semibold mt-2 active:scale-95 cursor-pointer"
                >
                  Update
                </span>
                <span
                  onClick={() => HandlerRemove(idx)}
                  className="bg-red-600 rounded-md px-3 py-1 font-semibold mt-2 active:scale-95 cursor-pointer"
                >
                  Delete
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
