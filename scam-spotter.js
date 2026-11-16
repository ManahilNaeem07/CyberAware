
const emails = [

    {
        sender: "security-alert@bankexample.com",
        subject: "URGENT: Your Account Will Be Suspended",
        date: "15 November 2026",

        body: `Dear Customer,

Your bank account will be suspended within 24 hours.

Click the link below immediately to verify your password and prevent your account from being blocked.

Verify Your Account Now

Thank you,
Security Department`,

        suspicious: true,

        reasons: [
            "The email creates urgency by threatening to suspend the account.",
            "It asks the user to verify their password.",
            "It encourages the user to click a link immediately.",
            "The sender has not been verified as an official bank address."
        ]
    },

    {
        sender: "newsletter@university.edu",
        subject: "Upcoming University Events",
        date: "14 November 2026",

        body: `Hello Students,

We are pleased to announce our upcoming university events.

The annual technology exhibition will take place next week in the main auditorium.

Please visit the university noticeboard for further details.

Best Regards,
University Administration`,

        suspicious: false,

        reasons: [
            "The email provides an ordinary university announcement.",
            "It does not ask for passwords or financial information.",
            "It does not pressure the reader to act immediately.",
            "The sender appears consistent with the stated organisation."
        ]
    },

    {
        sender: "winner@free-rewards-example.com",
        subject: "Congratulations! You Have Won a Prize!",
        date: "13 November 2026",

        body: `CONGRATULATIONS!

You have been selected as the lucky winner of a FREE prize worth $5,000!

You did not enter any competition, but you have been specially selected.

Click below to claim your reward before it expires!

CLAIM YOUR PRIZE NOW!

Regards,
Prize Distribution Team`,

        suspicious: true,

        reasons: [
            "The email announces an unexpected prize.",
            "It promises a valuable reward without explaining how the winner was selected.",
            "It pressures the reader to claim the prize quickly.",
            "The sender is not identified as a trustworthy organisation."
        ]
    },

    {
        sender: "library@university.edu",
        subject: "Your Library Book Is Due Soon",
        date: "12 November 2026",

        body: `Dear Student,

This is a reminder that your borrowed library book is due on 18 November.

Please return the book to the university library before the due date.

Thank you for using our library services.

Regards,
University Library`,

        suspicious: false,

        reasons: [
            "The email gives a routine library reminder.",
            "It does not request sensitive information or money.",
            "It provides a clear and ordinary purpose.",
            "The sender appears consistent with the university library."
        ]
    },

    {
        sender: "support@delivery-example.com",
        subject: "Your Package Could Not Be Delivered",
        date: "11 November 2026",

        body: `Dear Customer,

We were unable to deliver your package.

Your parcel is currently on hold.

Pay a small redelivery fee immediately to receive your package.

Failure to pay may result in your parcel being returned.

Delivery Support Team`,

        suspicious: true,

        reasons: [
            "The email requests an unexpected payment.",
            "It threatens to return the parcel to create pressure.",
            "It does not provide reliable delivery details.",
            "The sender should be checked against the official delivery company."
        ]
    },

    {
        sender: "events@university.edu",
        subject: "Registration Confirmation",
        date: "10 November 2026",

        body: `Hello,

Your registration for the Cybersecurity Awareness Workshop has been confirmed.

Date: 20 November
Time: 10:00 AM
Venue: Main Lecture Hall

We look forward to seeing you!

Event Organising Team`,

        suspicious: false,

        reasons: [
            "The email provides a normal registration confirmation.",
            "It contains relevant event details.",
            "It does not request sensitive information or unexpected payment.",
            "The sender appears consistent with the university event."
        ]
    },

    {
        sender: "it-helpdesk@unknown-mail.com",
        subject: "Your Password Has Expired",
        date: "9 November 2026",

        body: `Dear User,

Your password has expired.

To avoid losing access to your university account, reply to this email with your current password.

Our IT team will update your account shortly.

IT Helpdesk`,

        suspicious: true,

        reasons: [
            "The email asks the user to share their current password.",
            "Legitimate IT support should never ask users to reveal passwords.",
            "It threatens loss of account access.",
            "The sender address does not match a verified university domain."
        ]
    },

    {
        sender: "results@university.edu",
        subject: "Examination Timetable Released",
        date: "8 November 2026",

        body: `Dear Students,

The examination timetable for the upcoming semester is now available.

Students can check the official university student portal for their examination dates.

Please contact the examination office if you have any questions.

Regards,
Examination Department`,

        suspicious: false,

        reasons: [
            "The email shares a routine academic announcement.",
            "It directs students to the university portal.",
            "It does not request passwords or payments through an email link.",
            "The sender appears consistent with the university."
        ]
    },

    {
        sender: "prize@unknown-sender.com",
        subject: "Your Account Has Won a Gift Card!",
        date: "7 November 2026",

        body: `HELLO!

Your email address has been randomly selected for a FREE gift card!

To receive your gift card, send us your full name, phone number and bank details.

HURRY! This offer expires today!

Congratulations,
Rewards Team`,

        suspicious: true,

        reasons: [
            "The email announces an unexpected gift card.",
            "It requests personal and financial information.",
            "It uses urgency to pressure the reader.",
            "The sender is not identified as a trustworthy organisation."
        ]
    },

    {
        sender: "admin@university.edu",
        subject: "Campus Maintenance Notice",
        date: "6 November 2026",

        body: `Dear Students,

Please be informed that maintenance work will take place in the university computer laboratory on Monday.

The laboratory will remain unavailable during the maintenance period.

Regular classes will resume according to the usual timetable.

Thank you for your cooperation.

University Administration`,

        suspicious: false,

        reasons: [
            "The email communicates a normal campus announcement.",
            "It gives a clear explanation of the maintenance work.",
            "It does not request personal information or payment.",
            "The sender appears consistent with the university."
        ]
    }

];


