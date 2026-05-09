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
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 909.0, "minX": 0.0, "maxY": 1466.0, "series": [{"data": [[0.0, 909.0], [0.1, 915.0], [0.2, 923.0], [0.3, 931.0], [0.4, 936.0], [0.5, 940.0], [0.6, 943.0], [0.7, 946.0], [0.8, 946.0], [0.9, 946.0], [1.0, 946.0], [1.1, 946.0], [1.2, 946.0], [1.3, 946.0], [1.4, 946.0], [1.5, 947.0], [1.6, 947.0], [1.7, 947.0], [1.8, 947.0], [1.9, 947.0], [2.0, 947.0], [2.1, 947.0], [2.2, 947.0], [2.3, 947.0], [2.4, 947.0], [2.5, 947.0], [2.6, 947.0], [2.7, 947.0], [2.8, 947.0], [2.9, 947.0], [3.0, 947.0], [3.1, 947.0], [3.2, 947.0], [3.3, 947.0], [3.4, 947.0], [3.5, 947.0], [3.6, 947.0], [3.7, 947.0], [3.8, 947.0], [3.9, 947.0], [4.0, 947.0], [4.1, 947.0], [4.2, 947.0], [4.3, 947.0], [4.4, 947.0], [4.5, 947.0], [4.6, 947.0], [4.7, 947.0], [4.8, 947.0], [4.9, 947.0], [5.0, 947.0], [5.1, 947.0], [5.2, 947.0], [5.3, 947.0], [5.4, 947.0], [5.5, 947.0], [5.6, 947.0], [5.7, 947.0], [5.8, 947.0], [5.9, 947.0], [6.0, 947.0], [6.1, 947.0], [6.2, 947.0], [6.3, 947.0], [6.4, 947.0], [6.5, 947.0], [6.6, 947.0], [6.7, 947.0], [6.8, 947.0], [6.9, 947.0], [7.0, 947.0], [7.1, 947.0], [7.2, 947.0], [7.3, 947.0], [7.4, 947.0], [7.5, 947.0], [7.6, 947.0], [7.7, 947.0], [7.8, 947.0], [7.9, 947.0], [8.0, 947.0], [8.1, 947.0], [8.2, 947.0], [8.3, 947.0], [8.4, 947.0], [8.5, 947.0], [8.6, 947.0], [8.7, 947.0], [8.8, 947.0], [8.9, 947.0], [9.0, 947.0], [9.1, 947.0], [9.2, 947.0], [9.3, 947.0], [9.4, 947.0], [9.5, 947.0], [9.6, 947.0], [9.7, 947.0], [9.8, 947.0], [9.9, 947.0], [10.0, 947.0], [10.1, 947.0], [10.2, 947.0], [10.3, 947.0], [10.4, 947.0], [10.5, 947.0], [10.6, 947.0], [10.7, 947.0], [10.8, 947.0], [10.9, 947.0], [11.0, 947.0], [11.1, 947.0], [11.2, 948.0], [11.3, 948.0], [11.4, 948.0], [11.5, 948.0], [11.6, 948.0], [11.7, 948.0], [11.8, 948.0], [11.9, 948.0], [12.0, 948.0], [12.1, 948.0], [12.2, 948.0], [12.3, 948.0], [12.4, 948.0], [12.5, 948.0], [12.6, 948.0], [12.7, 948.0], [12.8, 948.0], [12.9, 948.0], [13.0, 948.0], [13.1, 948.0], [13.2, 948.0], [13.3, 948.0], [13.4, 948.0], [13.5, 948.0], [13.6, 948.0], [13.7, 948.0], [13.8, 948.0], [13.9, 948.0], [14.0, 948.0], [14.1, 948.0], [14.2, 948.0], [14.3, 948.0], [14.4, 948.0], [14.5, 948.0], [14.6, 948.0], [14.7, 948.0], [14.8, 948.0], [14.9, 948.0], [15.0, 948.0], [15.1, 948.0], [15.2, 948.0], [15.3, 948.0], [15.4, 948.0], [15.5, 948.0], [15.6, 948.0], [15.7, 948.0], [15.8, 948.0], [15.9, 948.0], [16.0, 948.0], [16.1, 948.0], [16.2, 948.0], [16.3, 948.0], [16.4, 948.0], [16.5, 948.0], [16.6, 948.0], [16.7, 948.0], [16.8, 948.0], [16.9, 948.0], [17.0, 948.0], [17.1, 948.0], [17.2, 948.0], [17.3, 948.0], [17.4, 948.0], [17.5, 948.0], [17.6, 948.0], [17.7, 948.0], [17.8, 948.0], [17.9, 948.0], [18.0, 948.0], [18.1, 948.0], [18.2, 948.0], [18.3, 948.0], [18.4, 948.0], [18.5, 948.0], [18.6, 948.0], [18.7, 948.0], [18.8, 948.0], [18.9, 948.0], [19.0, 948.0], [19.1, 948.0], [19.2, 948.0], [19.3, 948.0], [19.4, 948.0], [19.5, 948.0], [19.6, 948.0], [19.7, 948.0], [19.8, 948.0], [19.9, 948.0], [20.0, 948.0], [20.1, 948.0], [20.2, 948.0], [20.3, 948.0], [20.4, 948.0], [20.5, 948.0], [20.6, 948.0], [20.7, 948.0], [20.8, 948.0], [20.9, 948.0], [21.0, 948.0], [21.1, 948.0], [21.2, 949.0], [21.3, 949.0], [21.4, 949.0], [21.5, 949.0], [21.6, 949.0], [21.7, 949.0], [21.8, 949.0], [21.9, 949.0], [22.0, 949.0], [22.1, 949.0], [22.2, 949.0], [22.3, 949.0], [22.4, 949.0], [22.5, 949.0], [22.6, 949.0], [22.7, 949.0], [22.8, 949.0], [22.9, 949.0], [23.0, 949.0], [23.1, 949.0], [23.2, 949.0], [23.3, 949.0], [23.4, 949.0], [23.5, 949.0], [23.6, 949.0], [23.7, 949.0], [23.8, 949.0], [23.9, 949.0], [24.0, 949.0], [24.1, 949.0], [24.2, 949.0], [24.3, 949.0], [24.4, 949.0], [24.5, 949.0], [24.6, 949.0], [24.7, 949.0], [24.8, 949.0], [24.9, 949.0], [25.0, 949.0], [25.1, 949.0], [25.2, 949.0], [25.3, 949.0], [25.4, 949.0], [25.5, 949.0], [25.6, 949.0], [25.7, 949.0], [25.8, 949.0], [25.9, 949.0], [26.0, 949.0], [26.1, 949.0], [26.2, 949.0], [26.3, 949.0], [26.4, 949.0], [26.5, 949.0], [26.6, 949.0], [26.7, 949.0], [26.8, 949.0], [26.9, 949.0], [27.0, 949.0], [27.1, 949.0], [27.2, 949.0], [27.3, 949.0], [27.4, 949.0], [27.5, 949.0], [27.6, 949.0], [27.7, 949.0], [27.8, 949.0], [27.9, 949.0], [28.0, 949.0], [28.1, 949.0], [28.2, 949.0], [28.3, 949.0], [28.4, 949.0], [28.5, 949.0], [28.6, 949.0], [28.7, 949.0], [28.8, 949.0], [28.9, 949.0], [29.0, 949.0], [29.1, 949.0], [29.2, 949.0], [29.3, 949.0], [29.4, 949.0], [29.5, 949.0], [29.6, 949.0], [29.7, 949.0], [29.8, 949.0], [29.9, 949.0], [30.0, 949.0], [30.1, 949.0], [30.2, 949.0], [30.3, 949.0], [30.4, 949.0], [30.5, 949.0], [30.6, 949.0], [30.7, 949.0], [30.8, 949.0], [30.9, 949.0], [31.0, 949.0], [31.1, 949.0], [31.2, 949.0], [31.3, 949.0], [31.4, 949.0], [31.5, 949.0], [31.6, 949.0], [31.7, 949.0], [31.8, 949.0], [31.9, 949.0], [32.0, 949.0], [32.1, 949.0], [32.2, 949.0], [32.3, 949.0], [32.4, 949.0], [32.5, 949.0], [32.6, 949.0], [32.7, 949.0], [32.8, 949.0], [32.9, 949.0], [33.0, 949.0], [33.1, 949.0], [33.2, 949.0], [33.3, 949.0], [33.4, 949.0], [33.5, 949.0], [33.6, 949.0], [33.7, 949.0], [33.8, 949.0], [33.9, 949.0], [34.0, 949.0], [34.1, 949.0], [34.2, 949.0], [34.3, 949.0], [34.4, 949.0], [34.5, 949.0], [34.6, 949.0], [34.7, 949.0], [34.8, 949.0], [34.9, 949.0], [35.0, 949.0], [35.1, 949.0], [35.2, 949.0], [35.3, 949.0], [35.4, 949.0], [35.5, 949.0], [35.6, 949.0], [35.7, 949.0], [35.8, 949.0], [35.9, 949.0], [36.0, 949.0], [36.1, 949.0], [36.2, 949.0], [36.3, 949.0], [36.4, 949.0], [36.5, 949.0], [36.6, 949.0], [36.7, 949.0], [36.8, 949.0], [36.9, 949.0], [37.0, 949.0], [37.1, 949.0], [37.2, 949.0], [37.3, 949.0], [37.4, 949.0], [37.5, 949.0], [37.6, 949.0], [37.7, 949.0], [37.8, 949.0], [37.9, 949.0], [38.0, 949.0], [38.1, 949.0], [38.2, 949.0], [38.3, 949.0], [38.4, 949.0], [38.5, 949.0], [38.6, 949.0], [38.7, 949.0], [38.8, 949.0], [38.9, 949.0], [39.0, 949.0], [39.1, 949.0], [39.2, 949.0], [39.3, 949.0], [39.4, 949.0], [39.5, 949.0], [39.6, 949.0], [39.7, 949.0], [39.8, 949.0], [39.9, 949.0], [40.0, 949.0], [40.1, 949.0], [40.2, 949.0], [40.3, 949.0], [40.4, 949.0], [40.5, 949.0], [40.6, 949.0], [40.7, 949.0], [40.8, 949.0], [40.9, 949.0], [41.0, 949.0], [41.1, 949.0], [41.2, 949.0], [41.3, 949.0], [41.4, 949.0], [41.5, 949.0], [41.6, 949.0], [41.7, 949.0], [41.8, 949.0], [41.9, 949.0], [42.0, 949.0], [42.1, 949.0], [42.2, 949.0], [42.3, 949.0], [42.4, 949.0], [42.5, 949.0], [42.6, 949.0], [42.7, 949.0], [42.8, 949.0], [42.9, 949.0], [43.0, 949.0], [43.1, 949.0], [43.2, 949.0], [43.3, 949.0], [43.4, 949.0], [43.5, 949.0], [43.6, 949.0], [43.7, 949.0], [43.8, 949.0], [43.9, 949.0], [44.0, 949.0], [44.1, 949.0], [44.2, 949.0], [44.3, 949.0], [44.4, 949.0], [44.5, 949.0], [44.6, 949.0], [44.7, 950.0], [44.8, 950.0], [44.9, 950.0], [45.0, 950.0], [45.1, 950.0], [45.2, 950.0], [45.3, 950.0], [45.4, 950.0], [45.5, 950.0], [45.6, 950.0], [45.7, 950.0], [45.8, 950.0], [45.9, 950.0], [46.0, 950.0], [46.1, 950.0], [46.2, 950.0], [46.3, 950.0], [46.4, 950.0], [46.5, 950.0], [46.6, 950.0], [46.7, 950.0], [46.8, 950.0], [46.9, 950.0], [47.0, 950.0], [47.1, 950.0], [47.2, 950.0], [47.3, 950.0], [47.4, 950.0], [47.5, 950.0], [47.6, 950.0], [47.7, 950.0], [47.8, 950.0], [47.9, 950.0], [48.0, 950.0], [48.1, 950.0], [48.2, 950.0], [48.3, 950.0], [48.4, 950.0], [48.5, 950.0], [48.6, 950.0], [48.7, 950.0], [48.8, 950.0], [48.9, 950.0], [49.0, 950.0], [49.1, 950.0], [49.2, 950.0], [49.3, 950.0], [49.4, 950.0], [49.5, 950.0], [49.6, 950.0], [49.7, 950.0], [49.8, 950.0], [49.9, 950.0], [50.0, 950.0], [50.1, 950.0], [50.2, 950.0], [50.3, 950.0], [50.4, 950.0], [50.5, 950.0], [50.6, 950.0], [50.7, 950.0], [50.8, 950.0], [50.9, 950.0], [51.0, 950.0], [51.1, 950.0], [51.2, 950.0], [51.3, 950.0], [51.4, 950.0], [51.5, 950.0], [51.6, 950.0], [51.7, 950.0], [51.8, 950.0], [51.9, 950.0], [52.0, 950.0], [52.1, 950.0], [52.2, 950.0], [52.3, 950.0], [52.4, 950.0], [52.5, 950.0], [52.6, 951.0], [52.7, 951.0], [52.8, 951.0], [52.9, 951.0], [53.0, 951.0], [53.1, 951.0], [53.2, 951.0], [53.3, 951.0], [53.4, 951.0], [53.5, 951.0], [53.6, 951.0], [53.7, 951.0], [53.8, 951.0], [53.9, 951.0], [54.0, 951.0], [54.1, 951.0], [54.2, 951.0], [54.3, 951.0], [54.4, 951.0], [54.5, 951.0], [54.6, 951.0], [54.7, 951.0], [54.8, 951.0], [54.9, 951.0], [55.0, 951.0], [55.1, 951.0], [55.2, 951.0], [55.3, 951.0], [55.4, 951.0], [55.5, 951.0], [55.6, 951.0], [55.7, 951.0], [55.8, 951.0], [55.9, 951.0], [56.0, 951.0], [56.1, 951.0], [56.2, 951.0], [56.3, 951.0], [56.4, 951.0], [56.5, 951.0], [56.6, 951.0], [56.7, 951.0], [56.8, 951.0], [56.9, 951.0], [57.0, 951.0], [57.1, 951.0], [57.2, 951.0], [57.3, 951.0], [57.4, 951.0], [57.5, 951.0], [57.6, 951.0], [57.7, 951.0], [57.8, 951.0], [57.9, 951.0], [58.0, 951.0], [58.1, 951.0], [58.2, 951.0], [58.3, 951.0], [58.4, 951.0], [58.5, 951.0], [58.6, 951.0], [58.7, 951.0], [58.8, 951.0], [58.9, 951.0], [59.0, 951.0], [59.1, 951.0], [59.2, 951.0], [59.3, 951.0], [59.4, 951.0], [59.5, 951.0], [59.6, 951.0], [59.7, 951.0], [59.8, 951.0], [59.9, 951.0], [60.0, 951.0], [60.1, 952.0], [60.2, 952.0], [60.3, 952.0], [60.4, 952.0], [60.5, 952.0], [60.6, 952.0], [60.7, 952.0], [60.8, 952.0], [60.9, 952.0], [61.0, 952.0], [61.1, 952.0], [61.2, 952.0], [61.3, 952.0], [61.4, 952.0], [61.5, 952.0], [61.6, 952.0], [61.7, 952.0], [61.8, 952.0], [61.9, 952.0], [62.0, 952.0], [62.1, 952.0], [62.2, 952.0], [62.3, 952.0], [62.4, 952.0], [62.5, 952.0], [62.6, 952.0], [62.7, 952.0], [62.8, 952.0], [62.9, 952.0], [63.0, 952.0], [63.1, 952.0], [63.2, 952.0], [63.3, 952.0], [63.4, 952.0], [63.5, 952.0], [63.6, 952.0], [63.7, 952.0], [63.8, 952.0], [63.9, 952.0], [64.0, 952.0], [64.1, 952.0], [64.2, 952.0], [64.3, 952.0], [64.4, 952.0], [64.5, 952.0], [64.6, 952.0], [64.7, 952.0], [64.8, 952.0], [64.9, 952.0], [65.0, 952.0], [65.1, 952.0], [65.2, 952.0], [65.3, 952.0], [65.4, 952.0], [65.5, 952.0], [65.6, 952.0], [65.7, 952.0], [65.8, 952.0], [65.9, 952.0], [66.0, 952.0], [66.1, 952.0], [66.2, 952.0], [66.3, 952.0], [66.4, 952.0], [66.5, 952.0], [66.6, 952.0], [66.7, 952.0], [66.8, 952.0], [66.9, 952.0], [67.0, 952.0], [67.1, 952.0], [67.2, 952.0], [67.3, 952.0], [67.4, 952.0], [67.5, 953.0], [67.6, 953.0], [67.7, 953.0], [67.8, 953.0], [67.9, 953.0], [68.0, 953.0], [68.1, 953.0], [68.2, 953.0], [68.3, 953.0], [68.4, 953.0], [68.5, 953.0], [68.6, 953.0], [68.7, 953.0], [68.8, 953.0], [68.9, 953.0], [69.0, 954.0], [69.1, 954.0], [69.2, 954.0], [69.3, 954.0], [69.4, 954.0], [69.5, 954.0], [69.6, 954.0], [69.7, 954.0], [69.8, 954.0], [69.9, 954.0], [70.0, 954.0], [70.1, 954.0], [70.2, 954.0], [70.3, 954.0], [70.4, 955.0], [70.5, 955.0], [70.6, 955.0], [70.7, 955.0], [70.8, 955.0], [70.9, 955.0], [71.0, 955.0], [71.1, 955.0], [71.2, 955.0], [71.3, 955.0], [71.4, 955.0], [71.5, 955.0], [71.6, 955.0], [71.7, 955.0], [71.8, 955.0], [71.9, 955.0], [72.0, 955.0], [72.1, 955.0], [72.2, 955.0], [72.3, 955.0], [72.4, 955.0], [72.5, 955.0], [72.6, 955.0], [72.7, 956.0], [72.8, 956.0], [72.9, 956.0], [73.0, 956.0], [73.1, 956.0], [73.2, 956.0], [73.3, 956.0], [73.4, 957.0], [73.5, 957.0], [73.6, 958.0], [73.7, 958.0], [73.8, 958.0], [73.9, 959.0], [74.0, 959.0], [74.1, 959.0], [74.2, 961.0], [74.3, 961.0], [74.4, 962.0], [74.5, 962.0], [74.6, 962.0], [74.7, 963.0], [74.8, 963.0], [74.9, 963.0], [75.0, 963.0], [75.1, 964.0], [75.2, 964.0], [75.3, 964.0], [75.4, 964.0], [75.5, 965.0], [75.6, 965.0], [75.7, 965.0], [75.8, 965.0], [75.9, 965.0], [76.0, 965.0], [76.1, 965.0], [76.2, 966.0], [76.3, 966.0], [76.4, 966.0], [76.5, 966.0], [76.6, 967.0], [76.7, 967.0], [76.8, 967.0], [76.9, 968.0], [77.0, 968.0], [77.1, 968.0], [77.2, 969.0], [77.3, 970.0], [77.4, 970.0], [77.5, 971.0], [77.6, 971.0], [77.7, 971.0], [77.8, 971.0], [77.9, 972.0], [78.0, 972.0], [78.1, 973.0], [78.2, 974.0], [78.3, 975.0], [78.4, 975.0], [78.5, 976.0], [78.6, 976.0], [78.7, 977.0], [78.8, 978.0], [78.9, 979.0], [79.0, 980.0], [79.1, 980.0], [79.2, 981.0], [79.3, 982.0], [79.4, 982.0], [79.5, 983.0], [79.6, 984.0], [79.7, 984.0], [79.8, 985.0], [79.9, 986.0], [80.0, 987.0], [80.1, 987.0], [80.2, 988.0], [80.3, 988.0], [80.4, 989.0], [80.5, 990.0], [80.6, 991.0], [80.7, 991.0], [80.8, 992.0], [80.9, 993.0], [81.0, 993.0], [81.1, 995.0], [81.2, 995.0], [81.3, 996.0], [81.4, 997.0], [81.5, 997.0], [81.6, 998.0], [81.7, 999.0], [81.8, 1000.0], [81.9, 1000.0], [82.0, 1001.0], [82.1, 1002.0], [82.2, 1002.0], [82.3, 1003.0], [82.4, 1003.0], [82.5, 1004.0], [82.6, 1004.0], [82.7, 1005.0], [82.8, 1006.0], [82.9, 1007.0], [83.0, 1007.0], [83.1, 1008.0], [83.2, 1008.0], [83.3, 1009.0], [83.4, 1010.0], [83.5, 1010.0], [83.6, 1011.0], [83.7, 1012.0], [83.8, 1012.0], [83.9, 1013.0], [84.0, 1013.0], [84.1, 1014.0], [84.2, 1015.0], [84.3, 1016.0], [84.4, 1016.0], [84.5, 1017.0], [84.6, 1017.0], [84.7, 1018.0], [84.8, 1019.0], [84.9, 1020.0], [85.0, 1020.0], [85.1, 1021.0], [85.2, 1021.0], [85.3, 1022.0], [85.4, 1022.0], [85.5, 1023.0], [85.6, 1024.0], [85.7, 1024.0], [85.8, 1025.0], [85.9, 1025.0], [86.0, 1026.0], [86.1, 1026.0], [86.2, 1027.0], [86.3, 1028.0], [86.4, 1028.0], [86.5, 1029.0], [86.6, 1030.0], [86.7, 1030.0], [86.8, 1031.0], [86.9, 1032.0], [87.0, 1032.0], [87.1, 1033.0], [87.2, 1034.0], [87.3, 1034.0], [87.4, 1035.0], [87.5, 1035.0], [87.6, 1036.0], [87.7, 1036.0], [87.8, 1036.0], [87.9, 1037.0], [88.0, 1037.0], [88.1, 1038.0], [88.2, 1039.0], [88.3, 1040.0], [88.4, 1040.0], [88.5, 1041.0], [88.6, 1041.0], [88.7, 1041.0], [88.8, 1042.0], [88.9, 1042.0], [89.0, 1043.0], [89.1, 1043.0], [89.2, 1044.0], [89.3, 1045.0], [89.4, 1045.0], [89.5, 1046.0], [89.6, 1046.0], [89.7, 1046.0], [89.8, 1047.0], [89.9, 1048.0], [90.0, 1049.0], [90.1, 1049.0], [90.2, 1049.0], [90.3, 1050.0], [90.4, 1051.0], [90.5, 1051.0], [90.6, 1052.0], [90.7, 1053.0], [90.8, 1053.0], [90.9, 1054.0], [91.0, 1054.0], [91.1, 1055.0], [91.2, 1055.0], [91.3, 1056.0], [91.4, 1056.0], [91.5, 1056.0], [91.6, 1057.0], [91.7, 1057.0], [91.8, 1058.0], [91.9, 1059.0], [92.0, 1059.0], [92.1, 1060.0], [92.2, 1060.0], [92.3, 1062.0], [92.4, 1062.0], [92.5, 1062.0], [92.6, 1063.0], [92.7, 1063.0], [92.8, 1064.0], [92.9, 1064.0], [93.0, 1065.0], [93.1, 1065.0], [93.2, 1066.0], [93.3, 1067.0], [93.4, 1067.0], [93.5, 1068.0], [93.6, 1069.0], [93.7, 1069.0], [93.8, 1070.0], [93.9, 1070.0], [94.0, 1071.0], [94.1, 1072.0], [94.2, 1072.0], [94.3, 1073.0], [94.4, 1074.0], [94.5, 1074.0], [94.6, 1075.0], [94.7, 1075.0], [94.8, 1076.0], [94.9, 1077.0], [95.0, 1078.0], [95.1, 1078.0], [95.2, 1078.0], [95.3, 1079.0], [95.4, 1079.0], [95.5, 1080.0], [95.6, 1080.0], [95.7, 1081.0], [95.8, 1081.0], [95.9, 1082.0], [96.0, 1083.0], [96.1, 1084.0], [96.2, 1085.0], [96.3, 1087.0], [96.4, 1089.0], [96.5, 1092.0], [96.6, 1094.0], [96.7, 1094.0], [96.8, 1097.0], [96.9, 1099.0], [97.0, 1103.0], [97.1, 1105.0], [97.2, 1109.0], [97.3, 1110.0], [97.4, 1112.0], [97.5, 1114.0], [97.6, 1116.0], [97.7, 1117.0], [97.8, 1120.0], [97.9, 1124.0], [98.0, 1128.0], [98.1, 1131.0], [98.2, 1136.0], [98.3, 1138.0], [98.4, 1139.0], [98.5, 1144.0], [98.6, 1147.0], [98.7, 1150.0], [98.8, 1154.0], [98.9, 1156.0], [99.0, 1163.0], [99.1, 1167.0], [99.2, 1170.0], [99.3, 1177.0], [99.4, 1180.0], [99.5, 1182.0], [99.6, 1186.0], [99.7, 1190.0], [99.8, 1193.0], [99.9, 1195.0], [100.0, 1466.0]], "isOverall": false, "label": "Config 2", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 2.0, "minX": 900.0, "maxY": 6541.0, "series": [{"data": [[1100.0, 243.0], [1200.0, 3.0], [1400.0, 2.0], [900.0, 6541.0], [1000.0, 1211.0]], "isOverall": false, "label": "Config 2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 8000.0, "minX": 3.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 8000.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 8000.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 5.666666666666669, "minX": 1.77833274E12, "maxY": 8.0, "series": [{"data": [[1.77833298E12, 8.0], [1.77833328E12, 8.0], [1.7783331E12, 8.0], [1.7783334E12, 8.0], [1.7783337E12, 8.0], [1.778334E12, 8.0], [1.77833286E12, 8.0], [1.77833316E12, 8.0], [1.77833346E12, 8.0], [1.77833376E12, 8.0], [1.77833358E12, 8.0], [1.77833388E12, 8.0], [1.77833418E12, 8.0], [1.77833334E12, 8.0], [1.77833364E12, 8.0], [1.77833394E12, 8.0], [1.77833424E12, 5.666666666666669], [1.77833406E12, 8.0], [1.77833274E12, 7.262711864406782], [1.77833304E12, 8.0], [1.77833382E12, 8.0], [1.77833412E12, 8.0], [1.7783328E12, 8.0], [1.77833292E12, 8.0], [1.77833322E12, 8.0], [1.77833352E12, 8.0]], "isOverall": false, "label": "Load Test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77833424E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 933.0, "minX": 1.0, "maxY": 997.0, "series": [{"data": [[1.0, 997.0], [2.0, 933.0], [4.0, 942.5789473684212], [8.0, 972.4259964457976], [5.0, 947.0], [3.0, 953.0714285714287], [6.0, 960.0370370370372], [7.0, 952.2142857142857]], "isOverall": false, "label": "Config 2", "isController": false}, {"data": [[7.953750000000012, 972.1116250000008]], "isOverall": false, "label": "Config 2-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 222.6, "minX": 1.77833274E12, "maxY": 1239.7, "series": [{"data": [[1.77833298E12, 1232.0], [1.77833328E12, 1239.7], [1.7783331E12, 1235.85], [1.7783334E12, 1232.0], [1.7783337E12, 1232.0], [1.778334E12, 1232.0], [1.77833286E12, 1232.0], [1.77833316E12, 1232.0], [1.77833346E12, 1228.15], [1.77833376E12, 1232.0], [1.77833358E12, 1232.0], [1.77833388E12, 1232.0], [1.77833418E12, 1239.7], [1.77833334E12, 1232.0], [1.77833364E12, 1232.0], [1.77833394E12, 1232.0], [1.77833424E12, 323.4], [1.77833406E12, 1232.0], [1.77833274E12, 908.6], [1.77833304E12, 1228.15], [1.77833382E12, 1232.0], [1.77833412E12, 1224.3], [1.7783328E12, 1232.0], [1.77833292E12, 1232.0], [1.77833322E12, 1224.3], [1.77833352E12, 1235.85]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.77833298E12, 848.0], [1.77833328E12, 853.3], [1.7783331E12, 850.65], [1.7783334E12, 848.0], [1.7783337E12, 848.0], [1.778334E12, 848.0], [1.77833286E12, 848.0], [1.77833316E12, 848.0], [1.77833346E12, 845.35], [1.77833376E12, 848.0], [1.77833358E12, 848.0], [1.77833388E12, 848.0], [1.77833418E12, 853.3], [1.77833334E12, 848.0], [1.77833364E12, 848.0], [1.77833394E12, 848.0], [1.77833424E12, 222.6], [1.77833406E12, 848.0], [1.77833274E12, 625.4], [1.77833304E12, 845.35], [1.77833382E12, 848.0], [1.77833412E12, 842.7], [1.7783328E12, 848.0], [1.77833292E12, 848.0], [1.77833322E12, 842.7], [1.77833352E12, 850.65]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77833424E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 960.5952380952383, "minX": 1.77833274E12, "maxY": 979.8843750000008, "series": [{"data": [[1.77833298E12, 976.0437500000003], [1.77833328E12, 974.2453416149077], [1.7783331E12, 974.2336448598131], [1.7783334E12, 972.1562499999997], [1.7783337E12, 972.6156250000001], [1.778334E12, 972.1187499999995], [1.77833286E12, 971.4437500000003], [1.77833316E12, 968.9937500000002], [1.77833346E12, 968.0846394984321], [1.77833376E12, 975.3531250000004], [1.77833358E12, 971.9468750000002], [1.77833388E12, 971.725], [1.77833418E12, 973.8354037267081], [1.77833334E12, 970.259375], [1.77833364E12, 979.8843750000008], [1.77833394E12, 971.1656249999993], [1.77833424E12, 960.5952380952383], [1.77833406E12, 969.6062500000005], [1.77833274E12, 965.10593220339], [1.77833304E12, 975.021943573668], [1.77833382E12, 969.5], [1.77833412E12, 972.6635220125786], [1.7783328E12, 976.3624999999995], [1.77833292E12, 967.653125], [1.77833322E12, 970.6918238993709], [1.77833352E12, 973.2211838006231]], "isOverall": false, "label": "Config 2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77833424E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 960.5952380952383, "minX": 1.77833274E12, "maxY": 979.875, "series": [{"data": [[1.77833298E12, 976.0281249999997], [1.77833328E12, 974.2267080745337], [1.7783331E12, 974.1993769470404], [1.7783334E12, 972.1406249999997], [1.7783337E12, 972.609375], [1.778334E12, 972.1156250000007], [1.77833286E12, 971.4000000000007], [1.77833316E12, 968.9718750000001], [1.77833346E12, 968.065830721003], [1.77833376E12, 975.3343749999999], [1.77833358E12, 971.934375], [1.77833388E12, 971.725], [1.77833418E12, 973.8291925465835], [1.77833334E12, 970.2406249999995], [1.77833364E12, 979.875], [1.77833394E12, 971.1656249999993], [1.77833424E12, 960.5952380952383], [1.77833406E12, 969.5968749999997], [1.77833274E12, 965.0211864406779], [1.77833304E12, 975.0062695924763], [1.77833382E12, 969.4937499999999], [1.77833412E12, 972.6603773584906], [1.7783328E12, 976.3343750000003], [1.77833292E12, 967.6187500000008], [1.77833322E12, 970.6729559748433], [1.77833352E12, 973.2087227414335]], "isOverall": false, "label": "Config 2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77833424E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.77833274E12, "maxY": 0.05084745762711869, "series": [{"data": [[1.77833298E12, 0.03125000000000002], [1.77833328E12, 0.024844720496894384], [1.7783331E12, 0.028037383177570114], [1.7783334E12, 0.02812500000000002], [1.7783337E12, 0.021875000000000006], [1.778334E12, 0.02499999999999998], [1.77833286E12, 0.03125000000000003], [1.77833316E12, 0.031250000000000014], [1.77833346E12, 0.028213166144200642], [1.77833376E12, 0.028125000000000015], [1.77833358E12, 0.021875000000000026], [1.77833388E12, 0.021875000000000016], [1.77833418E12, 0.0248447204968944], [1.77833334E12, 0.021875000000000026], [1.77833364E12, 0.024999999999999977], [1.77833394E12, 0.028125000000000008], [1.77833424E12, 0.0], [1.77833406E12, 0.021875000000000006], [1.77833274E12, 0.05084745762711869], [1.77833304E12, 0.028213166144200642], [1.77833382E12, 0.024999999999999984], [1.77833412E12, 0.022012578616352203], [1.7783328E12, 0.03125000000000002], [1.77833292E12, 0.018749999999999992], [1.77833322E12, 0.02830188679245286], [1.77833352E12, 0.02803738317757012]], "isOverall": false, "label": "Config 2", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77833424E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 1.7976931348623157E308, "minX": 1.7976931348623157E308, "maxY": 4.9E-324, "series": [{"data": [], "isOverall": false, "label": "Max", "isController": false}, {"data": [], "isOverall": false, "label": "Min", "isController": false}, {"data": [], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [], "isOverall": false, "label": "Median", "isController": false}, {"data": [], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 4.9E-324, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 943.0, "minX": 1.0, "maxY": 1054.0, "series": [{"data": [[1.0, 1006.0], [2.0, 1008.5], [4.0, 951.0], [8.0, 1054.0], [5.0, 943.0], [3.0, 955.0], [6.0, 950.0], [7.0, 1026.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 943.0, "minX": 1.0, "maxY": 1054.0, "series": [{"data": [[1.0, 1006.0], [2.0, 1008.5], [4.0, 951.0], [8.0, 1054.0], [5.0, 943.0], [3.0, 955.0], [6.0, 949.0], [7.0, 1026.0]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 8.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.3, "minX": 1.77833274E12, "maxY": 5.333333333333333, "series": [{"data": [[1.77833298E12, 5.333333333333333], [1.77833328E12, 5.333333333333333], [1.7783331E12, 5.333333333333333], [1.7783334E12, 5.333333333333333], [1.7783337E12, 5.333333333333333], [1.778334E12, 5.333333333333333], [1.77833286E12, 5.333333333333333], [1.77833316E12, 5.333333333333333], [1.77833346E12, 5.333333333333333], [1.77833376E12, 5.333333333333333], [1.77833358E12, 5.333333333333333], [1.77833388E12, 5.333333333333333], [1.77833418E12, 5.333333333333333], [1.77833334E12, 5.333333333333333], [1.77833364E12, 5.333333333333333], [1.77833394E12, 5.333333333333333], [1.77833424E12, 1.3], [1.77833406E12, 5.333333333333333], [1.77833274E12, 4.033333333333333], [1.77833304E12, 5.333333333333333], [1.77833382E12, 5.333333333333333], [1.77833412E12, 5.333333333333333], [1.7783328E12, 5.333333333333333], [1.77833292E12, 5.333333333333333], [1.77833322E12, 5.333333333333333], [1.77833352E12, 5.333333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77833424E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.4, "minX": 1.77833274E12, "maxY": 5.366666666666666, "series": [{"data": [[1.77833298E12, 5.333333333333333], [1.77833328E12, 5.366666666666666], [1.7783331E12, 5.35], [1.7783334E12, 5.333333333333333], [1.7783337E12, 5.333333333333333], [1.778334E12, 5.333333333333333], [1.77833286E12, 5.333333333333333], [1.77833316E12, 5.333333333333333], [1.77833346E12, 5.316666666666666], [1.77833376E12, 5.333333333333333], [1.77833358E12, 5.333333333333333], [1.77833388E12, 5.333333333333333], [1.77833418E12, 5.366666666666666], [1.77833334E12, 5.333333333333333], [1.77833364E12, 5.333333333333333], [1.77833394E12, 5.333333333333333], [1.77833424E12, 1.4], [1.77833406E12, 5.333333333333333], [1.77833274E12, 3.933333333333333], [1.77833304E12, 5.316666666666666], [1.77833382E12, 5.333333333333333], [1.77833412E12, 5.3], [1.7783328E12, 5.333333333333333], [1.77833292E12, 5.333333333333333], [1.77833322E12, 5.3], [1.77833352E12, 5.35]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.77833424E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.4, "minX": 1.77833274E12, "maxY": 5.366666666666666, "series": [{"data": [[1.77833298E12, 5.333333333333333], [1.77833328E12, 5.366666666666666], [1.7783331E12, 5.35], [1.7783334E12, 5.333333333333333], [1.7783337E12, 5.333333333333333], [1.778334E12, 5.333333333333333], [1.77833286E12, 5.333333333333333], [1.77833316E12, 5.333333333333333], [1.77833346E12, 5.316666666666666], [1.77833376E12, 5.333333333333333], [1.77833358E12, 5.333333333333333], [1.77833388E12, 5.333333333333333], [1.77833418E12, 5.366666666666666], [1.77833334E12, 5.333333333333333], [1.77833364E12, 5.333333333333333], [1.77833394E12, 5.333333333333333], [1.77833424E12, 1.4], [1.77833406E12, 5.333333333333333], [1.77833274E12, 3.933333333333333], [1.77833304E12, 5.316666666666666], [1.77833382E12, 5.333333333333333], [1.77833412E12, 5.3], [1.7783328E12, 5.333333333333333], [1.77833292E12, 5.333333333333333], [1.77833322E12, 5.3], [1.77833352E12, 5.35]], "isOverall": false, "label": "Config 2-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77833424E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.4, "minX": 1.77833274E12, "maxY": 5.366666666666666, "series": [{"data": [], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.77833298E12, 5.333333333333333], [1.77833328E12, 5.366666666666666], [1.7783331E12, 5.35], [1.7783334E12, 5.333333333333333], [1.7783337E12, 5.333333333333333], [1.778334E12, 5.333333333333333], [1.77833286E12, 5.333333333333333], [1.77833316E12, 5.333333333333333], [1.77833346E12, 5.316666666666666], [1.77833376E12, 5.333333333333333], [1.77833358E12, 5.333333333333333], [1.77833388E12, 5.333333333333333], [1.77833418E12, 5.366666666666666], [1.77833334E12, 5.333333333333333], [1.77833364E12, 5.333333333333333], [1.77833394E12, 5.333333333333333], [1.77833424E12, 1.4], [1.77833406E12, 5.333333333333333], [1.77833274E12, 3.933333333333333], [1.77833304E12, 5.316666666666666], [1.77833382E12, 5.333333333333333], [1.77833412E12, 5.3], [1.7783328E12, 5.333333333333333], [1.77833292E12, 5.333333333333333], [1.77833322E12, 5.3], [1.77833352E12, 5.35]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.77833424E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

