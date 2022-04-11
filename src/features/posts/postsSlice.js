import {createSlice} from '@reduxjs/toolkit';

const initialState = [
    { id: '1', title: 'First post', content: 'This is the first post!'},
    {id: '2', title: 'Second post', content: 'More text goes here, I think'}
]

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {}
})

export default postsSlice.reducer