import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — AIB Communications" },
      { name: "description", content: "How AIB Communications collects, uses, and shares personal information." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout eyebrow="Legal" title={<>Privacy <span className="text-yellow">Policy</span></>} updated="Effective Date: February 1st, 2023">
      <h2>1. Overview</h2>
      <p>
        This Privacy Policy describes how AIB Communications handles personal information when you access or
        use one of the websites it owns and operates, including AIBCommunications.com.
      </p>
      <p>
        THIS PRIVACY POLICY IS A BINDING LEGAL AGREEMENT. BY ACCESSING OR USING THE SITE, OR SUBMITTING
        INFORMATION TO US VIA OUR SITE, YOU ACKNOWLEDGE AND AGREE TO OUR USE OF YOUR PERSONAL INFORMATION
        AS DESCRIBED HEREIN.
      </p>
      <p>California residents: please see the California Privacy Statement for additional information regarding your privacy rights.</p>

      <h2>2. Personal Information We Process</h2>
      <ol>
        <li>Individual Identifiers — name, alias, postal address, online identifier, IP address, email address, account name.</li>
        <li>Customer Records — name, address, telephone number.</li>
        <li>Personal Characteristics — gender and age.</li>
        <li>Commercial Information — products or services purchased, obtained, or considered.</li>
        <li>Internet / Network Activity — browsing history, search history, interactions with our website.</li>
        <li>Inferences — inferences regarding which products, services, or Business Partners you may be interested in.</li>
      </ol>

      <h2>3. How We Collect Personal Information</h2>
      <ul>
        <li>Directly from individuals through fillable forms on our Site.</li>
        <li>From other companies who know you are interested in products/services offered by our partners.</li>
        <li>Using web tracking and analytics tools, including cookies, web beacons, pixel tags and clear GIFs.</li>
      </ul>

      <h2>4. How We Use Personal Information</h2>
      <ul>
        <li>Primarily to connect Customers with Business Partners for relevant products or services.</li>
        <li>To provide, maintain, evaluate, and improve the Site and services.</li>
        <li>To provide support.</li>
        <li>To derive aggregate information for tracking Site usage.</li>
      </ul>

      <h2>5. How We Share Personal Information</h2>
      <p>Recipients include:</p>
      <ul>
        <li><strong>Business Partners</strong> — connecting interested consumers with partners.</li>
        <li><strong>Service Partners</strong> — website/server hosting, analytics, billing, fraud protection, marketing.</li>
        <li><strong>Other Vendors</strong> — advertising agencies, data analytics providers, government entities.</li>
      </ul>
      <p>Also shared for legal compliance, safety, or in connection with a change in control (merger, acquisition, restructuring).</p>

      <h2>6. Cookies & Tracking Technologies</h2>
      <ul>
        <li>Session cookies — expire at end of browser session.</li>
        <li>Persistent cookies — stored between sessions to remember preferences.</li>
        <li>First-party cookies — set by our Site.</li>
        <li>Third-party cookies — set by third-party websites.</li>
      </ul>

      <h2>7. Do Not Track</h2>
      <p>Our analytics tools recognize Do Not Track signals where required, but we may still collect information about your internet activity even if Do Not Track is enabled.</p>

      <h2>8. Information Security</h2>
      <p>No method of internet transmission or electronic storage is 100% secure. We cannot guarantee absolute security.</p>

      <h2>9. Communications</h2>
      <p>You consent to receive communications from us and our Customers. You may opt out at any time by following the instructions in each communication.</p>

      <h2>10. Children's Privacy</h2>
      <p>We do not knowingly collect Personal Information from children under 16. We will delete any such information if discovered.</p>

      <h2>11. Third-Party Websites</h2>
      <p>You can access third-party websites from the Site. This Privacy Policy does not apply to those websites.</p>

      <h2>12. Changes to this Privacy Policy</h2>
      <p>We may update this Privacy Policy at any time. Changes will be posted on our Site. Continued use constitutes acceptance.</p>

      <h2>13. Contact</h2>
      <p>Email: <a href="mailto:support@hopkinstek.com" className="text-pink underline">support@hopkinstek.com</a></p>
    </LegalLayout>
  );
}
