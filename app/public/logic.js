$(document).ready(() => {
  console.log(friends);
  
  $('#submit').click(() => {
    const userName = $('#userName').val().trim();
    const userPicture = $('#userPicture').val().trim();
    const answerToFirstQuestion = parseInt($('.card1').find(":selected").text(), 10);
    const answerToSecondQuestion = parseInt($('.card2').find(":selected").text(), 10);
    const answerToThirdQuestion = parseInt($('.card3').find(":selected").text(), 10);
    const answerToFourthQuestion = parseInt($('.card4').find(":selected").text(), 10);
    const answerToFifthQuestion = parseInt($('.card5').find(":selected").text(), 10);
    const answerToSixthQuestion = parseInt($('.card6').find(":selected").text(), 10);
    const answerToSeventhQuestion = parseInt($('.card7').find(":selected").text(), 10);
    const answerToEighthQuestion = parseInt($('.card8').find(":selected").text(), 10);
    const answerToNinthQuestion = parseInt($('.card9').find(":selected").text(), 10);
    const answerToTenthQuestion = parseInt($('.card10').find(":selected").text(), 10);
    const url = window.location.origin;
    const newFriend = {
      name: userName,
      photo: userPicture,
      answers: [
        answerToFirstQuestion,
        answerToSecondQuestion,
        answerToThirdQuestion,
        answerToFourthQuestion,
        answerToFifthQuestion,
        answerToSixthQuestion,
        answerToSeventhQuestion,
        answerToEighthQuestion,
        answerToNinthQuestion,
        answerToTenthQuestion
      ]
    }
    friends.push(newFriend);
    // console.log(friends);
    const totalSum = (accumulator, currentValue) => accumulator + currentValue;
    console.log(newFriend.answers.reduce(totalSum));

    $.post(`${url}/api/friends`, newFriend)
      .then((data) => {
        console.log(data);
      })    

    $('#userName').val('');
    $('#userPicture').val('');
    $('.custom-select')[0].options.length = 0
    $('.custom-select')[1].options.length = 0
    $('.custom-select')[2].options.length = 0
    $('.custom-select')[3].options.length = 0
    $('.custom-select')[4].options.length = 0
    $('.custom-select')[5].options.length = 0
    $('.custom-select')[6].options.length = 0
    $('.custom-select')[7].options.length = 0
    $('.custom-select')[8].options.length = 0
    $('.custom-select')[9].options.length = 0
    
      $('#myModal').modal('toggle')

  })
})