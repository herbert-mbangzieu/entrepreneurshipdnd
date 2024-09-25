const title = document.querySelector('#title')
const instructions = document.querySelector('#instructions')
const boxes = document.querySelector('#boxes')
const right = document.querySelector('#right')
const left = document.querySelector('#left')
const topics = document.querySelector('#topics')
const button = document.querySelector('#button')

const topicNames = [
    {
        title: 'IB Profile',
        items: [
            {
                text: 'How do you use your experiences to improve?',
                class: "reflective"
            },
            {
                text: 'Are you able to study for a variety of jobs??',
                class: "knowledgeable"
            },
        {
                text: 'How do you approach learning new topics on your own?',
                class: "inquirers"
            },
        {
                text: 'How do you feel about discrimination?',
                class: "principled?"
            },
        {
                text: 'How do you handle situations where you have to deal with different cultural approaches?',
                class: "open"
            },
        {
                text: 'Can you achieve your goals on your own?',
                class: "initiative"
            },
        {
                text: 'Are you ready to invest in a project that you are not sure will succeed?',
                class: "risk"
            },
        {
                text: 'How do you feel when people ask you for help?',
                class: "caring"
            },
        {
                text: 'can you use your skills to turn some difficulties to your advantage?',
                class: "thinker"
            },
        {
                text: "Are you able to manage your time effectively between your various activities?",
                class: "balanced"
            },{
                text: 'Do you want to understand you classmates or neighbors when they speak french or spanish?',
                class: "communication"
            },
        {
                text: 'Do you like to know how certain devices work?',
                class: "inquirers"
            },
        {
                text: "Do you feel comfortable to see people bullying others?",
                class: "principled"
            },
        
        ],
        boxes: [
            {
                text: 'Inquirers',
                class: 'inquirers'
            },
            {
                text: 'Thinkers',
                class: 'thinkers'
            },
{
                text: 'Communicators',
                class: 'communicators'
            },
{
                text: 'Knowledgeable',
                class: 'knowledgeable'
            },
{
                text: 'Principled',
                class: 'principled'
            },
{
                text: 'Open-minded',
                class: 'open'
            },
{
                text: 'Balanced',
                class: 'balanced'
            },
{
                text: 'Risk-Takers',
                class: 'risk'
            },
{
                text: 'CAring',
                class: 'caring'
            },
{
                text: 'Reflective',
                class: 'risk'
            },

        ]
    },

    {
        title: 'Entrepreneurship Mindset',
        items: [
            {
                text: 'Are you able to effectively share ideas and work with others?',
                class: "communication"
            },
            {
                text: 'How often do you come up with new ideas or solutions to problems?',
                class: "creativity"
            },
        {
                text: 'Do you take action to achieve your goals?',
                class: "initiative"
            },
        {
                text: 'How well do you adjust to changing circumstances and new challenges?',
                class: "flexibility"
            },
        {
                text: 'Can you identify and act on chances that others might overlook?',
                class: "opportunity"
            },
        {
                text: 'Can you achieve your goals on your own?',
                class: "initiative"
            },
        {
                text: 'Are you focused on setting and achieving long-term goals?',
                class: "future"
            },
        {
                text: 'Can you find ways to deal with certain needs?',
                class: "critical"
            },
        {
                text: 'Choose a Mathematics course because you dream of becoming a great engineer',
                class: "future"
            },
        {
                text: "recruit a Chef for your restaurant for vegan customers.",
                class: "flexibility"
            },{
                text: 'Take an entrepreneurship course to help you develop your projects, even if your friends find it uninteresting.',
                class: "opportunity"
            },
        {
                text: 'Do you always feel ready to take on obstacles?',
                class: "comfort"
            },
        {
                text: "Speak clearly, using precise examples to make yourself understood.",
                class: "communication"
            },
        
        ],
        boxes: [
            {
                text: 'Initiative and self-reliance',
                class: 'initiative'
            },
            {
                text: 'Communication and collaboration',
                class: 'communication'
            },
{
                text: 'Comfort with risk',
                class: 'comfort'
            },
{
                text: 'Flexibility and Creativity',
                class: 'flexibility'
            },
{
                text: 'Future Orientation',
                class: 'future'
            },
{
                text: 'Critical Thinking and Problem Solving',
                class: 'critical'
            },
{
                text: 'Opportunity Recognition',
                class: 'opportunity'
            },
{
                text: 'Creativity and Innovation',
                class: 'creativity'
            },

        ]
    },
    
    {
        title: 'Lean Canvas',
        items: [
            {
                text: 'Who are the people who may need your service or product ?',
                class: "customer"
            },
            {
                text: 'What situation requires your project ?',
                class: "problem"
            },
        {
                text: 'What expenses you need to make your business a real success ?',
                class: "cost"
            },
        {
                text: 'What are the current services or products that are similar to yours ?',
                class: "problem"
            },
        {
                text: 'What feature do you bring that is not implemented by other services or products ?',
                class: "uvp"
            },
        {
                text: 'How do you inform your target audience about your product or service? ?',
                class: "channel"
            },
        {
                text: 'How does your business generate money ?',
                class: "revenue"
            },
        {
                text: 'How do you identify the success or failure of your business ?',
                class: "metrics"
            },
        {
                text: 'How does your product or service help people ?',
                class: "solution"
            },
        {
                text: "What do you propose to ensure your customers' loyalty?",
                class: "unfair"
            },
        
        ],
        boxes: [
            {
                text: 'Problem',
                class: 'problem'
            },
            {
                text: 'Solution',
                class: 'solution'
            },
        {
                text: 'Unique Value Proposition',
                class: 'uvp'
            },
        {
                text: 'Unfair Advantage',
                class: 'unfair'
            },
        {
                text: 'Channel',
                class: 'channel'
            },
        {
                text: 'Customer Segment',
                class: 'customer'
            },
        {
                text: 'Cost Structure',
                class: 'cost'
            },
        {
                text: 'Key Metrics',
                class: 'key'
            },
        {
                text: 'Revenue Stream',
                class: 'revenue'
            },
        
        ],
    },
]
let leftItems = []
let subBoxes = []

