import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '',  body: ''})

    const addNewPost = () => {
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '',  body: ''})
    }

    return (
        <form>
            {/*Управляемый инпут*/}
            <MyInput
                type="text"
                placeholder="Название поста"
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
            />
            <MyInput
                type="text"
                placeholder="Описание поста"
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
            />
            <MyButton type="button" onClick={addNewPost}>Создать пост</MyButton>
        </form>
    );
};

export default PostForm;