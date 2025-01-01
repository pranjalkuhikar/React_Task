import { useState } from "react";

const App = () => {
  const [form, setForm] = useState({ first: "" });
  const [cart, setCart] = useState([]);
  const handlerChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    setCart([...cart, { ...form }]);
    setForm({ first: "" });
  };
  const handlerRemove = (idx) => {
    setCart(cart.filter((_, id) => id != idx));
  };
  return (
    <div className="bg-zinc-900 min-h-screen w-full text-white p-10">
      <div className="flex items-center flex-col gap-10 justify-center">
        <h1 className="text-4xl underline">ToDo List</h1>
        <form onSubmit={handlerSubmit} className="flex items-center gap-10">
          <input
            type="text"
            placeholder="Enter Task"
            name="first"
            value={form.first}
            onChange={handlerChange}
            className="bg-transparent"
          />

          <button className="px-5 py-2 bg-blue-600 font-semibold rounded-xl cursor-pointer active:scale-95">
            Add
          </button>
        </form>
      </div>
      <div>
        <h1 className="text-3xl underline mt-10">ToDo Data</h1>
        <div className="relative flex items-center gap-10 flex-col justify-center border m-10 p-10 rounded-md">
          {cart.length > 0 ? (
            cart.map((item, idx) => (
              <div
                key={idx}
                className="relative p-2 flex items-center justify-between border rounded-md w-80"
              >
                <h2 className="text-lg text-center mt-2">{item.first}</h2>
                <div
                  onClick={() => handlerRemove(idx)}
                  className="px-2 cursor-pointer active:scale-95 font-semibold bg-red-600 rounded-full"
                >
                  X
                </div>
              </div>
            ))
          ) : (
            <div>No Data</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
