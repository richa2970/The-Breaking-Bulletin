import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsurl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card" style={{ border: "2px solid black" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0",
          }}
        >
          <span className=" badge rounded-pill bg-danger">{source}</span>
        </div>

        <img
          src={
            !imageUrl
              ? "http://cdn.wionews.com/sites/default/files/2023/06/18/360410-untitled-design-2023-06-18t194516187.png"
              : imageUrl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-danger">
              By {!author ? "Unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>

          <a
            rel="noreferrer"
            target="_blank"
            href={newsurl}
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
