import { Link } from "@remix-run/react";

export function FilledButton({ text,path }: { text: string, path: string}) {
  return (
    <Link to={path}>
      <div className={"bg-light border border-light text-dark text-center text-xs w-fit p-4 inline-block m-2 font-sans hover:bg-opacity-20 hover:text-light hover:"}>
        {text.toUpperCase()}
      </div>
    </Link>
  );
}
export function OutlinedButton({ text,path }: { text: string, path:string }) {
  return (
    <Link to={path}>
      <div className={"border border-light text-light text-xs text-center w-fit p-4 inline-block m-2 font-sans hover:bg-dark"}>
        {text.toUpperCase()}
      </div>
    </Link>
  );
}