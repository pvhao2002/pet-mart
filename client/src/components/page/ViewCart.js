import Footer from "../footer";
import Header from "../header";
import { SlClose } from "react-icons/sl";
import { useEffect, useState } from "react";
function ViewCart() {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    const storedCartItems = sessionStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);
  // remove product from cart
  const removeProduct = (product) => {
    const updatedCartItems = cartItems.filter(
      (item) => item._id !== product._id
    );
    setCartItems(updatedCartItems);
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <div>
      <Header />
      <div className="flex mb-24">
        <div className="Container mt-[50px] m-auto w-[1245px] px-4">
          <header>
            <h1 className="text-[42px] text-[#222] font-normal">Giỏ hàng</h1>
          </header>
          <div className="mt-4">
            <form className="">
              <table className="StatisticalProduct  border border-slate-300 border-collapse w-full max-md:flex">
                <thead className="border border-slate-300 bg-[#fbfbfb] max-md:hidden">
                  <tr className="max-md:flex max-md:flex-col">
                    <th className=""></th>
                    <th className="max-md:hidden"></th>
                    <th className="Product text-left font-medium p-2">
                      Sản phẩm
                    </th>
                    <th className="Price text-left font-medium p-2">Giá</th>
                    <th className="Quantity text-left font-medium p-2">
                      Số lượng
                    </th>
                    <th className="Pay text-left font-medium p-2">Tạm tính</th>
                  </tr>
                </thead>
                <tbody className="border border-slate-300 max-md:w-full max-md:border-0">
                  {cartItems.map((product, index) => (
                    <tr className="InfoProduct border-b border-slate-300 max-md:flex max-md:flex-col max-md:border-0">
                      <td className="RemoveProduct py-5 w-[20px] max-md:w-full max-md:border-b max-md:py-2">
                        <button
                          className="RemoveProduct px-7 max-md:float-right max-md:px-2"
                          onClick={() => removeProduct(product)}
                        >
                          <i className="text-[26px] font-thin opacity-25 hover:opacity-90 hover:text-[#3380c4]">
                            <SlClose />
                          </i>
                        </button>
                      </td>
                      <td className="ProductIMG max-md:hidden max-sm:self-center max-sm:w-full max-sm:border-b max-sm:flex max-sm:justify-center">
                        <img
                          className="w-[70px] h-[70px] p-2"
                          src={product.image}
                          alt=""
                        />
                      </td>
                      <td className="ProductName p-2 hover:opacity-80 max-md:flex max-md:justify-between max-md:border-b">
                        <span className="hidden max-md:block font-medium">
                          Sản phẩm:
                        </span>
                        <p className="text-[#1e73be] font-medium">
                          {product.productName}
                        </p>
                      </td>
                      <td className="ProductPrice p-2 mr-2 max-md:flex max-md:justify-between max-md:border-b max-md:mr-0">
                        <span className="hidden max-md:block font-medium">
                          Giá:
                        </span>
                        <span className="font-medium">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(product.price)}
                        </span>
                      </td>
                      <td className="ProductEndow p-2 max-md:flex max-md:justify-between max-md:border-b max-md:py-1">
                        <span className="hidden max-md:block font-medium">
                          Số lượng:
                        </span>
                        <div className="inline-block">
                          <span className="border w-16 pl-[20px] min-h-[35px] outline-none">
                            {product.quantity}
                          </span>
                        </div>
                      </td>
                      <td className="IntoMoney p-2 max-md:flex max-md:justify-between max-md:border-b">
                        <span className="hidden max-md:block font-medium">
                          Tạm tính:
                        </span>
                        <span className="font-medium">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(product.price * product.quantity)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </form>

            <div className="mt-6">
              <div className="float-right border border-slate-300 w-2/5 max-md:w-full">
                <header className="bg-[#fbfbfb] py-2 px-3 border-b mb-5">
                  <h2 className="text-[#222] font-medium text-[20px]">
                    Cộng giỏ hàng
                  </h2>
                </header>
                <table
                  cellSpacing={0}
                  className="text-left border-collapse mx-6 block"
                >
                  <tbody className="block">
                    <tr className="border-b border-slate-300 flex max-md:justify-between">
                      <th className="p-3 lg:mr-36 min-w-[110px]">Tạm tính</th>
                      <td className="p-3 font-medium">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(
                          cartItems.reduce(
                            (total, product) =>
                              total + product.price * product.quantity,
                            0
                          )
                        )}
                      </td>
                    </tr>
                    <tr className="border-b border-slate-300 flex max-md:justify-between">
                      <th className="p-3 lg:mr-36 min-w-[110px]">Giao hàng</th>
                      <td className="p-3 font-medium">30.000 ₫</td>
                    </tr>
                    <tr className="border-b border-slate-300 flex max-md:justify-between">
                      <th className="p-3 lg:mr-36 min-w-[110px]">Tổng</th>
                      <td className="p-3 font-medium">
                        {new Intl.NumberFormat("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        }).format(
                          cartItems.reduce(
                            (total, product) =>
                              total + product.price * product.quantity,
                            0
                          ) + 30000
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="w-full flex p-[14px] ">
                  <button
                    onClick={() => {
                      // remove cart items from session storage
                      sessionStorage.removeItem("cartItems");
                      // remove cart items from state
                      setCartItems([]);

                      alert("Thanh toán thành công");
                    }}
                    className="py-2.5 px-10 bg-[#273172] text-center w-full mx-2.5 text-white font-medium hover:opacity-80"
                  >
                    Tiến hành thanh toán
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default ViewCart;
