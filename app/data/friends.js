// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendsArray = [
  {
    name: "Gabe Maughan",
    photo: "https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-1/p148x148/13590251_315346415519744_8574128929423215135_n.jpg?_nc_cat=0&oh=c3db15bc7864913df9ddac14c5e3f00c&oe=5B6C34D0",
    scores: [3, 3, 5, 2, 5, 2, 3, 5, 1, 5]
  },
  {
  	name: "Shaggy Doo",
    photo: "https://www.wbkidsgo.com/Portals/3/Content/Hero/HeroScoobyShaggy/Source/Default/WB_SD_HeroImage_ScoobyShaggy_v1.png",
    scores: [2, 2, 4, 5, 2, 1, 1, 1, 5, 3]
  }
];


// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendsArray;
