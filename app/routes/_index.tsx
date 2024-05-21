import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Layi Lawal & Co" },
    { name: "description", content: "Layi Lawal & Co Chartered Accountants." },
  ];
};

export default function Index() {
  return (
    <div className="">
    <h1>This is the home page.</h1>
    </div>
  );
}
