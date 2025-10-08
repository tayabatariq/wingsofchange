import React from "react";

export default function Blog1() {
    
  const reflections = [
    {
      name: "Imaan & Tayaba",
      text: "Learned how to communicate with organizations, handle rejection, and persist in fundraising."
    },
    {
      name: "Amna",
      text: "Built networks and secured volunteer partnerships with Attia Helping Hands."
    },
    {
      name: "Hamza",
      text: "Gained confidence through trust-building and communication with orphanage administration."
    },
    {
      name: "Shehryar",
      text: "Learned time management, collaboration, and teamwork while preparing the project roadmap."
    }
  ];
  return (
    <div className="bg-gray-50 text-gray-800 leading-7">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Megaproject Group 2  First Blog 
        </h1>
        <p className="max-w-3xl mx-auto text-lg">
          Wings of Change  Empowering orphaned children through learning,
          character development, and wellness.
        </p>
      </section>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto py-12 px-6 space-y-12">
        {/* Idea */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Idea </h2>
          <p>
            Our aim is to work with children of various ages to provide them
            educational, character-developing and wellness based facilities. We
            are bringing this to life by prototyping our megaproject by working
            with an orphanage and conducting various wellness based activities
            and sessions for the children, to provide them a fun environment for
            learning.
          </p>
          <p className="mt-4">
            The main problem we plan to tackle is the lack of learning
            environments, lack of facilities and opportunities for these young
            children. They have no one to guide them and no one to properly care
            whether they are receiving these opportunities or not. The root
            cause of this is our social issues like lack of awareness, poverty,
            lack of government support and funding.
          </p>
          <p className="mt-4">
            People most affected by this are children, especially children in
            institutions like orphanages who have no one to look after them.
            This provides a large gap in the opportunities they have access to,
            eventually leading to lesser skills as they grow up as compared to
            children with greater and better access to resources.
          </p>
          <p className="mt-4">
            Our demographic for the megaproject is children (ages 5–17), male or
            female, with markedly low socioeconomic background i.e., they are
            living in orphanages (Private owned or government run).
          </p>
        </section>

        {/* Research */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Research </h2>

          <h3 className="text-xl font-semibold mt-6 mb-2">Market</h3>
          <p>
            There are various NGO’s, organizations in Pakistan and
            internationally that are already working to support orphanages and
            provide them with various opportunities. Keeping this in mind, we
            also tried to collaborate with such organizations like Saylani,
            Alkhidmat, Akhuwat Foundation.
          </p>
          <p className="mt-3">
            While these organizations provide support like clothing or rashan
            drives, our approach is more focused on children — interacting with
            them, teaching skills, and building confidence rather than just
            providing material support.
          </p>

          <h3 className="text-xl font-semibold mt-6 mb-2">
            Target Audience / Beneficiary
          </h3>
          <p>
            Our target audience is children with less favorable socio-economic
            backgrounds. Since resources are limited for now, we are working
            with orphaned children. The core issue is how these children are
            behind in academics, social skills and problem solving as compared
            to children with better backgrounds.
          </p>
          <p className="mt-3">
            These children are often neglected by the state and society. They
            lack guidance, technology access, and wellness opportunities.
            Through our project, we aim to bring hope, confidence and learning
            to them through targeted activities.
          </p>
        </section>

        {/* Process */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">Process </h2>
          <p>
            My group conducted research thoroughly. First, we looked at
            statistics of orphanages in Pakistan. Although there are
            organizations working to support these institutes, there was no
            approach like ours.
          </p>
          <p className="mt-3">
            We used observation, interviews and community research to identify
            the gap: lack of proper care, guidance, and wellness for orphaned
            children.
          </p>
        </section>

        {/* Task Division */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Task Division 
          </h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>On-site members</strong> (Maha, Hamza, Faisal, Imaan,
              Tayaba, Amna) — Coordination with Apna Ghar and in-person
              activities.
            </li>
            <li>
              <strong>Remote members</strong> (Sanaullah, Sheryar, Hajra Mansoor
              and Ayesha Sana) — Writing, reflection, and fundraising.
            </li>
            <li>
              Outreach team — Contacting organizations, collaboration efforts.
            </li>
          </ul>
          <p className="mt-4">
            Team members reached out to organizations, collaborated with “Attia
            Helping Hands,” and shortlisted orphanages. Hamza connected with
            Apna Ghar Muslim Yateem Khana in Faisalabad. Remote members set up
            socials and roadmap.
          </p>
        </section>

       
        {/* REFLECTIONS SECTION */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-8 text-center">
            Reflections 📝
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reflections.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition flex flex-col"
              >
                <h3 className="text-lg font-bold text-orange-500 mb-2">
                  {item.name}
                </h3>
                <p className="text-gray-700 flex-grow">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Challenges */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Challenges Faced 
          </h2>
          <ul className="list-decimal pl-6 space-y-2">
            <li>Member availability due to different schedules.</li>
            <li>
              Coordination with the orphanage administration and time
              restrictions.
            </li>
            <li>Difficulty collaborating with organizations for funds.</li>
            <li>
              Fundraising fatigue in communities after flood relief campaigns.
            </li>
            <li>Limited funds and resources for project execution.</li>
          </ul>
        </section>

        {/* Plan of Action */}
        <section>
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Plan of Action 
          </h2>
          <p className="mb-4">Plans for the next two weeks:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Conduct in-person engagement activities at Apna Ghar.</li>
            <li>Continue fundraising and awareness campaigns.</li>
            <li>
              Prepare a final presentation and reflection report summarizing
              outcomes.
            </li>
            <li>Games to break the ice and make the children smile.</li>
            <li>Debate competition to build their confidence.</li>
            <li>Fun activities to let them express themselves freely.</li>
          </ul>
          <p className="mt-4">
            We chose Sunday for our first official visit to allow a relaxed time
            for everyone.
          </p>
        </section>

        {/* Final Reflection */}
        <section className="bg-orange-50 p-6 rounded-xl shadow-sm">
          <h2 className="text-3xl font-bold text-orange-600 mb-4">
            Final Reflection 
          </h2>
          <p>
            This project is not just an assignment. It’s a journey of humanity
            and compassion. Working for the well-being of orphaned children has
            taught us the power of teamwork, empathy, and dedication. We have
            learned that even small acts of kindness can create lasting impact.
          </p>
          <p className="mt-3">
            This project also taught us that change doesn’t always need huge
            resources — sometimes, even a few hours of love and attention can
            make a difference. “Wings of Change” is not just about helping
            others; it’s about becoming a better, more empathetic version of
            ourselves.
          </p>
        </section>
      </div>

     
    </div>
  );
}
