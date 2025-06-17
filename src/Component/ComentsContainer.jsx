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
    <div className="w-full max-w-full px-2 py-2 sm:px-4 sm:py-4 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl ml-0 mr-auto">
      <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
        Comments :
      </h1>
      <CommentList comment={CommentsData} />
    </div>
  );
};

export default ComentsContainer;
