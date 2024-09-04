import React from "react";
import Landing from './Landing'
import TopBlogs from './TopBlogs'
import AddBlog from './AddBlog'



const Home = () => {
  return (
    <main>
      
        <Landing />
        <TopBlogs />
        <section id="AddBlog">
          <AddBlog />
        </section>
        
    
    </main>
  );
};

export default Home;
