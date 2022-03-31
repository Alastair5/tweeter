/* eslint-disable no-undef */

// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ];

const createTweetElement = function(tweetData) {
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
          <p>${tweetData.content.text}</p>
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
    // console.log($tweet);
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
    const tweetInput = $(this).serialize();
    $.post("/tweets", tweetInput);
    // console.log(tweetInput);
  });
});

