import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import HomePage from "./components/pages/HomePage/HomePage";
import UploadPage from "./components/pages/UploadPage/UploadPage";
import Home from "./components/pages/HomePage/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/videos/:videoId" component={Home} />
          <Route path="/upload" component={UploadPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

// export default App;
// class App extends Component {
// state = {
//   videos: videosList,
//   selectedVideo: videoData[0],
// };

// handleVideoSelect = (id) => {
//   this.setState({
//     selectedVideo: videoData.find((video) => video.id === id),
//   });
// };

// render() {
// const nextVideos = videosList.filter(
//   (video) => video.id !== this.state.selectedVideo.id
// );

// return (
//       <BrowserRouter>
//         <Header />
//         <Switch>
//           <Route path="/" exact component={HomePage} />
//           <Route path="/upload" component={UploadPage} />
//         </Switch>
//       </BrowserRouter>
//     );
//   }
// }

export default App;
