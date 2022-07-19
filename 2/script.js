const container = document.getElementById("posts");

const postsRequest = new XMLHttpRequest();
postsRequest.open("GET", "https://jsonplaceholder.typicode.com/posts"); 
postsRequest.responseType = "json";

postsRequest.send();

postsRequest.onload = () => {
  const { response } = postsRequest;
  renderPosts(response, container);
};

const handleCommentsButtonClick = (event, post) => {
  const { id } = post;
  const commentsContainer = document 
    .getElementById(post.id)
    .querySelector(".comments-container");
  
  if (post.hasAttribute("data-comments-shown")) {
    commentsContainer.innerHTML = "";
    post.removeAttribute("data-comments-shown");
    event.target.innerText = "Show comments";
  } else {
    post.setAttribute("data-comments-shown", "");
    const commentsRequest = new XMLHttpRequest();
    commentsRequest.open(
      "GET",
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );
    commentsRequest.responseType = "json";
    commentsRequest.send();

    commentsRequest.onload = () => {
      const { response } = commentsRequest;

      renderComments(response, commentsContainer);
      event.target.innerText = "hide comments";
    };
  }
}; 

const renderComments = (commentsList, commentsContainer) => {
  const comments = commentsList.map(({ body }) => {
    const comment = document.createElement("p");
    comment.classList.add("comment");
    comment.innerText = body;
    return comment;
  });

  commentsContainer.append(...comments);
};

const renderPosts = (postsList, container) => {
  const posts = postsList.map(({ id, title, body }) => {
    const postContainer = document.createElement("div");
    postContainer.id = id;
    postContainer.classList.add("post");

    const titleElem = document.createElement("h3");
    const bodyElem = document.createElement("p");
    const commentsElem = document.createElement("div");
    const detailsBtn = document.createElement("button");

    commentsElem.classList.add("comments-container");
    detailsBtn.classList.add("btn")

    titleElem.innerText = title;
    bodyElem.innerText = body;
    detailsBtn.innerText = "Show comments";
    
    detailsBtn.addEventListener("click", (event) =>
      handleCommentsButtonClick(event, postContainer)
    );
    postContainer.append(titleElem, bodyElem, commentsElem, detailsBtn);

    return postContainer;
  });

  container.append(...posts);
};