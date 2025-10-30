import { useState} from 'react';

import blogData_31 from '../assets/data/blogData.json';
import Blog_31 from '../components/Blog_31';
import Wrapper from '../assets/wrappers/Blog2_31';

const BlogLocalJsonPage_31 = () => {
  const [name, setName] = useState('hang0727');
  const [id, setId] = useState(213417131);
  const [blogs_31, setBlogs_31] = useState(blogData_31);
  return (
    <Wrapper>
      <section className='blogs'>
        <div className='section-title'>
          <h2>blogs from local json -- {name}, {id}{''}</h2>
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

export default BlogLocalJsonPage_31;
