import { Helmet } from "react-helmet-async";
import Layout from "../components/layout/Layout";

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Urban Invisible Grills</title>
        <meta
          name="description"
          content="Privacy policy for Urban Invisible Grills. Learn how we protect your personal information and handle data."
        />
        <meta
          name="keywords"
          content="privacy policy, data protection, personal information, confidentiality, terms and conditions"
        />
        <link rel="canonical" href="https://urbansafetygrills.in/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | Urban Invisible Grills" />
        <meta property="og:description" content="Privacy policy for Urban Invisible Grills. Learn how we protect your personal information." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://urbansafetygrills.in/privacy-policy" />
        <meta property="og:image" content="https://urbansafetygrills.in/favicon.jpg" />
      </Helmet>

      <Layout>
        <div className="container-custom section-padding py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8 text-navy">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p className="text-base leading-relaxed">
                Last updated: April 2026
              </p>

              <section>
                <h2 className="text-2xl font-bold text-navy mt-8 mb-4">1. Introduction</h2>
                <p>
                  Urban Invisible Grills ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at urbansafetygrills.in (the "Site").
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mt-8 mb-4">2. Information We Collect</h2>
                <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Data:</strong> Name, email address, phone number, address, and any other information you voluntarily provide when contacting us or requesting our services.</li>
                  <li><strong>Device Information:</strong> Information about the device you use to access our Site, including IP address, browser type, and operating system.</li>
                  <li><strong>Usage Data:</strong> Information about how you interact with our Site, including pages visited, time spent, and links clicked.</li>
                  <li><strong>Cookies:</strong> We may use cookies and similar tracking technologies to enhance your experience and analyze Site usage.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mt-8 mb-4">3. Use of Your Information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Responding to your inquiries and providing customer support</li>
                  <li>Processing requests for quotes and service appointments</li>
                  <li>Sending marketing communications and promotional materials</li>
                  <li>Analyzing Site usage and improving our services</li>
                  <li>Preventing fraudulent transactions and ensuring security</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mt-8 mb-4">4. Disclosure of Your Information</h2>
                <p>
                  We do not sell, trade, or rent your personal information to third parties. However, we may disclose your information to service providers who assist us in operating our Site and conducting our business, subject to strict confidentiality agreements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mt-8 mb-4">5. Data Security</h2>
                <p>
                  We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure. Please be aware that we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mt-8 mb-4">6. Your Privacy Rights</h2>
                <p>
                  You have the right to access, correct, or delete your personal information at any time. You may also opt-out of receiving marketing communications from us by clicking the unsubscribe link in our emails or contacting us directly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mt-8 mb-4">7. Cookies</h2>
                <p>
                  Our Site uses cookies to improve your experience. You can disable cookies through your browser settings, but this may affect the functionality of our Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mt-8 mb-4">8. Third-Party Links</h2>
                <p>
                  Our Site may contain links to third-party websites. We are not responsible for the privacy practices of these websites. We encourage you to review their privacy policies before providing any information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mt-8 mb-4">9. Children's Privacy</h2>
                <p>
                  Our Site is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that we have collected information from a child, we will take steps to delete such information immediately.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mt-8 mb-4">10. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will revise the "Last updated" date accordingly. Your continued use of the Site following any changes constitutes your acceptance of the updated Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-navy mt-8 mb-4">11. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy or our privacy practices, please contact us at:
                </p>
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p><strong>Urban Invisible Grills</strong></p>
                  <p>Email: urbaninvisiblegrills.ap@gmail.com</p>
                  <p>Phone: +91 7075 232499</p>
                  <p>Address: 61-19-21/6, A Challa Rao St, Ramalingeswara Nagar, Vijayawada, Andhra Pradesh 520013</p>
                </div>
              </section>
            </div>

            <div className="mt-12 p-6 bg-blue-50 rounded-lg border-l-4 border-primary">
              <p className="text-sm text-gray-600">
                This Privacy Policy is effective as of April 2026 and applies to all users of our Site and services. By using our Site, you agree to the terms of this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default PrivacyPolicy;
