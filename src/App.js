import React, { Component } from 'react';
import './App.css';
import Post from './components/Post'


class App extends Component {   

    constructor(props){
        super(props)
        this.state = {
            feed: [
                {
                    id: 1,
                    userName: "Liam",
                    profilePicture: 'https://img.wattpad.com/f994802e13a436e7394077013b5e05dd57e509a8/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f535f646e6651437268566e4267513d3d2d31342e313461373563306136323162633134393733333138343139343238372e6a7067',
                    postImage: 'https://64.media.tumblr.com/31e1d3f7a6d5ebf7e263e49fde493bad/c4b4bb52b35d9a63-a9/s640x960/36efb8fcb5118f3f02c123f22ee12ddcd169149e.jpg',
                    likes: 10,
                    coments: 6,
                },
                {
                    id: 2,
                    userName: "Olivia",
                    profilePicture: 'https://i.pinimg.com/originals/6e/e9/41/6ee941dd0d85066048be3753a070a608.jpg',
                    postImage: 'https://i.pinimg.com/originals/ef/a3/08/efa308d0a87700049803b091c5a8dc40.jpg',
                    likes: 190,
                    coments: 18,
                },
                {
                    id: 3,
                    userName: "Benjamin",
                    profilePicture: 'https://pbs.twimg.com/profile_images/1232678681383985152/m8rotkpo_400x400.jpg',
                    postImage: 'https://64.media.tumblr.com/5589ee8aa93d0bc7c715cd135d0a28be/tumblr_pbh0xeaOsp1vu696ko1_1280.jpg',
                    likes: 2,
                    coments: 1,
                },
                {
                    id: 3,
                    userName: "Sophia",
                    profilePicture: 'https://i.pinimg.com/originals/af/70/f5/af70f511081d394803a31ea1934cf1de.png',
                    postImage: 'https://i.pinimg.com/originals/a9/cf/7a/a9cf7a66d14cce0555e367d812b11361.jpg',
                    likes: 60,
                    coments: 12,
                }
            ]
            
        }

    }
    
    
    render(){
        return(
            <div className="App">
                {this.state.feed.map( item => <Post item={item}/> )}
                
            </div>
        );
    }
}
export default App;
