import React from "react";

const commentData = [
  {
    name: "Prateek Shetty",
    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
    replies: [],
  },
  {
    name: "Prateek Shetty",
    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
    replies: [
      {
        name: "Prateek Shetty",
        text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
        replies: [],
      },
      {
        name: "Prateek Shetty",
        text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
        replies: [
          {
            name: "Prateek Shetty",
            text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
            replies: [
              {
                name: "Prateek Shetty",
                text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                replies: [
                  {
                    name: "Prateek Shetty",
                    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                    replies: [
                      {
                        name: "Prateek Shetty",
                        text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                        replies: [
                          {
                            name: "Prateek Shetty",
                            text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                            replies: [
                              {
                                name: "Prateek Shetty",
                                text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                                replies: [
                                  {
                                    name: "Prateek Shetty",
                                    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                                    replies: [
                                      {
                                        name: "Prateek Shetty",
                                        text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                                        replies: [
                                          {
                                            name: "Prateek Shetty",
                                            text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                                            replies: [
                                              {
                                                name: "Prateek Shetty",
                                                text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                                                replies: [
                                                  {
                                                    name: "Prateek Shetty",
                                                    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                                                    replies: [],
                                                  },
                                                ],
                                              },
                                              {
                                                name: "Prateek Shetty",
                                                text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                                                replies: [],
                                              },
                                            ],
                                          },
                                          {
                                            name: "Prateek Shetty",
                                            text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                                            replies: [],
                                          },
                                        ],
                                      },
                                      {
                                        name: "Prateek Shetty",
                                        text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                                        replies: [],
                                      },
                                    ],
                                  },
                                  {
                                    name: "Prateek Shetty",
                                    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                                    replies: [],
                                  },
                                ],
                              },
                              {
                                name: "Prateek Shetty",
                                text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                                replies: [],
                              },
                            ],
                          },
                          {
                            name: "Prateek Shetty",
                            text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                            replies: [],
                          },
                        ],
                      },
                      {
                        name: "Prateek Shetty",
                        text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                        replies: [],
                      },
                    ],
                  },
                  {
                    name: "Prateek Shetty",
                    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                    replies: [],
                  },
                  {
                    name: "Prateek Shetty",
                    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                    replies: [],
                  },
                ],
              },
              {
                name: "Prateek Shetty",
                text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
                replies: [],
              },
            ],
          },
          {
            name: "Prateek Shetty",
            text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
            replies: [],
          },
        ],
      },
      {
        name: "Prateek Shetty",
        text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
        replies: [],
      },
    ],
  },
  {
    name: "Prateek Shetty",
    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
    replies: [],
  },
  {
    name: "Prateek Shetty",
    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
    replies: [],
  },
  {
    name: "Prateek Shetty",
    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
    replies: [],
  },
  {
    name: "Prateek Shetty",
    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
    replies: [],
  },
  {
    name: "Prateek Shetty",
    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
    replies: [],
  },
  {
    name: "Prateek Shetty",
    text: " Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut",
    replies: [],
  },
];
const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex bg-gray-100 p-2 my-2 border-2 border-gray-300">
      <img className="w-8" src="/assets/user-icon.svg" alt="userIcon" />
      <div className="px-2">
        <p>{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ data }) => {
  return data.map((comments, index) => (
    <div key={index}>
      <Comment data={comments} />
      <div className="pl-5 border border-l-black ml-5">
        <CommentsList data={comments.replies} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-4">
      <h1 className="font-semibold text-lg">Comments:</h1>
      <CommentsList data={commentData} />
    </div>
  );
};

export default CommentContainer;
