import PageHero from '../../components/PageHero';

export const metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        text="How we collect, use, and protect your information."
      />

      <section className="section">
        <div className="container">
          <div className="copy-block reveal-up">
            <span className="eyebrow">Effective date</span>
            <h3>March 2026</h3>
            <p className="price-note">
              This Privacy Policy explains how XCELERATED LLC (“XCELERATED,” “we,” “our,” “us”) collects and uses
              information when you visit our website or submit a form.
            </p>

            <h3 className="spacer-top">1) Information we collect</h3>
            <ul className="bullet-list compact">
              <li>
                <strong>Information you provide</strong><br />
                Name, email, phone number, program interest, availability, and any details you submit through our forms.
              </li>
              <li>
                <strong>Basic usage data</strong><br />
                We may collect standard technical data such as device type, browser type, and approximate location based
                on IP address through website logs/analytics (if enabled).
              </li>
            </ul>

            <h3 className="spacer-top">2) How we use your information</h3>
            <ul className="bullet-list compact">
              <li>To respond to inquiries, schedule sessions, and provide program information.</li>
              <li>To communicate about updates, logistics, and next steps related to training or camps.</li>
              <li>To improve website performance and user experience (if analytics are used).</li>
              <li>To comply with legal obligations and protect against misuse or fraud.</li>
            </ul>

            <h3 className="spacer-top">3) Sharing of information</h3>
            <p>
              We do not sell your personal information. We may share information only in limited cases, such as:
            </p>
            <ul className="bullet-list compact">
              <li>
                With service providers that support our operations (e.g., website hosting, email delivery, payment
                processing) as needed to provide services.
              </li>
              <li>
                If required by law, legal process, or to protect rights, safety, or security.
              </li>
            </ul>

            <h3 className="spacer-top">4) Payments</h3>
            <p>
              If you make a payment through a third-party payment provider, your payment information is handled by that
              provider and subject to their privacy policy. We may receive limited confirmation details (e.g., payment
              status, receipt metadata) necessary to deliver services.
            </p>

            <h3 className="spacer-top">5) Data retention</h3>
            <p>
              We retain information only as long as needed for communication, scheduling, program administration, and
              legal/compliance purposes.
            </p>

            <h3 className="spacer-top">6) Your choices</h3>
            <ul className="bullet-list compact">
              <li>You can request access, correction, or deletion of your submitted information where applicable.</li>
              <li>You can ask us to stop contacting you for non-essential communications.</li>
            </ul>

            <h3 className="spacer-top">7) Security</h3>
            <p>
              We use reasonable safeguards to protect your information. No method of transmission or storage is 100%
              secure, so we cannot guarantee absolute security.
            </p>

            <h3 className="spacer-top">8) Children’s privacy</h3>
            <p>
              For youth programs, we collect information submitted by a parent/guardian or provided with guardian consent
              for scheduling and participation. If you believe a minor’s information was submitted without appropriate
              consent, contact us to address it.
            </p>

            <h3 className="spacer-top">9) Changes to this policy</h3>
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised
              effective date.
            </p>

            <h3 className="spacer-top">10) Contact</h3>
            <p className="price-note">
              Questions about this policy can be sent using the Contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}