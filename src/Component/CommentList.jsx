import React from "react";
import Comment from "./Comment";

const CommentList = ({ comment }) => {
  return (
    <div>
      {comment.map((item, index) => (
        <div key={index}>
          <Comment data={item} />
          {item.replies && item.replies.length > 0 && (
            <div className="pl-5 border border-l-black ml-5">
              <CommentList comment={item.replies} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CommentList;
