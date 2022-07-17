let news = document.querySelector('.news')
let form = document.querySelector('form')
let sourcenews = document.querySelector('.sourcenews')

let url = fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`)

url.then((data) => data.json())
    .then((value) => {
        createUI(value)
    })



// let a=url.then((link)=>{
//     console.log(link.json())
//     createUI(link)
// })
// console.log(a)


function createUI(datainfo) {
    datainfo.forEach(ele => {
        let div = document.createElement('div');
        div.classList.add("newsdetails")
        let div1 = document.createElement('div');
        div1.classList.add('details')
        let div2 = document.createElement('div');
        div2.classList.add('more')
        let img = document.createElement('img')
        img.src = ele.imageUrl
        let title = document.createElement('small')
        title.innerText = ele.newsSite;
        let h2 = document.createElement('h2')
        h2.innerText = ele.summary;
        let button = document.createElement('a');
        button.classList.add('readmore')
        button.innerText = "Read More"
        button.href = ele.url
        div2.append(button)
        div1.append(title, h2, div2)
        div.append(img, div1)
        news.append(div)

    });
}



form.addEventListener('click', handleSubmit)

function handleSubmit(event) {
    console.log(form.elements.newslist.value)

    let url = fetch(`https://api.spaceflightnewsapi.net/v3/articles?_limit=30`)

    url.then((data) => data.json())
        .then((value) => {
            console.log(value.filter((e) => e.newsSite === form.elements.newslist.value))
            news.innerHTML = ""
            createUI(value.filter((e) => e.newsSite === form.elements.newslist.value))


        })





}