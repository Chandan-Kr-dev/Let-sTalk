import React from "react";
import Landing from './Landing'
import TopBlogs from './TopBlogs'
import AddBlog from './AddBlog'
import LocomotiveScroll from "locomotive-scroll";




const Home = () => {
  const locomotive=new LocomotiveScroll()
  locomotive.scrollTo('#AddBlog')
 
  return (
    <main>
      
        <Landing />
        <TopBlogs  />
        <section data-scroll-section id="AddBlog">
          <AddBlog />
        </section>
        
    
    </main>
  );
};

export default Home;
