import React, { Component } from 'react'
import './styles.css'

class RenderHeader extends Component {
    render(){
        return(
            <header className="Header">
                <div>
                    <img className="Header-profilePicture" src={this.props.profilePicture}/>
                </div>
                <div className="Header-container-profileName">
                    <p className="Header-profileName">{this.props.name}</p>
                </div>
                
                <svg aria-label="More options" class="_8-yf5 " color="#262626" fill="#262626" height="40" role="img" viewBox="0 0 24 24" width="40">
                    <circle cx="12" cy="12" r="1.5"></circle>
                    <circle cx="6.5" cy="12" r="1.5"></circle>
                    <circle cx="17.5" cy="12" r="1.5"></circle>
                </svg>
               
            </header>
        )
    }
}

class RenderPostImage extends Component {
    render(){
        return (
            <div className="PostImage">
                <img src={this.props.postImage}/>
            </div>
        )
    }
}

class RenderPostFooter extends Component {
    constructor(props){
        super(props)
        this.state = {
            like: false
        }
    }
    render(){
        return(
            <div className="PostFooter">
                <div className="PostFooter-buttons">
                    <span>
                        <button type="button" onClick={() =>  this.setState({like: !this.state.like})}>
                            <img 
                                className="PostFooter-button-icon" 
                                src={this.state.like ? 
                                    "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                                    : 
                                    "https://icons-for-free.com/iconfiles/png/512/heart-131965017458786724.png" 
                                    }
                            />
                             <p>{this.props.likes}</p>
                        </button>
                    </span>
                    <span>
                        <button type="button">
                            <img className="PostFooter-button-icon" src="https://static.thenounproject.com/png/638755-200.png"/>
                            <p>{this.props.coments}</p>
                        </button>
                    </span>
                    <span>
                        <button type="button">
                            <img className="PostFooter-button-icon" src="https://static.thenounproject.com/png/497450-200.png"/>
                        </button>
                    </span>
                    <span className="PostFooter-save-icon">
                        <button type="button">
                            <img className="PostFooter-button-icon" src="https://static.thenounproject.com/png/50608-200.png"/>
                            
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}

class Post extends Component {
    render() {
        let item = this.props.item
        return (
            <div className="Post" key={item.id}>
                <RenderHeader 
                    name={item.userName}
                    profilePicture={item.profilePicture}
                />
                <RenderPostImage postImage={item.postImage}/>
                <RenderPostFooter likes={item.likes} coments={item.coments}/>
            </div>
        )
    }
}

export default Post