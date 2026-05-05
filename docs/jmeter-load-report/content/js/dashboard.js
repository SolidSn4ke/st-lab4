/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
var showControllersOnly = false;
var seriesFilter = "";
var filtersOnlySampleSeries = true;

/*
 * Add header in statistics table to group metrics by category
 * format
 *
 */
function summaryTableHeader(header) {
    var newRow = header.insertRow(-1);
    newRow.className = "tablesorter-no-sort";
    var cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Requests";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 3;
    cell.innerHTML = "Executions";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 7;
    cell.innerHTML = "Response Times (ms)";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 1;
    cell.innerHTML = "Throughput";
    newRow.appendChild(cell);

    cell = document.createElement('th');
    cell.setAttribute("data-sorter", false);
    cell.colSpan = 2;
    cell.innerHTML = "Network (KB/sec)";
    newRow.appendChild(cell);
}

/*
 * Populates the table identified by id parameter with the specified data and
 * format
 *
 */
function createTable(table, info, formatter, defaultSorts, seriesIndex, headerCreator) {
    var tableRef = table[0];

    // Create header and populate it with data.titles array
    var header = tableRef.createTHead();

    // Call callback is available
    if(headerCreator) {
        headerCreator(header);
    }

    var newRow = header.insertRow(-1);
    for (var index = 0; index < info.titles.length; index++) {
        var cell = document.createElement('th');
        cell.innerHTML = info.titles[index];
        newRow.appendChild(cell);
    }

    var tBody;

    // Create overall body if defined
    if(info.overall){
        tBody = document.createElement('tbody');
        tBody.className = "tablesorter-no-sort";
        tableRef.appendChild(tBody);
        var newRow = tBody.insertRow(-1);
        var data = info.overall.data;
        for(var index=0;index < data.length; index++){
            var cell = newRow.insertCell(-1);
            cell.innerHTML = formatter ? formatter(index, data[index]): data[index];
        }
    }

    // Create regular body
    tBody = document.createElement('tbody');
    tableRef.appendChild(tBody);

    var regexp;
    if(seriesFilter) {
        regexp = new RegExp(seriesFilter, 'i');
    }
    // Populate body with data.items array
    for(var index=0; index < info.items.length; index++){
        var item = info.items[index];
        if((!regexp || filtersOnlySampleSeries && !info.supportsControllersDiscrimination || regexp.test(item.data[seriesIndex]))
                &&
                (!showControllersOnly || !info.supportsControllersDiscrimination || item.isController)){
            if(item.data.length > 0) {
                var newRow = tBody.insertRow(-1);
                for(var col=0; col < item.data.length; col++){
                    var cell = newRow.insertCell(-1);
                    cell.innerHTML = formatter ? formatter(col, item.data[col]) : item.data[col];
                }
            }
        }
    }

    // Add support of columns sort
    table.tablesorter({sortList : defaultSorts});
}

