"use client";
import {  Col, Row, Typography } from "antd";
import SkillsBar from "./SkillsBar";
import Banner from "./Banner";
import FeaturedProject from "./FeaturedProject";
const { Title } = Typography;

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React.js", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Node.js", level: 75 },
  { name: "MongoDB", level: 70 },
  { name: "Tailwind CSS", level: 85 },
];


const Home = () => {
  return (
    <div className="container mx-auto p-6 my-5">
      {/* Header */}
      <Banner />

      {/* <PortfolioIntroduction/> */}

       {/* Resume Section */}
       <div id="resume-content" className="hidden shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold">Md Sohel Rana</h2>
        <p className="text-lg text-gray-600">Junior Full-Stack Web Developer</p>
        <p>📞 Mobile: 017511500000</p>
        <p>🔗 Facebook: <a href="#" className="text-blue-600">Profile Link</a></p>

        <h3 className="text-xl font-semibold mt-4">Skills</h3>
        <ul className="list-disc pl-6">
          {skills.map(skill => (
            <li key={skill.name}>{skill.name} - {skill.level}%</li>
          ))}
        </ul>
      </div>

      {/* Skills Section */}
      <Title level={3} className="mt-8">
        Skills
      </Title>
      <Row gutter={[16, 16]}>
        {skills.map((skill) => (
          <Col xs={24} sm={12} md={8} key={skill.name}>
            <SkillsBar skill={skill} />
          </Col>
        ))}
      </Row>

      {/* Projects Section */}
      <Title level={3} className="mt-8">
        Featured Projects
      </Title>
      <FeaturedProject />

    </div>
  );
};

export default Home;
