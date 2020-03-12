
const entryPoint = document.querySelector('.cards');
const followersArray = ['tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell', 'phillybenh'];

followersArray.forEach(user => {
  let followerUrl = `https://api.github.com/users/${user}`;
  console.log(followerUrl);
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
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/
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


/* List of LS Instructors Github username's:
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
