let homeCount = 0;
let guestCount = 0;
let homeScoreEL = document.getElementById("homescore-el")
let guestScoreEL = document.getElementById("guestscore-el")

function newGame()
{
    homeCount=0;
    guestCount=0;
    homeScoreEL.textContent = homeCount;
    guestScoreEL.textContent = guestCount;
}

function addOneHome()
{
    homeCount++;
    homeScoreEL.textContent = homeCount;
}
function addTwoHome()
{
    homeCount += 2
    homeScoreEL.textContent = homeCount;
  
}
function addThreeHome()
{
    homeCount += 3
    homeScoreEL.textContent = homeCount;
}
function addOneGuest()
{
    guestCount++;
    guestScoreEL.textContent = guestCount;
}
function addTwoGuest()
{
    guestCount += 2
    guestScoreEL.textContent = guestCount;
  
}
function addThreeGuest()
{
    guestCount += 3
    guestScoreEL.textContent = guestCount;
}