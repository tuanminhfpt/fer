import Carousel from "react-bootstrap/Carousel";

import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import Header from "./Header";
import "./styles.css";

export default function Home() {
  <link rel="stylesheet" type="text/css" href="./styles.css" />;

  const posts = [
    {
      PostId: "1",
      category: "Tech",
      imageSrc:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_57.jpg",
      title: "Yasuo, the Unforgiven - League of Legends",
      date: "22 Oct 2023",
      description:
        " Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
      profileImgSrc:
        "https://i.pinimg.com/736x/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
      profileName: "Minhdt",
      link: "./Detail.js",
    },
    {
      PostId: "2",
      category: "Tech",
      imageSrc:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_57.jpg",
      title: "Yasuo, the Unforgiven - League of Legends",
      date: "22 Oct 2023",
      description:
        " Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
      profileImgSrc:
        "https://i.pinimg.com/736x/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
      profileName: "Minhdt",
      link: "./Detail.js",
    },
    {
      PostId: "3",
      category: "Tech",
      imageSrc:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_57.jpg",
      title: "Yasuo, the Unforgiven - League of Legends",
      date: "22 Oct 2023",
      description:
        " Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
      profileImgSrc:
        "https://i.pinimg.com/736x/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
      profileName: "Minhdt",
      link: "./Detail.js",
    },
    {
      PostId: "4",
      category: "Tech",
      imageSrc:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_57.jpg",
      title: "Yasuo, the Unforgiven - League of Legends",
      date: "22 Oct 2023",
      description:
        " Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
      profileImgSrc:
        "https://i.pinimg.com/736x/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
      profileName: "Minhdt",
      link: "./Detail.js",
    },
    {
      PostId: "5",
      category: "Tech",
      imageSrc:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_57.jpg",
      title: "Yasuo, the Unforgiven - League of Legends",
      date: "22 Oct 2023",
      description:
        " Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
      profileImgSrc:
        "https://i.pinimg.com/736x/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
      profileName: "Minhdt",
      link: "./Detail.js",
    },
    {
      PostId: "6",
      category: "Tech",
      imageSrc:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_57.jpg",
      title: "Yasuo, the Unforgiven - League of Legends",
      date: "22 Oct 2023",
      description:
        " Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
      profileImgSrc:
        "https://i.pinimg.com/736x/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
      profileName: "Minhdt",
      link: "./Detail.js",
    },
    {
      PostId: "7",
      category: "Tech",
      imageSrc:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_57.jpg",
      title: "Yasuo, the Unforgiven - League of Legends",
      date: "22 Oct 2023",
      description:
        " Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
      profileImgSrc:
        "https://i.pinimg.com/736x/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
      profileName: "Minhdt",
      link: "./Detail.js",
    },
    {
      PostId: "8",
      category: "Tech",
      imageSrc:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_57.jpg",
      title: "Yasuo, the Unforgiven - League of Legends",
      date: "22 Oct 2023",
      description:
        " Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
      profileImgSrc:
        "https://i.pinimg.com/736x/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
      profileName: "Minhdt",
      link: "./Detail.js",
    },
    {
      PostId: "9",
      category: "Tech",
      imageSrc:
        "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_57.jpg",
      title: "Yasuo, the Unforgiven - League of Legends",
      date: "22 Oct 2023",
      description:
        " Yasuo still could not forgive himself for all he had done, and now wanders his homeland with only the wind to guide his blade.",
      profileImgSrc:
        "https://i.pinimg.com/736x/fb/e5/72/fbe572e1faefa97388243a952acfbe93.jpg",
      profileName: "Minhdt",
      link: "./Detail.js",
    },
  ];

  return (
    <Container>
      <Row>
        <Header />
      </Row>
      <div
        className="d-flex justify-content-center"
        style={{ width: "95%", padding: "20px 20px " }}
      >
        <Carousel style={{ width: "100%", height: "30%" }}>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src="https://itcuaban.com/wp-content/uploads/2012/05/co-to-quoc-vector.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src="https://pdcorel.com/wp-content/uploads/2023/02/18-co-to-quoc-pdcorel.cpm_-1280x720.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://nhatrang.khanhhoa.gov.vn/Temp/ArticleImage/663242f4-7419-48c9-92ef-ee3ad9ed1917-Default%20image%20Cong%20TTDT-34.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <Row>
        <div className="post-filter container">
          <ButtonGroup>
            <Button
              className="filter-item"
              data-filter="all"
              variant="secondary"
            >
              All
            </Button>
            <Button
              className="filter-item"
              data-filter="tech"
              variant="secondary"
            >
              Title 1
            </Button>
            <Button
              className="filter-item"
              data-filter="food"
              variant="secondary"
            >
              Title 2
            </Button>
            <Button
              className="filter-item"
              data-filter="news"
              variant="secondary"
            >
              Title 3
            </Button>
            <Button
              className="filter-item"
              data-filter="news"
              variant="secondary"
            >
              Title 4
            </Button>
          </ButtonGroup>
        </div>
      </Row>
      <Row>
        {posts.map((post, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className={`post-box ${post.category.toLowerCase()}`}>
              <Card.Img
                variant="top"
                src={post.imageSrc}
                alt=""
                className="post-img"
              />
              <Card.Body>
                <Card.Title className="category">{post.category}</Card.Title>
                <Card.Title>
                  <a href={post.link} className="post-title">
                    {post.title}
                  </a>
                </Card.Title>
                <Card.Text className="post-date">{post.date}</Card.Text>
                <Card.Text className="post-description">
                  {post.description}
                </Card.Text>
                <div className="profile">
                  <Card.Img
                    src={post.profileImgSrc}
                    alt=""
                    className="profile-img"
                  />
                  <span className="profile-name">{post.profileName}</span>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
