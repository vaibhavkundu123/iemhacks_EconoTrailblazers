//this would be the object shape for storing the questions  
 //you can change the questions to your own taste or even add more questions..
const questions = [
    {
        question: "__________ is a specialised branch of accounting that keeps track of a company’s financial transactions.",
        optionA: "Cost accounting",
        optionB: "Management accounting",
        optionC: "Financial Accounting",
        optionD: "Corporate accounting",
        correctOption: "optionC"
    },

    {
        question: "Financial accountancy is governed by ___________",
        optionA: "Local Standards only",
        optionB: "International Standards",
        optionC: "Local as well as International Accounting Standards",
        optionD: "Company’s Internal Top Management only",
        correctOption: "optionC"
    },

    {
        question: "_____ is the scope of financial accounting.",
        optionA: "Collection and processing of data",
        optionB: "Verifying or auditing data",
        optionC: "Publishing data",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "_________ are the basis of the business’s financial accounting.",
        optionA: "Accounting records",
        optionB: "Bookkeeping",
        optionC: "Sales Volume",
        optionD: "Both A & B",
        correctOption: "optionD"
    },

    {
        question: "Which is not a benefit of financial accounting?",
        optionA: "Maintaining systematic records",
        optionB: "Protecting and safeguarding business assets",
        optionC: "Historical in nature",
        optionD: "Facilitates rational decision making",
        correctOption: "optionC"
    },

    {
        question: "Which is not a limitation of financial accounting?",
        optionA: "Inadequate information to fix up the price of products manufactured",
        optionB: "Lack of data for comparison of cost of operation of the firm with other firms in the industry",
        optionC: "The data available is historical in nature",
        optionD: "Complies with the various legal requirements",
        correctOption: "optionD"
    },

    {
        question: "The overriding purpose of financial accounting is to summarize financial activity in business in the ______",
        optionA: "Profit and Loss Statement",
        optionB: "Balance Sheet",
        optionC: "Cash Flow Statement",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "Financial accounting provides accounting information to the ________ though the information is useful for internal purposes also.",
        optionA: "External users",
        optionB: "Internal users",
        optionC: "Company",
        optionD: "Competitors",
        correctOption: "optionA"
    },

    {
        question: "Financial accounting reports to the ________ after the completion of the accounting year.",
        optionA: "Internal management",
        optionB: "External parties",
        optionC: "Media",
        optionD: "Rivals",
        correctOption: "optionB"
    },

    {
        question: "Financial accounting reports include _____",
        optionA: "Profit and Loss Account",
        optionB: "Directors Report",
        optionC: "Balance Sheet and Auditors Report",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "Financial accounting cover overall performance of the _______",
        optionA: "Competitors",
        optionB: "Market",
        optionC: "Company",
        optionD: "Finance department",
        correctOption: "optionC"
    },

    {
        question: "Financial accounting reports lay greater emphasis on the _______",
        optionA: "Objectivity of data",
        optionB: "Flexibility of data",
        optionC: "Relevancy of data",
        optionD: "Subjectivity of data",
        correctOption: "optionA"
    },

    {
        question: "Presentation of of financial accounting reports is mandatory under the provisions of of section 209 (1), 210 (1) and 216, 217 of __________",
        optionA: "The Business Act 1956",
        optionB: "The Companies Act 1956",
        optionC: "The Company Act 1965",
        optionD: "The Company 2016",
        correctOption: "optionB"
    },

    {
        question: "Select the correct answer.",
        optionA: "Financial accounting reports generally govern accepted accounting principles",
        optionB: "Generally accepted accounting principles governing financial accounting reports",
        optionC: "Generally accepted accounting principles does not governing financial accounting reports",
        optionD: "There is no relation between Generally accepted accounting principles and financial accounting reports",
        correctOption: "optionB"
    },

    {
        question: "Financial accounting statements are subject to ______",
        optionA: "Cost audit",
        optionB: "Forensic audit",
        optionC: "Statutory audit",
        optionD: "Non statutory audit",
        correctOption: "optionC"
    },

    {
        question: "The annual reports are to be prepared and published for circulation among the external end users such as __________",
        optionA: "Company, competitors, contributors and colleagues",
        optionB: "Company, competitors, contributors and colleagues",
        optionC: "Government, competitors, owners and top management",
        optionD: "Shareholders, Investors, Bankers, Debenture holders and Creditors",
        correctOption: "optionD"
    },

    {
        question: "____________ is a structured representation of the financial performance and financial position of a business and changes over a period of time.",
        optionA: "Profit and loss account",
        optionB: "Financial statement",
        optionC: "Balance sheet",
        optionD: "Internal audit",
        correctOption: "optionB"
    },

    {
        question: "________ are the components of financial statements.",
        optionA: "Profit and Loss account and Balance sheet",
        optionB: "Cash flow and Fund flow statement",
        optionC: "Notes and Schedules",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: "_______ explain the financial position of the reporting entity at the end of the accounting period.",
        optionA: "Balance sheet",
        optionB: "Income statement",
        optionC: "Ledger",
        optionD: "Notes & schedules",
        correctOption: "optionA"
    },

    {
        question: "_______ helps to find out the profit made on loss sustained in a particular accounting period through transactions and events.",
        optionA: "Income statement",
        optionB: "Profit and loss account",
        optionC: "Trading account",
        optionD: "None of the above",
        correctOption: "optionB"
    },

    {
        question: "______ is not a primary source of long-term debt financing.",
        optionA: "Accounts payable",
        optionB: "Notes payable",
        optionC: "Leases",
        optionD: "Bonds",
        correctOption: "optionA"
    },

    {
        question: "Cash flow is also known as _____",
        optionA: "Balance sheet flow",
        optionB: "Profit and loss account",
        optionC: "Fund flow statement",
        optionD: "Notes and schedules",
        correctOption: "optionC"
    },

    {
        question: "______ is used to analyse the pattern of movement or activity during the period to identify the way the enterprise has generated cash and the way they have been used in an accounting period.",
        optionA: "Balance sheet",
        optionB: "Cash flow",
        optionC: "Profit & Loss account",
        optionD: "Income statement",
        correctOption: "optionB"
    },

    {
        question: "Notes and schedules is used to present supplementary information explaining different items of financial statements.",
        optionA: "Balance sheet flow",
        optionB: "Profit and loss account",
        optionC: "Fund flow statement",
        optionD: "Notes and schedules",
        correctOption: "optionD"
    },

    {
        question: "______ is a written evidence in support of a business transaction.",
        optionA: "Ledger",
        optionB: "Voucher",
        optionC: "Ledger Posting",
        optionD: "Journal",
        correctOption: "optionB"
    },

    {
        question: "Notes and schedules include disclosures about the risk and uncertainties affecting the enterprise and such items as disclosure of _______",
        optionA: "Accounting Policies Segment reports",
        optionB: "Report of operations in the process of discontinuation",
        optionC: "Both A & B",
        optionD: "None of the above",
        correctOption: "optionC"
    },

    {
        question: "Trademark, Copyrights & Patents are _____ assets.",
        optionA: "Intangible",
        optionB: "Fixed",
        optionC: "Current",
        optionD: "Tangible",
        correctOption: "optionA"
    },

    {
        question: "Capital increases if ______",
        optionA: "Cost increases",
        optionB: "Expenses increases",
        optionC: "Revenue increases",
        optionD: "Interest on capital increases",
        correctOption: "optionC"
    },

    {
        question: "Current assets minus current liabilities is equal to ______",
        optionA: "Losing Capital",
        optionB: "Gaining Capital",
        optionC: "Fixed Capital",
        optionD: "Working Capital",
        correctOption: "optionD"
    },

    {
        question: "A _______ can also be referred to as a tangible asset.",
        optionA: "Liquid Asset",
        optionB: "Fixed Asset",
        optionC: "Current Asset",
        optionD: "Other Asset",
        correctOption: "optionB"
    },

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}