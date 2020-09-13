/*
Data model:
const quizData = {
    questions: [question],
    results: [result]
}

question = {
    title: String,
    options: [option]
}

option = {
    title: String,
    result: Number, corresponding to index of the result (0 - n-1)
}

result = {
    title: String
    img: String, location to find the image to be rendered,
    description: String
}

0 - JS
1 - Python
2 - C
3  - Java

*/

const quizData = {
    questions: [
        {
            title: "You're at a party where you don't know anybody. What do you do?",
            options: [
                {
                    title: "I go out there, and make some new friends. Before you know it, I'm the life of the party!",
                    result: 3
                }, 
                {
                    title: "I leave.",
                    result: 2
                },
                {
                    title: "I just chill, listening to the music.",
                    result: 1
                },
                {
                    title: "I make small talk with the people around me.",
                    result: 0
                }
            ]
        },
        {
            title: "What's your go-to morning drink?",
            options: [
                {
                    title: "Coffee",
                    result: 3
                }, 
                {
                    title: "Tea",
                    result: 2
                },
                {
                    title: "Soylent",
                    result: 1
                },
                {
                    title: "A Pumpkin Spice Latte, just the way I like it.",
                    result: 0
                }
            ]
        },
        {
            title: "What did you think about math in high school?",
            options: [
                {
                    title: "Loved it! I'm really good at it!",
                    result: 2
                }, 
                {
                    title: "I like it, but I prefer doing my arithmetic on a calculator!",
                    result: 1
                },
                {
                    title: "I'm alright at it. I get by.",
                    result: 3
                },
                {
                    title: "I'm not a fan.",
                    result: 0
                }
            ]
        },
        {
            title: "You're working on a group project, and it's the day before the deadline. Most of the work is done, but it's all disorganized and doesn't look visually appealing. What do you do?",
            options: [
                {
                    title: "Design - what's that?",
                    result: 2
                },
                {
                    title: "Call up your teammates and say 'I know you've all worked hard, but we need to put on the finishing touches'!",
                    result: 3
                },
                {
                    title: "Put stuff together in a neat, if not plain design, and call it a day.",
                    result: 1
                },
                {
                    title: "Pull out the crafts box and start decorating. It's gotta look FAABULOUS!",
                    result: 0
                },
                
            ]
        },
        {
            title: "You're relaxing after a long hard day of online classes, watching whatever people are watching these days on Netflix. You just realised that you forgot to turn in an assignment. What do you do?",
            options: [
                {
                    title: "Ehh it's fine, I'll deal with it",
                    result: 0
                }, 
                {
                    title: "PANIC!",
                    result: 2
                }
            ]
        },
        {
            title: "What are you more likely to be found doing in a boring class?",
            options: [
                {
                    title: "Doodling a picture of the professor",
                    result: 0
                }, 
                {
                    title: "Calculating how much you can get on the next midterm and still save your grade.",
                    result: 1
                }
            ]
        },
        {
            title: "You have a lot of books at home. You really need a bookshelf. What do you do?",
            options: [
                {
                    title: "Time to bust out the old toolbox. Gotta build it!",
                    result: 2
                }, 
                {
                    title: "Visit Ikea and buy one.",
                    result: 3
                }
            ]
        },
        {
            title: "It's your friend's birthday, and you're writing a post. How does it look?",
            options: [
                {
                    title: "Super long. Sooo many memories!",
                    result: 3
                }, 
                {
                    title: "'Happy birthday dude!' - short and simple.",
                    result: 1
                }
            ]
        }
    ],
    results: [
        {
            title: 'JavaScript',
            img: '/img/js.png',
            description: "You're an easy going, no frills person. You like to deal with life as it happens, and are willing to tackle problems in any shape or form. Just like JavaScript, which doesn't ask you what type your variables are. It just goes with the flow. You're also not afraid make mistakes, as you know making mistakes is a great way to learn. JavaScript is also like that - it provides very little type checking."
        },
        {
            title: 'Python',
            img: '',
            description: 'You like keeping things sweet and simple. Like Python'
        },
        {
            title: 'C',
            img: '',
            description: 'You\'re an old school type. You\'re obsessed with the details. You believe nothing beats a hard day of work. Like C. You like to cut the bullshit.'
        },
        {
            title: 'Java',
            img: '',
            description: 'You\'re the reliable type. Maybe a bit boastful, just like Java which likes reminding people that it runs on 3bn devices. You\'re easy to get along with, just like Java which plays nice with every platform.'
        }
    ]
}

export default quizData