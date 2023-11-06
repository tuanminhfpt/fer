import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Image, Row } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
import Comment from "./Comment";

export default function Detail() {
  const { id } = useParams();

  const [details, setDetails] = useState({});
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

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

    // Fetch the user data
    fetch("http://localhost:9999/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, [id]);

  const getUsernameById = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.username : "Unknown User";
  };

  const handleCommentSubmit = (newComment) => {
    setComments([...comments, newComment]);
  };

  return (
    <Container fluid>
      <Row>
        <Header />
      </Row>
      <Container>
        <section className="post-header">
          <div className="header-content post-container">
            <Link to={"/"}>Back to Home</Link>
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
        <Comment
          postId={id}
          // currentUserId={yourCurrentUserId}
          onCommentSubmit={handleCommentSubmit}
        />
      </Container>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
