import sam from "../assets/sam.jpg";
import angel from "../assets/angel.jpg";
import titus from "../assets/titus.jpg";
import remali from "../assets/remali.jpg";
import larsen from "../assets/Larsen.jpg";
import hycinth from "../assets/hycinth.jpg";
import jabez from "../assets/jabez.jpg";
import bhuvi from "../assets/bhuvi.png";
import Anand from "../assets/AnandDavid.jpeg"
import Ganesh from "../assets/Ganesh.jpeg"
import jayanthi from "../assets/jayanthi.jpeg"

import { useEffect } from "react";

// Team members data
const teamMembers = [
  {
    id: 1,
    name: "Sam Giftson",
    title: "Executive Director",
    image: sam,
    bio: "An educationist and visionary entrepreneur with over 15 years of experience in the education sector and 4 years of groundbreaking research in child psychology, counseling, and high-tech school systems. Starting his journey as a teacher and school administrator, he quickly advanced into teacher training, curriculum development, and alternative education models that integrate psychology-driven, student-centric approaches with modern technology.His Individualized Education Plans have transformed learning outcomes, delivering measurable success for hundreds of students, while empowering parents and teachers with effective strategies. Drawing from his deep expertise and passion for redefining education, Sam founded Cultive—a next-generation solution provider designed to empower schools, teachers, parents, and students. Cultive stands as the embodiment of his vision: blending research, innovation, and technology to build smarter, future-ready education  ecosystems.",
    accent: "emerald",
  },
  {
    id: 2,
    name: "Jayanthi T",
    title: "Co-founder & Head - Training Workshop & Seminars (TWS) & Curriculum Founder, Meta Cognition Learning Space",
    image: jayanthi,
    bio: "Jayanthi, is an accomplished educator, school leader, curriculum designer, and founder of Meta Cognition Learning Space, with over two decades of experience in transforming teaching and learning. Throughout her 20-year journey in education, she has championed the belief that true education is not merely about acquiring knowledge but about empowering learners to understand how to learn, think critically, and continuously grow.Driven by this philosophy, she established Meta Cognition Learning Space to create innovative and experiential learning solutions that inspire curiosity, creativity, metacognitive thinking, reflection, and real-world application. Her programmes are designed to make learning meaningful, engaging, and transferable beyond the classroom.Jayanthi has developed several signature learning experiences, including School Essence, Learning Carnival, Word Lab, Accelerated Reading Programme, Study Hack, Design Your Notes, and Create Your Own Calligraphy. She also designs teacher development programmes, curriculum frameworks, and school transformation initiatives that equip educators and institutions with effective, learner-centric practices.Passionate about lifelong learning, Jayanthi continues to research, innovate, and develop educational experiences that unlock every learner's potential. She firmly believes that education is an evolving journey, and her mission is to empower individuals with the mindset, skills, and confidence to become independent, reflective, and limitless learners.You're Limitless. is more than a tagline—it reflects her vision of helping every learner discover and realize their true potential.",
    accent: "cyan",
  },
  {
    id: 2,
    name: "Shiny Rachel",
    title: "Operations Head",
    image: angel,
    bio: "holds an MBA from Anna University and brings over 10 years of expertise in project operations, client management, and customer support within the IT sector. Renowned for her commitment to quality delivery, operational excellence, and team collaboration, she consistently ensures flawless execution and successful outcomes. Today, she stands as a key pillar of strength, leading Cultive's operations with precision, dedication, and vision.",
    accent: "blue",
  },
  {
    id:3,
    name: "Anand David",
    title: "Advisor for Collaborations",
    image: Anand,
    bio: "Anand David is a seasoned development professional with nearly three decades of experience in the international development sector. Over the course of his career, he has worked with leading institutions such as the United Nations, the European Union, and the Irish Embassy in New Delhi, India, in addition to early work experience with a project of the USAID in Chennai. He has worked extensively with NGOs across a wide spectrum of thematic areas, including education, vocational training, community health, water and sanitation, women’s empowerment, child development, livelihoods and capacity building for improved governance through public-private partnerships. Anand has traveled extensively across 25 states in India and internationally, including the United States, South Korea, Malaysia, China, Thailand, Nepal, Bhutan, and Sri Lanka. In an honorary capacity as well-wisher of Cultive, he advises Cultive on fostering collaborations for value-added service delivery.",
    accent: "blue",
  },
  {
    id: 4,
    name: "Larsen Michael",
    title: "Head - Training Workshop and Seminars (TWS)",
    image: larsen,
    bio: "An experienced professional with over 12 years in education, training, and curriculum development. He specializes in teacher training, student growth, and inclusive practices for diverse learning needs. With strong skills in life skills education, he helps learners build confidence, communication, and problem-solving. He has also led corporate training programs on leadership, career growth, and team building. His expertise connects academic learning with career readiness and workplace success. Through practical strategies and empathy, he empowers teachers, students, and professionals to reach their potential.",
    accent: "red",
  },
  {
    id: 5,
    name: "Remali Sarah",
    title: "Softskill and Communication Trainer",
    image: remali,
    bio: "A Post-Doctoral Research Scholar in English Literature and Communication from Bharathidasan University, with over a decade of expertise in lecturing and training students in English communication and soft skills, significantly shaping the academic and personal growth of hundreds of learners.",
    accent: "cyan",
  },
  {
    id: 6,
    name: "Jabez",
    title: "Head - Media & Design",
    image: jabez,
    bio: "A young and passionate creative professional with a Bachelor's degree in Visual Communication, he has cultivated strong expertise in media and design. As a key pillar of Cultive, he leads the media team with innovation and artistic vision.",
    accent: "orange",
  },
  {
    id: 7,
    name: "Titus",
    title: "IT Head",
    image: titus,
    bio: "Titus, a Computer Science Engineer with over five years of professional experience, is a driving force behind Cultive's technology vision. With his deep expertise in information technology, he leads the IT team with precision, delivering innovative, technology-driven solutions that strengthen the company's operations and digital presence. His problem-solving skills, strategic approach, and commitment to excellence make him one of the strongest pillars of Cultive, ensuring the organization stays at the forefront of technological advancements.",
    accent: "cyan",
  },
  {
    id: 8,
    name: "Bhuvaneshwaran",
    title: "MAD (Music Art & Dance) Head",
    image: bhuvi,
    bio: "An engineering graduate who discovered his true passion in music and pursued it to professional excellence by completing 8 grades in Piano. He has actively contributed to numerous MAD workshops and performances, showcasing both his musical talent and creative engagement. His strong organizational skills, particularly in managing and executing MAD events across India, stand as a key strength that defines his professional journey.",
    accent: "red",
  },
  {
    id: 9,
    name: "Hycinth Elizabeth",
    title: "Relationship Manager",
    image: hycinth,
    bio: "A passionate professional with over 5 years of experience in customer relations and client management in the aviation industry. She is known for her ability to understand client needs, resolve issues with empathy, and build lasting relationships. At Cultive, she serves as a strong pillar in her role as Relationship Manager. Her proactive approach and interpersonal skills help strengthen client trust and partnerships. With her dedication, Hycinth contributes greatly to Cultive's mission of delivering impactful educational solutions.",
    accent: "indigo",
  },
];

