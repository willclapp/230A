

let timeline = [];

let irb = {
    type: 'html-button-response',
    stimulus: '<div class ="irb"><img src="imgs/SUSig_2color_Stree_Stacked_Left.png" alt="Stanford University Logo" class="logo"><p id="legal"><font size="3">We invite you to participate in a research study on language production and comprehension. Your experimenter will ask you to do a linguistic task such as reading sentences or words, naming pictures or describing scenes, making up sentences of your own, or participating in a simple language game. <br><br>There are no risks or benefits of any kind involved in this study. <br><br>You will be paid for your participation at the posted rate.<br><br>If you have read this form and have decided to participate in this experiment, please understand your participation is voluntary and you have the right to withdraw your consent or discontinue participation at anytime without penalty or loss of benefits to which you are otherwise entitled. You have the right to refuse to do particular tasks. Your individual privacy will be maintained in all published and written data resulting from the study. You may print this form for your records.<br><br>CONTACT INFORMATION: If you have any questions, concerns or complaints about this research study, its procedures, risks and benefits, you should contact the Protocol Director Meghan Sumner at (650)-725-9336. If you are not satisfied with how this study is being conducted, or if you have any concerns, complaints, or general questions about the research or your rights as a participant, please contact the Stanford Institutional Review Board (IRB) to speak to someone independent of the research team at (650)-723-2480 or toll free at 1-866-680-2906. You can also write to the Stanford IRB, Stanford University, 3000 El Camino Real, Five Palo Alto Square, 4th Floor, Palo Alto, CA 94306 USA.<br><br>If you agree to participate, please proceed to the study tasks.</font></p></div>',
    choices: ['Continue']
};

timeline.push(irb);





let instructions = {
    type: 'html-keyboard-response',
    stimulus: `<div class="spec_ins"><p>In this experiment, you will hear a sentence and see an image.<br><br>Your job is to decide whether the sentence is true or false, given the image you see on the screen. To do this, place your fingers on the S and K keys. <br><br>If the sentence is TRUE, press the S key.<br><br>If the sentence is FALSE, press the K key.<br><br>A response cannot be made until the audio has played entirely. Once a selection is made, the slide will advance after a brief pause. If no response is made after several seconds, the slide will advance automatically.<br><br>Please press the space bar to begin.</p></div>`,
    choices: ['space']
};


timeline.push(instructions)

let order_key = 0

for (i = 0; i < order.length; i++) {
    order_key = order[i]
    timeline.push(critical_items.find(element => element.code === order_key))
}





// DEMOGRAPHIC SURVEY

let thank_you = {
    type: 'html-keyboard-response',
    stimulus: '<div class="pre-test-container"><p>That\'s it! Thank you for participating.<br><br>Press the space bar to exit.</p></div>'
}


timeline.push(thank_you)


jsPsych.init({
    timeline: timeline,
    show_progress_bar: true,
    on_finish: function () {
        jsPsych.data.displayData('csv');
    }
});
