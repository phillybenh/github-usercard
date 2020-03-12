
const entryPoint = document.querySelector('.cards');

/////// v MVP v ////// 
/*
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'phillybenh'];

followersArray.forEach(user => {
  let followerUrl = `https://api.github.com/users/${user}`;
  // console.log(followerUrl);
  axios
    .get(followerUrl)
    .then(response => {
      console.log(response.data);
      entryPoint.append(gitCard(response.data));
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
});
*/ 
/////// ^ MVP ^ //////

////// vv Stretch vv //////
  axios
    .get('https://api.github.com/users/phillybenh')
    .then(response => {
      // console.log(response.data);
      entryPoint.prepend(gitCard(response.data));
      // console.log(response.data.followers_url);
      axios
      .get(response.data.followers_url)
      .then(response => {
        console.log(response.data);
        response.data.forEach(user => {
          console.log(user.url);
          let userURL = user.url;
          entryPoint.append(gitCard(userURL));
        })
      })
        .catch(error => {
          console.log("The data was not returned", error);
        });
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
////// ^^Stretch ^^ //////

function gitCard(obj) {
  const newCard = document.createElement('div'),
    image = document.createElement('img'),
    infoContainer = document.createElement('div'),
    name = document.createElement('h3'),
    userName = document.createElement('p'),
    location = document.createElement('p'),
    profile = document.createElement('p'),
    profileLink = document.createElement('a'),
    followers = document.createElement('p'),
    following = document.createElement('p'),
    bio = document.createElement('p');

  newCard.classList.add('card');
  name.classList.add('name');
  userName.classList.add('username');

  image.src = obj.avatar_url;
  image.alt = "Person's GitHub Profile Picture";
  name.textContent = obj.name;
  userName.textContent = obj.login;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = 'Profile: ';
  profileLink.textContent = obj.html_url;
  profileLink.href = obj.html_url;
  // console.log(obj.html_url);
  // console.log(profile);
  // console.log(profileLink);
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Following: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;

  newCard.append(image, infoContainer);
  infoContainer.append(name, userName, location, profile, followers, following, bio);
  profile.appendChild(profileLink);

  return newCard;
};



