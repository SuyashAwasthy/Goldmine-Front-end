function calculateMaxSum() {
    var values = [
      [
        Number(document.getElementById("cell00").value),
        Number(document.getElementById("cell01").value),
        Number(document.getElementById("cell02").value),
        Number(document.getElementById("cell03").value),
        Number(document.getElementById("cell04").value),
        Number(document.getElementById("cell05").value),
        Number(document.getElementById("cell06").value),
        Number(document.getElementById("cell07").value),
      ],
      [
        Number(document.getElementById("cell10").value),
        Number(document.getElementById("cell11").value),
        Number(document.getElementById("cell12").value),
        Number(document.getElementById("cell13").value),
        Number(document.getElementById("cell14").value),
        Number(document.getElementById("cell15").value),
        Number(document.getElementById("cell16").value),
        Number(document.getElementById("cell17").value),
      ],
      [
        Number(document.getElementById("cell20").value),
        Number(document.getElementById("cell21").value),
        Number(document.getElementById("cell22").value),
        Number(document.getElementById("cell23").value),
        Number(document.getElementById("cell24").value),
        Number(document.getElementById("cell25").value),
        Number(document.getElementById("cell26").value),
        Number(document.getElementById("cell27").value),
      ],
      [
        Number(document.getElementById("cell30").value),
        Number(document.getElementById("cell31").value),
        Number(document.getElementById("cell32").value),
        Number(document.getElementById("cell33").value),
        Number(document.getElementById("cell34").value),
        Number(document.getElementById("cell35").value),
        Number(document.getElementById("cell36").value),
        Number(document.getElementById("cell37").value),
      ],
      [
        Number(document.getElementById("cell40").value),
        Number(document.getElementById("cell41").value),
        Number(document.getElementById("cell42").value),
        Number(document.getElementById("cell43").value),
        Number(document.getElementById("cell44").value),
        Number(document.getElementById("cell45").value),
        Number(document.getElementById("cell46").value),
        Number(document.getElementById("cell47").value),
      ],
      [
        Number(document.getElementById("cell50").value),
        Number(document.getElementById("cell51").value),
        Number(document.getElementById("cell52").value),
        Number(document.getElementById("cell53").value),
        Number(document.getElementById("cell54").value),
        Number(document.getElementById("cell55").value),
        Number(document.getElementById("cell56").value),
        Number(document.getElementById("cell57").value),
      ],
      [
        Number(document.getElementById("cell60").value),
        Number(document.getElementById("cell61").value),
        Number(document.getElementById("cell62").value),
        Number(document.getElementById("cell63").value),
        Number(document.getElementById("cell64").value),
        Number(document.getElementById("cell65").value),
        Number(document.getElementById("cell66").value),
        Number(document.getElementById("cell67").value),
      ],
      [
        Number(document.getElementById("cell70").value),
        Number(document.getElementById("cell71").value),
        Number(document.getElementById("cell72").value),
        Number(document.getElementById("cell73").value),
        Number(document.getElementById("cell74").value),
        Number(document.getElementById("cell75").value),
        Number(document.getElementById("cell76").value),
        Number(document.getElementById("cell77").value),
      ],
    ];

  var dp = [[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0]];
  for (var j = values.length - 1; j >= 0; j--) {
    for (var i = values.length - 1; i >= 0; i--) {
      if (j == values.length - 1)
        dp[i][j] = values[i][j];
      else if (i == 0)
        dp[i][j] = values[i][j] + Math.max(dp[i][j + 1], dp[i + 1][j + 1]);
      else if (i == values.length - 1)
        dp[i][j] = values[i][j] + Math.max(dp[i - 1][j + 1], dp[i][j + 1]);
      else
        dp[i][j] = values[i][j] + Math.max(dp[i - 1][j + 1], Math.max(dp[i][j + 1], dp[i + 1][j + 1]));
    }
  }
  var maxi = 0;
  for (var i = 0; i < values.length; i++) maxi = Math.max(maxi, dp[i][0]);

  document.getElementById("result").innerHTML =
    "The maximum gold collected while traversing from left to right in the grid is " + maxi + " units.";
  }