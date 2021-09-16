var receptek = [];
var index = 0;

$(function () {
  $.ajax({
    url: "etelek.json",
    success: function (result) {
      receptek = result.receptkonyv;
      megjelenit();
    },
  });
  $("#bal").click(bal);
  $("#jobb").click(jobb);
});

function megjelenit() {
  $("article").append("<table>");
  $("article table").append(
    "<tr><th>Név</th><th>Elkészítési idő</th><th>Kép</th><th>leírás</th><th>Hozzávalók</th></tr>"
  );

  for (var i = 0; i < receptek.length; i++) {
    $("article table").append("<tr id='" + i + "'></tr>");
    $("article table tr")
      .eq(i + 1)
      .click(kattKep);
    $("article table tr")
      .eq(i + 1)
      .hover(hatter);

    for (var item in receptek[i]) {
      $("article table tr")
        .eq(i + 1)
        .append("<td>" + receptek[i][item] + "</td>");
    }
  }
}

function kattKep() {
  index = $(this).attr("id");
  kepBetolt();
}

function kepBetolt() {
  console.log(index);
  $("#kep").html(
    "<img src='" + receptek[index].kep + "' alt=''" + receptek[index].nev + ">"
  );
  $("article h2").text(receptek[index].nev);
  
}

function hatter() {
  console.log($(this).attr("id"));
  $(this).toggleClass("hatter");
  //  var index = $(this).attr("id");
  //    $("article table tr").eq(index).toggleClass("hatter");
}

function bal() {
  index--;
  if (index < 0) {
    index = receptek.length - 1;
  }
  kepBetolt();
}

function jobb() {
  index++;
  if (index >= receptek.length) {
    index = 0;
  }
  kepBetolt();
}
