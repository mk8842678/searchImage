const apikey = "X5oNXC78b3s361nYwWPUxcDF6tdnOePjrhFjb44lLtjCzH4rBl7YjNiy"
let perpage = 15
let currentpage = 1
function showMore() {
     perpage += 15
     getimages()
}
function searchBtn() {
     getimages()
}
const getimages = async () => {
     let searchImages = document.getElementById("input").value

     // document.getElementById("input").value = ''
     let url = `https://api.pexels.com/v1/search?query=${searchImages}&page=${currentpage}&per_page=${perpage}`
     await fetch(url, {
          headers: { Authorization: apikey }
     })
          .then((respons) => {
               return respons.json()
          })
          .then((res) => {
               createImageTable(res.photos)
          })

}



function createImageTable(data) {
     console.log(data);
     let element = ""
     data.map((item) => {
          return (
               element += `
          <div class="imageparent">
          <img src=${item.src.landscape} alt="error" id='img1'/>
        
         
          </div>`


          )
     })
     document.getElementById("showelement").innerHTML = element
}



