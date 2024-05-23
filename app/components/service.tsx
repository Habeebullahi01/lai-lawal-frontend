import { FilledButton } from "./button";

export function ServiceCard({name, summary}: {name:string, summary:string}) {
    
    return (
        <div className="service-card w-60 border hover:border-dark text-dark m-auto h-80 flex flex-col justify-evenly my-4 p-2">
            <h4 className="text-2xl">{name}</h4>
            <p className="text-center font-sans">
                {summary.slice(0,180) + "..."}
            </p>
            <FilledButton text="Learn more" path={`/services/${name.toLowerCase()}`} />
        </div>
    )
}