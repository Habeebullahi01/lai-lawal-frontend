import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer, Link, NavLink, Outlet, Meta, Links, ScrollRestoration, Scripts } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
const ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const stylesheet = "/assets/tailwind-CcF3wsBr.css";
function Header() {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      id: "header",
      className: "bg-dark text-light flex flex-row items-end justify-between relative h-14",
      children: [
        /* @__PURE__ */ jsx(Link, { to: "/", children: /* @__PURE__ */ jsxs("div", { className: "", children: [
          /* @__PURE__ */ jsx("div", { className: "imgCon w-10 inline-block mx-4", children: /* @__PURE__ */ jsx(
            "img",
            {
              alt: "Logo",
              src: "/images/logo-light-500.png",
              className: "w-full"
            }
          ) }),
          /* @__PURE__ */ jsxs("span", { className: "text-xl font-bold", children: [
            "Layi Lawal & Co",
            /* @__PURE__ */ jsx("span", { className: "xs:hidden lg:inline", children: " Chartered Accountants" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { id: "navCon", className: "mx-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              className: "md:hidden",
              onClick: () => {
                const nav = document.getElementById("nav");
                nav == null ? void 0 : nav.classList.replace("hidden", "flex");
              },
              children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "menu" })
            }
          ),
          /* @__PURE__ */ jsxs(
            "nav",
            {
              id: "nav",
              className: "w-1/2 md:w-auto hidden h-[100vh] md:h-auto top-0 right-0 absolute md:relative py-8 md:p-0 bg-light text-dark md:text-light md:bg-dark flex-col md:flex md:flex-row  flex-auto z-10",
              children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    className: "md:hidden",
                    onClick: () => {
                      const nav = document.getElementById("nav");
                      nav == null ? void 0 : nav.classList.replace("flex", "hidden");
                    },
                    children: /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "close" })
                  }
                ),
                /* @__PURE__ */ jsxs("ul", { className: " text-lg text-center flex flex-col md:flex-row align-middle justify-evenly h-1/2", children: [
                  /* @__PURE__ */ jsx("li", { className: "md:mx-8", children: /* @__PURE__ */ jsx(NavLink, { to: "/services", children: "Services" }) }),
                  /* @__PURE__ */ jsx("li", { className: "md:mx-8", children: /* @__PURE__ */ jsx(NavLink, { to: "/contact", children: "Contact" }) }),
                  /* @__PURE__ */ jsx("li", { className: "md:mx-8", children: /* @__PURE__ */ jsx(NavLink, { to: "/about", children: "About Us" }) })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
function Footer() {
  return /* @__PURE__ */ jsxs("div", { id: "footer", className: "w-full p-6 bg-dark text-light grid grid-cols-1 grid-flow-row-dense md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 justify-evenly items-center", children: [
    /* @__PURE__ */ jsxs("div", { className: "img-con my-2 flex flex-row items-end justify-start md:row-start-2 lg:row-start-1", children: [
      /* @__PURE__ */ jsx("img", { src: "/images/logo-light-500.png", alt: "Logo", className: "w-20" }),
      /* @__PURE__ */ jsx("p", { className: "", children: "Layi Lawal & Co Chartered Accountants." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "my-8", children: [
      /* @__PURE__ */ jsx(Link, { to: "/services", children: "Services" }),
      /* @__PURE__ */ jsxs("ul", { className: "text-lighter", children: [
        /* @__PURE__ */ jsx("li", { className: "my-2", children: /* @__PURE__ */ jsx(Link, { to: "/services/audit", children: "Audit" }) }),
        /* @__PURE__ */ jsx("li", { className: "my-2", children: /* @__PURE__ */ jsx(Link, { to: "/services/tax", children: "Tax" }) }),
        /* @__PURE__ */ jsx("li", { className: "my-2", children: /* @__PURE__ */ jsx(Link, { to: "/services/advisory", children: "Advisory" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "my-8 md:basis-1/2", children: [
      /* @__PURE__ */ jsx("span", { children: "Contact" }),
      /* @__PURE__ */ jsxs("ul", { className: "text-lighter", children: [
        /* @__PURE__ */ jsx("li", { className: "my-2", children: /* @__PURE__ */ jsxs("a", { href: "tel:+2348055421762", children: [
          /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "phone" }),
          "Click to start phone call."
        ] }) }),
        /* @__PURE__ */ jsx("li", { className: "my-2", children: /* @__PURE__ */ jsxs("a", { href: "mailto:lailawal810@gmail.com", children: [
          /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined text-lg", children: "mail" }),
          "Send an email."
        ] }) }),
        /* @__PURE__ */ jsxs("li", { className: "my-2", children: [
          /* @__PURE__ */ jsx("span", { className: "material-symbols-outlined", children: "location_on" }),
          "Block 7, Suite 5 Oodua Shopping Complex, Ojota, Lagos."
        ] })
      ] })
    ] })
  ] });
}
const links = () => [
  { rel: "stylesheet", href: stylesheet },
  { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" },
  { rel: "icon", type: "image/png", href: "/images/logo-light-500.png" }
];
function Layout({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { className: "font-serif", children: [
      /* @__PURE__ */ jsx(Header, {}),
      children,
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {}),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Layout,
  default: App,
  links
}, Symbol.toStringTag, { value: "Module" }));
const meta = () => {
  return [
    { title: "Layi Lawal & Co" },
    { name: "description", content: "Layi Lawal & Co Chartered Accountants." }
  ];
};
function Index() {
  return /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("h1", { children: "This is the home page." }) });
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Index,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Bfuz4rI-.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-CxZU4tuM.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/root-D8zDn1wo.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js", "/assets/components-CxZU4tuM.js"], "css": [] }, "routes/_index": { "id": "routes/_index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/_index-C-Dx8daH.js", "imports": ["/assets/jsx-runtime-56DGgGmo.js"], "css": [] } }, "url": "/assets/manifest-dff3cf20.js", "version": "dff3cf20" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false, "unstable_singleFetch": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  mode,
  publicPath,
  routes
};
