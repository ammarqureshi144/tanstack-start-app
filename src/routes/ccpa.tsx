import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/ccpa")({
  head: () => ({
    meta: [
      { title: "California Privacy Rights — AIB Communications" },
      { name: "description", content: "Your California Privacy Rights and CCPA disclosures from AIB Communications." },
    ],
  }),
  component: CcpaPage,
});

function CcpaPage() {
  return (
    <LegalLayout eyebrow="For Our California Audience" title={<>Your California Privacy <span className="text-yellow">Rights</span></>} updated="Last Updated: January 1st, 2020">
      <h2>Right 1 — Disclosure of Personal Information</h2>
      <p>
        California residents may request information regarding AIB Communications's disclosure of personal
        information (such as name and contact information) to third parties for direct marketing purposes.
        To request a copy for the preceding calendar year, email{" "}
        <a href="mailto:support@hopkinstek.com" className="text-pink underline">support@hopkinstek.com</a>.
      </p>

      <h2>Right 2 — Removal of Posted Content (Under-18 Users)</h2>
      <p>
        California residents under 18 who are registered users may request removal of content they have
        publicly posted. Email us with a detailed description of the content. Removal may not be complete
        in all circumstances.
      </p>

      <h2>Right 3 — California Consumer Privacy Act (CCPA)</h2>
      <h3>a. Categories of Personal Information Collected</h3>
      <ol>
        <li>Identifiers (name, IP address, email)</li>
        <li>California Customer Records (payment information)</li>
        <li>Characteristics (age, gender)</li>
        <li>Commercial information (plans purchased)</li>
        <li>Audio, electronic, visual, or similar information</li>
        <li>Inferences (preferences and behaviour)</li>
      </ol>

      <h3>b. Right to Know</h3>
      <p>You may request disclosure of the categories and specific pieces of personal information collected about you, including how it is collected, used, disclosed, and "sold".</p>

      <h3>c. Right to Delete</h3>
      <p>You may request deletion of personal information we collect or maintain. Note: deletion requires cancellation and deletion of your account.</p>

      <h3>d. Right to Opt Out of "Sale"</h3>
      <p>AIB Communications may disclose certain information to advertising partners. To learn more and opt out, see our Privacy Policy.</p>

      <h3>e. How to Exercise CCPA Rights</h3>
      <ul>
        <li><strong>Account holders:</strong> log in → "Privacy and Settings" → "California Privacy Rights".</li>
        <li><strong>Non-registered users:</strong> verify by providing your name and email.</li>
        <li><strong>Authorised agents</strong> may make requests on your behalf.</li>
        <li>Exercising these rights will not result in different prices or quality of services.</li>
      </ul>
      <p>
        Email all requests to:{" "}
        <a href="mailto:support@hopkinstek.com" className="text-pink underline">support@hopkinstek.com</a>
      </p>
    </LegalLayout>
  );
}
