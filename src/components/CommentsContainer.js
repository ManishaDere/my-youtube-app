import React from "react";

const commentsData = [
  {
    name: "Manisha",
    message: "Lorem ipsum sdfdsf dgdfg",
    replies: [
      {
        name: "Manisha",
        message: "Lorem ipsum sdfdsf dgdfg",
        replies: [
          {
            name: "Manisha",
            message: "Lorem ipsum sdfdsf dgdfg",
            replies: [
              {
                name: "Manisha",
                message: "Lorem ipsum sdfdsf dgdfg",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Manisha",
        message: "Lorem ipsum sdfdsf dgdfg",
        replies: [],
      },
    ],
  },
  {
    name: "Manisha",
    message: "Lorem ipsum sdfdsf dgdfg",
    replies: [],
  },
  {
    name: "Manisha",
    message: "Lorem ipsum sdfdsf dgdfg",
    replies: [],
  },
  {
    name: "Manisha",
    message: "Lorem ipsum sdfdsf dgdfg",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, message, replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-200 p-2 m-2 rounded-lg">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="thumbnail"
        className="w-12 h-12"
      />
      <div className="pl-4">
        <h1 className="font-bold text-lg my-2">{name}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};
const CommentsContainer = () => {
  return (
    <div className="m-4 p-2">
      <h1 className="font-bold text-lg">Comments:</h1>
      <CommentsList data={commentsData} />
    </div>
  );
};

const CommentsList = ({ data }) => {
  return (
    <>
      {data?.map((comment, index) => (
        <div>
          <Comment key={index} data={comment} />
          <div className="ml-5 shadow-lg border border-l-black">
            <CommentsList data={comment?.replies} />
          </div>
        </div>
      ))}
    </>
  );
};
export default CommentsContainer;
