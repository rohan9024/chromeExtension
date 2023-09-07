function calculate_user_engagement(user) {
    const followers = user['edge_followed_by']['count'];
    const path_to_edges = user['edge_owner_to_timeline_media']['edges'];

    var total_likes = 0;
    var total_comments = 0;
    var avg_engagement = 0;
    var i;

    var total_engagement = 0;

    for (i = 0; i < path_to_edges.length; i++) {
        var comments = path_to_edges[i]['node']['edge_media_to_comment']['count'];
        var likes = path_to_edges[i]['node']['edge_liked_by']['count'];
        var engagement = ((likes + comments) / followers * 100)

        total_likes += likes;
        total_comments += comments;
        total_engagement += engagement;

    }
    var total = total_likes + total_comments;


    avg_engagement = total_engagement / path_to_edges.length;
    avg_engagement = avg_engagement.toFixed(2);

    return avg_engagement;
}
function post_per_engagement(user) {

    const followers = user['edge_followed_by']['count'];
    const path_to_edges = user['edge_owner_to_timeline_media']['edges'];

    var total_likes = 0;
    var total_comments = 0;
    var avg_engagement = 0;
    var i;

    var total_engagement = 0;

    for (i = 0; i < path_to_edges.length; i++) {
        let parentPost = document.querySelector('.Nnq7C weEfm');
        let elementPost = document.createElement('h3');
        

        var comments = path_to_edges[i]['node']['edge_media_to_comment']['count'];
        var likes = path_to_edges[i]['node']['edge_liked_by']['count'];
        var engagement = ((likes + comments) / followers * 100)

        console.log(engagement);

        // elementPost.innerHTML = "<h3>Engagement rate: " + rate + "</h3>";
        // elementPost.style.color = 'green';
        // parentPost.insertAfter(element, parentPost.childNodes[i]);


    }

}

const user = window._sharedData["entry_data"].ProfilePage["0"]["graphql"]["user"]

console.log(user);
let parent = document.querySelector('.-vDIg');
let element = document.createElement('h3');
const rate = calculate_user_engagement(user);
console.log(rate);
post_per_engagement(user);

element.innerHTML = "<h3>Engagement rate: " + rate + "</h3>";
element.style.color = 'green';
parent.insertBefore(element, parent.childNodes[0]);

let parentPost = document.querySelector('.Nnq7C weEfm');
// let parentPost = document.querySelector('._9AhH0');
let elementPost = document.createElement('h3');
elementPost.innerHTML = "<h3>Engagement rate: " + rate + "</h3>";
elementPost.style.color = 'green';
parentPost.insertAfter(elementPost, parentPost.childNodes[0]);
