document.addEventListener("DOMContentLoaded", () => {
  const postForm = document.getElementById("post-form");
  const postsContainer = document.getElementById("posts-container");
  let posts = [];

  // Add a new post
  postForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const content = document.getElementById("post-content").value.trim();
    const attachment = document.getElementById("post-attachment").files[0];

    if (!content) return alert("Post content cannot be empty.");

    const post = {
      id: Date.now(),
      content,
      likes: 0,
      comments: [],
    };

    if (attachment) {
      const reader = new FileReader();
      reader.onload = () => {
        post.attachment = reader.result;
        posts.unshift(post);
        renderPosts();
        postForm.reset();
      };
      reader.readAsDataURL(attachment);
    } else {
      posts.unshift(post);
      renderPosts();
      postForm.reset();
    }
  });

  // Render posts
  const renderPosts = () => {
    postsContainer.innerHTML = posts
      .map(
        (post) => `
            <div class="post">
                <p>${post.content}</p>
                ${
                  post.attachment
                    ? `<img src="${post.attachment}" alt="Post attachment">`
                    : ""
                }
                <div class="post-actions">
                    <button onclick="likePost(${post.id})">
                        👍 Like (${post.likes})
                    </button>
                    <button onclick="toggleComments(${post.id})">
                        💬 Comment
                    </button>
                </div>
                <div id="comments-${post.id}" class="comment-section hidden">
                    <textarea placeholder="Add a comment"></textarea>
                    <button onclick="addComment(${
                      post.id
                    })">Post Comment</button>
                    <ul>
                        ${post.comments
                          .map((comment) => `<li>${comment}</li>`)
                          .join("")}
                    </ul>
                </div>
            </div>
        `
      )
      .join("");
  };

  // Like a post
  window.likePost = (postId) => {
    const post = posts.find((p) => p.id === postId);
    if (post) {
      post.likes += 1;
      renderPosts();
    }
  };

  // Toggle comment section
  window.toggleComments = (postId) => {
    const commentSection = document.getElementById(`comments-${postId}`);
    commentSection.classList.toggle("hidden");
  };

  // Add a comment
  window.addComment = (postId) => {
    const commentSection = document.getElementById(`comments-${postId}`);
    const textarea = commentSection.querySelector("textarea");
    const comment = textarea.value.trim();

    if (comment) {
      const post = posts.find((p) => p.id === postId);
      post.comments.push(comment);
      renderPosts();
    }
  };
});
