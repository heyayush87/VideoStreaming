import React from "react";
import CommentList from "./CommentList";

const CommentsData = [
  {
    name: "Ayush Kumar",
    text: "lorespm ist round hit the ninja",
    replies: [
      {
        name: "Ayush Kumar",
        text: "lorespm ist round hit the ninja",
        replies: [],
      },
      {
        name: "Ayush Kumar",
        text: "lorespm ist round hit the ninja",
        replies: [
          {
            name: "Ayush Kumar",
            text: "lorespm ist round hit the ninja",
            replies: [
              {
                name: "Ayush Kumar",
                text: "lorespm ist round hit the ninja",
                replies: [],
              },
              {
                name: "Ayush Kumar",
                text: "lorespm ist round hit the ninja",
                replies: [
                  {
                    name: "Ayush Kumar",
                    text: "lorespm ist round hit the ninja",
                    replies: [
                      {
                        name: "Ayush Kumar",
                        text: "lorespm ist round hit the ninja",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Ayush Kumar",
    text: "lorespm ist round hit the ninja",
  },
  {
    name: "Ayush Kumar",
    text: "lorespm ist round hit the ninja",
  },
  {
    name: "Ayush Kumar",
    text: "lorespm ist round hit the ninja",
  },
  {
    name: "Ayush Kumar",
    text: "lorespm ist round hit the ninja",
  },
  {
    name: "Ayush Kumar",
    text: "lorespm ist round hit the ninja",
  },
];

const ComentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentList comment={CommentsData} />
    </div>
  );
};

export default ComentsContainer;
