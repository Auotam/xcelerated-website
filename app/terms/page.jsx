import PageHero from '../../components/PageHero';

export const metadata = { title: 'Terms & Conditions' };

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        text="Please read these Terms before using the website or purchasing services."
      />

      <section className="section">
        <div className="container">
          <div className="copy-block reveal-up">
            <span className="eyebrow">Effective date</span>
            <h3>March 2026</h3>
            <p className="price-note">
              These Terms apply to your use of the XCELERATED website and any services, programs, sessions, camps,
              clinics, and related offerings.
            </p>

            <h3 className="spacer-top">1) Who we are</h3>
            <p>
              XCELERATED LLC (“XCELERATED,” “we,” “our,” “us”) provides performance training services including personal
              training, group training, speed/performance/agility camps and clinics, and related programs. We operate in
              the Bay Area, California.
            </p>

            <h3 className="spacer-top">2) Eligibility</h3>
            <p>
              You must be able to enter into a binding agreement to use this website and purchase services. For minors,
              a parent/guardian must provide consent and complete required forms before participation.
            </p>

            <h3 className="spacer-top">3) Registration, forms, and participation</h3>
            <ul className="bullet-list compact">
              <li>
                Enrollment may require completing intake information, participant details, emergency contact information,
                and other required forms.
              </li>
              <li>
                Participation in training involves physical activity and inherent risks. You agree to follow coaching
                instructions, safety rules, and facility policies.
              </li>
              <li>
                We may refuse or discontinue participation if safety standards are not followed or if participation
                presents risk to the participant or others.
              </li>
            </ul>

            <h3 className="spacer-top">4) Payments and pricing</h3>
            <ul className="bullet-list compact">
              <li>Prices and program details may change from time to time.</li>
              <li>Payments may be collected online or via other approved payment methods.</li>
              <li>
                If you use a third-party payment provider, their terms may also apply to your transaction.
              </li>
            </ul>

            <h3 className="spacer-top">5) Cancellations and credits</h3>
            <p className="price-note">
              Cancellation and credit rules may vary by program and will be communicated at registration or checkout.
              If we cancel a session/event, we will provide a reschedule option, credit, or refund as applicable.
            </p>

            <h3 className="spacer-top">6) Communication</h3>
            <p>
              By submitting a form on this website, you authorize us to contact you using the information you provide
              (e.g., email or phone) for scheduling, follow-ups, and program-related communication. You can request that
              we stop contacting you at any time.
            </p>

            <h3 className="spacer-top">7) Intellectual property</h3>
            <p>
              The website content, branding, logos, design, and materials are owned by XCELERATED or licensed to us.
              You may not copy, reproduce, distribute, or use our materials without written permission.
            </p>

            <h3 className="spacer-top">8) Disclaimer</h3>
            <p>
              The website and services are provided on an “as is” basis. Training results vary and are not guaranteed.
              We do not provide medical advice. Consult a physician if you have concerns about participation.
            </p>

            <h3 className="spacer-top">9) Limitation of liability</h3>
            <p>
              To the fullest extent permitted by law, XCELERATED is not liable for indirect, incidental, special, or
              consequential damages arising from the use of this website or participation in services. Liability, if any,
              is limited to the amount paid for the specific service giving rise to the claim, unless prohibited by law.
            </p>

            <h3 className="spacer-top">10) Changes to these Terms</h3>
            <p>
              We may update these Terms from time to time. The updated Terms will be posted on this page with a revised
              effective date.
            </p>

            <h3 className="spacer-top">11) Governing law</h3>
            <p>
              These Terms are governed by the laws of the State of California, without regard to conflict of law rules.
            </p>

            <h3 className="spacer-top">12) Contact</h3>
            <p className="price-note">
              Questions about these Terms can be sent using the Contact page.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}