

const URL_ENDPOINT = "http://www.nokeynoshade.party/api/seasons/" 

let queen, season, image

const $queenListElement = $("#queenlist");

$("#season-list").on('click', 'button', handleClick);
init();
function handleClick() {
  season = this.dataset.id;
  getAPIData();
}

function getAPIData() {
  const response = $.ajax({
    url: URL_ENDPOINT + `${season}`,
    data: {
      
    }
  });

  response.then(function(data) {
    results = data;
    //console.log(data);
    displayResults();
  })
}

function displayResults() {
  console.log(results);
  let image = results.image_url;
  $("#season-queens").attr("src",image)
  $( "#season-queens" ).addClass( "image-size" );
  $( "#season-queens" ).removeClass("hidden-image");
}