import Link from "next/link";
import QuestionAndAnswer from "../QuestionAndAnswer";
import Seperator from "../Seperator";
import { useState } from "react";

function FAQs() {
  const [openIndex, setOpenIndex] = useState(-1);

  const handleToggle = (index: any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className="max-w-5xl px-5 mx-auto pt-20" id="faqs">
      <p className="text-3xl text-center mb-10 font-bold">
        Frequently Asked Questions
      </p>

      <div
        className="pr-5 rounded-md border border-outline bg-gradient-to-br from-[#a27dff29] via-transparent to-[#ffffff0a]"
        style={{
          boxShadow: "#ffffff10 0px 5px 20px 0px",
        }}
      >
        <QuestionAndAnswer
          title="How can I try out the product?"
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        >
          <p>
            You can try out Linkwarden Cloud for free by signing up for a 14-day
            trial. The reason we require a credit card is to prevent spam.
          </p>
        </QuestionAndAnswer>

        <Seperator />

        <QuestionAndAnswer
          title="Do you offer refunds?"
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        >
          <p>
            Sure! If you are not satisfied with your purchase, you can request a
            refund within 3 days of your first payment. Just contact us at{" "}
            <Link
              className="underline decoration-dotted underline-offset-2 text-gray-300 hover:opacity-70 duration-200"
              href="mailto:support@linkwarden.app"
            >
              support@linkwarden.app
            </Link>{" "}
            and we will issue a full refund.
          </p>
        </QuestionAndAnswer>

        <Seperator />

        <QuestionAndAnswer
          title="What does the Cloud offering provide?"
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        >
          <p>
            The Cloud plan provides automatic updates, priority support, and
            access to the latest features, saving you time and effort.
          </p>
          <p>
            Plus, your subscription helps us continue improving Linkwarden for
            everyone!
          </p>
        </QuestionAndAnswer>

        <Seperator />

        <QuestionAndAnswer
          title="How can I add more than 30,000 links?"
          isOpen={openIndex === 3}
          onToggle={() => handleToggle(3)}
        >
          <p>
            You can add more than 30,000 links by reserving an additional seats
            under your subscription.{" "}
            <Link
              href="https://docs.linkwarden.app/billing/seats#how-to-reserve-seats"
              className="underline decoration-dotted underline-offset-2 text-gray-300 hover:opacity-70 duration-200"
              target="_blank"
            >
              Learn more
            </Link>
            .
          </p>
        </QuestionAndAnswer>

        <Seperator />

        <QuestionAndAnswer
          title="Can I purchase additional seats?"
          isOpen={openIndex === 4}
          onToggle={() => handleToggle(4)}
        >
          <p>
            Yes, please refer to the{" "}
            <Link
              href="https://docs.linkwarden.app/billing/seats"
              className="underline decoration-dotted underline-offset-2 text-gray-300 hover:opacity-70 duration-200"
              target="_blank"
            >
              documentation
            </Link>{" "}
            for detailed information on managing subscriptions for multiple
            users under your plan.
          </p>
        </QuestionAndAnswer>

        <Seperator />

        <QuestionAndAnswer
          title="How does the free trial work?"
          isOpen={openIndex === 5}
          onToggle={() => handleToggle(5)}
        >
          <p>
            Linkwarden Cloud&apos;s free trial will last for 14 days from the
            purchase date. The trial gives you full access to all features in
            that plan. At the end of the trial, you will be billed the regular
            amount. You can cancel your trial at any time within the trial
            period at no cost.
          </p>
        </QuestionAndAnswer>

        <Seperator />

        <QuestionAndAnswer
          title="How will I be billed?"
          isOpen={openIndex === 6}
          onToggle={() => handleToggle(6)}
        >
          <p>
            You will be billed every month. The payment is being handled by{" "}
            <Link
              href="https://stripe.com/"
              target="_blank"
              className="underline decoration-dotted underline-offset-2 text-gray-300 hover:opacity-70 duration-200"
            >
              Stripe
            </Link>
            , the payment infrastructure that millions of businesses rely on.
          </p>
        </QuestionAndAnswer>

        <Seperator />

        <QuestionAndAnswer
          title="Where's my data stored?"
          isOpen={openIndex === 7}
          onToggle={() => handleToggle(7)}
        >
          <p>
            Our primary server is hosted in Hetzner&apos;s data center in
            Virginia, USA.
          </p>
          <p>
            For storing the archives generated by each webpages, we use Digital
            Ocean&apos;s Spaces located in New York City.
          </p>
        </QuestionAndAnswer>

        <Seperator />

        <QuestionAndAnswer
          title="Can I have a customized instance designed specifically for my needs?"
          isOpen={openIndex === 8}
          onToggle={() => handleToggle(8)}
        >
          <p>
            Absolutely! We offer a custom plan tailored to your specific
            requirements. Contact us at{" "}
            <Link
              className="underline decoration-dotted underline-offset-2 text-gray-300 hover:opacity-70 duration-200"
              href="mailto:support@linkwarden.app"
            >
              support@linkwarden.app
            </Link>{" "}
            to discuss your specific needs, and we&apos;ll create the perfect
            solution just for you.
          </p>
        </QuestionAndAnswer>

        <Seperator />

        <QuestionAndAnswer
          title="How can I cancel my plan?"
          isOpen={openIndex === 9}
          onToggle={() => handleToggle(9)}
        >
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
          className="underline decoration-dotted underline-offset-2 text-gray-300 hover:opacity-70 duration-200"
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
