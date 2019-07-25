$(document).ready(function () {

    // ball y positions
    let ballPositionYSandStrom = 0;
    let ballPositionYFileReputation = 20;
    let ballPositionYMLScore = 40;
    let ballPositionYAttribute = 60;

    let offset = 4;

    // Initialization of parameters
    let textPositionYSandstorm = ballPositionYSandStrom + offset;
    let textPositionYFileReputation = ballPositionYFileReputation + offset;
    let textPositionYMLScore = ballPositionYMLScore + offset;
    let textPositionYAttribute = ballPositionYAttribute + offset;


    // set ball y location
    $('.a1').css('top', ballPositionYSandStrom + '%');
    $('.a2').css('top', ballPositionYFileReputation + '%');
    $('.a3').css('top', ballPositionYMLScore + '%');
    $('.a4').css('top', ballPositionYAttribute + '%');

    // set text for graph
    $('.bar_text').css('left', '30%');

    // set bar text hieght
    $('#bar_text_sandstorm').css('top', textPositionYSandstorm + '%');
    $('#bar_text_file_rep').css('top', textPositionYFileReputation + '%');
    $('#bar_text_ml_score').css('top', textPositionYMLScore + '%');
    $('#bar_text_attribute').css('top', textPositionYAttribute + '%');

    // set vertical bar position //TODO: don't forget the padding on top
    $('.bar').css('top', '0%');

    // calculate the y position of horizontal lines
    let offsetLine = 4;
    let line1Pos = textPositionYSandstorm + offsetLine;
    let line2Pos = textPositionYFileReputation + offsetLine;
    let line3Pos = textPositionYMLScore + offsetLine;
    let line4Pos = textPositionYAttribute + offsetLine;

    // set horizontal lines
    $('#line1').css('top', line1Pos + '%');
    $('#line2').css('top', line2Pos + '%');
    $('#line3').css('top', line3Pos + '%');
    $('#line4').css('top', line4Pos + '%');

    // starting position of the word before the line
    let startPos = 563;

    // calculate number of pixels of words
    let word1Width1 = $('#bar_text_sandstorm').width();
    let word1Width2 = $('#bar_text_file_rep').width();
    let word1Width3 = $('#bar_text_ml_score').width();
    let word1Width4 = $('#bar_text_attribute').width();

    // calculate starting position of the horizontal lines
    let play = 2;
    let leftPos1 = startPos + word1Width1 + play;
    let leftPos2 = startPos + word1Width2 + play;
    let leftPos3 = startPos + word1Width3 + play;
    let leftPos4 = startPos + word1Width4 + play;

    $('#line1').css('left', leftPos1 + 'px');
    $('#line2').css('left', leftPos2 + 'px');
    $('#line3').css('left', leftPos3 + 'px');
    $('#line4').css('left', leftPos4 + 'px');

    const totalLength = 940;

    let width1 = totalLength - leftPos1;
    let width2 = totalLength - leftPos2;
    let width3 = totalLength - leftPos3;
    let width4 = totalLength - leftPos4;
    $('#line1').css('width', width1 + 'px');
    $('#line2').css('width', width2 + 'px');
    $('#line3').css('width', width3 + 'px');
    $('#line4').css('width', width4 + 'px');

})