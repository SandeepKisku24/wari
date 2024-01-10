import React, {useState} from "react";
import "../app.css"
import Card from "./card";
function Right(){

    const [count, setCount] = useState(0);
    const comments =["Through Ankur’s guidance, I gained valuable understanding about the content engine and insights of the Instagram to enhance my content strategy.  One aspect of the course that emphasised on colours and aesthetic helped me transform the way I curate my content.  I highly recommend this course to anyone looking to elevate their Instagram presence.Cheers!", 
    "It’s amazing how transparent team Warikoo is, since they’ve shared everything, from their own Content Engine to the Strategies, Techniques and Rules which took them to more than 2 million followers across Instagram, just so that we could get a better understanding of how the system works. How to Instagram is a gold mine for budding Instagram Strategists and Content Creators ", 
    "Being in this course was the best thing I did for my Instagram page. I got to learn everything about Instagram that I was unaware of before. From Basic of WHY you want to create content on Instagram to monetization everything is covered in detail. Before I was making content randomly. After this course I got structure to my content creation process. I almost doubled my following during this course from 2500 to 5000 followers and one of the video went viral touched 100K views.",
    "Going in the course I was hoping to be told, do these 3 things and magically you will get what you want. But instead, what I got were the processes, tools and tips that, if followed properly, I can troubleshoot my Instagram journey to the top! Can't recommend it enough!",
    "How to Instagram gave me an impressive 200% growth and taught me my Why, What, and How I should create content I wish to create and the learnings will stay with me for my entire life. I am seeing a great change in stats after implementing just 25% of the learning from the course.",
    "This course has been an absolute game-changer for me. It has expanded my perspective, equipped me with essential skills, and opened doors to numerous possibilities. I am grateful for the comprehensive content, expert guidance, and the supportive community that this course offered. I highly recommend it to anyone looking to elevate their Instagram presence and unlock the platform's full potential."
    ];
    const writters =["KAILASH","KUSHAGRA TAYAL","SARANSH AGARWAL","TANAY SABNIS","KARTIK SHINDE","AMARSINGH BHATI"];
    const marg = ["0%","-16.6%","-33.2%","-49.8%","-66.4%","-83%"];
    const listComponents = [];

 
    for (let i = 0; i < 6; i++) {
      const comment = comments[i];
      const writter = writters[i];
      listComponents.push(<Card key={comment} comment={comment} auther = {writter} />);
    }
    return(
        <div className="right">
            <div className="panel">
            <div className="container-right" style={{transform:`translatex(${marg[count]})`}}>
                    {listComponents}
            </div>
            <div className="buttons">
                <div className="button" onClick={()=>{setCount(0); }}><a/></div>
                <div className="button" onClick={()=>{setCount(1);}}></div>
                <div className="button" onClick={()=>{setCount(2);}}></div>
                <div className="button" onClick={()=>{setCount(3);}}></div>
                <div className="button" onClick={()=>{setCount(4);}}></div>
                <div className="button" onClick={()=>{setCount(5);}}></div>
            </div>
            </div>
        </div>
    )
}

export default Right;