

const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
};

const createTweetElement = function(tweetData) {
  let $tweet = $(`
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
            <p>Date</p>
          </div>
          <div class="icons">
            <i class="fa fa-flag"></i>
            <i class="fa fa-retweet"></i>
            <i class="fa fa-heart"></i>
          </div>
        </footer>
      </article>`);
  return $tweet;
};



const $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like

$(document).ready(() => {

  $('#tweets-container').append($tweet);
});

