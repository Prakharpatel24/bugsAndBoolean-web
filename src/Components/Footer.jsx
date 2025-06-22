import { Link } from "react-router";

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 w-full">
            <nav>
                <h6 className="footer-title">Support</h6>
                {/* <Link to="/privacy-policy" className="link link-hover">Privacy policy</Link>
                <Link to="/terms-and-conditions" className="link link-hover">Terms and Conditions</Link>
                <Link to="/cancellation-and-refund" className="link link-hover">Cancellation and Refund</Link>
                <Link to="/shipping-and-delivery" className="link link-hover">Shipping and Delivery</Link> */}
                <Link to="/contact-us" className="link link-hover">Contact Us</Link>
            </nav>
            <nav>
                <h6 className="footer-title">Mission</h6>
                <p>Built by devs, for devs. Connect. Collaborate. Ship.</p>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by bugsandboolean.com</p>
                </aside>
            </nav>
        </footer>
    );
};

export default Footer;
