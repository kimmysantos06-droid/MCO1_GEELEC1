import React from "react";
import "./App.css";

function App() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="app">

      {/* ================= NAVIGATION ================= */}
      <header className="navbar">
        <div className="nav-container">
          <div className="logo">Gender & Society PH</div>

          <nav>
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("understanding")}>
              Gender Roles
            </button>
            <button onClick={() => scrollToSection("history")}>
              History
            </button>
            <button onClick={() => scrollToSection("contemporary")}>
              Today
            </button>
            <button onClick={() => scrollToSection("issues")}>
              Issues
            </button>
            <button onClick={() => scrollToSection("analysis")}>
              Analysis
            </button>
            <button onClick={() => scrollToSection("multimedia")}>
              Media
            </button>
            <button onClick={() => scrollToSection("conclusion")}>
             Conclusion
            </button>
            <button onClick={() => scrollToSection("references")}>
             References
            </button>
          </nav>
        </div>
      </header>

      {/* ================= HOME ================= */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="eyebrow">
            PHILIPPINE SOCIETY • GENDER STUDIES
          </p>

          <h1>
            Gender Roles in
            <span> Philippine Society</span>
          </h1>

          <p className="hero-description">
            Exploring how gender expectations have developed throughout
            Philippine history, how they shape people's experiences today,
            and why gender equality is important in building a fair and
            inclusive society.
          </p>

          <div className="group-info">
            <strong>GROUP 3 • MCO 1</strong>
            <span>
              Members: Magante, Casey • Magos, Cyra  
              <br/>  Santos, Kimberly • Carig, Maria Soe 
              <br/>  Calagos, Abegail • Nabor, Shiela • Balbarona, Jacky
            </span>
          </div>

          <button
            className="primary-btn"
            onClick={() => scrollToSection("understanding")}
          >
            Explore the Topic ↓
          </button>
        </div>

        <div className="hero-visual">
          <div className="circle circle-one"></div>
          <div className="circle circle-two"></div>

          <div className="hero-card">
            <div className="hero-icon">♀ ♂</div>

            <h3>Understanding Gender</h3>

            <p>
              Gender roles are influenced by culture, history, family,
              education, institutions, media, and society.
            </p>
          </div>
        </div>
      </section>

      {/* ================= INTRODUCTION ================= */}
      <section id="understanding" className="intro-section">
        <div className="section-container intro-grid">

          <div>
            <p className="section-label">INTRODUCTION</p>

            <h2>Why study gender roles?</h2>
          </div>

          <p>
            Gender roles influence how people are expected to behave,
            communicate, work, participate in families, and contribute to
            their communities. In the Philippines, these expectations have
            changed over time as society, education, politics, economics,
            and culture have developed.
          </p>

        </div>
      </section>

      {/* ================= UNDERSTANDING ================= */}
      <section className="section">
        <div className="section-container">

          <p className="section-label">
            01 — UNDERSTANDING GENDER ROLES
          </p>

          <div className="section-heading">
            <h2>What are gender roles?</h2>

            <p>
              Gender roles are socially and culturally created expectations
              about how people should behave based on their perceived gender.
            </p>
          </div>

          <div className="cards three-columns">

            <article className="info-card">
              <div className="card-number">01</div>

              <h3>Gender</h3>

              <p>
                Gender refers to socially and culturally constructed
                expectations, identities, behaviors, and relationships
                associated with gender.
              </p>
            </article>

            <article className="info-card">
              <div className="card-number">02</div>

              <h3>Biological Sex</h3>

              <p>
                Biological sex refers to physical and biological
                characteristics such as reproductive anatomy, chromosomes,
                and hormones. Sex and gender are related concepts but are
                not identical.
              </p>
            </article>

            <article className="info-card">
              <div className="card-number">03</div>

              <h3>Social Expectations</h3>

              <p>
                Families, communities, schools, workplaces, traditions,
                religion, and media can influence what society considers
                appropriate behavior for different genders.
              </p>
            </article>

          </div>

          <div className="highlight-box">

            <div className="highlight-icon">💡</div>

            <div>
              <h3>Why does this matter?</h3>

              <p>
                Studying gender roles helps us understand stereotypes,
                discrimination, inequality, opportunities, responsibilities,
                and the ways social expectations can affect people's lives.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ================= HISTORY ================= */}
      <section id="history" className="section history-section">
        <div className="section-container">

          <p className="section-label">
            02 — HISTORICAL PERSPECTIVE
          </p>

          <div className="section-heading">
            <h2>Gender roles through Philippine history</h2>

            <p>
              Gender expectations in the Philippines have changed through
              different historical periods and have been influenced by
              indigenous traditions, colonialism, education, religion,
              economics, politics, and globalization.
            </p>
          </div>

          <div className="timeline">

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>BEFORE COLONIZATION</span>

                <h3>Pre-colonial Philippines</h3>

                <p>
                  Many pre-colonial Philippine communities had gender
                  expectations that differed from later colonial traditions.
                  Women could participate in economic activities, own or
                  inherit property in some communities, and hold important
                  social or spiritual positions. Babaylan were respected
                  spiritual specialists in many communities.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>1565–1898</span>

                <h3>Spanish Colonial Period</h3>

                <p>
                  Spanish colonial institutions and Catholic traditions
                  influenced family structures, education, morality, and
                  expectations concerning women and men. Traditional ideals
                  often emphasized women's roles as wives and mothers.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>1898–1946</span>

                <h3>American Colonial Period</h3>

                <p>
                  Public education expanded and women gained greater access
                  to formal education and professional opportunities.
                  However, expectations concerning domesticity and family
                  responsibilities continued to influence Filipino society.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span>1946–PRESENT</span>

                <h3>Modern Philippines</h3>

                <p>
                  Filipino women have increasingly participated in higher
                  education, employment, politics, business, and other public
                  roles. Men are also increasingly participating in caregiving
                  and household responsibilities. Despite progress, gender
                  inequalities continue to exist.
                </p>
              </div>
            </div>

          </div>

          <div className="history-note">
            <h3>Key Observation</h3>

            <p>
              Gender roles in the Philippines were not created by one single
              tradition. They developed through the interaction of indigenous
              practices, colonial influences, economic changes, education,
              legislation, religion, media, and social movements.
            </p>
          </div>

        </div>
      </section>

      {/* ================= CONTEMPORARY ================= */}
      <section id="contemporary" className="section">
        <div className="section-container">

          <p className="section-label">
            03 — CONTEMPORARY GENDER ROLES
          </p>

          <div className="section-heading">
            <h2>Gender roles in Philippine society today</h2>

            <p>
              Modern Filipino society includes both traditional expectations
              and changing ideas about equality and shared responsibilities.
            </p>
          </div>

          <div className="role-grid">

            <article className="role-card">
              <span>🏠</span>

              <h3>Family</h3>

              <p>
                Women are often associated with caregiving and household
                responsibilities, while men may be expected to provide
                financially. Many families are increasingly sharing these
                responsibilities.
              </p>
            </article>

            <article className="role-card">
              <span>🎓</span>

              <h3>Education</h3>

              <p>
                Filipino women and men have broad access to education.
                However, gender expectations can still influence academic
                choices and career aspirations.
              </p>
            </article>

            <article className="role-card">
              <span>💼</span>

              <h3>Workplace</h3>

              <p>
                People of different genders participate across industries,
                although occupational segregation, unequal opportunities,
                and caregiving expectations can remain challenges.
              </p>
            </article>

            <article className="role-card">
              <span>📺</span>

              <h3>Media</h3>

              <p>
                Television, film, advertising, and social media can reinforce
                stereotypes but can also challenge traditional representations
                of gender.
              </p>
            </article>

            <article className="role-card">
              <span>🏛️</span>

              <h3>Leadership</h3>

              <p>
                Women have held important leadership positions in Philippine
                history. Nevertheless, representation and access to leadership
                opportunities remain important issues.
              </p>
            </article>

            <article className="role-card">
              <span>🤝</span>

              <h3>Community</h3>

              <p>
                Gender expectations influence volunteering, caregiving,
                community leadership, and participation in local
                organizations.
              </p>
            </article>

          </div>

        </div>
      </section>

      {/* ================= ISSUES ================= */}
      <section id="issues" className="section issues-section">
        <div className="section-container">

          <p className="section-label">
            04 — GENDER ISSUES & REALITIES
          </p>

          <div className="section-heading">
            <h2>Challenges that remain</h2>

            <p>
              Although Philippine society has made progress toward equality,
              many gender-related challenges continue to affect individuals
              and communities.
            </p>
          </div>

          <div className="issue-list">

            <div className="issue">
              <div className="issue-icon">01</div>

              <div>
                <h3>Gender Stereotypes</h3>

                <p>
                  Ideas such as "men should be strong" or "women should be
                  natural caregivers" can restrict people's choices and
                  opportunities.
                </p>
              </div>
            </div>

            <div className="issue">
              <div className="issue-icon">02</div>

              <div>
                <h3>Gender Discrimination</h3>

                <p>
                  People may experience unfair treatment because of gender,
                  including unequal access to education, employment,
                  leadership, or resources.
                </p>
              </div>
            </div>

            <div className="issue">
              <div className="issue-icon">03</div>

              <div>
                <h3>Equal Opportunities</h3>

                <p>
                  Equal opportunity requires removing barriers that prevent
                  people from fully participating in education, employment,
                  leadership, and society.
                </p>
              </div>
            </div>

            <div className="issue">
              <div className="issue-icon">04</div>

              <div>
                <h3>Media Representation</h3>

                <p>
                  Repeated stereotypes in media can influence how people view
                  themselves and others.
                </p>
              </div>
            </div>

            <div className="issue">
              <div className="issue-icon">05</div>

              <div>
                <h3>Gender-Based Inequality</h3>

                <p>
                  Differences in economic security, unpaid care work, safety,
                  political participation, and career opportunities can
                  contribute to inequality.
                </p>
              </div>
            </div>

          </div>

          <div className="fact-banner">

            <div>
              <p className="small-label">KEY MESSAGE</p>

              <h3>Equality benefits everyone.</h3>
            </div>

            <p>
              Challenging restrictive gender expectations allows individuals
              greater freedom to develop their abilities and contribute to
              society.
            </p>

          </div>

        </div>
      </section>

      {/* ================= ANALYSIS ================= */}
      <section id="analysis" className="section analysis-section">
        <div className="section-container">

          <p className="section-label">
            05 — ANALYSIS & REFLECTION
          </p>

          <div className="analysis-grid">

            <div>

              <h2>
                What has changed?
              </h2>

              <p>
                Compared with many historical expectations, contemporary
                Philippine society provides broader opportunities for women
                to pursue education, careers, leadership, and public
                participation.
              </p>

              <p>
                Men are also increasingly encouraged to participate in
                caregiving and household responsibilities rather than being
                defined only as financial providers.
              </p>

              <p>
                These changes show that gender roles are not fixed. They can
                change as society's values, laws, economic conditions,
                education, and understanding of equality change.
              </p>

            </div>

            <div className="analysis-box">

              <h3>
                What challenges continue?
              </h3>

              <ul>
                <li>
                  Traditional gender stereotypes remain influential.
                </li>

                <li>
                  Caregiving responsibilities can be unequal.
                </li>

                <li>
                  Gender discrimination can affect opportunities.
                </li>

                <li>
                  Media can reproduce narrow gender expectations.
                </li>

                <li>
                  Social attitudes can be slow to change.
                </li>

                <li>
                  Gender-based violence remains a serious concern.
                </li>
              </ul>

            </div>

          </div>

          <div className="reflection">

            <p className="section-label">
              GROUP REFLECTION
            </p>

            <h3>
              Gender roles should not determine a person's potential.
            </h3>

            <p>
              Our group believes that traditions and culture are important
              parts of Filipino identity, but traditions should not be used
              to restrict people from opportunities simply because of their
              gender.
            </p>

            <p>
              A fair society should allow individuals to choose their
              education, career, family responsibilities, and leadership
              roles based on their abilities, interests, and circumstances.
            </p>

            <p>
              Gender equality does not mean that everyone must be identical.
              Instead, it means that people should have dignity, respect,
              safety, and meaningful opportunities regardless of gender.
            </p>

          </div>

        </div>
      </section>
      
      {/* ================= MULTIMEDIA ================= */}
      <section id="multimedia" className="section multimedia-section">
        <div className="section-container">

          <p className="section-label">
            06 — MULTIMEDIA
          </p>

          <div className="section-heading">
            <h2>Pictures, videos & visual materials</h2>

            <p>
              These multimedia resources provide historical and contemporary
              perspectives on gender roles and gender equality in the
              Philippines.
            </p>
          </div>

          {/* VIDEO */}
          <div className="featured-video">

            <div className="video-info">

              <p className="media-type">FEATURED VIDEO</p>

              <h3>
                Gender Equality in the Philippines
              </h3>

              <p>
                This GMA News feature discusses gender equality and issues
                affecting women in the Philippines.
              </p>

              <a
                href="https://www.youtube.com/watch?v=znRIWF7aZoU"
                target="_blank"
                rel="noreferrer"
                className="video-link"
              >
                ▶ Watch GMA News Video
              </a>

              <small>
                Source: GMA News — #PHgoals: Gender Equality
              </small>

            </div>

            <div className="youtube-box">

              <div className="play-button">
                ▶
              </div>

              <p>GMA News</p>
              <strong>Gender Equality</strong>

            </div>

          </div>

          {/* SECOND VIDEO */}
          <div className="second-video">

            <div>
              <p className="media-type">
                ADDITIONAL VIDEO
              </p>

              <h3>
                Violence Against Women and Gender Equality
              </h3>

              <p>
                An educational resource from UN Women discussing violence
                against women and why gender equality is important.
              </p>
            </div>

            <a
              href="https://www.youtube.com/watch?v=iP_jW5ZXINQ"
              target="_blank"
              rel="noreferrer"
              className="video-link"
            >
              ▶ Watch UN Women Video
            </a>

          </div>

          {/* IMAGE GALLERY */}
          <div className="image-gallery">

            <article className="gallery-card">

              <div className="gallery-image historical-image">
                <span>PRE-COLONIAL PHILIPPINES</span>
              </div>

              <div className="gallery-text">

                <p className="media-type">
                  HISTORICAL PERSPECTIVE
                </p>

                <h3>
                  Babaylan and Pre-colonial Society
                </h3>

                <p>
                  Babaylan were respected spiritual specialists in many
                  pre-colonial Philippine communities and demonstrate that
                  women could hold important social and spiritual positions.
                </p>

                <a
                  href="https://en.wikipedia.org/wiki/Babaylan"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn more →
                </a>

              </div>

            </article>

            <article className="gallery-card">

              <div className="gallery-image education-image">
                <span>WOMEN & EDUCATION</span>
              </div>

              <div className="gallery-text">

                <p className="media-type">
                  EDUCATION
                </p>

                <h3>
                  Women and Education
                </h3>

                <p>
                  Access to education has played an important role in
                  expanding women's opportunities and participation in
                  Philippine society.
                </p>

                <a
                  href="https://kpiacentini.wixsite.com/iem-php/blank-csac"
                  target="_blank"
                  rel="noreferrer"
                >
                   Learn more →
                </a>

              </div>

            </article>

            <article className="gallery-card">

              <div className="gallery-image classroom-image">
                <span>EDUCATION TODAY</span>
              </div>

              <div className="gallery-text">

                <p className="media-type">
                  CONTEMPORARY SOCIETY
                </p>

                <h3>
                  Gender and Education Today
                </h3>

                <p>
                  Education provides opportunities for Filipino women and men
                  to develop skills, pursue careers, and participate in
                  society.
                </p>

                <a
                  href="https://psa.gov.ph/"
                  target="_blank"
                  rel="noreferrer"
                >
                  View PSA source →
                </a>

              </div>

            </article>

            <article className="gallery-card">

              <div className="gallery-image rights-image">
                <span>WOMEN'S RIGHTS</span>
              </div>

              <div className="gallery-text">

                <p className="media-type">
                  GENDER RIGHTS
                </p>

                <h3>
                  Magna Carta of Women
                </h3>

                <p>
                  Republic Act No. 9710, also known as the Magna Carta of
                  Women, provides a legal framework for protecting women's
                  rights and addressing discrimination.
                </p>

                <a
                  href="https://gad.sanfernandocity.gov.ph/magna_carta_of_women/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Learn about RA 9710 →
                </a>

              </div>

            </article>

          </div>

          {/* STATISTICS */}
          <div className="statistics-card">

            <div>
              <p className="media-type">
                PHILIPPINE GENDER DATA
              </p>

              <h3>
                Evidence matters
              </h3>
            </div>

            <p>
              The Philippine Statistics Authority provides gender-related
              statistics covering areas such as education, employment,
              economic participation, violence against women, public life,
              and women's empowerment.
            </p>

            <a
              href="https://psa.gov.ph/gender-statistics"
              target="_blank"
              rel="noreferrer"
            >
              View PSA Gender Statistics →
            </a>

          </div>

        </div>
      </section>

      {/* ================= CONCLUSION ================= */}
      <section id="conclusion" className="conclusion">

        <div className="conclusion-content">

          <p className="section-label">
            07 — CONCLUSION
          </p>

          <h2>
            Understanding the past helps us build a more equal future.
          </h2>

          <p>
            Gender roles in the Philippines have changed significantly over
            time. From pre-colonial communities to colonial society and the
            modern Philippines, cultural traditions, institutions,
            education, economic changes, and social movements have influenced
            expectations surrounding gender.
          </p>

          <p>
            Although many opportunities have expanded, stereotypes and
            inequalities remain. Understanding these realities allows us to
            question restrictive expectations and create a society where
            every person can participate and contribute.
          </p>

        </div>

      </section>

      {/* ================= REFERENCES ================= */}
      <section id="references" className="section references-section">

        <div className="section-container">

          <p className="section-label">
            08 — REFERENCES
          </p>

          <div className="section-heading">

            <h2>
              References & Sources
            </h2>

            <p>
              The following sources were used to support the information
              presented on this website.
            </p>

          </div>

          <div className="references">

            <a
              href="https://psa.gov.ph/gender-statistics"
              target="_blank"
              rel="noreferrer"
            >
              Philippine Statistics Authority — Gender Statistics
            </a>

            <a
              href="https://pcw.gov.ph/"
              target="_blank"
              rel="noreferrer"
            >
              Philippine Commission on Women — Official Website
            </a>

            <a
              href="https://gad.sanfernandocity.gov.ph/magna_carta_of_women/"
              target="_blank"
              rel="noreferrer"
            >
              Philippine Commission on Women — Republic Act No. 9710,
              Magna Carta of Women
            </a>

            <a
              href="https://data.unwomen.org/country/philippines"
              target="_blank"
              rel="noreferrer"
            >
              UN Women — Philippines Gender Data
            </a>

            <a
              href="https://www.officialgazette.gov.ph/"
              target="_blank"
              rel="noreferrer"
            >
              Official Gazette of the Republic of the Philippines
            </a>

            <a
              href="https://chr.gov.ph/"
              target="_blank"
              rel="noreferrer"
            >
              Commission on Human Rights of the Philippines
            </a>

            <a
              href="https://www.ilo.org/"
              target="_blank"
              rel="noreferrer"
            >
              International Labour Organization
            </a>

            <a
              href="https://www.worldbank.org/en/country/philippines"
              target="_blank"
              rel="noreferrer"
            >
              World Bank — Philippines
            </a>

            <a
              href="https://www.youtube.com/watch?v=znRIWF7aZoU"
              target="_blank"
              rel="noreferrer"
            >
              GMA News — #PHgoals: Gender Equality
            </a>

            <a
              href="https://www.youtube.com/watch?v=iP_jW5ZXINQ"
              target="_blank"
              rel="noreferrer"
            >
              UN Women — Violence Against Women and Gender Equality
            </a>

            <a
              href="https://kpiacentini.wixsite.com/iem-php/blank-csac"
              target="_blank"
              rel="noreferrer"
            >
            THE PHILIPPINES: A COMPARATIVE ANALYSIS OF THE PHILIPPINE EDUCATION SYSTEM
            </a>

            <a
              href="https://en.wikipedia.org/wiki/Babaylan"
              target="_blank"
              rel="noreferrer"
            >
              Wikipedia — Babaylan and pre-colonial Philippine society
            </a>

          </div>

          <div className="reference-note">

            <strong>Multimedia acknowledgment:</strong>

            <p>
              Images, videos, statistics, and other materials belong to their
              respective creators and organizations. They are included for
              educational purposes. Users should follow the original source's
              copyright and licensing requirements when reusing the materials.
            </p>

          </div>

        </div>

      </section>

      {/* ================= FOOTER ================= */}
      <footer>

        <div>
          <strong>
            Gender & Society PH
          </strong>

          <p>
            Understanding gender roles in the Philippine context.
          </p>
        </div>

        <button
          onClick={() => scrollToSection("home")}
        >
          Back to Top ↑
        </button>

        <p className="copyright">
          © 2026 GROUP 3 • MCO 1
        </p>

      </footer>

    </div>
  );
}

export default App;