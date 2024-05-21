import { NavLink, Link } from "@remix-run/react";
// import { useEffect,FunctionComponent } from "react";
// import { FunctionComponent } from "react"

export default function Header() {
  // const screenSize = window.screen.width;
  // const navigate = Na
  // useEffect(() => {

  // })
  return (
    <div
      id="header"
      className="bg-dark text-light flex flex-row items-end justify-between relative h-14"
    >
      <Link to={"/"}>
        <div className="">
          {/* icon */}
          <div className="imgCon w-10 inline-block mx-4">
            <img
              alt="Logo"
              src="/images/logo-light-500.png"
              className="w-full"
            />
          </div>
          <span className="text-xl font-bold">
            Layi Lawal & Co
            <span className="xs:hidden lg:inline"> Chartered Accountants</span>
          </span>
        </div>
      </Link>

      <div id="navCon" className="mx-4">
        <button
          className="md:hidden"
          onClick={() => {
            const nav = document.getElementById("nav");
            nav?.classList.replace("hidden", "flex");
            // nav?.classList.remove("hidden");
          }}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>

        <nav
          id="nav"
          className="w-1/2 md:w-auto hidden h-[100vh] md:h-auto top-0 right-0 absolute md:relative py-8 md:p-0 bg-light text-dark md:text-light md:bg-dark flex-col md:flex md:flex-row  flex-auto z-10"
        >
          <button
            className="md:hidden"
            onClick={() => {
              const nav = document.getElementById("nav");
              nav?.classList.replace("flex", "hidden");
              //   nav?.classList.add("hidden");
            }}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <ul className=" text-lg text-center flex flex-col md:flex-row align-middle justify-evenly h-1/2">
            <li className="md:mx-8">
              <NavLink to={"/services"}>Services</NavLink>
            </li>
            <li className="md:mx-8">
              <NavLink to={"/contact"}>Contact</NavLink>
            </li>
            <li className="md:mx-8">
              <NavLink to={"/about"}>About Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      {/* {window.screen.width >375? <BigNav />: <MobNav />  } */}
    </div>
  );
}

// export const MobNav: FunctionComponent = () => {
//     return (
//         <div>This is mobile.</div>
//     )
// }

// const BigNav: FunctionComponent = () => {
//     return (
//         <div>This is Big.</div>
//     )
// }
