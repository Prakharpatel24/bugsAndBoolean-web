const ShippingAndDelivery = () => {
    return (
        <div className="min-h-screen px-4 py-10 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-semibold text-white-800 mb-6 border-b pb-2">
                    Shipping & Delivery
                </h1>

                <div className="mockup-code bg-base-300 text-white-700 shadow-md rounded-lg p-6 text-sm sm:text-base leading-relaxed">
                    <pre className="whitespace-pre-wrap break-words">
                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            1. Digital Delivery: Instant Access!
                        </h3>
                        <code>
                            Welcome to BugsAndBoolean! As a digital platform,
                            we don't have traditional "shipping" or "delivery" in the physical sense. {'\n'}
                            {'\n'}Once you've successfully created your account and completed the login process,
                            you'll have instant access to all of BugsAndBoolean's features and community.
                            There's no waiting for a package to arrive or for software to be mailed!
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            2. What We "Deliver":
                        </h3>

                        <code>
                            {'\n'} - Your Profile: Immediately accessible for you to customize and share.
                            {'\n'} - Connections: Ability to send and receive connection requests in real-time.
                            {'\n'} - Updates: Platform updates, new features, and bug fixes are delivered seamlessly through the app
                            and don't require any action from your side
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            3. No Physical Goods (Currently)
                        </h3>
                        <code>
                            At this time, BugsAndBoolean focuses solely on providing a digital networking and collaboration experience.
                            We do not sell or ship any physical products (like merchandise). Therefore, concepts like shipping costs,
                            delivery times, or tracking numbers do not apply to our service.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            4. Questions?
                        </h3>
                        <code>
                            If you have any questions about how our digital platform works or how to access its features,
                            feel free to reach out to us at support@bugsandboolean.com.. We're always here to help you get connected!
                        </code>
                    </pre>
                </div>
            </div>
        </div>

    )
}

export default ShippingAndDelivery;