const ContactUs = () => {
    return (
        <div className="min-h-screen px-4 py-10 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-semibold text-white-800 mb-6 border-b pb-2">
                    Contact Us
                </h1>

                <div className="mockup-code bg-base-300 text-white-700 shadow-md rounded-lg p-6 text-sm sm:text-base leading-relaxed">
                    <pre className="whitespace-pre-wrap break-words">
                        <h3 className="text-cyan-300 sm:text-2xl font-medium mt-6 mb-3">
                            1. Got a Question? Found a Bug? Just Want to Chat?
                        </h3>
                        <code>
                            We're building BugsAndBoolean for you, the developer community, and your feedback is crucial!
                            Whether you have a brilliant idea, a tricky question, or you've stumbled upon an actual bug (the kind we want you to find!),
                            we'd love to hear from you.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium mt-6 mb-3">
                            2. How to Reach Us:
                        </h3>

                        <code>
                            Email Us Directly {'\n'}
                            For most inquiries, the best way to get in touch is via email. We aim to respond as quickly as possible!
                            Please reach out to us at {""}
                            <a href="mailto:bugsandboolean@gmail.com" className="link-info">
                                bugsandboolean@gmail.com
                            </a>
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium mt-6 mb-3">
                            3. What to Include
                        </h3>
                        <code>
                            When you contact us, especially for bug reports, please try to include as much detail as possible.
                            Think of it like a good bug ticket:
                            {'\n'} - What you were doing when the issue occurred.
                            {'\n'} - What you expected to happen.
                            {'\n'} - What actually happened.
                            {'\n'} - Any error messages you saw.
                            {'\n'} - Screenshots or screen recordings (if applicable and safe to share).
                        </code>

                        <h3 className="text-white sm:text-xl font-medium mt-6 mb-3">
                            We appreciate you being a part of the BugsAndBoolean community!
                        </h3>
                    </pre>
                </div>
            </div>
        </div>

    )
}

export default ContactUs;