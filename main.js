async function transferDatafromJson() {

  const receivedJson = await fetch("data.json").then(response => response.json())

  const categoriesId = {
    Reaction: "reaction-stat",
    Memory: "memory-stat",
    Verbal: "verbal-stat",
    Visual: "visual-stat",
  }

  for (let i = 0; i < receivedJson.length; i++) {



    let actualCategory = receivedJson[i].category
    let actualScore = receivedJson[i].score
    let actualIcon = receivedJson[i].icon




    document.getElementById(categoriesId[actualCategory]).innerHTML =
      ` <div>
            <img src=${actualIcon}>
            <h4>
              ${actualCategory}
            </h4>

          </div>
          <div>
          ${actualScore} / 100
          </div>
          
        </div>
        `
  }

}


