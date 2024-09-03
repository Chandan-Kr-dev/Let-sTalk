import React from "react";
import Landing from './Landing'
import TopBlogs from './TopBlogs'
import AddBlog from './AddBlog'
import Footer from './Footer'


const Home = () => {
  return (
    <main>
      
        <Landing />
        <TopBlogs />
        <section id="AddBlog">
          <AddBlog />
        </section>
        <Footer />
    
    </main>
  );
};

export default Home;
