import { useState, useEffect } from 'react';

//import blogData_31 from '../assets/data/blogData.json';
import Blog_31 from '../components/Blog_31';
import Wrapper from '../assets/wrappers/Blog2_31';

//const api_url = 'http://localhost:5000/api/blog_31';

import { supabase } from '../db/clientSupabase';

const BlogSupaPage_31 = () => {
  const [name, setName] = useState('hang0727');
  const [id, setId] = useState(213417131);
  const [blogs_31, setBlogs_31] = useState([]);

const fetchBlogFromNodeServer = async () => {
  try{
    let {data, error} = await supabase.from('blog_31').select('*');
    //const response = await fetch(api_url);
    //const data = await response.json();
    console.log('blogs', data);
    setBlogs_31(data);
  }catch(error){
    console.log(error);
  }
};

useEffect(()=>{
  fetchBlogFromSupa();
},[]);

  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>blogs from Node -- {name}, {id}{''}</h2>
        </div>
        <div className='blogs-center'>
        {blogs_31.map((item)=>{
          const {id, title, descrip, category, img} = item;
          return (
            <Blog_31 
            key={id} 
            id={id} 
            title={title} 
            descrip={descrip}
            category={category}
            img={img}
            />
          );
        })}
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogSupaPage_31;
