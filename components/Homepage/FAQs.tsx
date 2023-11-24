import Link from "next/link";
import QuestionAndAnswer from "../QuestionAndAnswer";

function FAQs() {
  return (
    <div className="max-w-5xl px-5 mx-auto pt-20" id="faqs">
      <p className="text-3xl text-center mb-10 font-bold">
        Frequently Asked Questions
      </p>

      <div className="pr-5 bg-[#031928] rounded-2xl border border-[#d3d3d31d]">
        <QuestionAndAnswer title="Why use the paid plan when I can already self host it?">
          <p>
            The paid plan offers several advantages, such as hassle-free
            maintenance, automatic updates, and priority support, saving you
            time and effort. It also ensures that you have access to the latest
            stable features and improvements. It&apos;s the most convenient way
            to enjoy the full power of Linkwarden without the technical
            complexities of self-hosting it.
          </p>
          <p>
            Plus, your subscription helps us continue improving the app for
            everyone.
          </p>
        </QuestionAndAnswer>

        <hr className="ml-5 border border-[#d3d3d31d]" />

        <QuestionAndAnswer title="How does the free trial work?">
          <p>
            Linkwarden Cloud&apos;s free trial will last for 14 days from the
            purchase date. The trial gives you full access to all features in
            that plan. At the end of the trial, you will be billed the regular
            amount. You can cancel your trial at any time within the trial
            period at no cost.
          </p>
        </QuestionAndAnswer>

        <hr className="ml-5 border border-[#d3d3d31d]" />

        <QuestionAndAnswer title="How will I be billed?">
          <p>
            You will be billed every month. The payment is being handled by{" "}
            <Link
              href="https://stripe.com/"
              target="_blank"
              className="font-bold underline"
            >
              Stripe
            </Link>
            , the payment infrastructure that millions of businesses rely on.
          </p>
        </QuestionAndAnswer>

        <hr className="ml-5 border border-[#d3d3d31d]" />

        <QuestionAndAnswer title="Can I have a customized instance designed specifically for my needs?">
          <p>
            Absolutely! We offer a custom plan tailored to your specific
            requirements. Contact us at{" "}
            <Link
              className="font-bold underline"
              href="mailto:support@linkwarden.app"
            >
              support@linkwarden.app
            </Link>{" "}
            to discuss your specific needs, and we&apos;ll create the perfect
            solution just for you.
          </p>
        </QuestionAndAnswer>

        <hr className="ml-5 border border-[#d3d3d31d]" />

        <QuestionAndAnswer title="How can I cancel my plan?">
          <p>To cancel your plan, follow these steps:</p>
          <ul>
            <li>Log in to your account.</li>
            <li>Click on your profile photo, then select "Settings".</li>
            <ul>
              <p className="-ml-5 font-bold">For account deletion:</p>
              <ul>
                <li>Scroll to "Delete Your Account" at the bottom.</li>
                <li>
                  Enter your password, fill out the optional form, and confirm
                  deletion.
                </li>
              </ul>
              <p className="-ml-5 font-bold">To cancel without deleting:</p>
              <ul>
                <li>
                  Go to "Billing", "Go to Billing Portal" (handled by Stripe).
                </li>
                <li>Select "Cancel Plan".</li>
              </ul>
            </ul>
          </ul>
          <p>
            After cancellation, your account will be disabled within a month, or
            immediately if you choose to delete your account.
            <br />
            Alternatively, email{" "}
            <Link
              className="font-bold underline"
              href="mailto:support@linkwarden.app"
            >
              support@linkwarden.app
            </Link>{" "}
            for assistance.
          </p>
        </QuestionAndAnswer>
      </div>

      <p className="my-5 text-center text-sm text-gray-400">
        For any other questions, feel free to reach out to us at{" "}
        <Link
          className="font-bold underline"
          href="mailto:support@linkwarden.app"
        >
          support@linkwarden.app
        </Link>
        .
      </p>
    </div>
  );
}

export default FAQs;
