$(document).ready(function() {
  var filtersearch = false;
  var advSearch = false;
  
  $('#search-btn').click(function() {
    console.log("search");
    if (document.getElementById("name").checked && filtersearch){
      console.log("Search By Name");
      search(0);
    }if (document.getElementById("studio").checked && filtersearch){
      console.log("Search By Studio");
      search(1);
    }if (document.getElementById("genres").checked && filtersearch){
      console.log("Search By Genres");
      search(2);
    }if (document.getElementById("hype").checked && filtersearch){
      console.log("Search By Hype");
      search(3);
    }if (document.getElementById("startDate").checked && filtersearch){
      console.log("Search By Start-Date");
      search(4);
    }if (advSearch){
      console.log("Advance Search")
      advance();
    }if (!filtersearch && !advSearch) {
      console.log("Normal Search");
      search('normal');
    }
  });

  //search / filter function
  function search(filter) {
    var text = $("#input").val().toUpperCase();
    var row = table.getElementsByTagName("tr");
    for (i = 1; i < row.length; i++) {
      if (filter == 'normal'){
        var choosed = row[i];
      }else {
        var choosed = row[i].getElementsByTagName("td")[filter];
      }
      if (choosed != null) { //if have data in table
        var tmp = choosed.innerText;
        if (tmp.toUpperCase().indexOf(text) >= 0) {
          row[i].style.display = "";
        } else {
          row[i].style.display = "none";
        }
      }
    }
  }

  //advance search function
  function advance(){
    var name = $("#adv-name").val().toUpperCase();
    var studio = $("#adv-studio").val().toUpperCase();
    var genres = $("#adv-genres").val().toUpperCase();
    var hype = $("#adv-hype").val().toUpperCase();
    var startDate = $("#adv-startDate").val().toUpperCase();
    var row = table.getElementsByTagName("tr");
    var s0,s1,s2,s3,s4 = false;
    if (name != '') {s0 = true ;}
    if (studio != '') {s1 = true ;}
    if (genres != '') {s2 = true ;}
    if (hype != '') {s3 = true ;}
    if (startDate != '') {s4 = true ;}

    console.log(name,studio,genres,hype,startDate);
    console.log(s0,s1,s2,s3,s4);

    for (i = 1; i < row.length; i++) {
      var choosed = row[i];

      var choose0 = row[i].getElementsByTagName("td")[0];
      var tmp0 = choose0.innerText;

      var choose1 = row[i].getElementsByTagName("td")[1];
      var tmp1 = choose1.innerText;

      var choose2 = row[i].getElementsByTagName("td")[2];
      var tmp2 = choose2.innerText;
      
      var choose3 = row[i].getElementsByTagName("td")[3];
      var tmp3 = choose3.innerText;
      var choose4 = row[i].getElementsByTagName("td")[4];
      var tmp4 = choose4.innerText;
      

      if (choosed != null) { //if have data in table
        // if (s0 && s1 && s2 && s3 && s4) { 
        //   if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp1.toUpperCase().indexOf(studio) >= 0 && tmp2.toUpperCase().indexOf(genres) >= 0
        //   && tmp3.toUpperCase().indexOf(hype) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
        //     row[i].style.display = "";
        //   } else {
        //     row[i].style.display = "none";
        //   }
        // }
        // if (s0 && s1 && s2 && s3){

        // }


        if (s0){
          if (s1){
            if (s2){
              if(s3){
                if(s4){
                  //01234
                  if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp1.toUpperCase().indexOf(studio) >= 0 && tmp2.toUpperCase().indexOf(genres) >= 0
                  && tmp3.toUpperCase().indexOf(hype) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
                else {
                  //0123
                  if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp1.toUpperCase().indexOf(studio) >= 0 
                  && tmp2.toUpperCase().indexOf(genres) >= 0 && tmp3.toUpperCase().indexOf(hype) >= 0 ) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }else{
                if (s4){
                  //0124
                  if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp1.toUpperCase().indexOf(studio) >= 0 
                  && tmp2.toUpperCase().indexOf(genres) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
                else {
                  //012
                  if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp1.toUpperCase().indexOf(studio) >= 0 && tmp2.toUpperCase().indexOf(genres) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }
            }
            else {
              if (s3){
                if (s4){
                  //0134
                  if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp1.toUpperCase().indexOf(studio) >= 0
                  && tmp3.toUpperCase().indexOf(hype) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }else {
                  //013
                  if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp1.toUpperCase().indexOf(studio) >= 0 && tmp3.toUpperCase().indexOf(hype) >= 0 ) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }else if (s4){
                //014
                if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp1.toUpperCase().indexOf(studio) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                  row[i].style.display = "";
                } else {
                  row[i].style.display = "none";
                }
              }else {
              //01
              if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp1.toUpperCase().indexOf(studio) >= 0) {
                row[i].style.display = "";
              } else {
                row[i].style.display = "none";
              }
              }
            }
          }else{
            if (s2){
              if(s3){
                if(s4){
                  //0234
                  if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp2.toUpperCase().indexOf(genres) >= 0
                  && tmp3.toUpperCase().indexOf(hype) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
                else {
                  //023
                  if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp2.toUpperCase().indexOf(genres) >= 0 && tmp3.toUpperCase().indexOf(hype) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }else {
                if (s4){
                  //024
                  if (tmp0.toUpperCase().indexOf(name) >= 0 >= 0 && tmp2.toUpperCase().indexOf(genres) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
                else {
                  //02
                  if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp2.toUpperCase().indexOf(genres) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }
            }else {
              if(s3){
                if(s4){
                  //034
                  if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp3.toUpperCase().indexOf(hype) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
                else {
                  //03
                  if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp3.toUpperCase().indexOf(hype) >= 0 ) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }else {
                if (s4){
                  //04
                  if (tmp0.toUpperCase().indexOf(name) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
                else {
                  //0
                  if (tmp0.toUpperCase().indexOf(name) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }
            }
          }
        }else{
          if (s1){
            if (s2){
              if(s3){
                if(s4){
                  //1234
                  if (tmp1.toUpperCase().indexOf(studio) >= 0 && tmp2.toUpperCase().indexOf(genres) >= 0
                  && tmp3.toUpperCase().indexOf(hype) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
                else {
                  //123
                  if (tmp1.toUpperCase().indexOf(studio) >= 0 && tmp2.toUpperCase().indexOf(genres) >= 0 && tmp3.toUpperCase().indexOf(hype) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }else{
                if (s4){
                  //124
                  if (tmp1.toUpperCase().indexOf(studio) >= 0 && tmp2.toUpperCase().indexOf(genres) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
                else {
                  //12
                  if (tmp1.toUpperCase().indexOf(studio) >= 0 && tmp2.toUpperCase().indexOf(genres) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }
            }
            else {
              if (s3){
                if (s4){
                  //134
                  if (tmp1.toUpperCase().indexOf(studio) >= 0 && tmp3.toUpperCase().indexOf(hype) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }else {
                  //13
                  if (tmp1.toUpperCase().indexOf(studio) >= 0 && tmp3.toUpperCase().indexOf(hype) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }else if (s4){
                //14
                if (tmp1.toUpperCase().indexOf(studio) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                  row[i].style.display = "";
                } else {
                  row[i].style.display = "none";
                }
              }else {
              //1
              if (tmp1.toUpperCase().indexOf(studio) > -1 ) {
                row[i].style.display = "";
              } else {
                row[i].style.display = "none";
              }
              }
            }
          }else{
            if (s2){
              if(s3){
                if(s4){
                  //234
                  if (tmp2.toUpperCase().indexOf(genres) >= 0 && tmp3.toUpperCase().indexOf(hype) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
                else {
                  //23
                  if (tmp2.toUpperCase().indexOf(genres) >= 0 && tmp3.toUpperCase().indexOf(hype) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }else {
                if (s4){
                  //24
                  if (tmp2.toUpperCase().indexOf(genres) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
                else {
                  //2
                  if (tmp2.toUpperCase().indexOf(genres) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }
            }else {
              if(s3){
                if(s4){
                  //34
                  if (tmp3.toUpperCase().indexOf(hype) >= 0 && tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
                else {
                  //3
                  if (tmp3.toUpperCase().indexOf(hype) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }else {
                if (s4){
                  //4
                  if (tmp4.toUpperCase().indexOf(startDate) >= 0) {
                    row[i].style.display = "";
                  } else {
                    row[i].style.display = "none";
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  

  //show/hide filter search
  $('#filter-btn').click(function() {
    if (filtersearch){
      $('#filter').slideUp();
      console.log("Disable Filter Search");
      filtersearch = false;
    } else { 
      $('#filter').slideDown();
      console.log("Enable Filter Search");
      filtersearch = true;
      document.getElementById("input").disabled = false; 
    }if (advSearch){
      $('#adv-search').slideUp();
      console.log("Disable Advanced Search");
      advSearch = false;
    }
  });

  //show/hide advanced search
  $('#advanced-btn').click(function() {
    if (filtersearch){
      $('#filter').slideUp();
      console.log("Disable Filter Search");
      filtersearch = false;
    }
    if (advSearch){
      $('#adv-search').slideUp();
      console.log("Disable Advanced Search");
      document.getElementById("input").disabled = false; 
      advSearch = false;
    } else { 
      $('#adv-search').slideDown();
      console.log("Enable Advanced Search");
      document.getElementById("input").disabled = true; 
      advSearch = true;
      document.getElementById("input").value = '';
    }
  });

  $.ajax({
      url: "animeList.json",
      dataType: "json"
  }).done(function(response) {
      console.log(response);
      var table = document.getElementById("table");
      response.forEach(element => {
          createTable(element);       
      });
  });

  //Create table and add data
  function createTable(input) {  
      var row = table.insertRow(table.lastIndex);
      var name = row.insertCell(0);
      var studio = row.insertCell(1);
      var genres = row.insertCell(2);
      var hype = row.insertCell(3)
      var date = row.insertCell(4);
      name.innerHTML = input.title.text;
      studio.innerHTML = input.studio;
      genres.innerHTML = input.genres;
      hype.innerHTML = input.hype;
      date.innerHTML = input.start_date;
  };
});