const sender = document.getElementById("sender");
const subject = document.getElementById("subject");
const date = document.getElementById("date");
const emailBody = document.getElementById("emailBody");

const questionNumber = document.getElementById("questionNumber");
const scoreDisplay = document.getElementById("score");
const progress = document.getElementById("progress");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const answerSection = document.getElementById("answerSection");

const feedback = document.getElementById("feedback");
const feedbackTitle = document.getElementById("feedbackTitle");
const feedbackDescription = document.getElementById("feedbackDescription");
const reasonList = document.getElementById("reasonList");

const nextButton = document.getElementById("nextButton");

const finalResult = document.getElementById("finalResult");
const finalScore = document.getElementById("finalScore");
const finalMessage = document.getElementById("finalMessage");
const restartButton = document.getElementById("restartButton");



let currentQuestion = 0;
let score = 0;
let answered = false;



function showEmail() {

    let email = emails[currentQuestion];

    sender.textContent = email.sender;
    subject.textContent = email.subject;
    date.textContent = email.date;
    emailBody.textContent = email.body;

    questionNumber.textContent =
        "Email " + (currentQuestion + 1) + " of " + emails.length;

    scoreDisplay.textContent = "Score: " + score;

    progress.style.width =
        ((currentQuestion + 1) / emails.length * 100) + "%";

    answerSection.style.display = "block";
    feedback.style.display = "none";
    finalResult.style.display = "none";

    yesButton.disabled = false;
    noButton.disabled = false;

    answered = false;

}


function checkAnswer(userAnswer) {

    if (answered === true) {
        return;
    }

    answered = true;

    let email = emails[currentQuestion];

    yesButton.disabled = true;
    noButton.disabled = true;

    if (userAnswer === email.suspicious) {

        score++;

        feedbackTitle.textContent = "Correct Answer!";
        feedbackTitle.style.color = "#16834A";

        feedbackDescription.textContent =
            "Well done! You identified this email correctly.";

    }

    else {

        feedbackTitle.textContent = "Not Quite!";
        feedbackTitle.style.color = "#D93025";

        feedbackDescription.textContent =
            "That was not the correct answer. Let's understand why.";

    }


    // Display the reasons for the answer

    reasonList.innerHTML = "";

    for (let i = 0; i < email.reasons.length; i++) {

        let item = document.createElement("li");

        item.textContent = email.reasons[i];

        reasonList.appendChild(item);

    }

    scoreDisplay.textContent = "Score: " + score;

    answerSection.style.display = "none";
    feedback.style.display = "block";

    if (currentQuestion === emails.length - 1) {

        nextButton.textContent = "View Final Score";

    }

    else {

        nextButton.textContent = "Next Email";

    }

}

function nextEmail() {

    currentQuestion++;

    if (currentQuestion < emails.length) {

        showEmail();

    }

    else {

        showFinalResult();

    }

}

function showFinalResult() {

    document.querySelector(".email-card").style.display = "none";
    document.querySelector(".quiz-top").style.display = "none";
    document.querySelector(".progress-bar").style.display = "none";
    document.querySelector(".quiz-container > h2").style.display = "none";

    feedback.style.display = "none";
    finalResult.style.display = "block";

    finalScore.textContent =
        "You scored " + score + " out of " + emails.length + "!";

    if (score === 10) {

        finalMessage.textContent =
            "Excellent! You spotted every email correctly.";

    }

    else if (score >= 7) {

        finalMessage.textContent =
            "Great work! You have a good understanding of suspicious emails.";

    }

    else if (score >= 4) {

        finalMessage.textContent =
            "Good effort! Keep practising and learning to recognise warning signs.";

    }

    else {

        finalMessage.textContent =
            "Keep learning! Recognising suspicious emails takes practice.";

    }

}


function restartQuiz() {

    currentQuestion = 0;
    score = 0;

    document.querySelector(".email-card").style.display = "block";
    document.querySelector(".quiz-top").style.display = "flex";
    document.querySelector(".progress-bar").style.display = "block";
    document.querySelector(".quiz-container > h2").style.display = "block";

    showEmail();

}


yesButton.addEventListener("click", function() {

    checkAnswer(true);

});

noButton.addEventListener("click", function() {

    checkAnswer(false);

});

nextButton.addEventListener("click", function() {

    nextEmail();

});

restartButton.addEventListener("click", function() {

    restartQuiz();

});


showEmail();
