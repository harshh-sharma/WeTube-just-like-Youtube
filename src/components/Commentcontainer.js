import React from "react";
import { FaUserCircle } from "react-icons/fa";

const commentsData = [
  {
    name: "Harsh sharma",
    comment: "This a way of writing comment its self",
    replies: [
        {
          name: "Eyush sharma",
          comment: "This a way of writing comment its self",
          replies: [
            {
                name:'Anirudh sharma',
                commment: "This a way of writing comment its self",
                replies: []
            },
            {
                name:'Anirudh sharma',
                commment: "This a way of writing comment its self",
                replies: []
            },
            {
                name:'Anirudh sharma',
                commment: "This a way of writing comment its self",
                replies: []
            }
          ]
        },
        
    ],
  },
];

const Comment = ({ data }) => {
  return (
    <div className="flex flex-col px-4 py-1 bg-gray-200 rounded-md my-2">
      <div className="flex gap-2 items-center">
        <FaUserCircle className="text-xl" />
        <h1 className="text-lg font-semibold">{data.name}</h1>
      </div>
      <div className="items-center">
        <p className="text-lg">{data.comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment) => (
    <div>
      <Comment data={comment} />
      <div className=" px-2 py-1 border-l-black">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};

const Commentcontainer = () => {
  return (
    <div className="mt-4">
      <CommentList comments={commentsData} />
    </div>
  );
};

export default Commentcontainer;
