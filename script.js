function buildTable() {
    const rows = document.getElementById("setRows").value;
    const cols = document.getElementById("setCols").value;
  
    const table = "<table>";
    table += "<tbody>";
  
    for (i = 0; i < rows; i++) {
      table += "<tr>";
  
      for (j = 0; j < cols; j++) {
        table += "<td>&nbsp;</td>";
      }
  
      table += "</tr>";
    }
  
    table += "</tbody>";
    table += "</table>";
  
    document.getElementById("tableHolder").innerHTML = table;
  }