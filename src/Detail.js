import { Container,Image} from "react-bootstrap";
import Header from "./Header";
import { Link } from "react-router-dom";

export default function Detail() {
  <link rel="stylesheet" type="text/css" href="./styles.css" />;
  return (
    <Container>
      <Header />

      <section className="post-header">
        <div className="header-content post-container">
          <Link to={"/"}>Back to Home</Link>
          <h1 className="header-title">How to Master Yasuo</h1>
          <Image
            src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Yasuo_57.jpg"
            alt=""
            className="header-img"
            fluid
          />
        </div>
      </section>

      <section id="search-results" className="container"></section>

      <section className="post-content post-container">
        <h2 className="sub-heading">
          How to Counter Yasuo? The Best Counter Tips To Beat Yasuo in Season 12
        </h2>
        <p className="post-text">
          We all know Yasuo, with memes like 0/8 power spikes or as simple as
          people banning him because they’re afraid that people would perform so
          poorly in this champion that they would lose. Despite this fact, Yasuo
          is also a champion who would completely dominate the game if he is
          played by a player who knows him well. If a player knows how to
          utilize his E dashes well, you won’t even be able to touch him. He is
          basically a hit-or-miss champion when you encounter him. So today,
          I’ll show you how to beat a good Yasuo player and never see that
          mastery 7 spam from a Yasuo ever again. First off, let’s study his
          skills and get a good look at what this champion can do.
        </p>
      </section>
    </Container>
  );
}