for(let topic of topicNames){
    let div = document.createElement('div')
    div.classList.add('topic')
    div.innerHTML = topic.title
    topics.appendChild(div)
    div.onclick = () =>{
        title.innerHTML = topic.title.toUpperCase()
        left.innerHTML = ''
        right.innerHTML = ''
        leftItems = topic.items
        subBoxes = topic.boxes


for(let item of leftItems){
    let div = document.createElement('div')
    div.classList.add('list-item')
    div.classList.add(item.class)
    div.setAttribute('draggable', 'true')
    div.innerHTML = item.text
    left.appendChild(div)
}

for(let subBox of subBoxes){
    let div = document.createElement('div')
    div.classList.add('sub-box')
    let subTitle = document.createElement('h3')
    subTitle.innerHTML = subBox.text
    let subContainer = document.createElement('div')
    subContainer.classList.add('sub-container')
    subContainer.classList.add(subBox.class)
    subContainer.setAttribute('draggable', 'true')
    div.appendChild(subTitle)
    div.appendChild(subContainer)
    right.appendChild(div)
}

const listItems = document.querySelectorAll('.list-item')
const subContainers = document.querySelectorAll('.sub-container')

for(let listItem of listItems){
    listItem.addEventListener('dragstart', function(e){
        let selected = e.target
        for(let subCont of subContainers ){
            subCont.addEventListener('dragover', function(e){
                e.preventDefault()
            })
            subCont.addEventListener('drop', function(e){
                subCont.appendChild(selected)
                selected = null
            })

            left.addEventListener('dragover', function(e){
                e.preventDefault()
            })
            left.addEventListener('drop', function(e){
                left.appendChild(selected)
                selected.style.background= '#3e46b6'
                selected = null
            })

        }
    })
}

    }
}
button.onclick = ()=>{
    let answerItems = document.querySelectorAll('.sub-container .list-item')
    // alert(answerItems.length)
    for(let answerItem of answerItems){
        const parentClass = answerItem.parentNode.classList[1]
        const elementClass = answerItem.classList[1]
        answerItem.style.background = parentClass === elementClass ? '#0f0' : '#f00'
        // console.log(parentClass,elementClass);
        

        
    }
}