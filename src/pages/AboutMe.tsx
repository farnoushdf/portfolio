import profilePic from "../assets/fndf-profile-img.jpeg";

const AboutMe = () => {
  return (
    <main className="min-h-screen bg-stone-50 pt-16">
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <img
            src={profilePic}
            alt="Farnoush Daliran"
            className="aspect-[4/5] w-full rounded-2xl object-cover shadow-lg"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-emerald-700">
            About
          </p>
          <h1 className="mt-3 text-4xl font-bold text-stone-950">
            I build web applications that are useful, responsive, and easy to
            understand.
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-700">
            I am Farnoush Daliran, a full-stack developer based in Munich. I
            work mainly with React, TypeScript, Node.js, Express, and MongoDB,
            and I enjoy turning ideas into complete user-facing products. My
            projects show authentication, API integration, protected routes,
            data models, responsive interfaces, and deployment workflows.
          </p>
          <p className="mt-4 text-lg leading-8 text-stone-700">
            Before focusing on modern full-stack development, I built a strong
            technical foundation through software engineering studies, frontend
            work, and IT support. That background helps me debug calmly,
            communicate clearly, and think about both user experience and system
            reliability.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <section className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-stone-950">
                Experience
              </h2>
              <ul className="mt-4 space-y-3 text-stone-700">
                <li>Full-stack Developer Internship, Oct 2024 - Dec 2024</li>
                <li>Frontend Web Developer, Jun 2015 - Jul 2020</li>
                <li>IT Support Administrator, Feb 2014 - May 2015</li>
              </ul>
            </section>

            <section className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-stone-950">
                Education
              </h2>
              <ul className="mt-4 space-y-3 text-stone-700">
                <li>Master's in Computer Software Engineering, 2016</li>
                <li>Bachelor's in Computer Software Engineering, 2006</li>
              </ul>
            </section>
          </div>

          <section className="mt-6 rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-stone-950">
              What I am looking for
            </h2>
            <p className="mt-4 leading-7 text-stone-700">
              I am looking for frontend or junior full-stack roles where I can
              contribute to real products, keep improving my engineering
              fundamentals, and work with a collaborative team.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