$(document).ready(function() {

    // Customize table sorter default options
    $.extend( $.tablesorter.defaults, {
        theme: 'blue',
        cssInfoBlock: "tablesorter-no-sort",
        widthFixed: true,
        widgets: ['zebra']
    });

    var data = {"OkPercent": 33.333333333333336, "KoPercent": 66.66666666666667};
    var dataset = [
        {
            "label" : "FAIL",
            "data" : data.KoPercent,
            "color" : "#FF6347"
        },
        {
            "label" : "PASS",
            "data" : data.OkPercent,
            "color" : "#9ACD32"
        }];
    $.plot($("#flot-requests-summary"), dataset, {
        series : {
            pie : {
                show : true,
                radius : 1,
                label : {
                    show : true,
                    radius : 3 / 4,
                    formatter : function(label, series) {
                        return '<div style="font-size:8pt;text-align:center;padding:2px;color:white;">'
                            + label
                            + '<br/>'
                            + Math.round10(series.percent, -2)
                            + '%</div>';
                    },
                    background : {
                        opacity : 0.5,
                        color : '#000'
                    }
                }
            }
        },
        legend : {
            show : true
        }
    });

    // Creates APDEX table
    createTable($("#apdexTable"), {"supportsControllersDiscrimination": true, "overall": {"data": [0.16666666666666666, 500, 1500, "Total"], "isController": false}, "titles": ["Apdex", "T (Toleration threshold)", "F (Frustration threshold)", "Label"], "items": [{"data": [0.0, 500, 1500, "Config 2"], "isController": false}, {"data": [0.5, 500, 1500, "Config 3"], "isController": false}, {"data": [0.0, 500, 1500, "Config 1"], "isController": false}]}, function(index, item){
        switch(index){
            case 0:
                item = item.toFixed(3);
                break;
            case 1:
            case 2:
                item = formatDuration(item);
                break;
        }
        return item;
    }, [[0, 0]], 3);

    // Create statistics table
    createTable($("#statisticsTable"), {"supportsControllersDiscrimination": true, "overall": {"data": ["Total", 120, 80, 66.66666666666667, 914.6000000000001, 509, 1343, 912.0, 1323.9, 1326.95, 1339.85, 0.7080439695305079, 0.15972476265776106, 0.10994042105014722], "isController": false}, "titles": ["Label", "#Samples", "FAIL", "Error %", "Average", "Min", "Max", "Median", "90th pct", "95th pct", "99th pct", "Transactions/s", "Received", "Sent"], "items": [{"data": ["Config 2", 40, 40, 100.0, 912.95, 908, 926, 912.0, 916.9, 924.95, 926.0, 0.2741509886570029, 0.061844607792741854, 0.04256836640279634], "isController": false}, {"data": ["Config 3", 40, 0, 0.0, 514.3000000000001, 509, 526, 512.5, 525.0, 525.95, 526.0, 0.2749121999161518, 0.06201632634827252, 0.0426865622916681], "isController": false}, {"data": ["Config 1", 40, 40, 100.0, 1316.5500000000002, 1308, 1343, 1312.5, 1327.9, 1328.0, 1343.0, 0.2734145374509563, 0.06167847475700283, 0.042454015092482464], "isController": false}]}, function(index, item){
        switch(index){
            // Errors pct
            case 3:
                item = item.toFixed(2) + '%';
                break;
            // Mean
            case 4:
            // Mean
            case 7:
            // Median
            case 8:
            // Percentile 1
            case 9:
            // Percentile 2
            case 10:
            // Percentile 3
            case 11:
            // Throughput
            case 12:
            // Kbytes/s
            case 13:
            // Sent Kbytes/s
                item = item.toFixed(2);
                break;
        }
        return item;
    }, [[0, 0]], 0, summaryTableHeader);

    // Create error table
    createTable($("#errorsTable"), {"supportsControllersDiscrimination": false, "titles": ["Type of error", "Number of errors", "% in errors", "% in all samples"], "items": [{"data": ["The operation lasted too long: It took 1,324 milliseconds, but should not have lasted longer than 870 milliseconds.", 2, 2.5, 1.6666666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1,309 milliseconds, but should not have lasted longer than 870 milliseconds.", 2, 2.5, 1.6666666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 908 milliseconds, but should not have lasted longer than 870 milliseconds.", 1, 1.25, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1,327 milliseconds, but should not have lasted longer than 870 milliseconds.", 2, 2.5, 1.6666666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 926 milliseconds, but should not have lasted longer than 870 milliseconds.", 1, 1.25, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1,323 milliseconds, but should not have lasted longer than 870 milliseconds.", 1, 1.25, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 915 milliseconds, but should not have lasted longer than 870 milliseconds.", 2, 2.5, 1.6666666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1,310 milliseconds, but should not have lasted longer than 870 milliseconds.", 6, 7.5, 5.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,326 milliseconds, but should not have lasted longer than 870 milliseconds.", 4, 5.0, 3.3333333333333335], "isController": false}, {"data": ["The operation lasted too long: It took 925 milliseconds, but should not have lasted longer than 870 milliseconds.", 1, 1.25, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 912 milliseconds, but should not have lasted longer than 870 milliseconds.", 7, 8.75, 5.833333333333333], "isController": false}, {"data": ["The operation lasted too long: It took 1,313 milliseconds, but should not have lasted longer than 870 milliseconds.", 5, 6.25, 4.166666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 1,308 milliseconds, but should not have lasted longer than 870 milliseconds.", 1, 1.25, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1,312 milliseconds, but should not have lasted longer than 870 milliseconds.", 6, 7.5, 5.0], "isController": false}, {"data": ["The operation lasted too long: It took 911 milliseconds, but should not have lasted longer than 870 milliseconds.", 5, 6.25, 4.166666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 917 milliseconds, but should not have lasted longer than 870 milliseconds.", 1, 1.25, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 914 milliseconds, but should not have lasted longer than 870 milliseconds.", 4, 5.0, 3.3333333333333335], "isController": false}, {"data": ["The operation lasted too long: It took 1,328 milliseconds, but should not have lasted longer than 870 milliseconds.", 3, 3.75, 2.5], "isController": false}, {"data": ["The operation lasted too long: It took 909 milliseconds, but should not have lasted longer than 870 milliseconds.", 1, 1.25, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 924 milliseconds, but should not have lasted longer than 870 milliseconds.", 1, 1.25, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 910 milliseconds, but should not have lasted longer than 870 milliseconds.", 9, 11.25, 7.5], "isController": false}, {"data": ["The operation lasted too long: It took 1,311 milliseconds, but should not have lasted longer than 870 milliseconds.", 5, 6.25, 4.166666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 913 milliseconds, but should not have lasted longer than 870 milliseconds.", 6, 7.5, 5.0], "isController": false}, {"data": ["The operation lasted too long: It took 1,314 milliseconds, but should not have lasted longer than 870 milliseconds.", 2, 2.5, 1.6666666666666667], "isController": false}, {"data": ["The operation lasted too long: It took 916 milliseconds, but should not have lasted longer than 870 milliseconds.", 1, 1.25, 0.8333333333333334], "isController": false}, {"data": ["The operation lasted too long: It took 1,343 milliseconds, but should not have lasted longer than 870 milliseconds.", 1, 1.25, 0.8333333333333334], "isController": false}]}, function(index, item){
        switch(index){
            case 2:
            case 3:
                item = item.toFixed(2) + '%';
                break;
        }
        return item;
    }, [[1, 1]]);

        // Create top5 errors by sampler
    createTable($("#top5ErrorsBySamplerTable"), {"supportsControllersDiscrimination": false, "overall": {"data": ["Total", 120, 80, "The operation lasted too long: It took 910 milliseconds, but should not have lasted longer than 870 milliseconds.", 9, "The operation lasted too long: It took 912 milliseconds, but should not have lasted longer than 870 milliseconds.", 7, "The operation lasted too long: It took 1,310 milliseconds, but should not have lasted longer than 870 milliseconds.", 6, "The operation lasted too long: It took 1,312 milliseconds, but should not have lasted longer than 870 milliseconds.", 6, "The operation lasted too long: It took 913 milliseconds, but should not have lasted longer than 870 milliseconds.", 6], "isController": false}, "titles": ["Sample", "#Samples", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors", "Error", "#Errors"], "items": [{"data": ["Config 2", 40, 40, "The operation lasted too long: It took 910 milliseconds, but should not have lasted longer than 870 milliseconds.", 9, "The operation lasted too long: It took 912 milliseconds, but should not have lasted longer than 870 milliseconds.", 7, "The operation lasted too long: It took 913 milliseconds, but should not have lasted longer than 870 milliseconds.", 6, "The operation lasted too long: It took 911 milliseconds, but should not have lasted longer than 870 milliseconds.", 5, "The operation lasted too long: It took 914 milliseconds, but should not have lasted longer than 870 milliseconds.", 4], "isController": false}, {"data": [], "isController": false}, {"data": ["Config 1", 40, 40, "The operation lasted too long: It took 1,312 milliseconds, but should not have lasted longer than 870 milliseconds.", 6, "The operation lasted too long: It took 1,310 milliseconds, but should not have lasted longer than 870 milliseconds.", 6, "The operation lasted too long: It took 1,311 milliseconds, but should not have lasted longer than 870 milliseconds.", 5, "The operation lasted too long: It took 1,313 milliseconds, but should not have lasted longer than 870 milliseconds.", 5, "The operation lasted too long: It took 1,326 milliseconds, but should not have lasted longer than 870 milliseconds.", 4], "isController": false}]}, function(index, item){
        return item;
    }, [[0, 0]], 0);

});
