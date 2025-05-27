const CancellationAndRefund = () => {
    return (
        <div className="min-h-screen px-4 py-10 sm:px-6 md:px-10 lg:px-16">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-2xl sm:text-3xl font-semibold text-white-800 mb-6 border-b pb-2">
                    Cancellation & Refund Policy
                </h1>

                <div className="mockup-code bg-base-300 text-white-700 shadow-md rounded-lg p-6 text-sm sm:text-base leading-relaxed">
                    <pre className="whitespace-pre-wrap break-words">
                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            Cancelling Your Account
                        </h3>
                        <code>
                            We're sad to see you go, but we understand things change!
                            You can cancel your BugsAndBoolean account at any time.
                            When you cancel, your profile will be removed from public view,
                            and your data will be queued for deletion in accordance with our data retention policies. {'\n'}
                            {'\n'}To cancel your account:
                            {'\n'} - In your edit profile section, you'll find an option to delete your account. (This feature is currently in development, but it's coming soon!)
                            {'\n'} - In the meantime, feel free to contact us directly at [your email/contact link] and we'll help you with the process.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            Refunds
                        </h3>

                        <code>
                            Since BugsAndBoolean is currently a free platform, there are no services or subscriptions to refund.
                            We don't charge for any features or access at this time. {'\n'}
                            {'\n'} If we introduce premium features or subscriptions in the future, we'll update this policy with clear terms regarding refunds for those services. Any such changes will be communicated to you in advance, as outlined in our Terms & Conditions.
                        </code>

                        <h3 className="text-cyan-300 sm:text-2xl font-medium text-white-800 mt-6 mb-3">
                            Questions?
                        </h3>
                        <code>
                            If you have any questions about cancelling your account or our refund policy,
                            don't hesitate to reach out to us at support@bugsandboolean.com. We're here to help!
                        </code>
                    </pre>
                </div>
            </div>
        </div>

    )
}

export default CancellationAndRefund;