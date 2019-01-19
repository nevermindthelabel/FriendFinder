// const modalLogic = require('../routing/apiRoutes')

$(document).ready(() => {

  $('#submit').click(() => {
    const userName = $('#userName').val().trim();
    const userPicture = $('#userPicture').val().trim();
    const answerToFirstQuestion = ($('.card1').find(":selected").val());
    const answerToSecondQuestion = ($('.card2').find(":selected").val());
    const answerToThirdQuestion = ($('.card3').find(":selected").val());
    const answerToFourthQuestion = ($('.card4').find(":selected").val());
    const answerToFifthQuestion = ($('.card5').find(":selected").val());
    const answerToSixthQuestion = ($('.card6').find(":selected").val());
    const answerToSeventhQuestion = ($('.card7').find(":selected").val());
    const answerToEighthQuestion = ($('.card8').find(":selected").val());
    const answerToNinthQuestion = ($('.card9').find(":selected").val());
    const answerToTenthQuestion = ($('.card10').find(":selected").val());
    const url = window.location.origin;

    const newFriend = {
      name: userName,
      photo: userPicture,
      scores: [
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

    $.post(`${url}/api/friends`, newFriend)
      .then(() => {
      })

    $('#userName').val('');
    $('#userPicture').val('');
    $('.custom-select').prop('selectedIndex', 0)
    $('.custom-select').prop('selectedIndex', 0)
    $('.custom-select').prop('selectedIndex', 0)
    $('.custom-select').prop('selectedIndex', 0)
    $('.custom-select').prop('selectedIndex', 0)
    $('.custom-select').prop('selectedIndex', 0)
    $('.custom-select').prop('selectedIndex', 0)
    $('.custom-select').prop('selectedIndex', 0)
    $('.custom-select').prop('selectedIndex', 0)
    $('.custom-select').prop('selectedIndex', 0)

    $('#myModal').modal()
    $('#myModal').attr('src', 'https://photos.google.com/photo/AF1QipMF_yX-FJOZbNCX1TJNkVO5-HWOFrGhem3SH6KK')

  })
})
// module.exports = modal;