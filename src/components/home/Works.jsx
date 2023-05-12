import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
const worksData = [
  {
    id: 0,
    link: "https://irisparks.com/word-game",
    image: require("../../assets/img/bottom-keyboard-clone.png"),
    title: "Word Game",
    subtitle: "React.js",
  },

  {
    id: 1,
    link: "https://github.com/irisparks/react-photogallery",
    image: require("../../assets/img/gallery-image.png"),
    title: "Photo Gallery",
    subtitle: "React.js, Axios and MaterialUL",
  },
  {
    id: 2,
    link: "https://github.com/irisparks/redux-feed-back-loop",
    image: require("../../assets/img/Feedback_Project.png"),
    title: "Redux-Feedback-Loop",
    subtitle: "React.js, React-Redux, Express.js/Node.js, postgreSQL",
  },
  {
    id: 3,
    link: "https://github.com/irisparks/cirrusmd-assessment",
    image: require("../../assets/img/gif_generator.png"),
    title: "Gif Generator",
    subtitle: "React.js, API",
  },
  {
    id: 4,
    link: "https://github.com/irisparks/solo-gachibuy",
    image: require("../../assets/img/gachi-buy_interface.png"),
    title: "Gachi-Buy",
    subtitle: "React.js, Node.js/Express.js, postgreSQL, CSS & MaterialUL",
  },
  {
    id: 5,
    link: "https://github.com/irisparks/rubyonrails-blog",
    image: require("../../assets/img/RoRBlog.png"),
    title: "Ruby on Rails Blog",
    subtitle: "Ruby on Rails, Bulma",
  },
  {
    id: 6,
    link: "https://github.com/irisparks/rails-scheduler",
    image: require("../../assets/img/rails_scheduler.png"),
    title: "Rails Scheduler",
    subtitle: "Ruby on Rails, Ruby, Bluma and SCSS",
  },
  {
    id: 7,
    link: "",
    image: require("../../assets/img/bobby-dino.png"),
    title: "Bobby Dino",
    subtitle: "Sticker Project drawn on iPad with Procreate.",
  },
  {
    id: 8,
    link: "",
    image: require("../../assets/img/green-dino.png"),
    title: "Green Dino",
    subtitle: "Sticker Project drawn on iPad with Procreate.",
  },
  {
    id: 9,
    link: "",
    image: require("../../assets/img/blue-dino.png"),
    title: "Blue Dino",
    subtitle: "Sticker Project drawn on iPad with Procreate.",
  },
];

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Projects</h2>
          <div className="subtitle">personal work</div>
        </div>
        <Row className="portfoliolist">
          {worksData.map((works) => {
            return (
              <Col sm={4} key={works.id}>
                <div className="portfolio-wrapper">
                  <a href={works.link}>
                    <Image src={works.image} />
                    <div className="label text-center">
                      <h3>{works.title}</h3>
                      <p>{works.subtitle}</p>
                    </div>
                  </a>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}

export default AppWorks;
