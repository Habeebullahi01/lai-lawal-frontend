import type { MetaFunction } from "@remix-run/node";
import { FilledButton, OutlinedButton } from "~/components/button";
import { ServiceCard } from "~/components/service";

export const meta: MetaFunction = () => {
  return [
    { title: "Layi Lawal & Co" },
    { name: "description", content: "Layi Lawal & Co Chartered Accountants." },
  ];
};

export default function Index() {
  return (
    <div className="text-dark">
      <section
        id="hero"
        className="w-full h-dvh bg-hero text-light bg-cover bg-center"
      >
        <div className="grid grid-cols-12 grid-rows-6 bg-opacity-40 bg-dark h-dvh">
          <h2 className="row-start-2 md:row-start-3 col-start-2 col-span-full text-3xl">
            Your Trusted Financial Partner.
          </h2>
          <div className="links row-start-5 col-start-2 col-span-full">
            <FilledButton text="schedule consultation" path="/" />
            <OutlinedButton text="Learn more" path="/" />
          </div>
        </div>
      </section>
      <section
        id="services"
        className="text-center"
      >
        <h2 className="text-2xl text-center m-4">Services</h2>
        <div className=" md:flex md:flex-row md:flex-wrap justify-evenly max-w-[80%] m-auto my-12">
        <div className="row-start-1 col-start-1 md:basis-1/2 lg:basis-1/3">
          <ServiceCard
            name="Audit"
            summary="The most commonly used units are vh and vw. However, there are other viewport-relative units such as dvh, dvw, svh, svw, lvh, and lvw. These units are used to define the size of an element relative to the dynamic viewport, small viewport, large viewport, and initial containing block."
          />
        </div>
        <div className="row-start-1 col-start-3 md:basis-1/2 lg:basis-1/3">
          <ServiceCard
            name="Advisory"
            summary="The most commonly used units are vh and vw. However, there are other viewport-relative units such as dvh, dvw, svh, svw, lvh, and lvw. These units are used to define the size of an element relative to the dynamic viewport, small viewport, large viewport, and initial containing block."
          />
        </div>
        <div className="row-start-2 col-start-1 md:basis-1/2 lg:basis-1/3">
          <ServiceCard
            name="Accontancy"
            summary="The most commonly used units are vh and vw. However, there are other viewport-relative units such as dvh, dvw, svh, svw, lvh, and lvw. These units are used to define the size of an element relative to the dynamic viewport, small viewport, large viewport, and initial containing block."
          />
        </div>
        <div className="row-start-2 col-start-3 md:basis-1/2 lg:basis-1/3">
          <ServiceCard
            name="Tax"
            summary="The most commonly used units are vh and vw. However, there are other viewport-relative units such as dvh, dvw, svh, svw, lvh, and lvw. These units are used to define the size of an element relative to the dynamic viewport, small viewport, large viewport, and initial containing block."
          />
        </div>
        <div className="row-start-3 col-start-2 md:basis-1/2 lg:basis-1/3">
          <ServiceCard
            name="Insolvency"
            summary="The most commonly used units are vh and vw. However, there are other viewport-relative units such as dvh, dvw, svh, svw, lvh, and lvw. These units are used to define the size of an element relative to the dynamic viewport, small viewport, large viewport, and initial containing block."
          />
          </div>
          </div>
      </section>
      <section id="about" className="text-center bg-[url('/images/about.jpg')] bg-cover bg-center min-w-full text-light">
        {/* <h2>About Us</h2> */}
        <div className="bg-dark bg-opacity-40 h-full py-2 md:py-8 md:flex md:flex-row md:justify-evenly px-4">
          <div id="company-badge" className="w-4/5 mx-auto my-4 md:basis-2/5">
            <img src="/images/logo-dark-500.png" alt="Company Logo" className="w-4/5 lg:w-2/5 m-auto" />
            <p className="text-2xl  m-4">Layi Lawal & Co Chartered Accountants</p>
          </div>
          <div id="company-bio" className="w-4/5 lg:w-3/5 m-auto md:basis-2/5 ">
            <p className="my-4 md:text-left text-lg font-sans">{`Something about your years of experience which includes a variety of services in a wide range of industries. This may also include the goals or mission of the firm, and maybe how it accomplishes them. Client-centric of course. Maybe take advantage of the logo and say something like 'illuminating the path for your clients'.`}</p>
            <OutlinedButton text="Learn more" path="/about" />
          </div>
        </div>
      </section>
    </div>
  );
}
