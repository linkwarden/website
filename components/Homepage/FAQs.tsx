import Link from "next/link";
import QuestionAndAnswer from "../QuestionAndAnswer";
import Seperator from "../Seperator";

function FAQs() {
  return (
    <div className="max-w-5xl px-5 mx-auto pt-20" id="faqs">
      <p className="text-3xl text-center mb-10 font-bold">
        Frequently Asked Questions
      </p>

      <div
        className="pr-5 rounded-2xl border border-outline bg-gradient-to-br from-[#a27dff29] via-transparent to-[#ffffff0a]"
        style={{
          boxShadow: "#ffffff10 0px 5px 20px 0px",
        }}
      >
        <QuestionAndAnswer title="How can I try out the product?">
          <p>
            You can try out Linkwarden Cloud for free by signing up for a 14-day
            trial. The reason we require a credit card is to prevent spam.
          </p>
        </QuestionAndAnswer>

        <Seperator />

        <QuestionAndAnswer title="Why use the paid plan when I can already self host it?">
          <p>
            The paid plan provides automatic updates, priority support, and
            access to the latest features, saving you time and effort.
          </p>
          <p>
            Plus, your subscription helps us continue improving Linkwarden for
            everyone!
          </p>
        </QuestionAndAnswer>

        <Seperator />

        <QuestionAndAnswer title="How does the free trial work?">
          <p>
            Linkwarden Cloud&apos;s free trial will last for 14 days from the
            purchase date. The trial gives you full access to all features in
            that plan. At the end of the trial, you will be billed the regular
            amount. You can cancel your trial at any time within the trial
            period at no cost.
          </p>
        </QuestionAndAnswer>

        <Seperator />

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

        <Seperator />

        <QuestionAndAnswer title="Where's my data stored?">
          <p>
            Our primary server is hosted in Hetzner&apos;s data center in
            Virginia, USA.
          </p>
          <p>
            For storing the archives generated by each webpages, we use Digital
            Ocean&apos;s Spaces located in New York City, which is backed by AWS
            S3.
          </p>
        </QuestionAndAnswer>

        <Seperator />

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

        <Seperator />

        <QuestionAndAnswer title="How can I cancel my plan?">
          <p>To cancel your plan, follow these steps:</p>
          <ul>
            <li>Log in to your account.</li>
            <li>
              Click on your profile photo, then select &quot;Settings&quot;.
            </li>
            <ul>
              <p className="-ml-5 font-bold">For account deletion:</p>
              <ul>
                <li>
                  Scroll to &quot;Delete Your Account&quot; at the bottom.
                </li>
                <li>
                  Enter your password, fill out the optional form, and confirm
                  deletion.
                </li>
              </ul>
              <p className="-ml-5 font-bold">To cancel without deleting:</p>
              <ul>
                <li>
                  Go to &quot;Billing&quot;, &quot;Go to Billing Portal&quot;
                  (handled by Stripe).
                </li>
                <li>Select &quot;Cancel Plan&quot;.</li>
              </ul>
            </ul>
          </ul>
          <p>
            After cancellation, your account will be disabled within a month, or
            immediately if you choose to delete your account.
            <br />
            Either way, your subscription will be cancelled immediately.
          </p>
        </QuestionAndAnswer>
      </div>

      <p className="my-5 text-center text-sm text-text">
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
