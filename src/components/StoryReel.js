import React from "react";
import "./storyReel.css";
import Story from "./Story";
function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        title="Madara Uchiha"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTaRwEFrHImzVqnjD4WMPWGMrRKoCuv9nKhQ&usqp=CAU"
        url="https://i.pinimg.com/736x/f0/92/30/f0923089f54f93da9cdf298524ae123d.jpg"
      />
      <Story
        title="Jiriaya"
        image="https://www.whatspaper.com/wp-content/uploads/2021/02/jiraiya-wallpaper-whatspaper-8.jpg"
        url="https://lh3.googleusercontent.com/_Ybo52rpcQeVFvUVL0f853LP8ElQKB2-EeoLLus-Fo-9jXChoyG8326oqbN5lPPWONx8=s85"
      />
      <Story
        title="Hinata Hyuga"
        image="https://fsb.zobj.net/crop.php?r=JyiUfptwW1JoUN1B93arriDsFPmAGe-B1yvZy-9ie5nND7VhROs8I2X8g3_6pKQUULER_lsk44kL4kRbL2iXNuzx6hJXNQRIzqlrg0Mbzx3xKUL-TvE3k8hcJrU0Bi0QxP7J9HzXquotMYZkyhpYC1ZA_aoKIHRPSYI66cUoqQqqUnSMxrjD4fkLCb0DA8yISl4pNy6EqqDwZoyJ"
        url="https://dk2dv4ezy246u.cloudfront.net/widgets/sSFFVYULTat0_large.jpg"
      />
      <Story
        title="Naruto Uzimaki"
        image="https://upload.wikimedia.org/wikipedia/en/9/9a/NarutoUzumaki.png"
        url="https://www.whats-on-netflix.com/wp-content/uploads/2018/09/naruto-on-netflix.jpg"
      />
      <Story title="Rayid" image="" />
    </div>
  );
}

export default StoryReel;
