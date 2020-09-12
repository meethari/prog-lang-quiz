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
            title: "What drink would you prefer to drink in the morning?",
            options: [
                {
                    title: "Black Coffee",
                    result: 2
                }, 
                {
                    title: "Orange Juice",
                    result: 1
                },
                {
                    title: "Water",
                    result: 3
                },
                {
                    title: "Wine",
                    result: 0
                }
            ]
        },
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
        }
    ],
    results: [
        {
            title: 'JavaScript',
            img: '',
            description: 'You\'re a nice easy going person like JavaScript'
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