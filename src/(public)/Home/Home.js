import React, { useState, useEffect } from "react";
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
import "./style/styles.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [ads, setAds] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("Fetching data...");
    fetch("http://localhost:9999/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));

    fetch("http://localhost:9999/ads")
      .then((response) => response.json())
      .then((data) => setAds(data));
  }, []);

  const filterPostsBySearch = (post) => {
    return post.title.toLowerCase().includes(searchTerm.toLowerCase());
  };

  const activateFilter = (category) => {
    setSelectedCategory(category);
  };

  return (
    <Container fluid>
      <Row>
        <Header onSearch={setSearchTerm} />
      </Row>
      <Container>
        <div
          className="d-flex justify-content-center"
          style={{ width: "95%", padding: "20px 20px" }}
        >
          <Carousel style={{ width: "70%" }}>
            {ads
              .filter((ad) => ad.status === true)
              .map((ad, index) => (
                <Carousel.Item key={index}>
                  <a href={`/ads/${ad.id}`}>
                    <img
                      className="d-block w-100"
                      src={ad.image}
                      alt={ad.title}
                    />
                    <Carousel.Caption>
                      <h3>{ad.title}</h3>
                      <p>{ad.content}</p>
                    </Carousel.Caption>
                  </a>
                </Carousel.Item>
              ))}
          </Carousel>
        </div>

        <section className="about container" id="about">
          <div className="contentBx">
            <h2 className="titleText">Catch up with the trending topics</h2>
            <p className="title-text">
              The world of social media and online content is constantly
              evolving, with new trends and topics emerging every day. To stay
              in the loop and remain relevant in today's digital landscape, it's
              essential to catch up with the trending topics. Whether it's the
              latest viral hashtag, a breaking news story, or a hot new meme,
              being aware of what's trending can help us connect with a broader
              audience and engage in meaningful conversations.
            </p>
            <p
              className="title-text"
              id="additional-text"
              style={{ display: "none" }}
            >
              Trending topics not only keep us informed but also provide an
              opportunity to share our thoughts, insights, and creativity with
              the online community. So, let's embrace the ever-changing digital
              sphere and make an effort to catch up with the trending topics,
              because in the fast-paced world of the internet, staying up to
              date is the key to staying connected.
            </p>
            <a href="#" className="btn2">
              Read more
            </a>
          </div>
          <div className="imgBx">
            <img src="images/about.png" alt="" className="fitBg" />
          </div>
        </section>

        <Row>
          <div className="post-filter container">
            {[
              "all",
              "Technology",
              "Travel",
              "Food",
              "Health",
              "Entertainment",
              "Fashion",
              "Sports",
              "Music",
              "Science",
            ].map((category, index) => (
              <span
                key={index}
                className={`filter-item ${
                  selectedCategory === category ? "active-filter" : ""
                }`}
                data-filter={category}
                variant={
                  selectedCategory === category ? "primary" : "secondary"
                }
                onClick={() => activateFilter(category)}
              >
                {category}
              </span>
            ))}
          </div>
        </Row>

        <Row>
          {posts
            .filter(
              (post) =>
                (selectedCategory === "all" ||
                  post.category === selectedCategory) &&
                (searchTerm === "" || filterPostsBySearch(post))
            )
            .map((post, index) => (
              <Col key={index} xs={12} sm={6} md={4} lg={3}>
                <Card
                  style={{ marginBottom: "1rem" }}
                  className={`post-box ${post.category.toLowerCase()}`}
                >
                  <Card.Img
                    variant="top"
                    src={post.imageSrc}
                    alt=""
                    className="post-img"
                  />
                  <Card.Body>
                    <Card.Title className="category">
                      {post.category}
                    </Card.Title>
                    <Card.Title>
                      <Link
                        to={`/home/${post.id}/details`}
                        className="post-title"
                      >
                        {post.title}
                      </Link>
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
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
