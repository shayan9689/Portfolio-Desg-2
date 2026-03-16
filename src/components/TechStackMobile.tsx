import "./styles/TechStackMobile.css";

const techItems = [
  { name: "React", img: "/images/react2.webp" },
  { name: "Next.js", img: "/images/next2.webp" },
  { name: "Node.js", img: "/images/node2.webp" },
  { name: "Express", img: "/images/express.webp" },
  { name: "MongoDB", img: "/images/mongo.webp" },
  { name: "MySQL", img: "/images/mysql.webp" },
  { name: "TypeScript", img: "/images/typescript.webp" },
  { name: "JavaScript", img: "/images/javascript.webp" },
];

const TechStackMobile = () => {
  return (
    <section className="techstack techstack-mobile" aria-label="Tech stack">
      <h2>My Techstack</h2>
      <div className="techstack-mobile-grid">
        {techItems.map((item) => (
          <div className="techstack-mobile-item" key={item.name}>
            <img src={item.img} alt={item.name} loading="lazy" />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechStackMobile;
