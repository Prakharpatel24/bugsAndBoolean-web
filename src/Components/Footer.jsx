const Footer = () => {
    return (
        <div className="fixed bottom-0 w-full">
        <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-5">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by TechMate.com</p>
            </aside>
        </footer>
        </div>
    )
}

export default Footer;