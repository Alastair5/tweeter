/* eslint-disable no-undef */

const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function(tweetData) {
  $("#empty").hide();
  $("#exceeds").hide();
  let $tweet = `
    <article class="tweets">
        <header class="tweets-header">
          <div class="avatar-wrapper">
            <img class="user-avatar" src="${tweetData.user.avatars}"></img>
            <label class="user-name">${tweetData.user.name}</label>
          </div>
          <div>
            <label class="user-handle">${tweetData.user.handle}</label>
          </div>
        </header>
        <div class="tweets-body">
          <p>${escape(tweetData.content.text)}</p>
        </div>
        <footer class="tweets-footer">
          <div class="date">
            <p>${timeago.format(tweetData.created_at)}</p>
          </div>
          <div class="icons">
            <i class="fa fa-flag"></i>
            <i class="fa fa-retweet"></i>
            <i class="fa fa-heart"></i>
          </div>
        </footer>
      </article>`;
  return $tweet;
};

const renderTweets = function(data) {
  for (let tweet of data) {
    const $tweet = createTweetElement(tweet);
    $('#tweets-container').prepend($tweet);
  }
};


$(document).ready(() => {
  const loadTweets = function() {
    $.ajax({type: "GET", url: "/tweets"})
      .then(function(data) {
        renderTweets(data);
      });
  };
  loadTweets();

  $(".textarea").submit(function(event) {
    event.preventDefault();
    $("#empty").slideUp();
    $("#exceeds").slideUp();
    const tweetInput = $(this).serialize();
    const tweetLimit = $("#tweet-text").val().length;
    if (tweetLimit <= 0) {
      return $("#empty").slideDown();
    } else if (tweetLimit > 140) {
      return $("#exceeds").slideDown();
    } else {
      $.post("/tweets", tweetInput);
      loadTweets();
      return;
    }
  });
});