const accentColors = {
  emerald: {
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    light: "linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(5, 150, 105, 0.08))",
    shadow: "rgba(16, 185, 129, 0.35)",
  },
  red: {
    gradient: "linear-gradient(135deg, #f43f5e, #dc2626)",
    light: "linear-gradient(135deg, rgba(244, 63, 94, 0.15), rgba(220, 38, 38, 0.08))",
    shadow: "rgba(244, 63, 94, 0.35)",
  },
  blue: {
    gradient: "linear-gradient(135deg, #3b82f6, #2563eb)",
    light: "linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(37, 99, 235, 0.08))",
    shadow: "rgba(59, 130, 246, 0.35)",
  },
  cyan: {
    gradient: "linear-gradient(135deg, #06b6d4, #0891b2)",
    light: "linear-gradient(135deg, rgba(6, 182, 212, 0.15), rgba(8, 145, 178, 0.08))",
    shadow: "rgba(6, 182, 212, 0.35)",
  },
  orange: {
    gradient: "linear-gradient(135deg, #f97316, #ea580c)",
    light: "linear-gradient(135deg, rgba(249, 115, 22, 0.15), rgba(234, 88, 12, 0.08))",
    shadow: "rgba(249, 115, 22, 0.35)",
  },
  indigo: {
    gradient: "linear-gradient(135deg, #6366f1, #4f46e5)",
    light: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(79, 70, 229, 0.08))",
    shadow: "rgba(99, 102, 241, 0.35)",
  },
};

