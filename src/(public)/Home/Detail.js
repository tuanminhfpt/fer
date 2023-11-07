import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Image, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";

export default function Detail() {
  const { id } = useParams();

  const [details, setDetails] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:9999/posts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
      });

    fetch(`http://localhost:9999/comments?pid=${id}`)
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
      });
  }, [id]);

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Container>
        <section className="post-header">
          <div className="header-content post-container">
            <Link to={"/home"}>Back to Home</Link>
            <h1 className="header-title">{details.title}</h1>
            <Image src={details.imageSrc} alt="" className="header-img" fluid />
          </div>
        </section>

        <section className="post-content post-container">
          <h2 className="sub-heading">{details.description}</h2>
          <p className="post-text">{details.content}</p>
        </section>
        <section className="comments post-container">
          <h3>Comments</h3>
          <ul>
            {Array.isArray(comments) && comments.length > 0 ? (
              comments.map((comment) => (
                <li key={comment.id}>
                  <div className="comment-author">
                    Author: {comment.username}
                  </div>
                  <div className="comment-content">{comment.content}</div>
                  <div className="comment-date">
                    Date: {comment.createdDate}
                  </div>
                </li>
              ))
            ) : (
              <p>No comments available for this post.</p>
            )}
          </ul>
        </section>
      </Container>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
