import React from 'react'
import SubCards from './SubCards';
import '../styles/SubCard.css';

const SubCard = ({clickHandler}) => {

  const information = [
    {
      id: 1,
      title: "Hackathons",
      opt: "",
      desc1: "Engage Developers through innovation",
      desc2: "Fuel innovation with our dynamic Hackathons – an exciting platform to showcase skills, collaborate with peers, and compete for coveted prizes.",
      tags: ["#Community Hacking", "#Internal Hackathons", "#Hiring Challenge"]
    },
    {
      id: 1,
      title: "Ideathons",
      opt: "",
      desc1: "Ignite Ideas and Imaginations",
      desc2: "Ignite creativity in our Ideathons, where brilliant minds converge to pitch and develop groundbreaking ideas, transforming imagination into tangible solutions.",
      tags: ["#IdeasIntoAction", "#InnovationChallenge", "#CreativeSolutions"]
    },
    {
      id: 1,
      title: "Hiring Challenges",
      opt: "",
      desc1: "Talent-driven Hiring challenges",
      desc2: "Experience the future of virtual engagement with our Online Events, seamlessly connecting participants worldwide for immersive learning and networking opportunities.",
      tags: ["#TalentAcquisition", "#RecruitmentChallenge", "#SkillAssessment"]
    },
    {
      id: 1,
      title: "Quizzes",
      opt: "",
      desc1: "Test Candidates, Differentiate with ease",
      desc2: "Discover flexible and scalable pricing plans tailored to suit the unique needs of your organization, ensuring optimal value and success",
      tags: ["#QuizMastery" ,"#KnowledgeChallenge", "#InteractiveLearning"]
    },
    {
      id: 1,
      title: "Events",
      opt: "(Free)",
      desc1: "Immersive online events at free of cost",
      desc2: "Streamline talent acquisition through our Hiring Challenges, providing a platform for companies to assess and recruit top-tier candidates based on real-world scenarios.",
      tags: ["#VirtualEngagement", "#OnlineNetworking", "#GlobalEvents"]
    },
    {
      id: 1,
      title: "Scholarships",
      opt: "(Free)",
      desc1: "Empowering Scholarships",
      desc2: "Empower education with our Scholarships, offering financial support to deserving individuals, ensuring that learning opportunities are accessible to all.",
      tags: ["#EducationOpportunity", "#ScholarshipProgram", "#LearningSupport"]
    },
  ];


  return (
    <div className='subcards-main'>
        {
          information.map( (info)=> (
          <SubCards {...info} clickHandler={clickHandler}></SubCards>
        ))
        }
    </div>
  )
}

export default SubCard