export default function TeamSection() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        width: "100%",
        padding: "100px 5%",
        background: "linear-gradient(180deg, #1e293b 0%, #334155 50%, #475569 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Modern Geometric Pattern Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(59, 130, 246, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(168, 85, 247, 0.08) 0%, transparent 50%),
            linear-gradient(rgba(148, 163, 184, 0.02) 1.5px, transparent 1.5px),
            linear-gradient(90deg, rgba(148, 163, 184, 0.02) 1.5px, transparent 1.5px)
          `,
          backgroundSize: "100% 100%, 100% 100%, 60px 60px, 60px 60px",
          opacity: 0.8,
        }}
      />

      {/* Diagonal Lines Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(148, 163, 184, 0.015) 35px, rgba(148, 163, 184, 0.015) 70px)",
        }}
      />

      {/* Animated Background Elements */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.12), transparent 70%)",
          filter: "blur(60px)",
          animation: "float 20s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "15%",
          right: "10%",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(168, 85, 247, 0.1), transparent 70%)",
          filter: "blur(60px)",
          animation: "float 25s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          right: "20%",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(236, 72, 153, 0.08), transparent 70%)",
          filter: "blur(50px)",
          animation: "float 18s ease-in-out infinite",
        }}
      />

      {/* Decorative Geometric Shapes */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "12%",
          width: "120px",
          height: "120px",
          background: "linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(59, 130, 246, 0.08))",
          clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
          animation: "float 22s ease-in-out infinite",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "8%",
          width: "100px",
          height: "100px",
          background: "linear-gradient(135deg, rgba(236, 72, 153, 0.05), rgba(249, 115, 22, 0.06))",
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          animation: "float 28s ease-in-out infinite reverse",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "40%",
          left: "5%",
          width: "80px",
          height: "80px",
          background: "linear-gradient(135deg, rgba(34, 211, 238, 0.06), rgba(59, 130, 246, 0.04))",
          borderRadius: "20px",
          transform: "rotate(25deg)",
          animation: "float 20s ease-in-out infinite",
        }}
      />

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 80, position: "relative" }}>
        <div
          style={{
            display: "inline-block",
            padding: "8px 20px",
            background: "linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(59, 130, 246, 0.15))",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            borderRadius: "999px",
            color: "#a5b4fc",
            fontSize: "14px",
            fontWeight: "700",
            letterSpacing: "0.5px",
            marginBottom: "20px",
            textTransform: "uppercase",
          }}
        >
          Our Leadership
        </div>
        <h2
          style={{
            fontSize: 56,
            fontWeight: 900,
            letterSpacing: "-1.5px",
            background: "linear-gradient(135deg, #ffffff, #e0e7ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: 18,
          }}
        >
          Meet Our Team
        </h2>
        <p
          style={{
            color: "#cbd5e1",
            maxWidth: 640,
            margin: "0 auto",
            fontSize: 18,
            lineHeight: 1.7,
            fontWeight: "500",
          }}
        >
          Professionals driving innovation, education, and digital excellence.
        </p>
      </div>

      {/* Team Cards — ALL cards: image LEFT, content RIGHT */}
      <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
        {teamMembers.map((m) => {
          const colors = accentColors[m.accent] || accentColors.blue;

          return (
            <div
              key={m.id}
              className="team-row reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "40% 60%",
                alignItems: "center",
                minHeight: 480,
                borderRadius: 32,
                position: "relative",
                overflow: "visible",
                background: "rgba(255, 255, 255, 0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(226, 232, 240, 0.8)",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)",
                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-12px) scale(1.01)";
                e.currentTarget.style.boxShadow = `0 25px 60px ${colors.shadow}, 0 0 0 1px ${colors.shadow}`;
                e.currentTarget.style.borderColor = colors.shadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 10px 40px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.borderColor = "rgba(226, 232, 240, 0.8)";
              }}
            >
              {/* Colorful Accent Background — always on the LEFT */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "42%",
                  height: "100%",
                  background: colors.light,
                  opacity: 0.5,
                  borderRadius: "32px 0 0 32px",
                  pointerEvents: "none",
                }}
              />

              {/* IMAGE SIDE — always column 1 (left) */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "relative",
                  height: "100%",
                  padding: "50px 30px",
                }}
              >
                <div style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                  {/* Decorative Border */}
                  <div
                    style={{
                      position: "absolute",
                      width: "290px",
                      height: "370px",
                      borderRadius: "28px",
                      border: `3px solid ${colors.shadow}`,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%) rotate(-2deg)",
                      opacity: 0.2,
                      zIndex: 1,
                    }}
                  />
                  <div style={{ position: "relative", zIndex: 2 }}>
                    <img
                      src={m.image}
                      alt={m.name}
                      style={{
                        width: 280,
                        height: 360,
                        objectFit: "cover",
                        borderRadius: 26,
                        boxShadow: `0 20px 50px ${colors.shadow}, 0 0 0 1px rgba(0,0,0,0.05)`,
                        border: "4px solid white",
                      }}
                    />
                    {/* Corner Accents */}
                    <div
                      style={{
                        position: "absolute",
                        top: -18,
                        left: -18,
                        width: 100,
                        height: 100,
                        background: colors.gradient,
                        borderRadius: "22px",
                        opacity: 0.3,
                        zIndex: -1,
                        filter: "blur(3px)",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        bottom: -18,
                        right: -18,
                        width: 85,
                        height: 85,
                        background: colors.gradient,
                        borderRadius: "18px",
                        opacity: 0.3,
                        zIndex: -1,
                        filter: "blur(3px)",
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* CONTENT SIDE — always column 2 (right) */}
              <div
                style={{
                  padding: "50px 60px 50px 40px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <h3
                  style={{
                    fontSize: 38,
                    fontWeight: 900,
                    letterSpacing: "-0.8px",
                    marginBottom: 12,
                    color: "#0f172a",
                    fontFamily: "Inter, Poppins, system-ui",
                  }}
                >
                  {m.name}
                </h3>

                <div
                  style={{
                    display: "inline-block",
                    padding: "10px 24px",
                    borderRadius: 14,
                    background: colors.gradient,
                    color: "#fff",
                    fontSize: 14,
                    fontWeight: 700,
                    marginBottom: 24,
                    boxShadow: `0 8px 24px ${colors.shadow}`,
                    width: "fit-content",
                    letterSpacing: "0.3px",
                  }}
                >
                  {m.title}
                </div>

                <p
                  style={{
                    fontSize: 15.5,
                    lineHeight: 1.8,
                    color: "#475569",
                    overflow: "hidden",
                    maxHeight: "240px",
                    overflowY: "auto",
                    paddingRight: "10px",
                    whiteSpace: "pre-line",
                  }}
                  className="custom-scrollbar"
                >
                  {m.bio}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Styles */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-30px); }
        }

        .reveal {
          opacity: 0;
          transform: translateY(50px) scale(0.95);
          transition: all 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .reveal.active {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(203, 213, 225, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(100, 116, 139, 0.4);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(100, 116, 139, 0.6);
        }

        @media (max-width: 900px) {
          .team-row {
            grid-template-columns: 1fr !important;
          }
          .team-row > div {
            padding: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}