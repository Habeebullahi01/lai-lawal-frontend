import { Link } from "@remix-run/react"

export default function Footer() {
    return (
        <div id="footer" className="w-full p-6 bg-dark text-light grid grid-cols-1 grid-flow-row-dense md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 justify-evenly items-center">
            <div className="img-con my-2 flex flex-row items-end justify-start md:row-start-2 lg:row-start-1">
                <img src="/images/logo-light-500.png" alt="Logo" className="w-20" />
                <p className="">Layi Lawal & Co Chartered Accountants.</p>
            </div>
                <div className="my-8">
                    <Link to={"/services"}>Services</Link>
                    <ul className="text-lighter">
                        <li className="my-2"><Link to={"/services/audit"}>Audit</Link></li>
                        <li className="my-2"><Link to={"/services/tax"}>Tax</Link></li>
                        <li className="my-2"><Link to={"/services/advisory"}>Advisory</Link></li>
                    </ul>
                </div>
                <div className="my-8 md:basis-1/2">
                    <span>Contact</span>
                    <ul className="text-lighter">
                        <li className="my-2"><a href="tel:+2348055421762"><span className="material-symbols-outlined">phone</span>Click to start phone call.</a></li>
                        <li className="my-2"><a href="mailto:lailawal810@gmail.com"><span className="material-symbols-outlined text-lg">mail</span>Send an email.</a></li>
                        <li className="my-2"><span className="material-symbols-outlined">location_on</span>Block 7, Suite 5 Oodua Shopping Complex, Ojota, Lagos.</li>
                        {/* <li className="my-2">Advisory</li> */}
                    </ul>
                </div>
            {/* <div className="footer-links my-8">
            </div> */}
        </div>
    )
}