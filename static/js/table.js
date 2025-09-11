function arrayToTable(tableData) {
    var table = $('<table></table>');
    $(tableData).forEach(function(rowData) {
        var row = $('<tr></tr>');
        rowData.forEach(function(cellData) {
            row.append($('<td>' + cellData + '</td>'));
        });
        table.append(row);
    });
    return table;
}

$.ajax({
    type: "GET",
    url: "../CSV/chart.csv", // relative path from JavaScript folder
    dataType: "text",
    success: function(data) {
        var parsed = Papa.parse(data).data;
        $('body').append(arrayToTable(parsed));
    },
    error: function(xhr, status, error) {
        console.error("Failed to load CSV:", error);
    }
});