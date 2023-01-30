import React from "react";

const Home = () => {
  return (
    <div className="p-4 max-w-3xl mx-auto flex flex-col gap-4">
      <div>
        <p className="text-3xl text-center mb-5">
          Hi, You Are In My Webpage. 🤗
        </p>
      </div>

      <div className="my-6">
        <h2 className="title">🤔 What is This</h2>
        <p className="p">My Very First Deploying to Vercel.</p>
        <p className="p">hogehoge</p>
      </div>

      <div className="my-6">
        <h2 className="title">🙄 About Me</h2>
        <p className="p">
          I am currently unemployed and seeking employment as an Infrastructure
          Engineer and as a programmer using TypeScript, Python, AWS, and so
          forth .
        </p>
      </div>

      <div className="my-6">
        <h2 className="title">😎 Tech Stack</h2>

        <div className="flex flex-wrap gap-4 small">
          <span className="p">#Networking/Design</span>
          <span className="p">#Linux</span>
          <span className="p">#Python</span>
          <span className="p">#Django</span>
          <span className="p">#FastAPI</span>
          <span className="p">#JavaScript</span>
          <span className="p">#TypeScript</span>
          <span className="p">#React</span>
          <span className="p">#Nextjs</span>
          <span className="p">#Node</span>
        </div>
      </div>

      <div className="my-6">
        <p className="p">This site was deployed in Vercel using Nextjs.</p>
      </div>
    </div>
  );
};

export default Home;
