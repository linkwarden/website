import Link from "next/link";
import QuestionAndAnswer from "../QuestionAndAnswer";

function FAQs() {
  return (
    <div className="max-w-5xl px-5 mx-auto pt-20" id="faqs">
      <p className="text-3xl text-center mb-10 font-bold">
        Frequently Asked Questions
      </p>

      <div className="pr-5 bg-[#031928] rounded-2xl">
        <QuestionAndAnswer title="Why use the paid plan when I can already self host it?">
          <p>
            The paid plan offers several advantages, such as hassle-free
            maintenance, automatic updates, and priority support, saving you
            time and effort. It also ensures that you have access to the latest
            stable features and improvements. It's the most convenient way to
            enjoy the full power of Linkwarden without the technical
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
            to discuss your specific needs, and we'll create the perfect
            solution just for you.
          </p>
        </QuestionAndAnswer>

        <hr className="ml-5 border border-[#d3d3d31d]" />

        <QuestionAndAnswer title="How can I cancel my plan?">
          <p>
            You can cancel your plan anytime either by contacting us at{" "}
            <Link
              className="font-bold underline"
              href="mailto:support@linkwarden.app"
            >
              support@linkwarden.app
            </Link>{" "}
            about the inquiry, or by simply logging into your account and
            clicking on your profile photo &gt; “Settings” &gt; “Billing” &gt;
            “Go to Billing Portal”, the billing portal is being handled by
            Stripe, after logging in, from there you can see the “Cancel Plan”
            option. After that, your account will be disabled in less than a
            month.
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
