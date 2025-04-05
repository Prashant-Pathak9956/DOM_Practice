var arr = [
  {
    team: "CSK",
    fullName: "Chennai Super Kings",
    winningYear: "2010, 2011, 2018, 2021, 2023",
    Currentcaptain: "Ruturaj Gaikwad",
    coach: "Stephen Fleming",
    owner: "Chennai Super Kings Cricket Limited",
    venue: "M. A. Chidambaram Stadium",
    primary: 'yellow',
    secondary: 'blue',
    logo: 'https://i.pinimg.com/736x/f9/94/d6/f994d6885836a73ae2a03c2f7f1529ca.jpg'
  },
  {
    team: "MI",
    fullName: "Mumbai Indians",
    winningYear: "2013, 2015, 2017, 2019, 2020",
    Currentcaptain: "Hardik Pandya",
    coach: "Mahela Jayawardene",
    owner: "Indiawin Sports Pvt. Ltd",
    venue: "Wankhede Stadium",
     primary: 'royalblue',
    secondary: '#fff',
    logo: 'https://i.pinimg.com/474x/e0/bd/15/e0bd1524813e208221ea476ac3bf7d3c.jpg'
  },
  {
    team: "RCB",
    fullName: "Royal Challengers Bangalore",
    winningYear: "Never won",
    Currentcaptain: "Rajat Patidar",
    coach: "Andy Flower",
    owner: "Royal Challengers Sports Private Ltd",
    venue: "M. Chinnaswamy Stadium",
     primary: 'red',
    secondary: 'black',
    logo: 'https://i.pinimg.com/236x/0a/e4/43/0ae443cb446230b139dba7f221367e58.jpg'
  },
  {
    team: "KKR",
    fullName: "Kolkata Knight Riders",
    winningYear: "2012, 2014, 2024",
    Currentcaptain: "Ajinkya Rahane",
    coach: "Chandrakant Pandit",
    owner: "Knight Riders Sports Private Limited",
    venue: "Eden Gardens",
     primary: 'purple',
    secondary: '#fff',
    logo: 'https://i.pinimg.com/236x/ff/a6/9a/ffa69abf3e6bc89526e28a5cf5e2b502.jpg'
  },
  {
    team: "SRH",
    fullName: "Sunrisers Hyderabad",
    winningYear: "2016",
    Currentcaptain: "Pat Cummins",
    coach: "Daniel Vettori",
    owner: "Sun TV Network Limited",
    venue: "Rajiv Gandhi International Cricket Stadium",
     primary: '#E6704A',
    secondary: 'black',
    logo: 'https://i.pinimg.com/236x/c7/b4/14/c7b4147d5760a9914f4b89ebee79b627.jpg'
  },
  {
    team: "DC",
    fullName: "Delhi Capitals",
    winningYear: "Never Won",
    Currentcaptain: "Axar Patel",
    coach: "Hemang Badani",
    owner: "JSW GMR Cricket Pvt Ltd",
    venue: "Arun Jaitley Stadium",
     primary: 'red',
    secondary: 'blue',
    logo: 'https://i.pinimg.com/236x/45/f7/ef/45f7eff566bac0a780c347086907c96b.jpg'
  },
  {
    team: "RR",
    fullName: "Rajasthan Royals",
    winningYear: "2008",
    Currentcaptain: "Sanju Samson",
    coach: "Rahul Dravid",
    owner: "Royal Multisport Private Limited",
    venue: "Sawai Mansingh Stadium",
     primary: '#FF589E',
    secondary: 'blue',
    logo: 'https://i.pinimg.com/236x/b3/1b/d1/b31bd110e418d1de5b925cca9381ee01.jpg'
  },
  {
    team: "PBKS",
    fullName: "Punjab Kings",
    winningYear: "2010, 2011, 2018, 2021, 2023",
    Currentcaptain: "Shreyas Iyer",
    coach: "Ricky Ponting",
    owner: "K.P.H. Dream Cricket Private Limited",
    venue: "PCA New Stadium, Mullanpur",
     primary: 'red',
    secondary: '#fff',
    logo:'https://i.pinimg.com/236x/6c/cc/83/6ccc837e73ac213972a3608eb20f124b.jpg'
  },
  {
    team: "GT",
    fullName: "Gujarat Titans",
    winningYear: "2022",
    Currentcaptain: "Shubman Gill",
    coach: "Ashish Nehra",
    owner: "Irelia Sports India Private Limited",
    venue: "Narendra Modi Stadium",
     primary: '#384D7B',
    secondary: 'white',
    logo: 'https://images.seeklogo.com/logo-png/43/1/gujarat-titans-ipl-logo-png_seeklogo-431226.png?v=1954876733432894384'
  },
  {
    team: "LSG",
    fullName: "Lucknow Super Giants",
    winningYear: "Never Won",
    Currentcaptain: "Rishabh Pant",
    coach: "Justin Langer",
    owner: "RPSG Sports Private Limited",
    venue: "BRSABV Ekana Cricket Stadium",
     primary: 'royalblue',
    secondary: 'red',
    logo: 'https://i.pinimg.com/236x/c2/da/a1/c2daa1e3dc8b351b102e0330afcdd9e6.jpg'
  },
];
var h2 = document.querySelector("h2");
var btn = document.querySelector("button");
var details = document.querySelector('.details')
var iplImg = document.querySelector('#iplImg') 

btn.addEventListener("click", function () {
  var num = Math.floor(Math.random() * arr.length);
  var teamData = arr[num];
  h2.innerHTML = teamData.team
  h2.style.backgroundColor = arr[num].primary
  h2.style.color = arr[num].secondary
  iplImg.src = teamData.logo
//   details.style.color = '#fff'

  details.innerHTML = `
  <strong>Full Name:</strong> ${teamData.fullName} <br>
                <strong>Winning Years:</strong> ${teamData.winningYear} <br>
                <strong>Current Captain:</strong> ${teamData.Currentcaptain} <br>
                <strong>Coach:</strong> ${teamData.coach} <br>
                <strong>Owner:</strong> ${teamData.owner} <br>
                <strong>Venue:</strong> ${teamData.venue}`
});
