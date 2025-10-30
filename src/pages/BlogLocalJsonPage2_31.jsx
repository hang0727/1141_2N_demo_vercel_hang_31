import { useState} from 'react';

import blogData_31 from '../assets/data/blogData.json';
import Blog2_31 from '../components/Blog2_31';
import Wrapper from '../assets/wrappers/Blog2_31';
import Alert_31 from '../components/Alert_31';

const BlogLocalJsonPage2_31 = () => {
  const [name, setName] = useState('hang0727');
  const [id, setId] = useState(213417131);
  const [blogs_31, setBlogs_31] = useState(blogData_31);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
});

const showAlert = (show=false, msg='', type= '')=> {
  setAlert({show, msg, type });
};

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs_31(blogs_31.filter( (blog) => blog.id !==id));
  };

  const clearAllBlogs = () => {
    showAlert(true, 'clear all blogs', 'danger');
    setBlogs_31([]);
  };

  const loadAllBlogs = () => {
    showAlert(true, 'load all blogs', 'success');
    setBlogs_31(blogData_31);
  };

  return (
    <Wrapper>
    { alert.show && <Alert_31 alert={alert} showAlert={showAlert} />}
      <section className='blogs'>
        <div className='section-title'>
          <h2>blogs from local json 2 -- {name}, {id}{''}</h2>
        </div>
        <div className='blogs-center'>
        {blogs_31.map((item)=>{
          const {id, title, descrip, category, img} = item;
          return (
            <Blog2_31 
            key={id} 
            id={id} 
            title={title} 
            descrip={descrip}
            category={category}
            img={img}
            removeItem={removeItem}
            />
          );
        })}
        </div>
        <div className="flex justify-center items-center gap-8 mt-8">
          <button type='button' className='text-red-700 bg-red-200 hover:bg-red-300 capitalize px-4 py-2 text-base rounded'
          onClick={clearAllBlogs}
          >clear all blogs</button>
          <button type='button' className='text-blue-700 bg-blue-200 hover:bg-blue-300  capitalize px-4 py-2 text-base rounded'
          onClick={loadAllBlogs}
          >load all blogs</button>
        </div>
      </section>
    </Wrapper>
  );
};

export default BlogLocalJsonPage2_31;
