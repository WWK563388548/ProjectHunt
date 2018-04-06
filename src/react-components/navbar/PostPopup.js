import React from 'react';
import Popup from './Popup';

class PostPopup extends React.Component {

    handlePost = () => {
        
    };

    render() {
        return (
            <Popup {...this.props} style="post-popup">
                <header>Post a new project</header>
                <section>
                    <table>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input placeholder="Enter project's name" />
                                </td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>
                                    <input placeholder="Enter project's name" />
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>
                                    <input placeholder="Enter project's description" />
                                </td>
                            </tr>
                            <tr>
                                <td>Link</td>
                                <td>
                                    <input placeholder="http://...." />
                                </td>
                            </tr>
                            <tr>
                                <td>Media</td>
                                <td>
                                    <input placeholder="Paste a link to a image" />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </section>
                <footer className="post-footer">
                    <button onclick={this.handlePost} className="post-btn">Post it!</button>
                </footer>
            </Popup>
        ); 
    }
}

export default PostPopup;