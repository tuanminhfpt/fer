import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../style/admin.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../components/sidebar";
import Navbar from "../components/navbar";

const AdEdit = () => {
  const { empid } = useParams();
  const [toggle, setToggle] = useState(false);
  function Toggle() {
    setToggle(!toggle);
  }

  useEffect(() => {
    const handleSize = () => {
      if (window.innerWidth > 768) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  useEffect(() => {
    fetch("http://localhost:9999/ads/" + empid)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        idchange(resp.id);
        imagechange(resp.image);
        titlechange(resp.title);
        contentchange(resp.content);
        labelchange(resp.label);
        categorychange(resp.category);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const [id, idchange] = useState("");
  const [image, imagechange] = useState("");
  const [title, titlechange] = useState("");
  const [content, contentchange] = useState("");
  const [label, labelchange] = useState("");
  const [category, categorychange] = useState("");
  const [validation, valchange] = useState(false);

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    const empdata = { id, image, title, content, label, category };

    fetch("http://localhost:9999/ads/" + empid, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(empdata),
    })
      .then((res) => {
        alert("Saved successfully.");
        navigate("/admin/ad");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <div className="d-flex">
      <div className={toggle ? "d-none" : "w-auto position-fixed"}>
        <Sidebar />
      </div>
      <div className={toggle ? "d-none" : "invisible"}>
        <Sidebar />
      </div>
      <div className="col overflow-auto">
        <Navbar Toggle={Toggle} />
        <div className="offset-lg-3 col-lg-6">
          <form className="container" onSubmit={handlesubmit}>
            <Link to="/admin/ad" className="btn btn-danger">
              <i class="bi bi-arrow-left-square-fill"></i>
            </Link>
            <div className="card" style={{ textAlign: "left" }}>
              <div className="card-title">
                <h1>Ad Edit</h1>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>ID</label>
                      <input
                        value={id}
                        disabled="disabled"
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Image</label>
                      <input
                        required
                        value={image}
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => imagechange(e.target.value)}
                        className="form-control"
                      ></input>
                      {image.length == 0 && validation && (
                        <span className="text-danger">Enter the name</span>
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        required
                        value={title}
                        type="title"
                        name="title"
                        onMouseDown={(e) => valchange(true)}
                        onChange={(e) => titlechange(e.target.value)}
                        className="form-control"
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Content</label>
                      <input
                        value={content}
                        type="content"
                        name="content"
                        onChange={(e) => contentchange(e.target.value)}
                        className="form-control"
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Label</label>
                      <input
                        value={label}
                        type="label"
                        name="label"
                        onChange={(e) => labelchange(e.target.value)}
                        className="form-control"
                        required
                      ></input>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label htmlFor="categorySelect">Category</label>
                      <select
                        id="categorySelect"
                        value={category}
                        name="category"
                        onChange={(e) => categorychange(e.target.value)}
                        className="form-control"
                      >
                        <option value="Movie">Movie</option>
                        <option value="Technology">Technology</option>
                        <option value="Food">Food</option>
                        <option value="Music">Music</option>
                        <option value="Fashion">Fashion</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdEdit;
