let url = "https://api.github.com/users/";

let input = document.querySelector("input");
let btn = document.querySelector("button");
let username = document.querySelector("#username");
let profile = document.querySelector("#profile_photo");
let followers = document.querySelector("#follower");
let followings = document.querySelector("#following");
let bio = document.querySelector("#bio");
let repositories = document.querySelector("#repos");

btn.addEventListener("click", async () => {
    let user = input.value;
    let result = await getUser(user);
    console.log(result);
    show(result);
});



function show(result) {
    username.innerHTML = `<a href="${result.html_url}" target='_blank'>@${result.name}</a>`;
    profile.setAttribute("src", result.avatar_url);
    followers.innerText = result.followers;
    followings.innerText = result.following;
    bio.innerText = result.bio;
    repositories.innerText = result.public_repos;
}

async function getUser(user) {
    try {
        let res = await axios.get(url+user);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}



