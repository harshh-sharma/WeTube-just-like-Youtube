 export default  function randomString(){
    return randomMessage[Math.floor(Math.random()*randomMessage.length)];
}
const randomMessage = [
    'I bet most serial killers play the drums',
    'Curling is the best sport','you do to your ',
     ' it targeted online advertising', 
     'This is a true fact', 'I never had a fear of heights until', 'I fell off a roofI','literally translates', 'BaloobyIf the word kerning', 'It kind of looks like learning',
     'I bet most serial killers',
    'Curling is the best sport','you do to your hairRumour ',
     ' it targeted online advertising', 
     'This is a true fact', 'I never had a fear of heights', 'I fell off a roofI','literally translates', 'BaloobyIf the word kerning', 'It kind of looks like learning'
]

const nameList = ['Denver Dunn',
    'Dawson',
    'Zainab',
    'Love',
    'Jerry',
    'Artemis',
    'Alexis',
    'Kimber',
    'Parker', 'Conrad',
    'Bexley','Pham',
    'Russell' ,'Lowery',
    'Estelle','Ortega',
    'Kobe' ,'Frost',
    'Paula' ,'Bravo',
    'Genesis','Frank',
    'Zai',
    'Aless',
    'A',
    'Kall'
]
export function randomNameGenerator(){
    return nameList[Math.floor(Math.random()*nameList.length)];
}

export function randomImageGenerator(){
    return randomImages[Math.floor(Math.random()*randomImages.length)];
}

const randomImages = [
    'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/837358/pexels-photo-837358.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/307847/pexels-photo-307847.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1822608/pexels-photo-1822608.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1417255/pexels-photo-1417255.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/34761/old-people-couple-together-connected.jpg?auto=compress&cs=tinysrgb&w=600'

]