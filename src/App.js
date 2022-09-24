import React, {useState} from 'react';
import './styles/app.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'JavaScript', body: 'JavaScript - это язык программирования'},
        {id: 2, title: 'C#', body: 'C# - это язык программирования'},
        {id: 3, title: 'C++', body: 'C++ - это язык программирования'}
    ])

    {/*Получение value из управляемого инпута*/}
    // const [post, setPost] = useState({title: '',  body: ''})

    {/*Получение value из неуправляемого инпута*/}
    // const bodyInputRef = useRef()

    const createPost = (newPost) => {
     setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
        <div className="App">
            <PostForm create={createPost}/>

            <hr style={{margin:"15px 0"}}/>

            <div>
                <MySelect
                    defaultValue="Сортировка"
                    options={[
                        {value: "title", name: "По заголовку"},
                        {value: "body", name: "По описанию"}
                    ]}
                />
            </div>

            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} title='Список постов'/>
                : <h3 style={{textAlign:"center", color: "gray"}}>Список постов пуст.</h3>
            }
        </div>
    );
}

export default App;
