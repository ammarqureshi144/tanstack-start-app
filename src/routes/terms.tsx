import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — AIB Communications" },
      { name: "description", content: "Terms and conditions for use of the AIB Communications website." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout eyebrow="Legal" title={<>Terms & <span className="text-yellow">Conditions</span></>} updated="Effective Date: February 1st, 2023">
      <h2>Terms of Website Use</h2>
      <p>
        Your access to our website is subject to these terms. By using the website, you confirm acceptance
        of and agreement to comply with them. Additional documents include our Privacy Policy and Acceptable
        Use Policy.
      </p>

      <h2>Changes to These Terms</h2>
      <p>We may revise these terms at any time by amending this page. You should check this page from time to time.</p>

      <h2>Changes to Our Website</h2>
      <ul>
        <li>We update content from time to time without advance notice.</li>
        <li>We do our best to ensure accuracy but cannot guarantee the website or content will be free from errors.</li>
        <li>We are not obligated to update any information on our website.</li>
      </ul>

      <h2>Your Access to Our Website</h2>
      <ul>
        <li>Access to the home page and some information is available to all visitors; some services require registration.</li>
        <li>We cannot promise the website will always be available or uninterrupted.</li>
        <li>Access is permitted on a temporary basis and we may suspend, withdraw, discontinue or change any part without notice.</li>
        <li>You are responsible for making arrangements to access the website and for anyone who accesses it through your connection.</li>
      </ul>

      <h2>Your Account & Password</h2>
      <p>
        If provided with a user ID, password, or security information, treat it as confidential. We may
        disable any user ID at any time if you fail to comply with these terms. Notify us at{" "}
        <a href="mailto:support@hopkinstek.com" className="text-pink underline">support@hopkinstek.com</a>{" "}
        if you suspect compromise.
      </p>

      <h2>Who Owns the Content</h2>
      <ul>
        <li>We own (or license) copyright and other rights in the website and all published material.</li>
        <li>You may print or download extracts for your own use but must not modify copies and must acknowledge our ownership.</li>
        <li>Breach of these terms immediately ends your right to use the website.</li>
      </ul>

      <h2>Accuracy of Website Content</h2>
      <p>Content is provided for general information only and is not intended as advice. You must obtain your own advice before acting on website content.</p>

      <h2>Limitation of Our Liability</h2>
      <p>Nothing excludes liability for death or personal injury arising from our negligence, or fraud or fraudulent misrepresentation. To the extent permitted by law, we exclude all other liability for:</p>
      <ul>
        <li>Use of, or inability to use, our website.</li>
        <li>Use of or reliance on any content displayed on the website.</li>
        <li>Loss of profit, business, business interruption, or business opportunity.</li>
        <li>Loss or damage caused by viruses, denial-of-service attacks, or other technologically harmful material.</li>
        <li>Content of third-party linked websites (links are not endorsements).</li>
      </ul>

      <h2>Viruses</h2>
      <p>We take reasonable steps to ensure reliability but do not guarantee the website is free from bugs. You must not introduce viruses, trojans, worms, or any other malicious material. Unauthorised access attempts will be reported to law enforcement.</p>

      <h2>Linking to Our Website</h2>
      <p>You may link to our home page provided it is fair, legal, and does not damage our reputation. You must not suggest any form of association, approval, or endorsement where none exists.</p>

      <h2>Third Party Links & Resources</h2>
      <p>Links to third-party websites are provided for information only. We have no control over their contents.</p>

      <h2>When You Must Stop Using Our Website</h2>
      <p>If you do not agree with our terms, you must stop using the website. We may end your use if you fail to use the website as intended, violate our terms, or breach any law.</p>

      <p className="!text-pink !font-bold !text-center !text-lg">Enjoy our website!</p>
    </LegalLayout>
  );
}
