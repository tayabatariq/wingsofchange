import React, { useState } from "react";

const RoadmapSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "1. Project Rationale & Goal",
      content: (
        <>
          <p className="mb-3">
            <b>The Problem:</b> Children in Faisalabad’s orphanages face limited
            guidance on healthy living, confidence building, and essential life
            skills. They also lack digital literacy, communication, and
            teamwork, leaving them unprepared for education and employment.
          </p>
          <p className="mb-3">
            <b>The Solution:</b> Through <b>Attia Helping Hand</b>, our team is
            launching an outreach program with wellness sessions, activities,
            and providing nutrition, school supplies, and sports equipment to
            support education and personal growth.
          </p>
          <p>
            <b>The Outcome:</b> Children will gain confidence, healthy lifestyle
            knowledge, and essential skills for education, careers, and
            independent living. Society will also develop empathy and
            responsibility toward their well-being.
          </p>
        </>
      ),
    },
    {
      title: "2. Beneficiaries",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Target Group: Orphanage children aged 3–18</li>
          <li>Location: Faisalabad, Punjab, Pakistan</li>
          <li>Reach: ~50–100 children</li>
          <li>
            Direct Benefits: Hygiene, confidence, motivation for education
          </li>
          <li>
            Indirect Benefits: Orphanage staff support & community awareness
          </li>
        </ul>
      ),
    },
    {
      title: "3. Activities",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Initial Visits & Needs Assessment</li>
          <li>Lifestyle Development Sessions (confidence, teamwork, hygiene)</li>
          <li>
            Fun & Sports Activities (drawing competitions, storytelling,
            quizzes, sports)
          </li>
          <li>Awareness & Fundraising Campaigns</li>
          <li>Resource Collection & Collaboration with NGOs</li>
          <li>Peer Learning & Training Leaders among Children</li>
          <li>Documentation, Reporting & Final Event</li>
        </ul>
      ),
    },
    {
      title: "4. Timeline (2 Months)",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <b>Week 1–2:</b> Initial visits, resource collection, content prep
          </li>
          <li>
            <b>Week 3–5:</b> Fun & motivational activities, fundraising
          </li>
          <li>
            <b>Week 6:</b> Peer learning program, awareness seminars
          </li>
          <li>
            <b>Week 7:</b> Gift bag distribution, documentation, final event
          </li>
        </ul>
      ),
    },
    {
      title: "5. Funding & Budget",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Training & Workshops: PKR 8,000</li>
          <li>Gift Bags (Food packs): PKR 30,000</li>
          <li>Fun & Recreational Items: PKR 12,000</li>
          <li>Awareness Campaigns: PKR 5,000</li>
          <li>Documentation & Final Event: PKR 15,000</li>
          <li>
            <b>Total: ~100,000 PKR</b>
          </li>
          <li>
            Fundraising Sources: Contributions, online campaigns, NGO
            sponsorships
          </li>
        </ul>
      ),
    },
    {
      title: "6. Promotion & Campaigning",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Create Facebook/Instagram page</li>
          <li>Share updates, photos, and impact stories online</li>
          <li>Community flyers & posters</li>
          <li>WhatsApp groups for awareness & donations</li>
          <li>Short video teasers for storytelling</li>
        </ul>
      ),
    },
    {
      title: "7. Team & Responsibilities",
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>Coordinator: Oversee daily execution, liaise with NGOs</li>
          <li>Workshop Facilitators: Confidence, communication training</li>
          <li>Logistics Manager: Collect & distribute donations</li>
          <li>Activity Coordinator: Sports, storytelling, final event</li>
          <li>Documentation Officer: Photos, reports, progress logs</li>
          <li>Remote Team: Content, fundraising, social media, reporting</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white" id="roadmap">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-dark-navy text-center mb-6">
          Mega Project Roadmap
        </h2>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
          A complete roadmap of <b>Wings of Change</b>, highlighting its goal,
          beneficiaries, activities, timeline, budget, promotions, and team
          roles.
        </p>

        {/* Collapsible Cards */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-[#F9FBFD] rounded-xl shadow-md overflow-hidden"
            >
              {/* Title */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left text-xl font-semibold text-dark-navy hover:bg-[#EEF4F8] transition"
              >
                {section.title}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>

              {/* Content */}
              {openIndex === index && (
                <div className="p-6 text-gray-700">{section.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
