const TermsAndConditions = () => {
    return (
        <div className="min-h-screen px-4 py-10 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-semibold text-white-800 mb-6 border-b pb-2">
                    Terms & Conditions
                </h1>

                <div className="mockup-code bg-base-300 text-white-700 shadow-md rounded-lg p-6 text-sm sm:text-base leading-relaxed">
                    <pre data-prefix="$" className="whitespace-pre-wrap break-words">
                        <code>
                            Welcome to BugsAndBoolean, a developer-focused networking and collaboration app.
                            These Terms & Conditions ("Terms") define the rules for using our platform.
                            Please read them carefully.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            1. Acceptance of Terms
                        </h3>

                        <code>
                            By accessing or using BugsAndBoolean, you agree to these Terms.
                            If you do not agree, you must refrain from using the platform.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            2. Acceptable Use
                        </h3>
                        <code>
                            We're building a space for devs to connect, share, and build cool things.
                            To keep it safe and useful, here’s what's allowed: {'\n'}
                            {'\n'} You can:
                            {'\n'} - Create and manage your profile
                            {'\n'} - Connect with others, send/receive connection requests
                            {'\n'} - Collaborate on projects and discussions {'\n'}
                            {'\n'}  But please don't:
                            {'\n'} - Attempt to disrupt, reverse-engineer, or hack the platform
                            {'\n'} - Impersonate others
                            {'\n'} - Misuse features or try to exploit bugs (ironically)
                            {'\n'} - Collaborate on projects and discussions
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            3. Your Content
                        </h3>
                        <code>
                            You own whatever content you create or share.
                            By creating a profile, you grant us permission to display that content within the app so others can interact with it.
                            We don’t claim ownership of your ideas or creations. Please only post content that belongs to you.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            4. Accounts and Login
                        </h3>
                        <code>
                            To access the platform, you'll need to create an account. You are responsible for keeping your login credentials secure.
                            We use cookies to keep you logged in during a session. These are only used for session management and security purposes — not for tracking or advertising.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            5. Termination
                        </h3>
                        <code>
                            You can leave anytime by logging out or deleting your account.
                            We reserve the right to suspend or remove accounts that violate these Terms or disrupt the platform.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            6. Beta Disclaimer
                        </h3>
                        <code>
                            This is v1 of BugsAndBoolean — things may break or change.
                            We appreciate your patience and feedback as we continue to improve.
                            Please report bugs responsibly!
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            7. Changes to These Terms
                        </h3>
                        <code>
                            We may update these Terms from time to time. When we do, we'll notify you through the app or via email.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            8. Contact Us
                        </h3>
                        <code>
                            Questions, suggestions, or bug reports? Reach out anytime at support@bugsandboolean.com.
                        </code>
                    </pre>
                </div>
            </div>
        </div>

    )
}

export default TermsAndConditions;