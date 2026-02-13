import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h2 className="text-center"> People </h2>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 mt-5 text-center">
          <img src="media/images/me.jpeg" alt="Pratham Srivastava" 
          style= {{borderRadius: "100%", 
            height: "60%", 
            width: "55%", 
            objectFit: "cover", 
            objectPosition: "top"
            }} />
            <h4 className="mt-3"> Pratham Srivastava </h4>
            <h6 className="text-muted">Creator & Full-Stack Developer</h6>

        </div>

        <div className="col-6 p-3 mt-4  text-muted">
          <p>
          Pratham recently completed his B.Tech in Information Technology and is focused on building real-world web applications using the MERN stack (MongoDB, Express.js, React, and Node.js). He enjoys creating clean, scalable, and user-friendly digital products with a strong emphasis on practical learning.
          </p>

          <p> Through hands-on projects, he has strengthened both frontend and backend development skills, working with React for responsive interfaces and Node.js and Express for backend logic and APIs. Pratham believes in learning by doing, staying consistent, and continuously improving his skills while exploring modern web development practices. Connect on{" "}
            <a
              href="https://www.linkedin.com/in/prathamsrivastavaa22/"
              style={{ textDecoration: "none" }} 
            > Linkedin
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
