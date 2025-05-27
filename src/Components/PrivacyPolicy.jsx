const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen px-4 py-10 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-semibold mb-6 border-b pb-2">
                    Privacy Policy
                </h1>

                <div className="mockup-code bg-base-300 text-white-700 shadow-md rounded-lg p-6 text-sm sm:text-base leading-relaxed">
                    <pre data-prefix="$" className="whitespace-pre-wrap break-words">
                        <code>
                            At BugsAndBoolean, we care about your privacy and want to be upfront about how we handle your data.
                            Since we’re just getting started, this policy is simple and to the point.
                            As we grow, we’ll keep you updated with any changes.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium mt-6 mb-3">
                            1. What Information We Collect
                        </h3>

                        <code>
                            When you use our app, we may collect:
                            {'\n'} - Your name, email and age (for signing up and logging in)
                            {'\n'} - Basic profile info (like a profile picture, if you add one)
                            {'\n'} - We also use cookies — primarily for keeping you logged in and making sure your sessions stay secure
                            and we don’t use them to track you elsewhere.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium mt-6 mb-3">
                            2. Why We Collect It
                        </h3>
                        <code>
                            We collect this info to:
                            {'\n'} - Let you use the core features of the app
                            {'\n'} - Keep the app secure and running smoothly
                            {'\n'} - Understand how people use the platform so we can improve it
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium mt-6 mb-3">
                            3. Your Control
                        </h3>
                        <code>
                            You can:
                            {'\n'} - Edit or delete your profile
                            {'\n'} - Send a connection request
                            {'\n'} - Remove an added connection
                            {'\n'} We’re still in early development, so if anything feels off—let us know, and we’ll fix it quickly.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium mt-6 mb-3">
                            4. Security
                        </h3>
                        <code>
                            We do our best to keep your data safe, and we’re constantly improving.
                            Please report any suspicious activity.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium mt-6 mb-3">
                            5. Changes
                        </h3>
                        <code>
                            We’ll update this page as new features roll out. Any major updates? You’ll hear from us directly.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium mt-6 mb-3">
                            6. Talk to Us
                        </h3>
                        <code>
                            Questions? Feedback? Concerns?
                            Drop us an email at {""}
                            <a href="mailto:bugsandboolean@gmail.com" className="link-info">
                                bugsandboolean@gmail.com
                            </a>
                            {""}. Thanks for being part of the early journey at BugsAndBoolean 💻🐞
                        </code>
                    </pre>
                </div>
            </div>
        </div>

    )
}

export default PrivacyPolicy;