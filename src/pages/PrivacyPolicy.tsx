import "../css/privacypolicy.css";
import SvgIcon from "../assets/images/icons/home-about-right.svg";

export default function PrivacyPolicy() {
  const privacyPolicyData = [
    {
      section: "Privacy Policy",
      subContent: "Last Modified: 7th March 2025",
      subsections: [
        {
          title: "",
          points: [],
          note: "At Shree Krishna Digital Marketing, we value the privacy of our clients and website visitors. We are committed to safeguarding any personal information shared with us and ensuring it is handled responsibly. As a forward-thinking digital marketing and IT services provider, we prioritize confidentiality and adhere to industry-standard privacy practices.",
          desc: "This policy outlines how we collect, use, protect, and share your data when you engage with our services or visit our website.",
        },
      ],
    },
    {
      section: "Information We Collect",
      subsections: [
        {
          title:
            "We only collect personal information when you willingly provide it. This may occur when you:",
          points: [
            "Submit inquiries via our contact forms.",
            "Apply for job openings or register for events.",
            "Request our services or subscribe to updates.",
          ],
          desc: "",
        },
        {
          title: "The information we may collect includes:",
          points: [
            "Personal Information: Name, email address, phone number, business details, and other identifiers.",
            "Non-Personal Information: Browser type, IP address, device information, and pages visited through cookies and analytics tools.",
          ],
          desc: "",
          note: "Visitors browsing the site without engaging in these activities are not required to share any personal data.",
        },
        {
          title:
            "How We Use Your Information, We use the collected information for legitimate purposes, including:",

          points: [
            "Responding to your inquiries and delivering requested services.",
            "Notifying you about new services, offers, or updates.",
            "Improving our website, services, and user experience.",
            "Complying with legal obligations and industry standards.",
          ],
          desc: "",
          note: "We ensure that any information shared is used responsibly and only for purposes explicitly communicated to you.",
        },
      ],
    },
    {
      section: "Cookies and Tracking Technologies",
      subsections: [
        {
          title:
            "Our website may use cookies and other tracking technologies to gather non-personal data. This helps us:",

          points: [
            "Personalize your user experience.",
            "Monitor website traffic and usage patterns.",
            "Improve service delivery and content accuracy.",
          ],
          desc: "",
          note: "You can manage or disable cookies through your browser settings, but doing so may affect website functionality.",
        },
      ],
    },
    {
      section: "Sharing and Distribution of Information",
      subsections: [
        {
          title:
            "We do not sell or rent your personal information. However, we may share information in the following cases:",

          points: [
            "Internal Use: With our team members or business branches for service-related purposes.",
            "Third-Party Service Providers: When required to deliver specific services (e.g., event registrations or email newsletters).",
            "Legal Obligations: If required by law or to comply with legal proceedings.",
            "Business Transfers: In the event of a merger, acquisition, or partnership, your information may be shared as part of the business transfer.",
          ],
          desc: "",
          note: "We only share data when necessary and ensure third parties uphold similar privacy standards.",
        },
      ],
    },
    {
      section: "You have the right to:",
      subsections: [
        {
          title:
            "We do not sell or rent your personal information. However, we may share information in the following cases:",

          points: [
            "Access, correct, or delete your personal information.",
            "Withdraw consent for marketing communications.",
            "Inquire about how your information is used.",
          ],
          desc: "",
          note: "To exercise your rights, contact us at +91 70213 90958.",
        },
      ],
    },
    {
      section: "Data Security Measures",
      subsections: [
        {
          title:
            "We employ stringent security practices to protect your data from unauthorized access, loss, or misuse. Our measures include:",

          points: [
            "Encrypted data storage.",
            "Secure access controls.",
            "Regular monitoring and audits.",
          ],
          desc: "",
          note: "While we take every precaution, no method of data transmission is 100% secure. We cannot guarantee absolute security against unforeseen threats.",
        },
      ],
    },
    {
      section: "Third-Party Links",
      subsections: [
        {
          title: "",

          points: [],
          desc: "",
          note: "Our website may contain links to external websites or blogs. We are not responsible for their privacy policies or content. We encourage you to review third-party privacy practices before interacting with external sites.",
        },
      ],
    },
    {
      section: "Policy Changes",
      subsections: [
        {
          title: "",

          points: [],
          desc: "",
          note: "We reserve the right to update this Privacy Policy at any time. Changes will be posted on this page with the revised effective date. We encourage you to review this policy periodically to stay informed.",
        },
      ],
    },
    {
      section: "Contact Us",
      subsections: [
        {
          title:
            "If you have any questions about this Privacy Policy or how we handle your data, please reach out to us:",

          points: [
            "Shree Krishna Digital Marketing",
            "Number 102/B, Office, MOHID HEIGHTS 1st, Andheri, Mumbai, Maharashtra 400053",
            "Email: shreemarketing09@gmail.com",
            "Phone: +91 70213 90958",
          ],
          desc: "",
          note: "",
        },
      ],
    },
  ];

  return (
    <section className="section relative">
      <img src={SvgIcon} className="absolute top-0 right-0" />

      <div className="container mx-auto">
        <div className="section-body pb-20 flex flex-col justify-center items-center">
          <h2 className="section-title">Privacy Policy</h2>
          <p className="section-content">Your Privacy, Our Commitment</p>
        </div>

        {privacyPolicyData.map((val, index) => (
          <div className="policy-content" key={index}>
            <div className="grid md:grid-cols-12">
              <div className="col-span-3">
                <h3>{val.section}</h3>
                <p>{val.subContent}</p>
              </div>
              <div className="col-span-9">
                {val?.subsections
                  ? val?.subsections.map((valItem, index) => (
                      <div className="my-3">
                        <h5 key={index}>{valItem?.title}</h5>
                        <ul
                          style={{
                            margin: "10px 0",
                            padding: "0 0 0 30px",
                            listStyle: "square",
                          }}
                        >
                          {valItem?.points?.map((val, index) => (
                            <li key={index}>-&nbsp;{val}</li>
                          ))}
                        </ul>
                        <p
                          style={{
                            color: "#000",
                            fontSize: "1rem",
                            paddingBottom: "10px",
                          }}
                        >
                          {valItem?.note}
                        </p>
                        <p style={{ color: "#000", fontSize: "1rem" }}>
                          {valItem?.desc}
                        </p>
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
